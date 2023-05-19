import Checkbox from '@mui/material/Checkbox';

export const WordList = ({ words }) => {
  return (
    <div>
      <ul>
        {words.map((word, index) => {
          return (
            <li key={word.id}>
              <Checkbox />
              <p className="numberWord">{index + 1}</p>
              <p className="ukrWord">{word.ukrWord}</p>
              <p className="enWord">{word.enWord}</p>
              <button>delete</button>
              <button>edit</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
