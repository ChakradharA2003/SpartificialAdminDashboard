import { Link } from 'react-router-dom';
import { MdHome } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { useContext } from 'react';
import RouteContext from '../../context/RouteContext';
import { NavBarContainer, NavButton, NavLinksContainer } from './navBarStyled';

const activeRoutesConstants = {
  home: 'HOME',
  users: 'USERS',
  posts: 'POSTS'
};

const NavBar = () => {
  const { isDark, activeRoute, onChangeActiveRoute } = useContext(RouteContext);
  const bgcolor = isDark ? 'dark' : 'theme';

  return (
    <NavBarContainer bgcolor={bgcolor}>
      <NavLinksContainer>
        <Link to="/">
          <NavButton
            bgcolor={bgcolor}
            type="button"
            onClick={() => onChangeActiveRoute(activeRoutesConstants.home)}
          >
            <MdHome size={21} color={activeRoute === activeRoutesConstants.home ? '#571271' : '#0f0f0f'} /> Home
          </NavButton>
        </Link>

        <Link to="/admin/users">
          <NavButton
          bgcolor={bgcolor}
            type="button"
            onClick={() => onChangeActiveRoute(activeRoutesConstants.users)}
          >
            <FaUsers size={21} color={activeRoute === activeRoutesConstants.users ? '#571271' : '#0f0f0f'} /> Users
          </NavButton>
        </Link>

        <Link to="/admin/posts">
          <NavButton
          bgcolor={bgcolor}
            type="button"
            onClick={() => onChangeActiveRoute(activeRoutesConstants.posts)}
          >
            <CiCirclePlus size={21} color={activeRoute === activeRoutesConstants.posts ? '#571271' : '#0f0f0f'} /> Posts
          </NavButton>
        </Link>
      </NavLinksContainer>
    </NavBarContainer>
  );
};

export default NavBar;
