import { Action, Entity, Location } from "../../model/schemas";

export const textB = `One snowy winter morning, Jack jumped up and looked out his window to see the world covered in thick sparkling snow. Perfect sledding snow!

He threw on his snow pants and jacket, then dashed outside before his mom could even finish saying, "don’t forget your hat!"

But Jack was already at the hill. He took a deep breath in and began his climb, dragging his sled behind him. He climbed higher and higher until he finally reached the top. As he looked down, the hill felt so large to the 8-year-old Jack that it seemed like a mountain.

Without waiting another second, he positioned his sled strategically and loaded himself on. WOOSH!

He zoomed down the hill so fast that his hat flew right off his head.
He zoomed past all the children climbing the hill.
He zoomed past the parents waiting at the bottom of the hill. But he didn't slow down.
He zoomed faster and faster, and crashed into the hay bales.
He flew off his sled and into the air. He soared through the sky, flying past a flock of noisy geese.`

export const dataTextB : {locations: Location[], entities: Entity[],     actions: Action[]} = {
    locations: [
        {
            "name": "Jack's House",
            "emoji": "🏠"
        },
        {
            "name": "The Hill",
            "emoji": "⛰️"
        },
        {
            "name": "The Bottom of the Hill",
            "emoji": "🏞️"
        },
        {
            "name": "The Hay Bales",
            "emoji": "🌾"
        },
        {
            "name": "The Sky",
            "emoji": "☁️"
        }
    ],
    entities: [
        {
            "name": "Jack",
            "emoji": "👦",
            "properties": [
                {
                    "name": "excited",
                    "value": 9
                },
                {
                    "name": "adventurous",
                    "value": 8
                },
                {
                    "name": "energetic",
                    "value": 10
                }
            ]
        },
        {
            "name": "snow",
            "emoji": "❄️",
            "properties": [
                {
                    "name": "sparkling",
                    "value": 8
                },
                {
                    "name": "thick",
                    "value": 7
                },
                {
                    "name": "cold",
                    "value": 9
                }
            ]
        },
        {
            "name": "sled",
            "emoji": "🛷",
            "properties": [
                {
                    "name": "fast",
                    "value": 9
                },
                {
                    "name": "smooth",
                    "value": 8
                },
                {
                    "name": "lightweight",
                    "value": 7
                }
            ]
        },
        {
            "name": "hill",
            "emoji": "⛰️",
            "properties": [
                {
                    "name": "steep",
                    "value": 8
                },
                {
                    "name": "large",
                    "value": 7
                },
                {
                    "name": "snowy",
                    "value": 9
                }
            ]
        },
        {
            "name": "hat",
            "emoji": "🎩",
            "properties": [
                {
                    "name": "warm",
                    "value": 7
                },
                {
                    "name": "colorful",
                    "value": 6
                },
                {
                    "name": "light",
                    "value": 5
                }
            ]
        },
        {
            "name": "hay bales",
            "emoji": "🌾",
            "properties": [
                {
                    "name": "soft",
                    "value": 6
                },
                {
                    "name": "protective",
                    "value": 8
                },
                {
                    "name": "stacked",
                    "value": 7
                }
            ]
        },
        {
            "name": "geese",
            "emoji": "🦢",
            "properties": [
                {
                    "name": "noisy",
                    "value": 8
                },
                {
                    "name": "flying",
                    "value": 9
                },
                {
                    "name": "flock",
                    "value": 7
                }
            ]
        },
        {
            name: "parents",
            emoji: "👨‍👩‍👦",
            properties: [
                {
                    name: "waiting",
                    value: 7
                },
                {
                    name: "watching",
                    value: 8
                },
                {
                    name: "smiling",
                    value: 9
                }
            ]
        },
        {
            name: "children",
            emoji: "🧒",
            properties: [
                {
                    name: "climbing",
                    value: 8
                },
            ]
        }
    ],
    actions: [
        {
            "name": "jumped up",
            "source": "Jack",
            "target": "Jack",
            "location": "Jack's House",
            "passage": "One snowy winter morning, Jack jumped up and looked out his window to see the world covered in thick sparkling snow."
        },
        {
            "name": "looked out",
            "source": "Jack",
            "target": "Jack",
            "location": "Jack's House",
            "passage": "One snowy winter morning, Jack jumped up and looked out his window to see the world covered in thick sparkling snow."
        },
        {
            "name": "threw on",
            "source": "Jack",
            "target": "Jack",
            "location": "Jack's House",
            "passage": "He threw on his snow pants and jacket, then dashed outside before his mom could even finish saying, \"don’t forget your hat!"
        },
        {
            "name": "dashed outside",
            "source": "Jack",
            "target": "Jack",
            "location": "Jack's House",
            "passage": "He threw on his snow pants and jacket, then dashed outside before his mom could even finish saying, \"don’t forget your hat!"
        },
        {
            "name": "breathe in",
            "source": "Jack",
            "target": "Jack",
            "location": "The Hill",
            "passage": "He took a deep breath in and began his climb, dragging his sled behind him."
        },
        {
            "name": "climb",
            "source": "Jack",
            "target": "hill",
            "location": "The Hill",
            "passage": "He took a deep breath in and began his climb, dragging his sled behind him."
        },
        {
            "name": "drag",
            "source": "Jack",
            "target": "sled",
            "location": "The Hill",
            "passage": "He took a deep breath in and began his climb, dragging his sled behind him."
        },
        {
            "name": "climbed higher",
            "source": "Jack",
            "target": "hill",
            "location": "The Hill",
            "passage": "He climbed higher and higher until he finally reached the top."
        },
        {
            "name": "reached top",
            "source": "Jack",
            "target": "hill",
            "location": "The Hill",
            "passage": "He climbed higher and higher until he finally reached the top."
        },
        {
            "name": "looked down",
            "source": "Jack",
            "target": "hill",
            "location": "The Hill",
            "passage": "As he looked down, the hill felt so large to the 8-year-old Jack that it seemed like a mountain."
        },
        {
            "name": "positioned sled",
            "source": "Jack",
            "target": "sled",
            "location": "The Hill",
            "passage": "Without waiting another second, he positioned his sled strategically and loaded himself on. WOOSH!"
        },
        {
            "name": "loaded himself",
            "source": "Jack",
            "target": "Jack",
            "location": "The Hill",
            "passage": "Without waiting another second, he positioned his sled strategically and loaded himself on. WOOSH!"
        },
        {
            "name": "zoomed down",
            "source": "Jack",
            "target": "hill",
            "location": "The Hill",
            "passage": "He zoomed down the hill so fast that his hat flew right off his head."
        },
        {
            "name": "flew off",
            "source": "hat",
            "target": "hat",
            "location": "The Hill",
            "passage": "He zoomed down the hill so fast that his hat flew right off his head."
        },
        {
            "name": "zoomed past",
            "source": "Jack",
            "target": "children",
            "location": "The Hill",
            "passage": "He zoomed past all the children climbing the hill."
        },
        {
            "name": "zoomed past",
            "source": "Jack",
            "target": "parents",
            "location": "The Bottom of the Hill",
            "passage": "He zoomed past the parents waiting at the bottom of the hill."
        },
        {
            "name": "zoomed",
            "source": "Jack",
            "target": "hill",
            "location": "The Hill",
            "passage": "He zoomed faster and faster, and crashed into the hay bales."
        },
        {
            "name": "crashed",
            "source": "Jack",
            "target": "hay bales",
            "location": "The Hay Bales",
            "passage": "He zoomed faster and faster, and crashed into the hay bales."
        },
        {
            "name": "flew off",
            "source": "Jack",
            "target": "Jack",
            "location": "The Hay Bales",
            "passage": "He flew off his sled and into the air."
        },
        {
            "name": "into the air",
            "source": "Jack",
            "target": "Jack",
            "location": "The Sky",
            "passage": "He flew off his sled and into the air."
        },
        {
            "name": "soared",
            "source": "Jack",
            "target": "Jack",
            "location": "The Sky",
            "passage": "He soared through the sky, flying past a flock of noisy geese."
        },
        {
            "name": "flying past",
            "source": "Jack",
            "target": "geese",
            "location": "The Sky",
            "passage": "He soared through the sky, flying past a flock of noisy geese."
        }
    ]
};