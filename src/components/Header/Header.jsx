import css from './Header.module.css';
import Logo from '../Logo/Logo';
import UserNav from '../UserNav/UserNav';

const Header = () => {
  return (
    <header>
      <Logo />
      <UserNav />
    </header>
  );
};

export default Header;
