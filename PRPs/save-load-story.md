name: "Save/Load Story Feature Implementation"
description: |
  Implementation of save/load functionality for stories in the Visual Story Writing application using localStorage API combined with file download/upload options.

## Purpose
PRP optimized for AI agents to implement save/load functionality with sufficient context and self-validation capabilities to achieve working code through iterative refinement.

## Core Principles
1. **Context is King**: Include ALL necessary documentation, examples, and caveats
2. **Validation Loops**: Provide executable tests/lints the AI can run and fix
3. **Information Dense**: Use keywords and patterns from the codebase
4. **Progressive Success**: Start simple, validate, then enhance
5. **Global rules**: Be sure to follow all patterns in existing codebase

---

## Goal
Implement a comprehensive save/load functionality that allows users to save their current story state and load previously saved stories. This should include both localStorage persistence for browser sessions and file-based save/load for sharing between sessions/devices.

## Why
- **User experience**: Users can save their work and return to it later
- **Integration with existing features**: Preserve the current story state including all entities, locations, and actions
- **Problem this solves**: Prevents loss of work and enables users to work on stories across sessions

## What
- Add save story button that saves current state to localStorage and as downloadable JSON file
- Add load story button that can load from localStorage or upload from JSON file
- Add clear state button that resets to initial state
- Integrate UI controls in the Visual Writing Interface
- Preserve all story elements: entityNodes, locationNodes, actionEdges, textState

### Success Criteria
- [ ] Save to localStorage functionality works and persists between browser sessions
- [ ] Save as file functionality creates downloadable JSON with all story data
- [ ] Load from file functionality restores all story elements correctly
- [ ] Load from localStorage works for restoring previous session
- [ ] All existing functionality remains intact
- [ ] UI elements are properly styled and integrated

## All Needed Context

### Documentation & References (list all context needed to implement the feature)
```yaml
# MUST READ - Include these in your context window
- url: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
  why: Web Storage API for localStorage implementation
  
- file: src/model/Model.tsx
  why: Pattern for zustand store and existing state structure to be saved
  
- file: src/view/VisualWritingInterface.tsx
  why: Integration point for UI controls and existing interface structure
  
- file: src/model/HistoryModel.tsx
  why: Example of additional store pattern that might need to be saved
  
- file: src/study/StudyModel.tsx
  why: Example of additional store pattern that might need to be saved
  
- doc: https://docs.pmnd.rs/zustand
  section: "Persist middleware and manual persistence"
  critical: Proper state serialization without functions and circular references

- doc: https://developer.mozilla.org/en-US/docs/Web/API/FileReader
  section: "Reading files in JavaScript"
  critical: For file upload functionality

- docfile: INITIAL.md
  why: Contains references to Zustand documentation and other libraries used
```

### Current Codebase tree (run `tree` in the root of the project) to get an overview of the codebase
```bash
project-root/
├── .gitattributes
├── demo.gif
├── index.html
├── INITIAL.md
├── LICENSE
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── .github/
├── .qwen/
├── .git/
├── PRPs/
│   └── templates/
│       └── prp_base.md
├── public/
└── src/
    ├── model/
    │   ├── prompts/
    │   │   ├── textEditors/
    │   │   ├── textExtractors/
    │   │   └── utils/
    │   ├── HistoryModel.tsx
    │   ├── LayoutUtils.tsx
    │   ├── Model.tsx
    │   ├── SlateUtils.tsx
    │   ├── TextUtils.tsx
    │   └── ViewModel.tsx
    ├── study/
    └── view/
        ├── actionTimeline/
        ├── entityActionView/
        ├── locationView/
        ├── utils/
        ├── HistoryTree.tsx
        ├── Launcher.tsx
        ├── TextEditor.tsx
        └── VisualWritingInterface.tsx
```

### Desired Codebase tree with files to be added and responsibility of file
```bash
project-root/
├── src/
│   ├── model/
│   │   ├── StorageUtils.tsx          # Utility functions for save/load operations
│   │   └── ... (existing files)
│   └── view/
│       └── ... (existing files)
```

