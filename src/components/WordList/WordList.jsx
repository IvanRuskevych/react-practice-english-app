import List from '@mui/material/List';

import { WordListItem } from './WordListItem';
import { useSelector } from 'react-redux';
import { selectFilteredWords } from 'redux/selectors';

const WordList = () => {
  const words = useSelector(selectFilteredWords);
  console.log(words);
  return (
    <List
      sx={{
        marginTop: '22px',
        width: '100%',
        maxWidth: 500,
        bgcolor: 'background.paper',
      }}
    >
      {words.map(word => {
        return <WordListItem key={word.id} word={word} />;
      })}
    </List>
  );
};

export default WordList;
