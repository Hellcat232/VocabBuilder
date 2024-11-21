import { NavLink } from 'react-router-dom';

const UserNav = () => {
  return (
    <nav>
      <NavLink to="/dictionary">Dictionary</NavLink>
      <NavLink to="/recommend">Recommend</NavLink>
      <NavLink to="/training">Training</NavLink>
    </nav>
  );
};

export default UserNav;
