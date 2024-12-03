import css from './RegisterPage.module.css';
import RegistrationForm from '../../components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  return (
    <>
      <main className={css['main-register-page']}>
        <section>
          <img src="/public/boy-and-girl-1x-mob.png" alt="" />
        </section>
        <section>
          <RegistrationForm />
        </section>
      </main>
    </>
  );
};

export default RegisterPage;
