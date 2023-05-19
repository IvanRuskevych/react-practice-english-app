import React, { Component } from 'react';
import Navigation from './Navigation/Navigation';
import WordsForm from './WordsForm/WordsForm';
import { WordList } from './WordList/WordList';

export class App extends Component {
  state = {
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

  render() {
    return (
      <div>
        <Navigation />
        <WordsForm addWord={this.addWord} />
        <WordList words={this.state.words} />
      </div>
    );
  }
}
