import React from 'react';

export const WordList = ({ words }) => {
  return (
    <div>
      <ul>
        {words.map(word => {
          return (
            <li key={word.id}>
              <span>{word.ukWord}</span>
              <span>{word.enWord}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
