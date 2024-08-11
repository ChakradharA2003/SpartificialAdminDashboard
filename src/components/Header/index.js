import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Popup from 'reactjs-popup';
import { FaMoon } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";
import { useContext } from 'react';
import RouteContext from '../../context/RouteContext';
import spartificial_logo from '../Resources/spartificial_logo.jpeg'
import {
  HedaerContainer,
  CompanyLogo,
  ThemeLogoutContainer,
  Themebutton,
  WebsitelogoHeaderContainer,
  DashBoardHeading,
  LogOutButton,
  LogoutPopUpContainer,
  PopUpButtonsContainer,
  PopUpQuestion,
  CancelButton,
  ConfirmButton
} from './headerStyled';

const Header = () => {
  const { isDark, onClickedChangeTheme } = useContext(RouteContext);
  const navigate = useNavigate();

  const onClickedLogOut = () => {
    Cookies.remove('LoginDetails');
    navigate('/login');
  };

  const button = !isDark ? (<FaMoon size={30} color="#0f0f0f" />) : (<FiSun size={30} color="#ffffff" />);
  const bgcolor = isDark ? 'dark' : 'light';

  return (
    <HedaerContainer bgcolor={bgcolor}>
      <WebsitelogoHeaderContainer>
        <Link to="/">
          <CompanyLogo alt="CompanyLogo" src={spartificial_logo} />
        </Link>
        <DashBoardHeading bgcolor={bgcolor}>Admin DashBoard</DashBoardHeading>
      </WebsitelogoHeaderContainer>
      <ThemeLogoutContainer>
        <Themebutton type="button" onClick={onClickedChangeTheme}>
          {button}
        </Themebutton>
        <Popup
          modal
          trigger={<LogOutButton type="button">Logout</LogOutButton>}
        >
          {close => (
            <LogoutPopUpContainer bgcolor={bgcolor}>
              <PopUpQuestion bgcolor={bgcolor}>
                Are you sure you want to logout?
              </PopUpQuestion>
              <PopUpButtonsContainer>
                <CancelButton
                  as="button"
                  type="button"
                  onClick={() => close()}
                >
                  Cancel
                </CancelButton>
                <ConfirmButton
                  as="button"
                  type="button"
                  onClick={onClickedLogOut}
                >
                  Confirm
                </ConfirmButton>
              </PopUpButtonsContainer>
            </LogoutPopUpContainer>
          )}
        </Popup>
      </ThemeLogoutContainer>
    </HedaerContainer>
  );
};

export default Header;
