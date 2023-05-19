import React, { Component } from 'react';
import Navigation from './Navigation/Navigation';
import WordsForm from './WordsForm/WordsForm';
import WordList from './WordList/WordList';
import Filter from './Filter/Filter';
// import words from './data/dictionry.json';

export class App extends Component {
  state = {
    // words,
    words: [
      { id: 1, ukrWord: 'Привіт', enWord: 'Hi', isChecked: false },
      { id: 2, ukrWord: 'Пока', enWord: 'Bye', isChecked: false },
    ],
    filter: '',
  };

  addWord = word => {
    this.setState(prevState => {
      return {
        words: [...prevState.words, word],
      };
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
        <WordsForm addWord={this.addWord} />
        <Filter handleChange={this.filterWord} value={this.state.filter} />
        <WordList words={filteredWords} deleteWord={this.deleteWord} />
      </div>
    );
  }
}
