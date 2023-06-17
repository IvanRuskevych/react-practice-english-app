import React, { useReducer } from 'react';
import { nanoid } from 'nanoid';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import css from './WordsForm.module.css';
import messageInfo from 'components/Notify/Notify';
import { useDispatch } from 'react-redux';
import { addWord } from 'redux/operations';

const initialState = {
  ukrWord: '',
  enWord: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ukrWord':
      return { ...state, ukrWord: action.payload };
    case 'enWord':
      return { ...state, enWord: action.payload };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

export const WordsForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatchToRedux = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    dispatch({ type: name, payload: value });
  };

  const handleSubmitForm = e => {
    e.preventDefault();

    if (state.enWord === '' || state.ukrWord === '') {
      return messageInfo('Потрібно ввести слово');
    }

    const word = {
      id: nanoid(5),
      isChecked: false,
      ...state,
    };

    // addWord(word);
    dispatchToRedux(addWord(word));
    dispatch({ type: 'reset' });
  };

  return (
    <form onSubmit={handleSubmitForm} className={css.WordsForm}>
      <TextField
        id="ukrWord"
        name="ukrWord"
        label="Ukrainian"
        variant="outlined"
        autoComplete="off"
        value={state.ukrWord}
        onChange={handleChange}
      />
      <TextField
        id="enWord"
        name="enWord"
        label="English"
        variant="outlined"
        autoComplete="off"
        value={state.enWord}
        onChange={handleChange}
      />
      <Button type="submit" variant="outlined">
        add word
      </Button>
    </form>
  );
};

// // =============BEFORE ======================
// export default class WordsForm extends Component {
//   state = {
//     ukrWord: '',
//     enWord: '',
//   };

//   handleChange = e => {
//     const { name, value } = e.currentTarget;
//     // console.log(value);
//     // console.log(name);
//     this.setState({ [name]: value });
//   };

//   handleSubmitForm = e => {
//     e.preventDefault();

//     if (this.state.enWord === '' || this.state.ukrWord === '') {
//       return messageInfo('Потрібно ввести слово');
//     }

//     const word = {
//       id: nanoid(5),
//       isChecked: false,
//       ...this.state,
//     };

//     this.props.addWord(word);
//     this.setState({ ukrWord: '', enWord: '' }); // очистка форми для контрольованих input-тів
//     // e.target.reset(); // очистка форми для НЕконтрольованих input-тів (не працює для контрольованих input-тів);
//   };

//   render() {
//     const { ukrWord, enWord } = this.state;
//     return (
//       <form onSubmit={this.handleSubmitForm} className={css.WordsForm}>
//         <TextField
//           id="ukrWord"
//           name="ukrWord"
//           label="Ukrainian"
//           variant="outlined"
//           autoComplete="off"
//           value={ukrWord}
//           onChange={this.handleChange}
//         />
//         <TextField
//           id="enWord"
//           name="enWord"
//           label="English"
//           variant="outlined"
//           autoComplete="off"
//           value={enWord}
//           onChange={this.handleChange}
//         />
//         <Button type="submit" variant="outlined">
//           add word
//         </Button>
//       </form>
//     );
//   }
// }