### Known Gotchas of our codebase & Library Quirks
```typescript
// CRITICAL: Zustand store contains functions and complex objects that can't be directly serialized
// Example: Store includes functions like setOpenAIKey, callbacks like onUpdate
// Example: ReactFlow nodes/edges have internal properties that should be preserved

// CRITICAL: Slate text state has complex nested structure that needs careful serialization
// CRITICAL: The app uses React Flow for visual nodes which have position data that should be preserved

// CRITICAL: OpenAI API key should NOT be saved to localStorage for security
// CRITICAL: React Flow nodes have internal properties like 'measured' and 'selected' that should be preserved during save/load
```

## Implementation Blueprint

### Data models and structure

Create the core data models, we ensure type safety and consistency.
```typescript
// StorageUtils.tsx - Define the story data structure for saving
interface StoryData {
  entityNodes: EntityNode[];
  locationNodes: LocationNode[];
  actionEdges: ActionEdge[];
  textState: Descendant[];
  text: string;
  isStale: boolean;
  isReadOnly: boolean;
  selectedNodes: string[];
  selectedEdges: string[];
  highlightedActionsSegment: { start: number, end: number } | null;
  filteredActionsSegment: { start: number, end: number } | null;
  highlightedEntities: string[];
  // Note: Exclude properties that contain functions or complex objects
}

// Functions for serialization and deserialization
export function serializeStory(state: ModelState): StoryData;
export function deserializeStory(data: StoryData): Partial<ModelState>;
export function saveToLocalStorage(storyId: string, storyData: StoryData): void;
export function loadFromLocalStorage(storyId: string): StoryData | null;
export function saveToFile(storyData: StoryData, filename: string): void;
export function loadFromFile(file: File): Promise<StoryData>;
```

### List of tasks to be completed to fulfill the PRP in the order they should be completed

```yaml
Task 1:
CREATE src/model/StorageUtils.tsx:
  - IMPLEMENT serialization functions for story state
  - IMPLEMENT save/load to localStorage
  - IMPLEMENT file download/upload functionality
  - ADD error handling for malformed data

Task 2:
MODIFY src/model/Model.tsx:
  - ADD saveStory method to store
  - ADD loadStory method to store
  - ADD clearStory method to store
  - PRESERVE existing method signatures

Task 3:
MODIFY src/view/VisualWritingInterface.tsx:
  - INJECT save/load UI controls
  - ADD event handlers for save/load functionality
  - MIRROR existing button styling patterns in the app

Task 4:
CREATE test for StorageUtils.tsx:
  - ADD unit tests for serialization functions
  - ADD tests for file save/load functionality
```

### Per task pseudocode as needed added to each task
```typescript
// Task 1
// StorageUtils.tsx pseudocode with CRITICAL details
export function serializeStory(state: ModelState): StoryData {
    // PATTERN: Extract only serializable data (avoid functions)
    return {
        entityNodes: state.entityNodes.map(node => ({...node})),  // Clone to avoid reference issues
        locationNodes: state.locationNodes.map(node => ({...node})),
        actionEdges: state.actionEdges.map(edge => ({...edge})),
        textState: JSON.parse(JSON.stringify(state.textState)),  // Deep clone slate state
        text: state.text,
        isStale: state.isStale,
        isReadOnly: state.isReadOnly
        // CRITICAL: Do NOT include functions or API keys
    };
}

export function saveToFile(storyData: StoryData, filename: string) {
    // GOTCHA: Need to properly serialize to JSON and create download link
    const blob = new Blob([JSON.stringify(storyData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}

export function loadFromFile(file: File): Promise<StoryData> {
    // PATTERN: Use FileReader API for file reading
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const content = event.target?.result as string;
                const data = JSON.parse(content);
                resolve(data);
            } catch (error) {
                reject(error);
            }
        };
        reader.onerror = () => reject(reader.error);
        reader.readAsText(file);
    });
}

// Task 2
// Pseudocode for Model.tsx modifications
interface ModelAction {
    // ADD new methods to interface
    saveStory: (storyId: string) => void;
    loadStory: (storyId: string) => void;
    loadStoryFromFile: (file: File) => Promise<void>;
    clearStory: () => void;
}

// Task 3
// Pseudocode for UI integration
// Add buttons to VisualWritingInterface with proper styling
// PATTERN: Use existing button patterns from the UI
// Example: Mirror the trash button pattern for consistency
```

