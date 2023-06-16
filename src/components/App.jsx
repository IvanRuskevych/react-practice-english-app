import React, { Component } from 'react';
import Navigation from './Navigation/Navigation';
import WordsForm from './WordsForm/WordsForm';
import WordList from './WordList/WordList';
import Filter from './Filter/Filter';
import messageInfo from './Notify/Notify';

import words from '../data/dictionary.json';

export class App extends Component {
  state = {
    words,
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

    return this.state.words.filter(word => {
      return (
        word.ukrWord.toLowerCase().trim().includes(normolizedWorld) ||
        word.enWord.toLowerCase().trim().includes(normolizedWorld)
      );
    });
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
