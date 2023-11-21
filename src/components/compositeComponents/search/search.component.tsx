import { FC, useState } from 'react';
import { CiSearch } from 'react-icons/ci';

import { BUTTON, SIZEICONS } from '@common/constant';
import { useChange } from '@common/hooks';
import { Button } from '@components/baseComponents';

interface ISearchProps {
  searching?: string;
}

/**
 *
 * @param {ISearchProps} props props for the component
 * @param {string} props.searching the value of displaying the button active search input
 * @returns {JSX.Element} the rendered component
 */
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
      <div className={`${show ? 'w-full' : 'invisible'}`}>
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
          <div className="search-icon">
            <Button onClick={handleSubmit} typeBtn={BUTTON.TYPE.SUBTLE}>
              <CiSearch size={SIZEICONS.TWENTY} />
              {searching === '' ? 'Search' : null}
            </Button>
          </div>
        ) : (
          <div className="search-icon">
            <Button onClick={handleClick} typeBtn={BUTTON.TYPE.SUBTLE}>
              <CiSearch size={SIZEICONS.TWENTY} />
              {searching}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
