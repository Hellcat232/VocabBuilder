import css from './UserNav.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logout } from '../../redux/auth/operations';

const UserNav = ({ closeModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logout());
    closeModal();
    navigate('/login');
  };

  return (
    <nav className={css.navigation}>
      <NavLink className={css['nav-link']} to="/dictionary">
        Dictionary
      </NavLink>
      <NavLink className={css['nav-link']} to="/recommend">
        Recommend
      </NavLink>
      <NavLink className={css['nav-link']} to="/training">
        Training
      </NavLink>

      <button onClick={handleLogOut} className={css['logout-btn']}>
        Log out
      </button>
    </nav>
  );
};

export default UserNav;
