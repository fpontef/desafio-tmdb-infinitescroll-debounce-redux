import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { searchQueryDebounced } from '../store/SearchQueryActions';

const SearchInput = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  const { keyword } = useSelector((state) => state.searchQuery);

  useEffect(() => {
    // Trick to allow search from every screen (including movideDetails)
    if (keyword) {
      history.push('/');
    }
  }, [history, keyword]);

  return (
    <input
      className='search__input'
      type='search'
      name='search'
      value={query}
      placeholder='Digite sua busca'
      onChange={(e) => {
        e.preventDefault();
        const value = e.target.value;
        setQuery(value);
        dispatch(searchQueryDebounced(value));
      }}
    />
  );
};

export default SearchInput;
