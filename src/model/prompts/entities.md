# Entities Extraction Prompt

{text}

Extract all the entities in this story.

Use the same language as the input text.

For each entity, extract:
- 'name': the entity name
- an emoji best visually describing the entity (e.g., use the emoji of a person if it is a person but avoid reusing the same emojis)
- properties about the entity, if any (no more than 3)

Properties have to be adjectives describing the entity and their value should represent the intensity of the property (on a scale from 1 to 10).
