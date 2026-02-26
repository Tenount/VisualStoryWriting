# Actions Extraction Prompt

{before}{text}{after}

Use the same language as the input text.

Extract the actions done by the characters in TEXT and only the actions in TEXT. Do not extract the actions from BEFORE.

Only consider actions that are happening exactly at the moment of TEXT, ignore memories etc.

If there are no actions fulfilling these criterias in TEXT, then return an empty array.

Source and target should be characters from this list: {entities}.

Here are some possible locations but there might be others: {locations}.

If an action is done by a character to itself, then the source and target character should be the same.

For each action, extract:
- 'name': the name of the action (no more than 2 words)
- the source character (the character doing the action)
- the target character (the character targetted by the action)
- the location of the action (you can use 'unknown' if the location cannot be inferred from the text)
