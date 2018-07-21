const mongoose = require("mongoose");
const db = require("../models/Quizes");
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/quizesdb"
);

const quizSeed = [
    {
        "quizTitle": "Word Quiz",
        "author": "Unknown",
        "q1": {
            "question": "1. When you’re capernoited, what are you?",
            "answers": {
                "answer1": {
                    "answer": "Slighty afraid",
                    "correct": "false"
                },
                "answer2": {
                    "answer": "Slightly drunk",
                    "correct": "true"
                },
                "answer3": {
                    "answer": "Slightly embarrassed",
                    "correct": "false"
                },
                "answer4": {
                    "answer": "Slightly out of tune",
                    "correct": "false"
                }
            }
        },
        "q2": {
            "question": "2. Cleromancy is divination involving what?",
            "answers": {
                "answer1": {
                    "answer": "Dice",
                    "correct": "true"
                },
                "answer2": {
                    "answer": "Glass",
                    "correct": "false"
                },
                "answer3": {
                    "answer": "Twigs",
                    "correct": "false"
                },
                "answer4": {
                    "answer": "Ink",
                    "correct": "false"
                }
            }
        },
        "q3": {
            "question": "3. What does a nuxodeltiologist prefer postcard scenes of?",
            "answers": {
                "answer1": {
                    "answer": "The road",
                    "correct": "false"
                },
                "answer2": {
                    "answer": "The trees",
                    "correct": "false"
                },
                "answer3": {
                    "answer": "The ocean",
                    "correct": "false"
                },
                "answer4": {
                    "answer": "The night",
                    "correct": "true"
                }
            }
        }
    },
    {
        "quizTitle": "Christmas movie trivia",
        "author": "Unknown",
        "q1": {
            "question": "1. In the 1995 movie, Babe, what was the first name of the farmer, who was Babe’s owner?",
            "answers": {
                "answer1": {
                    "answer": " Bentley",
                    "correct": "false"
                },
                "answer2": {
                    "answer": "Richard",
                    "correct": "false"
                },
                "answer3": {
                    "answer": "Samuel",
                    "correct": "false"
                },
                "answer4": {
                    "answer": "Arthur",
                    "correct": "true"
                }
            }
        },
        "q2": {
            "question": "2. Bill Murray had the fortune of acting with his three brothers in the movie Scrooged. Which of the following was not his brother?",
            "answers": {
                "answer1": {
                    "answer": "Brian-Doyle Murray",
                    "correct": "false"
                },
                "answer2": {
                    "answer": "Joel Murray",
                    "correct": "false"
                },
                "answer3": {
                    "answer": "David Murray",
                    "correct": "true"
                },
                "answer4": {
                    "answer": "John Murray",
                    "correct": "false"
                }
            }
        },
        "q3": {
            "question": "3. In The Muppet Christmas Carol, which character sang the song ‘Chairman of the Board’?",
            "answers": {
                "answer1": {
                    "answer": "Lew Zealand",
                    "correct": "false"
                },
                "answer2": {
                    "answer": "Dr Bunsen Honeydew",
                    "correct": "false"
                },
                "answer3": {
                    "answer": "Sam the Eagle",
                    "correct": "true"
                },
                "answer4": {
                    "answer": "Rizzo the Rat",
                    "correct": "false"
                }
            }
        }
    }
]
db
  .remove({})
  .then(() => db.collection.insertMany(quizSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });