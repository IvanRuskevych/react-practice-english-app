import React, { Component } from 'react';
import Navigation from './Navigation/Navigation';
import WordsForm from './WordsForm/WordsForm';
import WordList from './WordList/WordList';
import Filter from './Filter/Filter';
import messageInfo from './Notify/Notify';

// import words from './data/dictionry.json';

export class App extends Component {
  state = {
    // words,
    words: [
      {
        id: 1,
        enWord: 'the',
        ukrWord: 'артикль',
        isChecked: false,
      },
      {
        id: 2,
        enWord: 'be',
        ukrWord: 'бути',
        isChecked: false,
      },
      {
        id: 3,
        enWord: 'and',
        ukrWord: 'і',
        isChecked: false,
      },
      {
        id: 4,
        enWord: 'of',
        ukrWord: 'з/від/об',
        isChecked: false,
      },
      {
        id: 5,
        enWord: 'a',
        ukrWord: 'артикль',
        isChecked: false,
      },
      {
        id: 6,
        enWord: 'in',
        ukrWord: 'в',
        isChecked: false,
      },
      {
        id: 7,
        enWord: 'to',
        ukrWord: 'частка перед дієсловом',
        isChecked: false,
      },
      {
        id: 8,
        enWord: 'have',
        ukrWord: 'мати',
        isChecked: false,
      },
      {
        id: 9,
        enWord: 'to',
        ukrWord: 'щоб',
        isChecked: false,
      },
      {
        id: 10,
        enWord: 'it',
        ukrWord: 'це',
        isChecked: false,
      },
    ],
    filter: '',
  };

  addWord = word => {
    // console.log('addWord', word);

    if (this.existedWord(word)) {
      return messageInfo('Введене слово вже існує у довіднику');
    }

    this.setState(prevState => {
      return {
        words: [...prevState.words, word],
      };
    });
  };

  existedWord = word => {
    return this.state.words.find(el => {
      return el.ukrWord === word.ukrWord || el.enWord === word.enWord;
    });
  };

  deleteWord = id => {
    this.setState(prevState => {
      return { words: prevState.words.filter(word => word.id !== id) };
    });
  };

  filterWord = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  handleFilteredWords = () => {
    const normolizedWorld = this.state.filter.toLowerCase().trim();

    return this.state.words.filter(
      word =>
        word.ukrWord.toLowerCase().trim().includes(normolizedWorld) ||
        word.enWord.toLowerCase().trim().includes(normolizedWorld)
    );
  };

  render() {
    const filteredWords = this.handleFilteredWords();

    return (
      <div>
        <Navigation />
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div>
            <WordsForm addWord={this.addWord} existedWord={this.existedWord} />
            <Filter handleChange={this.filterWord} value={this.state.filter} />
          </div>
          <WordList words={filteredWords} deleteWord={this.deleteWord} />
        </div>
      </div>
    );
  }
}
