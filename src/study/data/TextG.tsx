import { Action, Entity, Location } from "../../model/schemas";


export const textG = `        Little Angie never slept at night. Her parents worried. "Insomnia," the doctors said. "Is she anxious?" they asked.
        Anxious?  Can anyone imagine anyone less anxious than Angie? She was all giggles and sunburns. Her days were full of coloring books and earthworms. She’d hum songs to her cat or curl up on her mom’s lap and read fairy stories for hours.
        She’d yawn at the breakfast table, and her snoozy eyes would droop while she lay in the field looking at clouds in the late afternoon sun, but she would never sleep. 
        "It is just a phase," said the doctors. "She’ll outgrow it."
        "But she wakes up with leaves in her hair," her mother said with a furrowed brow.
        "And mud in her sheets," her father bemoaned. 
        "Angie, you must not wander at night," both parents would demand.
        They locked her door and worried.
        Angie loved her parents and wanted to be a good girl. But Angie could not sleep because she had a beautiful secret.
        After Angie took her bath, washed all the dirt off of her scabby knees, and untangled all the straw and twigs from her curly hair, her mom and dad would come into her room, tuck her in, kiss her good night, and remind her to "stay in bed" and "try to sleep." She’d smile at them cheerfully and say, "Goodnight!" Then, as soon as her mom closed her bedroom door with a click, she’d spring to her window and wait for Midnight Lightning to appear.
        Midnight Lightning came every night. Angie would gleefully watch him approach from her bedroom window. First, he’d appear as a brilliant, speeding blur on the distant horizon where the forest met the low field. Then, she’d hear the thundering gallops of his hoofs hitting the ground with vibrant force. She’d see the moonlight reflecting an iridescent shimmer on his shining black coat.
        Every night, he would come to Angie’s window, gently whinnying, calling her to join him on their magical, secret, nightly adventures. She’d open her window. Barefoot in her nightgown, she’d climb down the trellis to where he waited, swishing his long, jet-black tail. He’d joyfully huff when she joined him, then lower his head and gently rub his velvet-soft muzzle on Angie’s cheek. She’d take in a deep breath of his good, pure horsey scent and kiss his nose. Then, she’d climb up on the haystack (which she kept under her window for this exact purpose) and throw a leg over Midnight Lightning’s tall back. She’d link her fingers through his strong, silky mane. Angie and the magical horse would become one. 
        He’d take off with a wild gallop, and she’d fluidly follow his every movement. Soon, they’d be racing through the fields, watching as fireflies sprung up all around them, dancing alongside them in the moonlight. They’d stride through starlit forests, listening to the cicadas and crickets sing and would join in their song. They’d splash through clear streams, relishing the bright, cool of the mountain-fed waters.
        Sometimes they’d visit the wise old owls of the woods. "Too-who?" the owls would ask, turning their large eyes to gaze at the pair. Midnight Lightning neighed a response that only he and the other enchanted animals could understand. 
        Sometimes, they’d dash to the summits of distant mountains, looking down on the moonlit vista of the villages beneath them. Angie would point to her own little home below.
        Sometimes, they’d explore hidden caves, luminous with glowworms. They’d trot through the dark caverns and admire the crystals that shone brilliantly in the bioluminescent light.
        Midnight Lightning always had precious secret places to share with Angie. Every night was new. She was never sure where Midnight Lightning might lead her, but she always knew she was safe and loved.
        When the first hint of dawn began to break in the east, Midnight Lightning would return Angie to her bedroom window. She’d unlace her fingers from his mane and slide off his strong back. She’d kiss his downy nose. With windblown hair and muddy toes, she’d climb back into her bedroom. Smiling, she’d slip under her covers and close her eyes as she listened to Midnight Lightning galloping away while the first gleams of morning light shone through her window.
\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`;


