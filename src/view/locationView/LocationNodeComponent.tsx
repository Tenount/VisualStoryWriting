import { NodeProps, useKeyPress } from '@xyflow/react';
import { useEffect } from 'react';

import '@xyflow/react/dist/style.css';
import { Location, LocationNode } from '../../model/schemas';
import { useModelStore } from '../../model/Model';
import { useViewModelStore } from '../../model/ViewModel';


export function CreateLocatioNode(location: Location, index: number): LocationNode {
  const x = index % 2;
  const y = Math.floor(index / 2);

  return {
    id: `location-${index}`,
    dragHandle: '.custom-drag-handle',
    type: "locationNode",
    measured: {width: 160, height: 160},
    position: { x: 20 + x * 350, y: 20 + y * 200 },
    data: location
  }
}

export default function LocationNodeComponent(props: NodeProps<LocationNode>) {
  const deletePressed = useKeyPress(["Delete", "Backspace"]);
  const getFilteredLocationNodes = useModelStore(state => state.getFilteredLocationNodes);

  const hoveredLocation = useViewModelStore(state => state.hoveredLocation);

  let isHovered = hoveredLocation === props.data.name;

  const highlightedActionsSegment = useModelStore(state => state.highlightedActionsSegment);

  let isFaded = false;

  if (highlightedActionsSegment) {
    const filteredLocations = getFilteredLocationNodes(highlightedActionsSegment);
    isFaded = !filteredLocations.map(l => l.id).includes(props.id);
  }

  useEffect(() => {
    if (deletePressed && useModelStore.getState().selectedNodes.includes(props.id)) {
      // TODO
    }
  }, [deletePressed])



  return <>
    <div className='custom-drag-handle' style={{ border: `1px solid ${isHovered ? 'blue' : 'white'}`, boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', width: 160, height: 160, padding: 10, background: 'white', borderRadius: 9999, opacity: isFaded ? '0.3' : 1 }}>
      <div style={{ display: 'flex', height: '100%', flexDirection: 'row', alignItems: 'end', justifyContent: 'center' }}>
        <span style={{ fontWeight: 800, transform: 'translate(0%, 38px)', whiteSpace: 'nowrap' }}>{props.data.emoji} {props.data.name}</span>
      </div>
    </div>
  </>
}