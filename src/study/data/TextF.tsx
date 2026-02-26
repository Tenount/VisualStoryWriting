import { Action, Entity, Location } from "../../model/schemas";


export const textF = `The reflection of the half moon danced on the rough waters of the Gulf of Mexico. Waves crashed against the rocky shore of Laguna Madre causing an ominous tower of white foam to rain down in a striking demonstration of the battle between sea and space. High tides had already swallowed the entirety of South Padre Island as a result of the exceptional gravitational pull of the black hole. Most had fled further inland in the forlorn hope of surviving the certain end of the world. But Mona and her father, Joseph, opted to surrender to the inevitable, and if time was kind, catch one final sunrise. 
        Mona developed her love of the sea from her dad, who was an oceanographer. They had spent many days exploring the coast and the Gulf of Mexico. She loved to discover starfish in tide pools and chase crabs in the sand. She loved the shapes kelp makes on the sand as they are washed up by the waves. Most of all, she loved to sit in the shallow waters of the ocean with Joseph. It always brought her great comfort to feel the warmth of the sun on her tanned shoulders and the sea spray lightly beat her feet and legs. Sadly, Parkinson’s disease had robbed Joseph of his mobility and much of his voice. Mona, who cared for her father, wheeled him out each morning and evening to watch the sun rise and set over their beloved sea. 
        Their final sunset together had been tragic, yet awe-inspiring. The black hole did not swallow the sun in one gulp. Rather, the pull of the monster sucked in the matter of the star slowly. In the late afternoon, the outer edge of the sun bulged and looked like it might burst. By the time the sun set beneath the horizon, the matter sucked into the black hole formed a glowing, swirled tail glittering with stardust. A barrage of solar radiation destroyed the power grid. Twilight turned to a surreally dark night. With only the dimming light of the moon, Mona and Joseph were captivated by the millions of stars that shimmered in the most extraordinary night sky. The majestic spiral of the Milky Way shone brighter than they could have ever imagined. 
        The brilliance of the stars increased and the luster of the moon decreased as the intensity of the waves swelled. In an instant, the remaining moonlight was snuffed like a candle.
        Mona squeezed her father’s hand. She gulped back tears. "I guess we’ll miss the sunrise." Joseph nodded solemnly. 
        They sat quietly for some time. Mona focused on being present and tried to preserve every sensation she could: the roar of the waves, the coolness of the breeze on her face, the pungent smell of seaweed, the roughness of her father’s hand. 
        "Let’s go," Joseph struggled to say. His hand trembled as he pointed to the water.
        "You wanna move closer?"
        He nodded. "Sit in the ocean."
        Mona smiled. "Of course." 
        Mona wheeled Joseph over the bumpy terrain to the shore. She helped lower him to the ground and removed his shoes and socks. He closed his eyes and wiggled his toes in the wet sand as the choppy waters enveloped his legs. Mona sat down next to him and rested her head on his shoulder. She could feel his tremor as he put his arm around her. The briny water burned her eyes, and she savored the taste of salt on her lips.
        The sun should have been rising. Instead, a bright disc of fire and cosmic particles peeked over the horizon in an eerie glow. Mona squinted at the shocking brightness. Joseph scooted into the water, turned around, and reached out his hands to Mona. She grabbed her dad’s hand and met his eyes. In his eye she could see the silhouette against the blazing remnants of the sun circling the black hole. As she lowered them both into the water, she recalled by the memory of his smiling face from the thousands of times they had swum in those very waters together.
        "MONA? It's time to go back, you guys are going to catch a cold if you stay out there," her mother yelled from the car. 
        Mona looked to Joseph who was still entranced by the ocean and sunset.
       "Just a few more moments..."\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`;


