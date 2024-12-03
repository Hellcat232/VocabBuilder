import css from './LoginPage.module.css';

import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <main className={css['main-login-page']}>
      <section>
        <img src="/public/boy-and-girl-1x-mob.png" alt="" />
        <p style={{ color: 'black' }}>
          Word · Translation · Grammar · Progress
        </p>
      </section>
      <section>
        <LoginForm />
      </section>
    </main>
  );
};

export default LoginPage;
