import css from './LoginForm.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.mixed().required(),
  })
  .required();

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit()} className={css['register-form']}>
      <div className={css['title-descr']}>
        <h2 className={css['register-title']}>Registration</h2>
        <p className={css['register-description']}>
          Thank you for your interest in our platform! In order to register, we need some
          information. Please provide us with the following information.
        </p>
      </div>

      <div className={css['inputs-div']}>
        <input {...register('name')} placeholder="Name" className={css['register-inputs']} />
        {errors.name && <p>{errors.name.message}</p>}

        <input {...register('email')} placeholder="Email" className={css['register-inputs']} />
        {errors.email && <p>{errors.email.message}</p>}

        <div className={css['password-wrapper']}>
          <input
            // type={showPassword ? 'text' : 'password'}
            {...register('password')}
            placeholder="Password"
            className={css['register-inputs']}
          />
          <button
            type="button"
            // onClick={togglePasswordVisibility}
            className={css['toggle-password']}
          >
            {/* {showPassword ? <IoEyeOff size="16" /> : <IoEye size="16" />} */}
          </button>
        </div>
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <button type="submit" className={css['register-btn']}>
        Sign Up
      </button>
    </form>
  );
};

export default LoginForm;
