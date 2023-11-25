import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import { IoHomeOutline } from 'react-icons/io5';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { MdOutlineFavorite } from 'react-icons/md';
import { RiLogoutCircleLine, RiUserReceivedLine } from 'react-icons/ri';

import { Button, Logo } from '@components/baseComponents';
import { BUTTON, SIZEICONS } from '@common/constant';
import { Search } from '..';

/**
 * Renders the header section of a desktop view.
 * Includes a logo, a navigation bar, and conditional rendering based on the presence of a token.
 *
 * @returns JSX elements representing the header section of a desktop view.
 *
 * @example
 * ```typescript-react
 * <DesktopHeader />
 * ```
 */
export const DesktopHeader = () => {
  // TODO: add token and role
  const token = false;
  const role = 'landlord';

  return (
    <div className="header">
      <div className="header-wrapper">
        <Link to="/" className="logo">
          <Logo />
        </Link>
        <nav className="nav-bar">
          <span className="nav-bar-wrapper">
            <Search searching="Find a Home" />
            {token ? <DeskTopLogined role={role} /> : <DesckTopLoginOrJoin />}
          </span>
        </nav>
      </div>
    </div>
  );
};

interface IBeingLoginProps {
  role: string;
}

function DeskTopLogined({ role }: IBeingLoginProps) {
  return (
    <>
      <Button
        typeBtn={BUTTON.TYPE.SECONDARY}
        leftIcon={<RiLogoutCircleLine size={SIZEICONS.TWENTY} />}
      >
        logout
      </Button>
      <div className="btn-prop-saved__wrapper">
        {role === 'landlord' ? (
          <Link to="/my-properties">
            <Button
              typeBtn={BUTTON.TYPE.PRIMARY}
              leftIcon={<IoHomeOutline size={SIZEICONS.TWENTY} />}
            >
              my properties
            </Button>
          </Link>
        ) : (
          <Link to="/properties-saved">
            <Button
              typeBtn={BUTTON.TYPE.PRIMARY}
              leftIcon={<MdOutlineFavorite size={SIZEICONS.TWENTY} />}
            >
              saved properties
            </Button>
          </Link>
        )}
      </div>
      <Link to="/profile">
        <Button
          typeBtn={BUTTON.TYPE.PRIMARY}
          leftIcon={<FiUser size={SIZEICONS.TWENTY} />}
        >
          Profile
        </Button>
      </Link>
    </>
  );
}

function DesckTopLoginOrJoin() {
  return (
    <>
      <Link to="/signup">
        <Button
          typeBtn={BUTTON.TYPE.PRIMARY}
          leftIcon={<AiOutlineUserAdd size={SIZEICONS.TWENTY} />}
        >
          Join
        </Button>
      </Link>
      <Link to="/login">
        <Button
          typeBtn={BUTTON.TYPE.PRIMARY}
          leftIcon={<RiUserReceivedLine size={SIZEICONS.TWENTY} />}
        >
          Login
        </Button>
      </Link>
    </>
  );
}
