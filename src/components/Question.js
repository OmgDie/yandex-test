import React, { useState } from 'react';

const Question = ({ question, correctAnswer }) => {
    const [userAnswer, setUserAnswer] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
  
    const checkAnswer = () => {
      const formattedUserAnswer = userAnswer.toLowerCase();
      const formattedCorrectAnswer = correctAnswer.toLowerCase();
      setIsCorrect(formattedUserAnswer === formattedCorrectAnswer);
    };
  
    return (
      <div className='question'>
        <p>{question}</p>
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
        <button onClick={checkAnswer}>Проверить ответ</button>
        {isCorrect ? (
          <p>Ответ правильный, молодец!</p>
        ) : (
          <p>Подумай еще!</p>
        )}
      </div>
    );
  };
  

export default Question;
