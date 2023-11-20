import { CiSearch } from 'react-icons/ci';
import { FC, useState } from 'react';
import { SIZEICONS } from '@common/constant';
import { useChange } from '@common/hooks';

interface ISearchProps {
  searching: string;
}

export const Search: FC<ISearchProps> = ({ searching }) => {
  const { state, handleChange } = useChange({ search: '' });
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  const handleBlur = () => {
    setShow(false);
  };

  const handleSubmit = () => {
    console.log(state);
  };

  return (
    <div className="search">
      <div className={`${show ? 'w-1/2' : 'invisible'}`}>
        <input
          onChange={handleChange}
          onBlur={state.search.length > 0 ? () => {} : handleBlur}
          type="text"
          name="search"
          id="search"
          value={state.search}
          className={`input-search ${
            !show ? 'hide-search-input' : 'show-search-input'
          }`}
          placeholder="Search"
        />
      </div>
      <div className="search-btn">
        {show ? (
          <button onClick={handleSubmit} className="search-icon">
            <CiSearch size={SIZEICONS.TWENTYFIVE} />
            search
          </button>
        ) : (
          <div className="search-icon" onClick={handleClick}>
            <CiSearch size={SIZEICONS.TWENTYFIVE} />
            {searching}
          </div>
        )}
      </div>
    </div>
  );
};
