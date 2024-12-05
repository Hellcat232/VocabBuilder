import css from './LoginForm.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import { login } from '../../redux/auth/operations';

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.mixed().required(),
  })
  .required();

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const getLoginData = async (data) => {
    const { email, password } = data;

    const { status } = await dispatch(login({ email, password })).unwrap();

    if (status === 200) navigate('/');

    reset();
  };

  return (
    <form onSubmit={handleSubmit(getLoginData)} className={css['login-form']}>
      <div>
        <h2 className={css['login-title']}>Login</h2>
        <p className={css['login-description']}>
          Please enter your login details to continue using our service:
        </p>
      </div>

      <div className={css['inputs-div']}>
        <div style={{ marginTop: '8px' }}>
          <input
            {...register('email')}
            placeholder="Email"
            className={css['login-inputs']}
          />
          {errors.email && (
            <p className={css['error-container']}>{errors.email.message}</p>
          )}
        </div>

        <div style={{ marginTop: '8px' }}>
          <input
            // type={showPassword ? 'text' : 'password'}
            {...register('password')}
            placeholder="Password"
            className={css['login-inputs']}
          />
          {errors.password && (
            <p className={css['error-container']}>{errors.password.message}</p>
          )}
        </div>
      </div>
      <div className={css.btns}>
        <button className={css['login-btn']}>Login</button>
        <NavLink className={css['register-btn']} to="/register">
          Register
        </NavLink>
      </div>
    </form>
  );
};

export default LoginForm;
