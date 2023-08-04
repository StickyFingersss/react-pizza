import React from 'react';
import styles from './Search.module.scss';
import debounce from 'lodash.debounce';
import { setSearchValue } from '../../redux/slices/filterSlice';
import { useDispatch } from 'react-redux';

const Search = () => {
  const dispatch = useDispatch();
  const [value, setVaue] = React.useState('');
  const inputRef = React.useRef();

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setVaue('');
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 300),
    [],
  );

  const onChangeInput = (event) => {
    setVaue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.searchIcon}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
        height="24"
        width="24">
        <g id="magnifying-glass--glass-search-magnifying">
          <path
            id="Vector"
            stroke="#3e3e3e"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 11.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"></path>
          <path
            id="Vector_2"
            stroke="#3e3e3e"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 13.5 10 10"></path>
        </g>
      </svg>

      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        type="text"
        className={styles.input}
        placeholder="Найдите свою пиццу..."
      />

      {value && (
        <svg
          onClick={onClickClear}
          className={styles.clearIcon}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
          height="24"
          width="24">
          <g id="delete-1--remove-add-button-buttons-delete-cross-x-mathematics-multiply-math">
            <path
              id="Vector"
              stroke="#3e3e3e"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m13.5.5-13 13"></path>
            <path
              id="Vector_2"
              stroke="#3e3e3e"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m.5.5 13 13"></path>
          </g>
        </svg>
      )}
    </div>
  );
};

export default Search;
