import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenuOutline } from 'react-icons/io5';

import { SIZEICONS } from '@common/constant';
import { Logo } from '@components/baseComponents';
import { Search } from '..';

export const MobileHeader = () => {
  const token = true;
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sidebar">
      <Link to="/" className="w-20 h-fit cursor-pointer">
        <Logo />
      </Link>
      <div className="flex">
        <Search />
        <IoMenuOutline size={SIZEICONS.TWENTYFIVE} onClick={toggleSidebar} />
      </div>
      <aside
        className={`asidebar__wrapper ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } `}
      >
        <ul className="sidebar-link__wrapper">
          <Link to="/" onClick={toggleSidebar}>
            <li className="sidebar-link">Home</li>
          </Link>
          {token ? <Logined toggleSidebar={toggleSidebar} /> : <LoingOrJoin />}
        </ul>
      </aside>
    </nav>
  );
};

function Logined({ toggleSidebar }: { toggleSidebar: () => void }) {
  const role = 'landlord';
  return (
    <>
      {role === 'landlord' ? (
        <Link to="/my-properties" onClick={toggleSidebar}>
          <li className="sidebar-link">My properties</li>
        </Link>
      ) : (
        <Link to="/profile" onClick={toggleSidebar}>
          <li className="sidebar-link">Saved properties</li>
        </Link>
      )}
      <Link to="/profile" onClick={toggleSidebar}>
        <li className="sidebar-link">Profile</li>
      </Link>
    </>
  );
}

function LoingOrJoin() {
  return (
    <>
      <Link to="/join">
        <li className="sidebar-link">Join</li>
      </Link>
      <Link to="/login">
        <li className="sidebar-link">login</li>
      </Link>
    </>
  );
}
