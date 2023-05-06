import React, { Component } from 'react';
import { Navigation } from './Navigation/Navigation';
import { WordsForm } from './WordsForm/WordsForm';
import { WordList } from './WordList/WordList';

export class App extends Component {
  state = {
    words: [
      { id: 1, ukWord: 'Привіт', enWord: 'Hi', isChecked: false },
      { id: 2, ukWord: 'Пока', enWord: 'Bye', isChecked: false },
    ],
    filter: '',
  };

  render() {
    return (
      <div>
        <Navigation />
        <WordsForm />
        <WordList words={this.state.words} />
      </div>
    );
  }
}