export const dataTextG : {locations: Location[], entities: Entity[],     actions: Action[]} = {
  entities: [
    {
        "name": "Angie's Door",
        "emoji": "🚪",
        "properties": [
            {
                "name": "locked",
                "value": 8
            },
            {
                "name": "secure",
                "value": 9
            },
            {
                "name": "protective",
                "value": 8
            }
        ]
    },
    {
        "name": "Angie's Dad",
        "emoji": "👨",
        "properties": [
            {
                "name": "concerned",
                "value": 8
            },
            {
                "name": "loving",
                "value": 9
            },
            {
                "name": "protective",
                "value": 8
            }
        ]
    },
    {
        "name": "Angie's Mom",
        "emoji": "👩",
        "properties": [
            {
                "name": "concerned",
                "value": 8
            },
            {
                "name": "loving",
                "value": 9
            },
            {
                "name": "protective",
                "value": 8
            }
        ]
    },
    {
        "name": "Doctors",
        "emoji": "👨‍⚕️",
        "properties": [
            {
                "name": "concerned",
                "value": 8
            },
            {
                "name": "professional",
                "value": 9
            },
            {
                "name": "knowledgeable",
                "value": 8
            }
        ]
    },
    /*{
        "name": "The Caves",
        "emoji": "🕳️",
        "properties": [
            {
                "name": "hidden",
                "value": 8
            },
            {
                "name": "luminous",
                "value": 9
            },
            {
                "name": "mysterious",
                "value": 9
            }
        ]
    },*/
    /*{
        "name": "The Forest",
        "emoji": "🌲",
        "properties": [
            {
                "name": "mystical",
                "value": 9
            },
            {
                "name": "serene",
                "value": 8
            },
            {
                "name": "enchanting",
                "value": 9
            }
        ]
    },*/

    {
        "name": "Midnight Lightning",
        "emoji": "🐎",
        "properties": [
            {
                "name": "magical",
                "value": 10
            },
            {
                "name": "swift",
                "value": 10
            },
            {
                "name": "loyal",
                "value": 9
            }
        ]
    },
    
    {
        "name": "Angie",
        "emoji": "👧",
        "properties": [
            {
                "name": "cheerful",
                "value": 9
            },
            {
                "name": "adventurous",
                "value": 10
            },
            {
                "name": "imaginative",
                "value": 10
            }
        ]
    },
    /*{
        "name": "Enchanted Animals",
        "emoji": "🦄",
        "properties": [
            {
                "name": "wise",
                "value": 9
            },
            {
                "name": "curious",
                "value": 7
            },
            {
                "name": "mysterious",
                "value": 8
            }
        ]
    },*/
    
    {
        "name": "the Wise Old Owls",
        "emoji": "🦉",
        "properties": [
            {
                "name": "wise",
                "value": 9
            },
            {
                "name": "curious",
                "value": 7
            },
            {
                "name": "mysterious",
                "value": 8
            }
        ]
    },

    
    
    /*,
    {
        "name": "The Fields",
        "emoji": "🌾",
        "properties": [
            {
                "name": "expansive",
                "value": 8
            },
            {
                "name": "peaceful",
                "value": 7
            },
            {
                "name": "vibrant",
                "value": 8
            }
        ]
    }*/
],
  locations: [
    {
        "name": "Fields",
        "emoji": "🌾"
    },
    {
        "name": "Starlit Forests",
        "emoji": "🌲"
    },
    {
        "name": "Clear Streams",
        "emoji": "🏞️"
    },
    {
        "name": "Wise Old Owls' Woods",
        "emoji": "🦉"
    },
    {
        "name": "Distant Mountain Summits",
        "emoji": "⛰️"
    },
    {
        "name": "Hidden Caves",
        "emoji": "🕳️"
    },
    {
        "name": "Breakfast Table",
        "emoji": "🍳"
    },
    {
        "name": "Angie's Bedroom",
        "emoji": "🛏️"
    }
],
  actions: [
    {
        "name": "never slept",
        "source": "Angie",
        "target": "Angie",
        "location": "unknown",
        "passage": "Little Angie never slept at night."
    },
    {
        "name": "worried",
        "source": "Angie's Mom",
        "target": "Angie's Mom",
        "location": "unknown",
        "passage": "Her parents worried."
    },
    {
        "name": "worried",
        "source": "Angie's Dad",
        "target": "Angie's Dad",
        "location": "unknown",
        "passage": "Her parents worried."
    },
    {
        "name": "said",
        "source": "Doctors",
        "target": "Angie's Mom",
        "location": "unknown",
        "passage": "\"Insomnia,\" the doctors said."
    },
    {
        "name": "said",
        "source": "Doctors",
        "target": "Angie's Dad",
        "location": "unknown",
        "passage": "\"Insomnia,\" the doctors said."
    },
    {
        "name": "coloring",
        "source": "Angie",
        "target": "Angie",
        "location": "unknown",
        "passage": "Her days were full of coloring books and earthworms."
    },
    {
        "name": "hum songs",
        "source": "Angie",
        "target": "Angie",
        "location": "unknown",
        "passage": "She’d hum songs to her cat or curl up on her mom’s lap and read fairy stories for hours."
    },
    {
        "name": "curl up",
        "source": "Angie",
        "target": "Angie's Mom",
        "location": "unknown",
        "passage": "She’d hum songs to her cat or curl up on her mom’s lap and read fairy stories for hours."
    },
    {
        "name": "read stories",
        "source": "Angie",
        "target": "Angie",
        "location": "unknown",
        "passage": "She’d hum songs to her cat or curl up on her mom’s lap and read fairy stories for hours."
    },
    {
        "name": "yawn",
        "source": "Angie",
        "target": "Angie",
        "location": "Breakfast Table",
        "passage": "She’d yawn at the breakfast table, and her snoozy eyes would droop while she lay in the field looking at clouds in the late afternoon sun, but she would never sleep."
    },
    {
        "name": "droop",
        "source": "Angie",
        "target": "Angie",
        "location": "Fields",
        "passage": "She’d yawn at the breakfast table, and her snoozy eyes would droop while she lay in the field looking at clouds in the late afternoon sun, but she would never sleep."
    },
    {
        "name": "lay",
        "source": "Angie",
        "target": "Angie",
        "location": "Fields",
        "passage": "She’d yawn at the breakfast table, and her snoozy eyes would droop while she lay in the field looking at clouds in the late afternoon sun, but she would never sleep."
    },
    {
        "name": "said ",
        "source": "Doctors",
        "target": "Angie's Dad",
        "location": "unknown",
        "passage": "\"It is just a phase,\" said the doctors."
    },
    {
        "name": "said ",
        "source": "Doctors",
        "target": "Angie's Mom",
        "location": "unknown",
        "passage": "\"It is just a phase,\" said the doctors."
    },
    {
        "name": "said",
        "source": "Angie's Mom",
        "target": "Doctors",
        "location": "unknown",
        "passage": "\"But she wakes up with leaves in her hair,\" her mother said with a furrowed brow."
    },
    {
        "name": "bemoaned",
        "source": "Angie's Dad",
        "target": "Doctors",
        "location": "unknown",
        "passage": "\"And mud in her sheets,\" her father bemoaned."
    },
    {
        "name": "demand",
        "source": "Angie's Mom",
        "target": "Angie",
        "location": "Angie's Bedroom",
        "passage": "\"Angie, you must not wander at night,\" both parents would demand."
    },
    {
        "name": "demand",
        "source": "Angie's Dad",
        "target": "Angie",
        "location": "Angie's Bedroom",
        "passage": "\"Angie, you must not wander at night,\" both parents would demand."
    },
    {
        "name": "lock door",
        "source": "Angie's Mom",
        "target": "Angie's Door",
        "location": "Angie's Bedroom",
        "passage": "They locked her door and worried."
    },
    {
        "name": "lock door",
        "source": "Angie's Dad",
        "target": "Angie's Door",
        "location": "Angie's Bedroom",
        "passage": "They locked her door and worried."
    },
    {
        "name": "worried ",
        "source": "Angie's Dad",
        "target": "Angie's Dad",
        "location": "Angie's Bedroom",
        "passage": "They locked her door and worried."
    },
    {
        "name": "worried ",
        "source": "Angie's Mom",
        "target": "Angie's Mom",
        "location": "Angie's Bedroom",
        "passage": "They locked her door and worried."
    },
    {
        "name": "loved",
        "source": "Angie",
        "target": "Angie's Mom",
        "location": "unknown",
        "passage": "Angie loved her parents and wanted to be a good girl."
    },
    {
        "name": "take bath",
        "source": "Angie",
        "target": "Angie",
        "location": "unknown",
        "passage": "After Angie took her bath, washed all the dirt off of her scabby knees, and untangled all the straw and twigs from her curly hair, her mom and dad would come into her room, tuck her in, kiss her good night, and remind her to \"stay in bed\" and \"try to sleep."
    },
    {
        "name": "wash knees",
        "source": "Angie",
        "target": "Angie",
        "location": "unknown",
        "passage": "After Angie took her bath, washed all the dirt off of her scabby knees, and untangled all the straw and twigs from her curly hair, her mom and dad would come into her room, tuck her in, kiss her good night, and remind her to \"stay in bed\" and \"try to sleep."
    },
    {
        "name": "untangle hair",
        "source": "Angie",
        "target": "Angie",
        "location": "unknown",
        "passage": "After Angie took her bath, washed all the dirt off of her scabby knees, and untangled all the straw and twigs from her curly hair, her mom and dad would come into her room, tuck her in, kiss her good night, and remind her to \"stay in bed\" and \"try to sleep."
    },
    {
        "name": "tuck in",
        "source": "Angie's Mom",
        "target": "Angie",
        "location": "Angie's Bedroom",
        "passage": "After Angie took her bath, washed all the dirt off of her scabby knees, and untangled all the straw and twigs from her curly hair, her mom and dad would come into her room, tuck her in, kiss her good night, and remind her to \"stay in bed\" and \"try to sleep."
    },
    {
        "name": "tuck in",
        "source": "Angie's Dad",
        "target": "Angie",
        "location": "Angie's Bedroom",
        "passage": "After Angie took her bath, washed all the dirt off of her scabby knees, and untangled all the straw and twigs from her curly hair, her mom and dad would come into her room, tuck her in, kiss her good night, and remind her to \"stay in bed\" and \"try to sleep."
    },
    {
        "name": "kiss good night",
        "source": "Angie's Mom",
        "target": "Angie",
        "location": "Angie's Bedroom",
        "passage": "After Angie took her bath, washed all the dirt off of her scabby knees, and untangled all the straw and twigs from her curly hair, her mom and dad would come into her room, tuck her in, kiss her good night, and remind her to \"stay in bed\" and \"try to sleep."
    },
    {
        "name": "kiss good night",
        "source": "Angie's Dad",
        "target": "Angie",
        "location": "Angie's Bedroom",
        "passage": "After Angie took her bath, washed all the dirt off of her scabby knees, and untangled all the straw and twigs from her curly hair, her mom and dad would come into her room, tuck her in, kiss her good night, and remind her to \"stay in bed\" and \"try to sleep."
    },
    {
        "name": "remind to stay",
        "source": "Angie's Mom",
        "target": "Angie",
        "location": "Angie's Bedroom",
        "passage": "After Angie took her bath, washed all the dirt off of her scabby knees, and untangled all the straw and twigs from her curly hair, her mom and dad would come into her room, tuck her in, kiss her good night, and remind her to \"stay in bed\" and \"try to sleep."
    },
    {
        "name": "remind to stay",
        "source": "Angie's Dad",
        "target": "Angie",
        "location": "Angie's Bedroom",
        "passage": "After Angie took her bath, washed all the dirt off of her scabby knees, and untangled all the straw and twigs from her curly hair, her mom and dad would come into her room, tuck her in, kiss her good night, and remind her to \"stay in bed\" and \"try to sleep."
    },
    {
        "name": "remind to sleep",
        "source": "Angie's Mom",
        "target": "Angie",
        "location": "Angie's Bedroom",
        "passage": "After Angie took her bath, washed all the dirt off of her scabby knees, and untangled all the straw and twigs from her curly hair, her mom and dad would come into her room, tuck her in, kiss her good night, and remind her to \"stay in bed\" and \"try to sleep."
    },
    {
        "name": "remind to sleep",
        "source": "Angie's Dad",
        "target": "Angie",
        "location": "Angie's Bedroom",
        "passage": "After Angie took her bath, washed all the dirt off of her scabby knees, and untangled all the straw and twigs from her curly hair, her mom and dad would come into her room, tuck her in, kiss her good night, and remind her to \"stay in bed\" and \"try to sleep."
    },
    {
        "name": "close door",
        "source": "Angie's Mom",
        "target": "Angie's Door",
        "location": "Angie's Bedroom",
        "passage": "\" Then, as soon as her mom closed her bedroom door with a click, she’d spring to her window and wait for Midnight Lightning to appear."
    },
    {
        "name": "spring to window",
        "source": "Angie",
        "target": "Angie",
        "location": "Angie's Bedroom",
        "passage": "\" Then, as soon as her mom closed her bedroom door with a click, she’d spring to her window and wait for Midnight Lightning to appear."
    },
    {
        "name": "wait for",
        "source": "Angie",
        "target": "Midnight Lightning",
        "location": "Angie's Bedroom",
        "passage": "\" Then, as soon as her mom closed her bedroom door with a click, she’d spring to her window and wait for Midnight Lightning to appear."
    },
    {
        name: "watch approach",
        source: "Angie",
        target: "Midnight Lightning",
        location: "Angie's Bedroom",
        passage: "Angie would gleefully watch him approach from her bedroom window."
    },
    {
        "name": "appear",
        "source": "Midnight Lightning",
        "target": "Angie",
        "location": "unknown",
        "passage": "First, he’d appear as a brilliant, speeding blur on the distant horizon where the forest met the low field."
    },
    {
        "name": "hear gallops",
        "source": "Angie",
        "target": "Midnight Lightning",
        "location": "Angie's Bedroom",
        "passage": "Then, she’d hear the thundering gallops of his hoofs hitting the ground with vibrant force."
    },
    {
        "name": "reflecting",
        "source": "The Moonlight",
        "target": "Midnight Lightning",
        "location": "unknown",
        "passage": "She’d see the moonlight reflecting an iridescent shimmer on his shining black coat."
    },
    {
        "name": "come to window",
        "source": "Midnight Lightning",
        "target": "Angie",
        "location": "Angie's Bedroom",
        "passage": "Every night, he would come to Angie’s window, gently whinnying, calling her to join him on their magical, secret, nightly adventures."
    },
    {
        "name": "whinnying",
        "source": "Midnight Lightning",
        "target": "Angie",
        "location": "Angie's Bedroom",
        "passage": "Every night, he would come to Angie’s window, gently whinnying, calling her to join him on their magical, secret, nightly adventures."
    },
    {
        "name": "calling her",
        "source": "Midnight Lightning",
        "target": "Angie",
        "location": "Angie's Bedroom",
        "passage": "Every night, he would come to Angie’s window, gently whinnying, calling her to join him on their magical, secret, nightly adventures."
    },
    {
        "name": "open window",
        "source": "Angie",
        "target": "Angie",
        "location": "Angie's Bedroom",
        "passage": "She’d open her window."
    },
    {
        "name": "climb down",
        "source": "Angie",
        "target": "Angie",
        "location": "unknown",
        "passage": "Barefoot in her nightgown, she’d climb down the trellis to where he waited, swishing his long, jet-black tail."
    },
    {
        "name": "waited",
        "source": "Midnight Lightning",
        "target": "Midnight Lightning",
        "location": "unknown",
        "passage": "Barefoot in her nightgown, she’d climb down the trellis to where he waited, swishing his long, jet-black tail."
    },
    {
        "name": "swishing tail",
        "source": "Midnight Lightning",
        "target": "Midnight Lightning",
        "location": "unknown",
        "passage": "Barefoot in her nightgown, she’d climb down the trellis to where he waited, swishing his long, jet-black tail."
    },
    {
        "name": "huff joyfully",
        "source": "Midnight Lightning",
        "target": "Midnight Lightning",
        "location": "unknown",
        "passage": "He’d joyfully huff when she joined him, then lower his head and gently rub his velvet-soft muzzle on Angie’s cheek."
    },
    {
        "name": "lower head",
        "source": "Midnight Lightning",
        "target": "Midnight Lightning",
        "location": "unknown",
        "passage": "He’d joyfully huff when she joined him, then lower his head and gently rub his velvet-soft muzzle on Angie’s cheek."
    },
    {
        "name": "rub muzzle",
        "source": "Midnight Lightning",
        "target": "Angie",
        "location": "unknown",
        "passage": "He’d joyfully huff when she joined him, then lower his head and gently rub his velvet-soft muzzle on Angie’s cheek."
    },
    {
        "name": "take breath",
        "source": "Angie",
        "target": "Angie",
        "location": "unknown",
        "passage": "She’d take in a deep breath of his good, pure horsey scent and kiss his nose."
    },
    {
        "name": "kiss nose",
        "source": "Angie",
        "target": "Midnight Lightning",
        "location": "unknown",
        "passage": "She’d take in a deep breath of his good, pure horsey scent and kiss his nose."
    },
    {
        "name": "climb up",
        "source": "Angie",
        "target": "Angie",
        "location": "unknown",
        "passage": "Then, she’d climb up on the haystack (which she kept under her window for this exact purpose) and throw a leg over Midnight Lightning’s tall back."
    },
    {
        "name": "throw leg",
        "source": "Angie",
        "target": "Midnight Lightning",
        "location": "unknown",
        "passage": "Then, she’d climb up on the haystack (which she kept under her window for this exact purpose) and throw a leg over Midnight Lightning’s tall back."
    },
    {
        "name": "link fingers",
        "source": "Angie",
        "target": "Midnight Lightning",
        "location": "unknown",
        "passage": "She’d link her fingers through his strong, silky mane."
    },
    {
        "name": "take off",
        "source": "Midnight Lightning",
        "target": "Midnight Lightning",
        "location": "unknown",
        "passage": "He’d take off with a wild gallop, and she’d fluidly follow his every movement."
    },
    {
        "name": "follow movement",
        "source": "Angie",
        "target": "Midnight Lightning",
        "location": "unknown",
        "passage": "He’d take off with a wild gallop, and she’d fluidly follow his every movement."
    },
    {
        "name": "racing",
        "source": "Angie",
        "target": "Midnight Lightning",
        "location": "Fields",
        "passage": "Soon, they’d be racing through the fields, watching as fireflies sprung up all around them, dancing alongside them in the moonlight."
    },
    {
        "name": "watching",
        "source": "Angie",
        "target": "Angie",
        "location": "Fields",
        "passage": "Soon, they’d be racing through the fields, watching as fireflies sprung up all around them, dancing alongside them in the moonlight."
    },
    {
        "name": "springing up",
        "source": "The Fields",
        "target": "The Fields",
        "location": "Fields",
        "passage": "Soon, they’d be racing through the fields, watching as fireflies sprung up all around them, dancing alongside them in the moonlight."
    },
    {
        "name": "dancing",
        "source": "The Fields",
        "target": "The Fields",
        "location": "Fields",
        "passage": "Soon, they’d be racing through the fields, watching as fireflies sprung up all around them, dancing alongside them in the moonlight."
    },
    {
        "name": "stride through",
        "source": "Angie",
        "target": "Angie",
        "location": "Starlit Forests",
        "passage": "They’d stride through starlit forests, listening to the cicadas and crickets sing and would join in their song."
    },
    {
        "name": "stride through",
        "source": "Midnight Lightning",
        "target": "Midgnight Lightning",
        "location": "Starlit Forests",
        "passage": "They’d stride through starlit forests, listening to the cicadas and crickets sing and would join in their song."
    },
    {
        "name": "listening",
        "source": "Angie",
        "target": "Angie",
        "location": "Starlit Forests",
        "passage": "They’d stride through starlit forests, listening to the cicadas and crickets sing and would join in their song."
    },
    {
        "name": "listening",
        "source": "Midnight Lightning",
        "target": "Midnight Lightning",
        "location": "Starlit Forests",
        "passage": "They’d stride through starlit forests, listening to the cicadas and crickets sing and would join in their song."
    },
    {
        "name": "splash through",
        "source": "Angie",
        "target": "Angie",
        "location": "Clear Streams",
        "passage": "They’d splash through clear streams, relishing the bright, cool of the mountain-fed waters."
    },
    {
        "name": "splash through",
        "source": "Midnight Lightning",
        "target": "Midnight Lightning",
        "location": "Clear Streams",
        "passage": "They’d splash through clear streams, relishing the bright, cool of the mountain-fed waters."
    },
    {
        "name": "relish",
        "source": "Angie",
        "target": "Angie",
        "location": "Clear Streams",
        "passage": "They’d splash through clear streams, relishing the bright, cool of the mountain-fed waters."
    },
    {
        "name": "relish",
        "source": "Midnight Lightning",
        "target": "Midnight Lightning",
        "location": "Clear Streams",
        "passage": "They’d splash through clear streams, relishing the bright, cool of the mountain-fed waters."
    },
    {
        "name": "visit",
        "source": "Angie",
        "target": "the Wise Old Owls",
        "location": "Wise Old Owls' Woods",
        "passage": "Sometimes they’d visit the wise old owls of the woods."
    },
    {
        "name": "visit",
        "source": "Midnight Lightning",
        "target": "the Wise Old Owls",
        "location": "Wise Old Owls' Woods",
        "passage": "Sometimes they’d visit the wise old owls of the woods."
    },
    {
        "name": "ask",
        "source": "the Wise Old Owls",
        "target": "Angie",
        "location": "Wise Old Owls' Woods",
        "passage": "\"Too-who?\" the owls would ask, turning their large eyes to gaze at the pair."
    },
    {
        "name": "ask",
        "source": "the Wise Old Owls",
        "target": "Midnight Lightning",
        "location": "Wise Old Owls' Woods",
        "passage": "\"Too-who?\" the owls would ask, turning their large eyes to gaze at the pair."
    },
    {
        "name": "gaze",
        "source": "the Wise Old Owls",
        "target": "Angie",
        "location": "Wise Old Owls' Woods",
        "passage": "\"Too-who?\" the owls would ask, turning their large eyes to gaze at the pair."
    },
    {
        "name": "gaze",
        "source": "the Wise Old Owls",
        "target": "Midnight Lightning",
        "location": "Wise Old Owls' Woods",
        "passage": "\"Too-who?\" the owls would ask, turning their large eyes to gaze at the pair."
    },
    {
        "name": "neighed response",
        "source": "Midnight Lightning",
        "target": "The Wise Old Owls",
        "location": "Wise Old Owls' Woods",
        "passage": "Midnight Lightning neighed a response that only he and the other enchanted animals could understand."
    },
    {
        "name": "dash",
        "source": "Angie",
        "target": "Angie",
        "location": "Distant Mountain Summits",
        "passage": "Sometimes, they’d dash to the summits of distant mountains, looking down on the moonlit vista of the villages beneath them."
    },
    {
        "name": "dash",
        "source": "Midnight Lightning",
        "target": "Midnight Lightning",
        "location": "Distant Mountain Summits",
        "passage": "Sometimes, they’d dash to the summits of distant mountains, looking down on the moonlit vista of the villages beneath them."
    },
    {
        "name": "point",
        "source": "Angie",
        "target": "Angie",
        "location": "Distant Mountain Summits",
        "passage": "Sometimes, they’d dash to the summits of distant mountains, looking down on the moonlit vista of the villages beneath them."
    },
    {
        "name": "explore caves",
        "source": "Angie",
        "target": "Angie",
        "location": "Hidden Caves",
        "passage": "Sometimes, they’d explore hidden caves, luminous with glowworms."
    },
    {
        "name": "explore caves",
        "source": "Midnight Lightning",
        "target": "Midnight Lightning",
        "location": "Hidden Caves",
        "passage": "Sometimes, they’d explore hidden caves, luminous with glowworms."
    },
    {
        "name": "trot",
        "source": "Midnight Lightning",
        "target": "Midnight Lightning",
        "location": "Hidden Caves",
        "passage": "They’d trot through the dark caverns and admire the crystals that shone brilliantly in the bioluminescent light."
    },
    {
        "name": "admire",
        "source": "Angie",
        "target": "Angie",
        "location": "Hidden Caves",
        "passage": "They’d trot through the dark caverns and admire the crystals that shone brilliantly in the bioluminescent light."
    },
    {
        "name": "admire",
        "source": "Midnight Lightning",
        "target": "Midnight Lightning",
        "location": "Hidden Caves",
        "passage": "They’d trot through the dark caverns and admire the crystals that shone brilliantly in the bioluminescent light."
    },
    {
        "name": "return Angie",
        "source": "Midnight Lightning",
        "target": "Angie",
        "location": "Angie's Bedroom",
        "passage": "When the first hint of dawn began to break in the east, Midnight Lightning would return Angie to her bedroom window."
    },
    {
        "name": "unlace fingers",
        "source": "Angie",
        "target": "Midnight Lightning",
        "location": "Angie's Bedroom",
        "passage": "She’d unlace her fingers from his mane and slide off his strong back."
    },
    {
        "name": "slide off",
        "source": "Angie",
        "target": "Midnight Lightning",
        "location": "Angie's Bedroom",
        "passage": "She’d unlace her fingers from his mane and slide off his strong back."
    },
    {
        "name": "kiss",
        "source": "Angie",
        "target": "Midnight Lightning",
        "location": "Angie's Bedroom",
        "passage": "She’d kiss his downy nose."
    },
    {
        "name": "climb back",
        "source": "Angie",
        "target": "Angie",
        "location": "Angie's Bedroom",
        "passage": "With windblown hair and muddy toes, she’d climb back into her bedroom."
    },
    {
        "name": "slip under",
        "source": "Angie",
        "target": "Angie",
        "location": "Angie's Bedroom",
        "passage": "Smiling, she’d slip under her covers and close her eyes as she listened to Midnight Lightning galloping away while the first gleams of morning light shone through her window."
    },
    {
        "name": "close eyes",
        "source": "Angie",
        "target": "Angie",
        "location": "Angie's Bedroom",
        "passage": "Smiling, she’d slip under her covers and close her eyes as she listened to Midnight Lightning galloping away while the first gleams of morning light shone through her window."
    },
    {
        "name": "listen to",
        "source": "Angie",
        "target": "Midnight Lightning",
        "location": "Angie's Bedroom",
        "passage": "Smiling, she’d slip under her covers and close her eyes as she listened to Midnight Lightning galloping away while the first gleams of morning light shone through her window."
    }
]
};