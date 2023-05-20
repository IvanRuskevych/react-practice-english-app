import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { nanoid } from 'nanoid';
import css from './WordsForm.module.css';
import messageInfo from 'components/Notify/Notify';

export default class WordsForm extends Component {
  state = {
    ukrWord: '',
    enWord: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    // console.log(value);
    // console.log(name);
    this.setState({ [name]: value });
  };

  handleSubmitForm = e => {
    e.preventDefault();

    if (this.state.enWord === '' || this.state.ukrWord === '') {
      return messageInfo('Потрібно ввести слово');
    }

    const word = {
      id: nanoid(5),
      isChecked: false,
      ...this.state,
    };

    this.props.addWord(word);
    this.setState({ ukrWord: '', enWord: '' }); // очистка форми для контрольованих input-тів
    // e.target.reset(); // очистка форми для НЕконтрольованих input-тів (не працює для контрольованих input-тів);
  };

  render() {
    const { ukrWord, enWord } = this.state;
    return (
      <form onSubmit={this.handleSubmitForm} className={css.WordsForm}>
        <TextField
          id="ukrWord"
          name="ukrWord"
          label="Ukrainian"
          variant="outlined"
          autoComplete="off"
          value={ukrWord}
          onChange={this.handleChange}
        />
        <TextField
          id="enWord"
          name="enWord"
          label="English"
          variant="outlined"
          autoComplete="off"
          value={enWord}
          onChange={this.handleChange}
        />
        <Button type="submit" variant="outlined">
          add word
        </Button>
      </form>
    );
  }
}