export const dataTextF : {locations: Location[], entities: Entity[],     actions: Action[]} = {
  entities: [
    /*{
        "name": "Gulf of Mexico",
        "emoji": "🌊",
        "properties": [
            {
                "name": "vast",
                "value": 10
            },
            {
                "name": "dynamic",
                "value": 8
            },
            {
                "name": "mysterious",
                "value": 7
            }
        ]
    },*/
    {
        "name": "Moon",
        "emoji": "🌙",
        "properties": [
            {
                "name": "reflective",
                "value": 8
            },
            {
                "name": "waning",
                "value": 7
            },
            {
                "name": "serene",
                "value": 6
            }
        ]
    },
    /*{
        "name": "South Padre Island",
        "emoji": "🏖️",
        "properties": [
            {
                "name": "submerged",
                "value": 9
            },
            {
                "name": "popular",
                "value": 7
            },
            {
                "name": "vulnerable",
                "value": 8
            }
        ]
    },*/
    /*{
        "name": "Laguna Madre",
        "emoji": "🏝️",
        "properties": [
            {
                "name": "serene",
                "value": 7
            },
            {
                "name": "picturesque",
                "value": 8
            },
            {
                "name": "isolated",
                "value": 6
            }
        ]
    },*/
    {
        "name": "Black Hole",
        "emoji": "🌀",
        "properties": [
            {
                "name": "powerful",
                "value": 10
            },
            {
                "name": "ominous",
                "value": 9
            },
            {
                "name": "mysterious",
                "value": 10
            }
        ]
    },
    {
        "name": "Waves",
        "emoji": "🌊",
        "properties": [
            {
                "name": "crashing",
                "value": 9
            },
            {
                "name": "relentless",
                "value": 8
            },
            {
                "name": "rhythmic",
                "value": 7
            }
        ]
    },
    /*{
        "name": "Stars",
        "emoji": "✨",
        "properties": [
            {
                "name": "dazzling",
                "value": 9
            },
            {
                "name": "numerous",
                "value": 10
            },
            {
                "name": "eternal",
                "value": 8
            }
        ]
    },*/
    {
        "name": "Mona's Mother",
        "emoji": "👩‍👧",
        "properties": [
            {
                "name": "concerned",
                "value": 8
            },
            {
                "name": "protective",
                "value": 9
            },
            {
                "name": "practical",
                "value": 7
            }
        ]
    },
    {
        "name": "Sun",
        "emoji": "☀️",
        "properties": [
            {
                "name": "brilliant",
                "value": 10
            },
            {
                "name": "vital",
                "value": 9
            },
            {
                "name": "diminishing",
                "value": 7
            }
        ]
    },
    {
        "name": "Mona",
        "emoji": "👩",
        "properties": [
            {
                "name": "caring",
                "value": 9
            },
            {
                "name": "adventurous",
                "value": 8
            },
            {
                "name": "sentimental",
                "value": 7
            }
        ]
    },
    {
        "name": "Joseph",
        "emoji": "👴",
        "properties": [
            {
                "name": "knowledgeable",
                "value": 9
            },
            {
                "name": "affectionate",
                "value": 8
            },
            {
                "name": "frail",
                "value": 6
            }
        ]
    },
],
  locations: [
    {
        "name": "Gulf of Mexico",
        "emoji": "🌊"
    },
    {
        "name": "Laguna Madre",
        "emoji": "🏞️"
    },
    /*{
        "name": "South Padre Island",
        "emoji": "🏝️"
    },*/
    {
        "name": "The Shore",
        "emoji": "🏖️"
    },
    {
        "name": "The Ocean",
        "emoji": "🌊"
    },
    {
        "name": "The Car",
        "emoji": "🚗"
    }
],
  actions: [
    {
        "name": "dance",
        "source": "Moon",
        "target": "Waves",
        "location": "Gulf of Mexico",
        "passage": "The reflection of the half moon danced on the rough waters of the Gulf of Mexico."
    },
    {
        "name": "crashed against",
        "source": "Waves",
        "target": "Laguna Madre",
        "location": "The Shore",
        "passage": "Waves crashed against the rocky shore of Laguna Madre causing an ominous tower of white foam to rain down in a striking demonstration of the battle between sea and space."
    },
    {
        "name": "swallowed",
        "source": "High tides",
        "target": "High tides",
        "location": "South Padre Island",
        "passage": "High tides had already swallowed the entirety of South Padre Island as a result of the exceptional gravitational pull of the black hole."
    },
    {
        "name": "opted to surrender",
        "source": "Mona",
        "target": "Mona",
        "location": "unknown",
        "passage": "But Mona and her father, Joseph, opted to surrender to the inevitable, and if time was kind, catch one final sunrise."
    },
    {
        "name": "opted to surrender",
        "source": "Joseph",
        "target": "Joseph",
        "location": "unknown",
        "passage": "But Mona and her father, Joseph, opted to surrender to the inevitable, and if time was kind, catch one final sunrise."
    },
    {
        "name": "catch sunrise",
        "source": "Mona",
        "target": "Sun",
        "location": "unknown",
        "passage": "But Mona and her father, Joseph, opted to surrender to the inevitable, and if time was kind, catch one final sunrise."
    },
    {
        "name": "catch sunrise",
        "source": "Joseph",
        "target": "Sun",
        "location": "unknown",
        "passage": "But Mona and her father, Joseph, opted to surrender to the inevitable, and if time was kind, catch one final sunrise."
    },
    {
        "name": "developed love",
        "source": "Mona",
        "target": "Mona",
        "location": "unknown",
        "passage": "Mona developed her love of the sea from her dad, who was an oceanographer."
    },
    {
        "name": "explore coast",
        "source": "Mona",
        "target": "Mona",
        "location": "Gulf of Mexico",
        "passage": "They had spent many days exploring the coast and the Gulf of Mexico."
    },
    {
        "name": "explore coast",
        "source": "Joseph",
        "target": "Joseph",
        "location": "Gulf of Mexico",
        "passage": "They had spent many days exploring the coast and the Gulf of Mexico."
    },
    {
        "name": "discover starfish",
        "source": "Mona",
        "target": "Mona",
        "location": "Gulf of Mexico",
        "passage": "She loved to discover starfish in tide pools and chase crabs in the sand."
    },
    {
        "name": "chase crabs",
        "source": "Mona",
        "target": "Mona",
        "location": "Gulf of Mexico",
        "passage": "She loved to discover starfish in tide pools and chase crabs in the sand."
    },
    {
        "name": "sit",
        "source": "Mona",
        "target": "Mona",
        "location": "The Ocean",
        "passage": "Most of all, she loved to sit in the shallow waters of the ocean with Joseph."
    },
    {
        "name": "sit",
        "source": "Joseph",
        "target": "Joseph",
        "location": "The Ocean",
        "passage": "Most of all, she loved to sit in the shallow waters of the ocean with Joseph."
    },
    {
        "name": "feel warmth",
        "source": "Mona",
        "target": "Sun",
        "location": "The Ocean",
        "passage": "It always brought her great comfort to feel the warmth of the sun on her tanned shoulders and the sea spray lightly beat her feet and legs."
    },
    {
        "name": "wheel out",
        "source": "Mona",
        "target": "Joseph",
        "location": "unknown",
        "passage": "Mona, who cared for her father, wheeled him out each morning and evening to watch the sun rise and set over their beloved sea."
    },
    {
        "name": "watch",
        "source": "Mona",
        "target": "Sun",
        "location": "unknown",
        "passage": "Mona, who cared for her father, wheeled him out each morning and evening to watch the sun rise and set over their beloved sea."
    },
    {
        "name": "watch",
        "source": "Joseph",
        "target": "Sun",
        "location": "unknown",
        "passage": "Mona, who cared for her father, wheeled him out each morning and evening to watch the sun rise and set over their beloved sea."
    },
    {
        "name": "sucked in",
        "source": "Black Hole",
        "target": "Sun",
        "location": "unknown",
        "passage": "Rather, the pull of the monster sucked in the matter of the star slowly."
    },
    {
        "name": "set beneath",
        "source": "Sun",
        "target": "Sun",
        "location": "unknown",
        "passage": "By the time the sun set beneath the horizon, the matter sucked into the black hole formed a glowing, swirled tail glittering with stardust."
    },
    {
        "name": "sucked in",
        "source": "Black Hole",
        "target": "Black Hole",
        "location": "unknown",
        "passage": "By the time the sun set beneath the horizon, the matter sucked into the black hole formed a glowing, swirled tail glittering with stardust."
    },
    {
        "name": "captivated",
        "source": "Mona",
        "target": "Mona",
        "location": "unknown",
        "passage": "With only the dimming light of the moon, Mona and Joseph were captivated by the millions of stars that shimmered in the most extraordinary night sky."
    },
    {
        "name": "captivated",
        "source": "Joseph",
        "target": "Joseph",
        "location": "unknown",
        "passage": "With only the dimming light of the moon, Mona and Joseph were captivated by the millions of stars that shimmered in the most extraordinary night sky."
    },
    {
        "name": "squeezed hand",
        "source": "Mona",
        "target": "Joseph",
        "location": "unknown",
        "passage": "Mona squeezed her father’s hand."
    },
    {
        "name": "gulped back",
        "source": "Mona",
        "target": "Mona",
        "location": "unknown",
        "passage": "She gulped back tears."
    },
    {
        "name": "nodded solemnly",
        "source": "Joseph",
        "target": "Joseph",
        "location": "unknown",
        "passage": "Joseph nodded solemnly."
    },
    {
        "name": "sat quietly",
        "passage": "They sat quietly for some time.",
        "location": "unknown",
        "source": "Mona",
        "target": "Mona",
    },
    {
        "name": "sat quietly",
        "passage": "They sat quietly for some time.",
        "location": "unknown",
        "source": "Joseph",
        "target": "Joseph",
    },
    {
        "name": "focused on",
        "source": "Mona",
        "target": "Mona",
        "location": "unknown",
        "passage": "Mona focused on being present and tried to preserve every sensation she could: the roar of the waves, the coolness of the breeze on her face, the pungent smell of seaweed, the roughness of her father’s hand."
    },
    {
        "name": "tried to preserve",
        "source": "Mona",
        "target": "Mona",
        "location": "unknown",
        "passage": "Mona focused on being present and tried to preserve every sensation she could: the roar of the waves, the coolness of the breeze on her face, the pungent smell of seaweed, the roughness of her father’s hand."
    },
    {
        "name": "struggled to say",
        "source": "Joseph",
        "target": "Mona",
        "location": "unknown",
        "passage": "\"Let’s go,\" Joseph struggled to say."
    },
    {
        "name": "hand trembled",
        "source": "Joseph",
        "target": "Joseph",
        "location": "unknown",
        "passage": "His hand trembled as he pointed to the water."
    },
    {
        "name": "pointed",
        "source": "Joseph",
        "target": "Joseph",
        "location": "unknown",
        "passage": "His hand trembled as he pointed to the water."
    },
    {
        "name": "nodded",
        "source": "Joseph",
        "target": "Joseph",
        "location": "unknown",
        "passage": "He nodded."
    },
    {
        "name": "smile",
        "source": "Mona",
        "target": "Mona",
        "location": "unknown",
        "passage": "Mona smiled."
    },
    {
        "name": "wheel over",
        "source": "Mona",
        "target": "Joseph",
        "location": "The Shore",
        "passage": "Mona wheeled Joseph over the bumpy terrain to the shore."
    },
    {
        "name": "helped lower",
        "source": "Mona",
        "target": "Joseph",
        "location": "The Shore",
        "passage": "She helped lower him to the ground and removed his shoes and socks."
    },
    {
        "name": "removed shoes",
        "source": "Mona",
        "target": "Joseph",
        "location": "The Shore",
        "passage": "She helped lower him to the ground and removed his shoes and socks."
    },
    {
        "name": "removed socks",
        "source": "Mona",
        "target": "Joseph",
        "location": "The Shore",
        "passage": "She helped lower him to the ground and removed his shoes and socks."
    },
    {
        "name": "closed eyes",
        "source": "Joseph",
        "target": "Joseph",
        "location": "The Shore",
        "passage": "He closed his eyes and wiggled his toes in the wet sand as the choppy waters enveloped his legs."
    },
    {
        "name": "wiggled toes",
        "source": "Joseph",
        "target": "Joseph",
        "location": "The Shore",
        "passage": "He closed his eyes and wiggled his toes in the wet sand as the choppy waters enveloped his legs."
    },
    {
        "name": "enveloped legs",
        "source": "Waves",
        "target": "Joseph",
        "location": "The Shore",
        "passage": "He closed his eyes and wiggled his toes in the wet sand as the choppy waters enveloped his legs."
    },
    {
        "name": "sat down",
        "source": "Mona",
        "target": "Mona",
        "location": "The Shore",
        "passage": "Mona sat down next to him and rested her head on his shoulder."
    },
    {
        "name": "rested head",
        "source": "Mona",
        "target": "Joseph",
        "location": "The Shore",
        "passage": "Mona sat down next to him and rested her head on his shoulder."
    },
    {
        "name": "feel tremor",
        "source": "Mona",
        "target": "Joseph",
        "location": "The Shore",
        "passage": "She could feel his tremor as he put his arm around her."
    },
    {
        "name": "put arm",
        "source": "Joseph",
        "target": "Mona",
        "location": "The Shore",
        "passage": "She could feel his tremor as he put his arm around her."
    },
    {
        "name": "burned",
        "source": "briny water",
        "target": "Mona",
        "location": "unknown",
        "passage": "The briny water burned her eyes, and she savored the taste of salt on her lips."
    },
    {
        "name": "savored",
        "source": "Mona",
        "target": "Mona",
        "location": "unknown",
        "passage": "The briny water burned her eyes, and she savored the taste of salt on her lips."
    },
    {
        "name": "squinted",
        "source": "Mona",
        "target": "Mona",
        "location": "unknown",
        "passage": "Mona squinted at the shocking brightness."
    },
    {
        "name": "scooted into",
        "source": "Joseph",
        "target": "Joseph",
        "location": "The Ocean",
        "passage": "Joseph scooted into the water, turned around, and reached out his hands to Mona."
    },
    {
        "name": "turned around",
        "source": "Joseph",
        "target": "Joseph",
        "location": "The Ocean",
        "passage": "Joseph scooted into the water, turned around, and reached out his hands to Mona."
    },
    {
        "name": "reached out",
        "source": "Joseph",
        "target": "Mona",
        "location": "The Ocean",
        "passage": "Joseph scooted into the water, turned around, and reached out his hands to Mona."
    },
    {
        "name": "grabbed hand",
        "source": "Mona",
        "target": "Joseph",
        "location": "The Ocean",
        "passage": "She grabbed her dad’s hand and met his eyes."
    },
    {
        "name": "met eyes",
        "source": "Mona",
        "target": "Joseph",
        "location": "The Ocean",
        "passage": "She grabbed her dad’s hand and met his eyes."
    },
    {
        "name": "see silhouette",
        "source": "Mona",
        "target": "Sun",
        "location": "unknown",
        "passage": "In his eye she could see the silhouette against the blazing remnants of the sun circling the black hole."
    },
    {
        "name": "lower into water",
        "source": "Mona",
        "target": "Mona",
        "location": "The Ocean",
        "passage": "As she lowered them both into the water, she recalled by the memory of his smiling face from the thousands of times they had swum in those very waters together."
    },
    {
        "name": "yelled from",
        "source": "Mona's Mother",
        "target": "Mona",
        "location": "The Car",
        "passage": "It's time to go back, you guys are going to catch a cold if you stay out there,\" her mother yelled from the car."
    },
    {
        "name": "looked",
        "source": "Mona",
        "target": "Joseph",
        "location": "The Shore",
        "passage": "Mona looked to Joseph who was still entranced by the ocean and sunset."
    }
]
};