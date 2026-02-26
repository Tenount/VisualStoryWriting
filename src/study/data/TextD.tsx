import { Action, Entity, Location } from "../../model/schemas";

export const textD = `Anna sat on the beach, watching the waves crash against the shore. The wind blew her hair around, but she didn’t mind. She loved the sound of the ocean. It helped her forget her worries, at least for a little while. She had been thinking about her brother, David, who lived far away. They hadn’t spoken in weeks, and she missed him.

David was in the city, sitting at his desk, staring at his computer. He was tired from a long day of work. His job was stressful, and he often felt lonely in the big, noisy city. He wanted to call Anna, but he was afraid she might be too busy. He knew she was going through a tough time, and he didn’t want to add to her troubles.

Meanwhile, their friend Emma was in the mountains, hiking up a trail. She loved the peacefulness of nature. The trees were tall, and the air was fresh. As she reached the top of the hill, she thought about Anna and David. They used to do everything together, but now they were all in different places. She hoped they could reunite soon, even if just for a little while.`

export const dataTextD : {locations: Location[], entities: Entity[],     actions: Action[]} = {
    locations: [
        {
          "name": "Beach",
          "emoji": "🏖️"
        },
        {
          "name": "City",
          "emoji": "🏙️"
        },
        {
          "name": "Mountains",
          "emoji": "🏞️"
        }
      ],
    entities: [
        {
          "name": "Anna",
          "emoji": "👩",
          "properties": [
            {
              "name": "thoughtful",
              "value": 8
            },
            {
              "name": "calm",
              "value": 7
            },
            {
              "name": "nostalgic",
              "value": 6
            }
          ]
        },
        {
          "name": "David",
          "emoji": "👨‍💼",
          "properties": [
            {
              "name": "tired",
              "value": 9
            },
            {
              "name": "lonely",
              "value": 7
            },
            {
              "name": "considerate",
              "value": 6
            }
          ]
        },
        {
          "name": "Emma",
          "emoji": "🚶‍♀️",
          "properties": [
            {
              "name": "adventurous",
              "value": 8
            },
            {
              "name": "peaceful",
              "value": 7
            },
            {
              "name": "hopeful",
              "value": 6
            }
          ]
        },
        {
          "name": "Computer",
          "emoji": "💻",
          "properties": [
            {
              "name": "distracting",
              "value": 8
            },
            {
              "name": "stressful",
              "value": 7
            },
            {
              "name": "isolating",
              "value": 6
            }
          ]
        },
        {
          "name": "Waves",
          "emoji": "🌊",
          "properties": [
            {
              "name": "calming",
              "value": 8
            },
            {
              "name": "soothing",
              "value": 7
            },
            {
              "name": "refreshing",
              "value": 6
            }
          ]
        },
        {
          "name": "Wind",
          "emoji": "💨",
          "properties": [
            {
              "name": "refreshing",
              "value": 8
            },
            {
              "name": "playful",
              "value": 7
            },
            {
              "name": "invigorating",
              "value": 6
            }
          ]
        }
      ],
    actions: [
        {
          "name": "sat",
          "source": "Anna",
          "target": "Anna",
          "location": "Beach",
          "passage": "Anna sat on the beach, watching the waves crash against the shore."
        },
        {
          "name": "watching",
          "source": "Anna",
          "target": "Waves",
          "location": "Beach",
          "passage": "Anna sat on the beach, watching the waves crash against the shore."
        },
        {
          "name": "blew hair",
          "source": "Wind",
          "target": "Anna",
          "location": "Beach",
          "passage": "The wind blew her hair around, but she didn’t mind."
        },
        {
          "name": "sitting",
          "source": "David",
          "target": "David",
          "location": "City",
          "passage": "David was in the city, sitting at his desk, staring at his computer."
        },
        {
          "name": "staring",
          "source": "David",
          "target": "Computer",
          "location": "City",
          "passage": "David was in the city, sitting at his desk, staring at his computer."
        },
        {
          "name": "wanted to call",
          "source": "David",
          "target": "Anna",
          "location": "City",
          "passage": "He wanted to call Anna, but he was afraid she might be too busy."
        },
        {
          "name": "hiking up",
          "source": "Emma",
          "target": "Emma",
          "location": "Mountains",
          "passage": "Meanwhile, their friend Emma was in the mountains, hiking up a trail."
        },
        {
          "name": "reach top",
          "source": "Emma",
          "target": "Emma",
          "location": "Mountains",
          "passage": "As she reached the top of the hill, she thought about Anna and David."
        },
        {
          "name": "think about",
          "source": "Emma",
          "target": "Anna",
          "location": "Mountains",
          "passage": "As she reached the top of the hill, she thought about Anna and David."
        },
        {
          "name": "think about",
          "source": "Emma",
          "target": "David",
          "location": "Mountains",
          "passage": "As she reached the top of the hill, she thought about Anna and David."
        }
      ]
};