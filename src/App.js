import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties

  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  
  // const myquestions = () => {
  //   fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=boolean')
  //   .then(res => res.json())
  //   .then(res => setQues(res.results))
  // }



  const results = [
    {
    "category": "Entertainment: Books",
    "type": "multiple",
    "difficulty": "medium",
    "question": "In the Lord of the Rings, who is the father of the dwarf Gimli?",
    options: [
      { id: 0, text:  "Gloin", isCorrect: true},
      { id: 1, text:  "Thorin Oakenshield",isCorrect: false },
      { id: 2, text: "William Faulkner",isCorrect: false },
      { id: 3, text:   "Bombur", isCorrect:false },
    ],
    },
    {
    "category": "Entertainment: Books",
    "type": "multiple",
    "difficulty": "medium",
    "question": "By what name was the author Eric Blair better known?",
    options: [
      { id: 0, text:   "Ernest Hemingway", isCorrect: false },
      { id: 1, text:  "Aldous Huxley",isCorrect: false },
      { id: 2, text : "George Orwell" ,isCorrect: true},
      { id: 3, text:  "John Steinbeck", isCorrect: false},
    ],
    },
    {
    "category": "Entertainment: Books",
    "type": "multiple",
    "difficulty": "medium",
    "question": "In the &quot;The Hobbit&quot;, who kills Smaug?",
    options: [
      { id: 0, text: "Bard", isCorrect: true },
      { id: 1, text: "Ernest Hemingway",isCorrect: false },
      { id: 2, text:    "Bilbo Baggins",isCorrect: false },
      { id: 3, text: "Gandalf the Grey",isCorrect: false},
    ],
    },
    {
    "category": "Entertainment: Books",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Which American author was also a budding travel writer and wrote of his adventures with his dog Charley?",
  
    options: [
      { id: 0, text:  "F. Scott Fitzgerald", isCorrect: false },
      { id: 1, text: "Ernest Hemingway",isCorrect: false },
      { id: 2, text: "William Faulkner",isCorrect: false },
      { id: 3, text:  "John Steinbeck", isCorrect: true },
    ],
    },
    {
    "category": "Entertainment: Books",
    "type": "multiple",
    "difficulty": "medium",
    "question": "According to The Hitchhiker&#039;s Guide to the Galaxy book, the answer to life, the universe and everything else is...",

    options: [
      { id: 0, text:  "F. Scott Fitzgerald", isCorrect: false },
      { id: 1, text: "Ernest Hemingway",isCorrect: false },
      { id: 2, text: "William Faulkner",isCorrect: false },
      { id: 3, text:  "John Steinbeck", isCorrect: true },
    ],
    },
    {
    "category": "Entertainment: Books",
    "type": "multiple",
    "difficulty": "medium",
    "question": "In Michael Crichton&#039;s novel &quot;Jurassic Park&quot;, John Hammond meets his demise at the claws of which dinosaur?",
 
    options: [
      { id: 0, text:  "F. Scott Fitzgerald", isCorrect: false },
      { id: 1, text: "Ernest Hemingway",isCorrect: false },
      { id: 2, text: "William Faulkner",isCorrect: false },
      { id: 3, text:  "John Steinbeck", isCorrect: true },
    ],
    },
    {
    "category": "Entertainment: Books",
    "type": "multiple",
    "difficulty": "medium",
    "question": "In the &quot;Harry Potter&quot; novels, what must a Hogwarts student do to enter the Ravenclaw Common Room?",
    options: [
      { id: 0, text:  "Answer a riddle",isCorrect: true },
      { id: 1, text:    "Rhythmically tap barrels with a wand" ,isCorrect: false },
      { id: 2, text:    "Speak a password",isCorrect: false },
      { id: 3, text:    "Knock in sequence", isCorrect: false},
    ],
    },
    {
    "category": "Entertainment: Books",
    "type": "multiple",
    "difficulty": "medium",
    "question": "In &quot;Little Women&quot;, which of the March sisters married Laurie?",
    options: [
      { id: 0, text:      "Beth",isCorrect: false },
      { id: 1, text: "Jo",isCorrect: false },
      { id: 2, text:   "Meg" , isCorrect: false },
      { id: 3, text:   "Amy", isCorrect: true },
    ],
    },
    {
    "category": "Entertainment: Books",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Which Russian author wrote the epic novel War and Peace?",
    options: [
      { id: 0, text:  "Leo Tolstoy",isCorrect: true },
      { id: 1, text: "Ernest Hemingway",isCorrect: false },
      { id: 2, text:
      "Alexander Pushkin",isCorrect: false },
      { id: 3, text:    "Vladimir Nabokov", isCorrect: false},
    ],
    },
    {
    "category": "Entertainment: Books",
    "type": "multiple",
    "difficulty": "medium",
    "question": "In Romance of the Three Kingdoms, who was not a member of the Peach Garden Oath?",
    options: [
      { id: 0, text:    "Liu Bei",     isCorrect: false },
      { id: 1, text:  "Zhao Yun",isCorrect: false },
      { id: 2, text: "Guan Yu",isCorrect: false },
      { id: 3, text:   "Zhang Fei", isCorrect: true },
    ],
    }
    ]



  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }


    // --------------- In case questions completed and show results then ------------------

    if (currentQuestion + 1 < results.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /*----------------- Resets the game back to default -----------------------*/
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>Saylani Mass IT Program</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>

            {/* ---------------- Result with % ----------- */}
            {score} out of {results.length} correct - (

          {(score / results.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {results.length}
          </h2>

          {/* ----------------- Question ------------------- */}
          
          <h3 className="question-text">{results[currentQuestion].question}</h3>

          {/* List of possible answers  */}
          <ul>
            {results[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;