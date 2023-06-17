import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';

import Icon from '@mdi/react';
import { mdiFileEdit, mdiDelete } from '@mdi/js';
import { useState } from 'react';
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteWord } from 'redux/operations';
import { editWord } from 'redux/operations';
import { checkWord } from 'redux/operations';

export const WordListItem = ({ word }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [ukrWord, setUkrWord] = useState(word.ukrWord);
  const [enWord, setEnWord] = useState(word.enWord);

  const dispatch = useDispatch();

  const handleChange = e => {
    switch (e.target.name) {
      case 'ukrWord':
        return setUkrWord(e.target.value);
      case 'enWord':
        return setEnWord(e.target.value);
      default:
        return;
    }
  };

  const labelId = `checkbox-list-label-${word.id}`;

  const handleToggle = () => {
    dispatch(checkWord({ isChecked: !word.isChecked, id: word.id }));

    // checkWord(word.id);
  };

  const handleEdit = () => {
    setIsEdit(prevStat => !prevStat);
    if (isEdit) {
      dispatch(editWord({ ukrWord, enWord, id: word.id }));
      // editeWord({ ...word, ukrWord, enWord });
    }
  };

  return (
    <ListItem
      key={word.id}
      secondaryAction={
        <>
          <IconButton
            edge="end"
            aria-label="edit"
            onClick={handleEdit}
            style={{ marginRight: '10px' }}
          >
            <Icon
              path={mdiFileEdit}
              title="User Profile"
              size={1}
              color="rgba(0, 0, 0, 0.54)"
            />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => dispatch(deleteWord(word.id))}
          >
            <Icon
              path={mdiDelete}
              title="User Profile"
              size={1}
              color="rgba(0, 0, 0, 0.54)"
            />
          </IconButton>
        </>
      }
      disablePadding
    >
      <ListItemButton role={undefined} onClick={handleToggle} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={word.isChecked}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': labelId }}
          />
        </ListItemIcon>
        {isEdit ? (
          <TextField name="ukrWord" onChange={handleChange} value={ukrWord} />
        ) : (
          <ListItemText
            id={labelId}
            primary={`${ukrWord}`}
            sx={{ flexBasis: '0' }}
          />
        )}
        {isEdit ? (
          <TextField name="enWord" onChange={handleChange} value={enWord} />
        ) : (
          <ListItemText
            id={labelId}
            primary={`${enWord}`}
            sx={{ flexBasis: '0' }}
          />
        )}
      </ListItemButton>
    </ListItem>
  );
};
