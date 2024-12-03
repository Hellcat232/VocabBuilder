import css from './RegisterForm.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectIsLoggedIn } from '../../redux/auth/selectors';

import { registration } from '../../redux/auth/operations';

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.mixed().required(),
  })
  .required();

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const getRegisterData = (data) => {
    const { name, email, password } = data;

    dispatch(registration({ name, email, password }));
  };

  return (
    <form
      onSubmit={handleSubmit(getRegisterData)}
      className={css['register-form']}
    >
      <div className={css['title-descr']}>
        <h2 className={css['register-title']}>Register</h2>
        <p className={css['register-description']}>
          To start using our services, please fill out the registration form
          below. All fields are mandatory:
        </p>
      </div>

      <div className={css['inputs-div']}>
        <div>
          <input
            {...register('name')}
            placeholder="Name"
            className={css['register-inputs']}
          />
          {errors.name?.message && (
            <p className={css['error-container']}>{errors.name?.message}</p>
          )}
        </div>

        <div style={{ marginTop: '8px' }}>
          <input
            {...register('email')}
            placeholder="Email"
            className={css['register-inputs']}
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
            className={css['register-inputs']}
          />
          {errors.password && (
            <p className={css['error-container']}>{errors.password.message}</p>
          )}
        </div>
      </div>
      <div className={css.btns}>
        <button className={css['register-btn']}>Register</button>
        <button className={css['login-btn']}>Login</button>
      </div>
    </form>
  );
};

export default RegistrationForm;
