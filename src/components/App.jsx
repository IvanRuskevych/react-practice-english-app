import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router';

import Navigation from './Navigation/Navigation';
import Home from 'pages/Home';
import { Quiz } from 'pages/Quiz';
import { useDispatch } from 'react-redux';
import { fetchAll } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
