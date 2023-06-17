import List from '@mui/material/List';

import { WordListItem } from './WordListItem';

const WordList = ({ words, deleteWord, editeWord }) => {
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
        return (
          <WordListItem
            key={word.id}
            word={word}
            deleteWord={deleteWord}
            editeWord={editeWord}
          />
        );
      })}
    </List>
  );
};

export default WordList;
