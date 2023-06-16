import { useEffect, useState } from 'react';
// ПИСАТИ HOOKS ЯКІ НЕ ПЕРЕВИКОРИСТОВУЮТЬСЯ НЕДОЦІЛЬНО - ЦЕ ТРАТА ЧАСУ !!!

export const useLocalStorage = (key, initialState) => {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(key)) ?? initialState
  );

  useEffect(
    () => localStorage.setItem(key, JSON.stringify(state)),
    [key, state]
  );

  return [state, setState];
};
// ПИСАТИ HOOKS ЯКІ НЕ ПЕРЕВИКОРИСТОВУЮТЬСЯ НЕДОЦІЛЬНО - ЦЕ ТРАТА ЧАСУ !!!
// ІХ СУТЬ САМЕ В ПЕРЕВИКОРИСТАННІ
