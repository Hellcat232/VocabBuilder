import css from './App.module.css';

import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from '../Header/Header';

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

const App = () => {
  return (
    <>
      <Header />

      <Suspense fallback={''}>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/dictionary" element={<DictionaryPage />} />
          <Route path="/recommend" element={<RecommendPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
