import css from './Header.module.css';
import { IoMdPerson } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import { selectIsLoggedIn, selectIsUser } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import { useState } from 'react';

import Logo from '../Logo/Logo';
import UserNav from '../UserNav/UserNav';
import ModalWindow from '../ModalWindow/ModalWindow';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [modalIsOpen, setIsOpen] = useState(false);
  let user = useSelector(selectIsUser);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <header className={css.header}>
      <div className={css['header-content']}>
        <div>
          <Logo />
        </div>

        {isLoggedIn && (
          <div className={css['name-person-burger']}>
            {user !== null ? (
              <p className={css.name}>{user.data.name}</p>
            ) : (
              <p className={css.name}>Name</p>
            )}

            <div className={css['div-person']}>
              <IoMdPerson className={css.person} />
            </div>

            <button onClick={openModal} className={css['burger-btn']}>
              <RxHamburgerMenu
                style={{ color: 'black', width: '32', height: '22' }}
              />
            </button>
          </div>
        )}
      </div>
      <ModalWindow modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </header>
  );
};

export default Header;
