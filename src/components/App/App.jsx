import css from './App.module.css';

import Modal from 'react-modal';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Header from '../Header/Header';
import { refresh } from '../../redux/auth/operations';
import {
  selectIsRefreshing,
  selectIsLoggedIn,
  selectIsUser,
} from '../../redux/auth/selectors';

import { PublicRoute } from '../PublicRoute/PublicRoute';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';

const RegisterPage = lazy(() =>
  import('../../pages/RegisterPage/RegisterPage'),
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const MainPage = lazy(() => import('../../pages/MainPage/MainPage'));
const RecommendPage = lazy(() =>
  import('../../pages/RecommendPage/RecommendPage'),
);
const DictionaryPage = lazy(() =>
  import('../../pages/DictionaryPage/DictionaryPage'),
);
const TrainingPage = lazy(() =>
  import('../../pages/TrainingPage/TrainingPage'),
);
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage'),
);

Modal.setAppElement('#root');

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isUser = useSelector(selectIsUser);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Loading...</p>
  ) : (
    <>
      <Header />

      <Suspense fallback={''}>
        <Routes>
          <Route
            path="/register"
            element={
              <PublicRoute redirectTo="/" component={<RegisterPage />} />
            }
          />
          <Route
            path="/login"
            element={<PublicRoute redirectTo="/" component={<LoginPage />} />}
          />
          <Route
            path="/"
            element={
              <PrivateRoute redirectTo="/login" component={<MainPage />} />
            }
          />
          <Route
            path="/dictionary"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<DictionaryPage />}
              />
            }
          />
          <Route
            path="/recommend"
            element={
              <PrivateRoute redirectTo="/login" component={<RecommendPage />} />
            }
          />
          <Route
            path="/training"
            element={
              <PrivateRoute redirectTo="/login" component={<TrainingPage />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
