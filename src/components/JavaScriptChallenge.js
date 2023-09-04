import React from 'react';
import Question from './Question';

const JavaScriptChallenge = () => {
  return (
    <div className='challenge'>
      <h1>JavaScript Challenge</h1>
      <Question question="Как называется популярный язык программирования, используемый для веб-разработки?" correctAnswer="JavaScript" />
      <Question question="Что такое язык разметки гипертекстовых документов?" correctAnswer="Html" />
      <Question question="С помощью чего можно стилизовать приложение в JavaScript" correctAnswer="Css" />
    </div>
  );
};

export default JavaScriptChallenge;
