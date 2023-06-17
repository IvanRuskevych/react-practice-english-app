import React from 'react';
import { WordsForm } from '../components/WordsForm/WordsForm';
import WordList from '../components/WordList/WordList';
import Filter from '../components/Filter/Filter';
// import { useLocalStorage } from 'hooks/useLocalStorage';

const Home = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <WordsForm />
          <Filter />
        </div>
        <WordList />
      </div>
    </div>
  );
};

export default Home;
