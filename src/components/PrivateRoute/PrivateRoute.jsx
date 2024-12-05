import { Navigate } from 'react-router-dom';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ component, redirectTo = '/login' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  if (isRefreshing) {
    return null; // Или можно вернуть индикатор загрузки
  }

  // Если пользователь не авторизован, перенаправляем
  return isLoggedIn ? component : <Navigate to={redirectTo} />;
};