### Integration Points
```yaml
STORAGE:
  - localStorage key: "visualStory_{storyId}" for storing stories
  - filename pattern: "visual-story-{timestamp}.json" for file downloads

STORE:
  - ADD new actions to useModelStore
  - ADD error handling for malformed saved data

UI:
  - ADD buttons to VisualWritingInterface component
  - ADD file input for loading stories
  - FOLLOW existing button patterns and styling
```

## Validation Loop

### Level 1: Syntax & Style
```bash
# Run these FIRST - fix any errors before proceeding
npm run lint
# Expected: No linting errors. If errors, READ the error and fix.
```

### Level 2: Unit Tests each new feature/file/function use existing test patterns
```typescript
// CREATE tests for StorageUtils.tsx with these test cases:
describe('StorageUtils', () => {
    test('serializeStory preserves all necessary data', () => {
        const mockState: ModelState = { /* mock state */ };
        const serialized = serializeStory(mockState);
        expect(serialized.entityNodes).toBeDefined();
        expect(serialized.locationNodes).toBeDefined();
        expect(serialized.actionEdges).toBeDefined();
        expect(serialized.textState).toBeDefined();
        expect(serialized.text).toBeDefined();
    });

    test('saveToFile creates downloadable file', () => {
        // Mock document.createElement and URL.createObjectURL
        const storyData: StoryData = { /* test data */ };
        saveToFile(storyData, 'test.json');
        // Verify download link was created and clicked
    });

    test('loadFromFile parses JSON correctly', async () => {
        const file = new File([JSON.stringify({ test: 'data' })], 'test.json', { type: 'application/json' });
        const result = await loadFromFile(file);
        expect(result.test).toBe('data');
    });

    test('serializeStory excludes functions correctly', () => {
        const mockState: ModelState = {
            // Include some functions to ensure they're filtered out
            entityNodes: [],
            locationNodes: [],
            actionEdges: [],
            textState: [],
            text: '',
            isStale: false,
            isReadOnly: false,
            // These should not be serialized
            setEntityNodes: () => {},
            setLocationNodes: () => {},
            // ... other functions
        };
        const serialized = serializeStory(mockState);
        // Verify serialized data has no functions
        expect(typeof serialized.setEntityNodes).toBe('undefined');
    });
});
```

```bash
# Run and iterate until passing:
npm run test
# If failing: Read error, understand root cause, fix code, re-run (never mock to pass)
```

### Level 3: Integration Test
```bash
# Start the development server
npm run dev

# Manual test the following scenarios:
# 1. Click save button -> verify localStorage entry created
# 2. Click save as file -> verify JSON file downloaded
# 3. Load from file -> verify story state restored
# 4. Load from localStorage -> verify saved story loaded
# 5. Clear story -> verify reset to initial state
# 6. Check all existing functionality still works after save/load

# Expected behavior:
# - Save button creates entry in localStorage under "visualStory_*" key
# - Download file contains all story data in JSON format
# - Load operations restore all visual elements (entities, locations, actions)
# - Text editor content is restored correctly
# - Timeline and visual elements match loaded state
```

## Final validation Checklist
- [ ] All tests pass: `npm run test`
- [ ] No linting errors: `npm run lint`
- [ ] Manual test successful: Save/Load operations work correctly
- [ ] Error cases handled gracefully: Malformed JSON files handled properly
- [ ] Existing functionality remains intact after loading stories
- [ ] UI elements properly integrated and styled consistently
- [ ] Security consideration: OpenAI key not saved to storage

---

## Anti-Patterns to Avoid
- ❌ Don't save API keys or sensitive information to localStorage
- ❌ Don't use new patterns when existing ones work (e.g., zustand patterns)
- ❌ Don't skip validation because "it should work"  
- ❌ Don't ignore failing tests - fix them
- ❌ Don't create circular references in saved data
- ❌ Don't hardcode values that should be dynamic
- ❌ Don't catch all exceptions - be specific