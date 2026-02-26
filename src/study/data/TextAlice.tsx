import { Action, Entity, Location } from "../../model/schemas";


export const textAlice = `Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, “and what is the use of a book,” thought Alice “without pictures or conversations?”

So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.

There was nothing so _very_ remarkable in that; nor did Alice think it so _very_ much out of the way to hear the Rabbit say to itself, “Oh dear! Oh dear! I shall be late!” (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually _took a watch out of its waistcoat-pocket_, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after it, and fortunately was just in time to see it pop down a large rabbit-hole under the hedge.
\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`;


export const dataTextAlice : {locations: Location[], entities: Entity[],     actions: Action[]} = {
    entities: [
        {
            "name": "Alice",
            "emoji": "👧",
            "properties": [
                {
                    "name": "curious",
                    "value": 8
                },
                {
                    "name": "sleepy",
                    "value": 6
                },
                {
                    "name": "bored",
                    "value": 7
                }
            ]
        },
        {
            "name": "Sister",
            "emoji": "👩",
            "properties": [
                {
                    "name": "reading",
                    "value": 7
                }
            ]
        },
        {
            "name": "Book",
            "emoji": "📖",
            "properties": [
                {
                    "name": "pictureless",
                    "value": 10
                },
                {
                    "name": "conversationless",
                    "value": 10
                }
            ]
        },
        {
            "name": "Daisy-chain",
            "emoji": "🌼",
            "properties": [
                {
                    "name": "pleasurable",
                    "value": 5
                }
            ]
        },
        {
            "name": "White Rabbit",
            "emoji": "🐇",
            "properties": [
                {
                    "name": "anxious",
                    "value": 9
                },
                {
                    "name": "remarkable",
                    "value": 7
                }
            ]
        },
        {
            "name": "Watch",
            "emoji": "⌚",
            "properties": [
                {
                    "name": "unusual",
                    "value": 8
                }
            ]
        },
        {
            "name": "Rabbit-hole",
            "emoji": "🕳️",
            "properties": [
                {
                    "name": "large",
                    "value": 7
                }
            ]
        }
    ],
    locations: [
        {
            "name": "bank",
            "emoji": "🏞️"
        },
        {
            "name": "field",
            "emoji": "🌾"
        },
        {
            "name": "hedge",
            "emoji": "🌳"
        }
    ],
    actions: [
        {
            "name": "sit by",
            "source": "Alice",
            "target": "Sister",
            "location": "bank",
            "passage": "Alice was beginning to get very tired of sitting by her sister on the bank."
        },
        {
            "name": "peep into",
            "source": "Alice",
            "target": "Book",
            "location": "bank",
            "passage": "once or twice she had peeped into the book her sister was reading."
        },
        {
            "name": "consider making",
            "source": "Alice",
            "target": "Daisy-chain",
            "location": "bank",
            "passage": "she was considering in her own mind... whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies."
        },
        {
            "name": "run by",
            "source": "White Rabbit",
            "target": "Alice",
            "location": "bank",
            "passage": "when suddenly a White Rabbit with pink eyes ran close by her."
        },
        {
            "name": "say to",
            "source": "White Rabbit",
            "target": "itself",
            "location": "unknown",
            "passage": "nor did Alice think it so very much out of the way to hear the Rabbit say to itself, 'Oh dear! Oh dear! I shall be late!'."
        },
        {
            "name": "take out",
            "source": "White Rabbit",
            "target": "Watch",
            "location": "unknown",
            "passage": "but when the Rabbit actually took a watch out of its waistcoat-pocket."
        },
        {
            "name": "look at",
            "source": "White Rabbit",
            "target": "Watch",
            "location": "unknown",
            "passage": "and looked at it."
        },
        {
            "name": "hurry on",
            "source": "White Rabbit",
            "target": "unknown",
            "location": "unknown",
            "passage": "and then hurried on."
        },
        {
            "name": "run after",
            "source": "Alice",
            "target": "White Rabbit",
            "location": "field",
            "passage": "burning with curiosity, she ran across the field after it."
        },
        {
            "name": "pop down",
            "source": "White Rabbit",
            "target": "Rabbit-hole",
            "location": "hedge",
            "passage": "and fortunately was just in time to see it pop down a large rabbit-hole under the hedge."
        }
    ]
};