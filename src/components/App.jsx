import React, { useState } from 'react';
import Navigation from './Navigation/Navigation';
import { WordsForm } from './WordsForm/WordsForm';
import WordList from './WordList/WordList';
import Filter from './Filter/Filter';
import { useLocalStorage } from 'hooks/useLocalStorage';
// import messageInfo from './Notify/Notify';

// import wordsDictionary from '../data/dictionary.json';

export const App = () => {
  // === before useLocalStorage =======
  // const [words, setWords] = useState([]);
  const [filter, setFilter] = useState('');

  // === after with useLocalStorage =======
  const [words, setWords] = useLocalStorage('words', []);

  // це приклад для filter як hook useLocalStorage перевикористовується
  // ПИСАТИ HOOKS ЯКІ НЕ ПЕРЕВИКОРИСТОВУЮТЬСЯ НЕДОЦІЛЬНО - ЦЕ ТРАТА ЧАСУ !!!
  // const [filter, setFilter] = useLocalStorage('filter', '');

  const addWord = word => setWords(prevState => [...prevState, word]);
  const deleteWord = wordId => {
    setWords(prevState => prevState.filter(word => word.id !== wordId));
  };
  const editeWord = updatedWord => {
    console.log(updatedWord);
    setWords(prevState =>
      prevState.map(word => {
        if (word.id === updatedWord.id) {
          return updatedWord;
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
      <Navigation />
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <WordsForm
            addWord={addWord}
            // existedWord={this.existedWord}
          />
          <Filter handleChange={filterWord} value={filter} />
        </div>
        <WordList words={handleFilteredWords()} deleteWord={deleteWord} editeWord={editeWord} />
      </div>
    </div>
  );
};

// ============== BEFORE ===========================
// export class App extends Component {
//   state = {
//     words,
//     filter: '',
//   };

//   addWord = word => {
//     // console.log('addWord', word);

//     if (this.existedWord(word)) {
//       return messageInfo('Введене слово вже існує у довіднику');
//     }

//     this.setState(prevState => {
//       return {
//         words: [...prevState.words, word],
//       };
//     });
//   };

//   existedWord = word => {
//     return this.state.words.find(el => {
//       return el.ukrWord === word.ukrWord || el.enWord === word.enWord;
//     });
//   };

//   deleteWord = id => {
//     this.setState(prevState => {
//       return { words: prevState.words.filter(word => word.id !== id) };
//     });
//   };

//   filterWord = e => {
//     this.setState({
//       filter: e.currentTarget.value,
//     });
//   };

//   handleFilteredWords = () => {
//     const normolizedWorld = this.state.filter.toLowerCase().trim();

//     return this.state.words.filter(word => {
//       return (
//         word.ukrWord.toLowerCase().trim().includes(normolizedWorld) ||
//         word.enWord.toLowerCase().trim().includes(normolizedWorld)
//       );
//     });
//   };

//   render() {
//     const filteredWords = this.handleFilteredWords();

//     return (
//       <div>
//         <Navigation />
//         <div style={{ display: 'flex', justifyContent: 'space-around' }}>
//           <div>
//             <WordsForm addWord={this.addWord} existedWord={this.existedWord} />
//             <Filter handleChange={this.filterWord} value={this.state.filter} />
//           </div>
//           <WordList words={filteredWords} deleteWord={this.deleteWord} />
//         </div>
//       </div>
//     );
//   }
// }
