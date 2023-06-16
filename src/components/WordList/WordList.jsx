import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';

import Icon from '@mdi/react';
import { mdiFileEdit, mdiDelete } from '@mdi/js';

const WordList = ({ words, deleteWord }) => {
  const [checked, setChecked] = useState([0]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    // console.log(value);
    // console.log(currentIndex);
    // console.log(newChecked);

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

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
        // console.log(word);
        const labelId = `checkbox-list-label-${word.id}`;

        return (
          <ListItem
            key={word.id}
            secondaryAction={
              <>
                <IconButton
                  edge="end"
                  aria-label="edit"
                  // onClick={''}
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
                  onClick={() => deleteWord(word.id)}
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
            <ListItemButton role={undefined} onClick={handleToggle(word)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(word) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText
                id={labelId}
                primary={`${word.ukrWord}`}
                sx={{ flexBasis: '0' }}
              />
              <ListItemText
                id={labelId}
                primary={`${word.enWord}`}
                sx={{ flexBasis: '0' }}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default WordList;
