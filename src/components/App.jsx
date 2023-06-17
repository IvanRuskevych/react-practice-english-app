import React from 'react';
import { Route, Routes } from 'react-router';

import { useLocalStorage } from 'hooks/useLocalStorage';

import Navigation from './Navigation/Navigation';
import Home from 'pages/Home';
import { Quiz } from 'pages/Quiz';

export const App = () => {
  const [words, setWords] = useLocalStorage('words', []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home words={words} setWords={setWords} />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
