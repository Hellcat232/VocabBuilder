import css from './ModalWindow.module.css';
import { IoMdPerson } from 'react-icons/io';
import { IoMdClose } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { selectIsUser } from '../../redux/auth/selectors';
import Modal from 'react-modal';
import UserNav from '../UserNav/UserNav';

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     background: 'green',
//   },
// };

const ModalWindow = ({ modalIsOpen, closeModal }) => {
  const user = useSelector(selectIsUser);
  let subtitle;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        className={css.modal}
        contentLabel="Example Modal"
      >
        <div className={css['modal-top']}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {user !== null ? (
              <p className={css['user-name']}>{user.data.name}</p>
            ) : (
              <p className={css['user-name']}>Name</p>
            )}
            <div className={css['div-person']}>
              <IoMdPerson className={css.person} />
            </div>
          </div>
          <button onClick={closeModal} className={css['close-btn']}>
            <IoMdClose className={css['close-icon']} />
          </button>
        </div>

        <UserNav closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default ModalWindow;
