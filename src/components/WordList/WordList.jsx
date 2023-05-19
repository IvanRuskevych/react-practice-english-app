import Checkbox from '@mui/material/Checkbox';

const WordList = ({ words, deleteWord }) => {
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
              <button onClick={() => deleteWord(word.id)}>delete</button>
              <button>edit</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WordList;
