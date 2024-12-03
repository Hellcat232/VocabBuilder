import { NavLink } from 'react-router-dom';
import css from './Logo.module.css';

const Logo = () => {
  return (
    <NavLink to="/">
      <div className={css['logo-div']}>
        <img className={css['logo-img']} src="/public/logo-1X-mob.png" alt="" />
        <h1 className={css['logo-title']}>VocabBuilder</h1>
      </div>
    </NavLink>
  );
};

export default Logo;
