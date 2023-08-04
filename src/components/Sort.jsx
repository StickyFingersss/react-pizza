import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSort, setSort } from '../redux/slices/filterSlice';

export const list = [
  { name: 'популярности(desc)', sortProperty: 'rating' },
  { name: 'популярности(asc)', sortProperty: '-rating' },
  { name: 'цене(desc)', sortProperty: 'price' },
  { name: 'цене(asc)', sortProperty: '-price' },
  { name: 'алфавиту(desc)', sortProperty: 'title' },
  { name: 'алфавиту(asc)', sortProperty: '-title' },
];

export const Sort = () => {
  const dispatch = useDispatch();
  const { sort } = useSelector(selectSort);

  const sortRef = React.useRef();

  const [open, setOpen] = React.useState(false);

  const onClickCategory = (obj) => {
    dispatch(setSort(obj));
    setOpen(false);
  };
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.composedPath().includes(sortRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"></svg>
        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>{sort.name}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {list.map((obj, i) => {
              return (
                <li
                  key={i}
                  onClick={() => onClickCategory(obj)}
                  className={sort.sortProperty === obj.sortProperty ? 'active' : ''}>
                  {obj.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
