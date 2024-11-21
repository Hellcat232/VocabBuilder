import css from './RegisterForm.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { register } from '../../redux/auth/operations';
import * as yup from 'yup';

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.mixed().required(),
  })
  .required();

const RegistrationForm = () => {
  const {
    // register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit()} className={css['register-form']}>
      <div className={css['title-descr']}>
        <h2 className={css['register-title']}>Register</h2>
        <p className={css['register-description']}>
          To start using our services, please fill out the registration form
          below. All fields are mandatory:
        </p>
      </div>

      <div className={css['inputs-div']}>
        <input
          {...register('name')}
          placeholder="Name"
          className={css['register-inputs']}
        />
        {errors.name && <p>{errors.name.message}</p>}

        <input
          {...register('email')}
          placeholder="Email"
          className={css['register-inputs']}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <input
          // type={showPassword ? 'text' : 'password'}
          {...register('password')}
          placeholder="Password"
          className={css['register-inputs']}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <div>
        <button className={css['register-btn']}>sign up</button>
      </div>
    </form>
  );
};

export default RegistrationForm;
