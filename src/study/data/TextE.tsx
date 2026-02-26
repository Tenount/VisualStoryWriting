import { Action, Entity, Location } from "../../model/schemas";


export const textE = `Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, “and what is the use of a book,” thought Alice “without pictures or conversations?”

So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.

There was nothing so _very_ remarkable in that; nor did Alice think it so _very_ much out of the way to hear the Rabbit say to itself, “Oh dear! Oh dear! I shall be late!” (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually _took a watch out of its waistcoat-pocket_, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after it, and fortunately was just in time to see it pop down a large rabbit-hole under the hedge.`


export const dataTextE : {locations: Location[], entities: Entity[],     actions: Action[]} = {
  entities: [
      {
          "name": "Alice",
          "emoji": "👧",
          "properties": [
              {
                  "name": "curious",
                  "value": 9
              },
              {
                  "name": "sleepy",
                  "value": 6
              },
              {
                  "name": "imaginative",
                  "value": 8
              }
          ]
      },
      {
          "name": "Sister",
          "emoji": "👩",
          "properties": [
              {
                  "name": "focused",
                  "value": 7
              },
              {
                  "name": "quiet",
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
                  "value": 8
              },
              {
                  "name": "punctual",
                  "value": 7
              },
              {
                  "name": "unusual",
                  "value": 9
              }
          ]
      },
      {
          "name": "Book",
          "emoji": "📖",
          "properties": [
              {
                  "name": "boring",
                  "value": 8
              },
              {
                  "name": "plain",
                  "value": 7
              }
          ]
      }
  ],
  locations: [
      {
          "name": "The Bank",
          "emoji": "🏞️"
      },
      {
          "name": "The Field",
          "emoji": "🌾"
      },
      {
          "name": "The Rabbit Hole",
          "emoji": "🕳️"
      }
  ],
  actions: [
          {
              "name": "sitting by",
              "source": "Alice",
              "target": "Sister",
              "location": "The Bank",
              "passage": "Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, “and what is the use of a book,” thought Alice “without pictures or conversations?"
          },
          {
              "name": "peeped into",
              "source": "Alice",
              "target": "Book",
              "location": "The Bank",
              "passage": "Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, “and what is the use of a book,” thought Alice “without pictures or conversations?"
          },
          {
              "name": "considering",
              "source": "Alice",
              "target": "Alice",
              "location": "The Bank",
              "passage": "”\n\nSo she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her."
          },
          {
              "name": "ran close",
              "source": "White Rabbit",
              "target": "Alice",
              "location": "The Bank",
              "passage": "”\n\nSo she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her."
          },
          {
              "name": "say to itself",
              "source": "White Rabbit",
              "target": "White Rabbit",
              "location": "unknown",
              "passage": "There was nothing so _very_ remarkable in that; nor did Alice think it so _very_ much out of the way to hear the Rabbit say to itself, “Oh dear! Oh dear! I shall be late!"
          },
          {
              "name": "took watch",
              "source": "White Rabbit",
              "target": "White Rabbit",
              "location": "unknown",
              "passage": "” (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually _took a watch out of its waistcoat-pocket_, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after it, and fortunately was just in time to see it pop down a large rabbit-hole under the hedge."
          },
          {
              "name": "looked at watch",
              "source": "White Rabbit",
              "target": "White Rabbit",
              "location": "unknown",
              "passage": "” (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually _took a watch out of its waistcoat-pocket_, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after it, and fortunately was just in time to see it pop down a large rabbit-hole under the hedge."
          },
          {
              "name": "hurried on",
              "source": "White Rabbit",
              "target": "White Rabbit",
              "location": "unknown",
              "passage": "” (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually _took a watch out of its waistcoat-pocket_, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after it, and fortunately was just in time to see it pop down a large rabbit-hole under the hedge."
          },
          {
              "name": "started to feet",
              "source": "Alice",
              "target": "Alice",
              "location": "The Field",
              "passage": "” (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually _took a watch out of its waistcoat-pocket_, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after it, and fortunately was just in time to see it pop down a large rabbit-hole under the hedge."
          },
          {
              "name": "ran across field",
              "source": "Alice",
              "target": "White Rabbit",
              "location": "The Field",
              "passage": "” (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually _took a watch out of its waistcoat-pocket_, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after it, and fortunately was just in time to see it pop down a large rabbit-hole under the hedge."
          },
          {
              "name": "popped down",
              "source": "White Rabbit",
              "target": "White Rabbit",
              "location": "The Rabbit Hole",
              "passage": "” (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually _took a watch out of its waistcoat-pocket_, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after it, and fortunately was just in time to see it pop down a large rabbit-hole under the hedge."
          }
  ]
};