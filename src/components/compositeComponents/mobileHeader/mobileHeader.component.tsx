import { Link } from 'react-router-dom';
import { IoMenuOutline } from 'react-icons/io5';

import { SIZEICONS } from '@common/constant';
import { Logo } from '@components/baseComponents';
import { Search } from '..';
import { useToggle } from '@common/hooks';

export const MobileHeader = () => {
  // TODO: add token
  const token = false;
  const { state, toggleHandler } = useToggle();

  return (
    <nav className={`sidebar ${state ? 'bg-background' : ''}`.trim()}>
      <Link to="/" className="w-20 h-fit cursor-pointer">
        <Logo />
      </Link>

      <div className="flex w-[80%] items-center">
        <Search />
        <IoMenuOutline
          size={SIZEICONS.TWENTYFIVE}
          onClick={toggleHandler}
          className="cursor-pointer"
        />
      </div>

      <aside className={`asidebar__wrapper ${!state ? 'w-0' : ''}`.trim()}>
        <ul className="sidebar-link__wrapper">
          <Link to="/" onClick={toggleHandler}>
            <li className="sidebar-link">Home</li>
          </Link>

          {token && <Logined toggleSidebar={toggleHandler} />}
          {!token && <LoginOrJoin toggleSidebar={toggleHandler} />}
        </ul>
      </aside>
    </nav>
  );
};

function Logined({ toggleSidebar }: { toggleSidebar: () => void }) {
  // TODO: add role
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

function LoginOrJoin({ toggleSidebar }: { toggleSidebar: () => void }) {
  return (
    <>
      <Link to="/signup" onClick={toggleSidebar}>
        <li className="sidebar-link">Join</li>
      </Link>
      <li className="sidebar-link cursor-pointer" onClick={toggleSidebar}>
        login
      </li>
    </>
  );
}
