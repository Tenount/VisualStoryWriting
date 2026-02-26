import { Handle, NodeProps, Position, useKeyPress, useReactFlow } from '@xyflow/react';
import { useCallback, useEffect } from 'react';

import { Slider } from '@nextui-org/react';
import '@xyflow/react/dist/style.css';
import { Entity, EntityNode } from '../../model/schemas';
import { useModelStore } from '../../model/Model';
import { ChangePropertyPrompt } from '../../model/prompts/textEditors/ChangePropertyPrompt';
import { RemoveEntityPrompt } from '../../model/prompts/textEditors/RemoveEntityPrompt';


export function CreateEntityNode(entity: Entity, index: number): EntityNode {
  const x = index % 2;
  const y = Math.floor(index / 2);

  return {
    id: "entity-" + entity.name,
    type: "entityNode",
    dragHandle: '.custom-drag-handle',
    measured: { width: 160, height: 160 },
    position: { x: 20 + x * 350, y: 20 + y * 200 },
    data: { ...entity }
  }
}

export default function EntityNodeComponent(props: NodeProps<EntityNode>) {
  const handleStyle = { background: 'white', border: '1px solid #c8c8c8', width: 7, height: 7 };
  const isSelected = useModelStore(state => state.selectedNodes.includes(props.id));
  const { setNodes, setEdges } = useReactFlow();
  const deletePressed = useKeyPress(["Delete", "Backspace"]);
  const entityNodes = useModelStore(state => state.entityNodes);
  const setEntityNodes = useModelStore(state => state.setEntityNodes);
  const getFilteredEntityNodes = useModelStore(state => state.getFilteredEntityNodes);
  const highlightedEntities = useModelStore(state => state.highlightedEntities);
  const isReadOnly = useModelStore(state => state.isReadOnly);

  const highlightedActionsSegment = useModelStore(state => state.highlightedActionsSegment);
  const filteredActionsSegment = useModelStore(state => state.filteredActionsSegment);

  let isFaded = false;

  if (highlightedActionsSegment) {
    const filteredEntities = getFilteredEntityNodes(highlightedActionsSegment);
    isFaded = !filteredEntities.map(entity => entity.id).includes(props.id);
  }

  if (!isFaded && filteredActionsSegment) {
    const filteredEntities = getFilteredEntityNodes(filteredActionsSegment);
    isFaded = !filteredEntities.map(entity => entity.id).includes(props.id);
  }

  if (!isFaded && highlightedEntities.length > 0 && highlightedEntities.indexOf(props.id) === -1) {
    // Fade if no actions are connected to this entity
    isFaded = useModelStore.getState().actionEdges.filter(edge => highlightedEntities.includes(edge.source) && edge.target === props.id 
                                                          || highlightedEntities.includes(edge.target) && edge.source === props.id).length === 0;
  }

  if (!isReadOnly) {
    useEffect(() => {
      if (deletePressed && useModelStore.getState().selectedNodes.includes(props.id)) {
        // Also remove the edges that had this node as a source or target
        setEdges((edges) => edges.filter((edge) => edge.source !== props.id && edge.target !== props.id));
  
        // Remove the node
        setNodes((nodes) => nodes.filter((node) => node.id !== props.id));
  
        // Modify the story accordingly by executing a prompt
        new RemoveEntityPrompt(props.data).execute()
      }
    }, [deletePressed])
  }


  const onPropertySliderChanged = useCallback((property: string, newValue: number, triggerPrompt: boolean = false) => {
    const nodeToModify = entityNodes.find(node => node.id === props.id) as EntityNode;
    if (nodeToModify) {
      let previousValue = 0;
      nodeToModify.data.properties = nodeToModify.data.properties.map(p => {
        if (p.name === property) {
          previousValue = p.value;
          p.value = newValue;
        }
        return p;
      });
      setEntityNodes([...entityNodes]);

      if (triggerPrompt) {
        // Also trigger a prompt to modify the story
        new ChangePropertyPrompt(nodeToModify.data, property, previousValue, newValue).execute()
      }
    }
  }, [entityNodes, setEntityNodes])


  const propertySliders = props.data.properties.map(property => {
    return <div className="nodrag nopan" style={{ display: 'flex', flexDirection: 'column' }} key={`property-${props.data.name}-${property.name}`}>
      <Slider size='sm' label={property.name} className="max-w-md" step={1} color='primary' minValue={1} maxValue={10} defaultValue={property.value}
        onChangeEnd={(newValue) => onPropertySliderChanged(property.name, newValue as number, true)}>
      </Slider>
    </div>
  })


  return <>
    <div className='custom-drag-handle node-entity' style={{ position: 'relative', border: `1px solid ${isSelected ? '#4180d9' : 'white'}`, boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', padding: 10, background: 'white', borderRadius: 5, opacity: isFaded ? '0.4' : 1 }}
      onMouseEnter={(event) => {
        useModelStore.getState().setHighlightedEntities([props.id]);
      }}

      onMouseLeave={(event) => {
        useModelStore.getState().setHighlightedEntities([]);
      }}
    >
      <Handle style={handleStyle} type="source" id="t" position={Position.Top} />
      <Handle style={handleStyle} type="source" id="b" position={Position.Bottom} />
      <Handle style={handleStyle} type="source" id="l" position={Position.Left} />
      <Handle style={handleStyle} type="source" id="r" position={Position.Right} />
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'left', minWidth: 130, minHeight: 50 }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: 10, background: 'rgb(243 244 246)', width: 40, height: 40, borderRadius: 99999 }}>
          {props.data.emoji}
        </div>
        <span style={{ fontWeight: 800 }}>{props.data.name} </span>
      </div>

      {!isReadOnly && isSelected && <div style={{position: 'absolute', zIndex: 99999, border: '1px solid #e5e7eb', width: '100%', top: '100%', left: 0, background: 'white', padding: 10, borderRadius: 5, boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
        {propertySliders}
      </div>}
    </div>
  </>
}
