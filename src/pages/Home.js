import React, { useState } from 'react';
import { WordsForm } from '../components/WordsForm/WordsForm';
import WordList from '../components/WordList/WordList';
import Filter from '../components/Filter/Filter';
// import { useLocalStorage } from 'hooks/useLocalStorage';

const Home = ({ words, setWords }) => {
  const [filter, setFilter] = useState('');
  // const [words, setWords] = useLocalStorage('words', []);

  const addWord = word => setWords(prevState => [...prevState, word]);

  const deleteWord = wordId => {
    setWords(prevState => prevState.filter(word => word.id !== wordId));
  };
  const editeWord = updatedWord => {
    // console.log(updatedWord);
    setWords(prevState =>
      prevState.map(word => {
        if (word.id === updatedWord.id) {
          return updatedWord;
        }
        return word;
      })
    );
  };
  // pattern gart
  const checkWord = wordId => {
    console.log(wordId);
    return setWords(prevState =>
      prevState.map(word => {
        if (word.id === wordId) {
          return { ...word, isChecked: !word.isChecked };
        }
        return word;
      })
    );
  };

  const filterWord = e => {
    setFilter(e.target.value);
  };

  const handleFilteredWords = () => {
    const normolizedWorld = filter.toLowerCase().trim();

    return words.filter(word => {
      return word.ukrWord.toLowerCase().trim().includes(normolizedWorld) || word.enWord.toLowerCase().trim().includes(normolizedWorld);
    });
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <WordsForm
            addWord={addWord}
            // existedWord={this.existedWord}
          />
          <Filter handleChange={filterWord} value={filter} />
        </div>
        <WordList words={handleFilteredWords()} deleteWord={deleteWord} editeWord={editeWord} checkWord={checkWord} />
      </div>
    </div>
  );
};

export default Home;
