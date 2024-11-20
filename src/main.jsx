import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from '../src/components/App/App';
import store from './redux/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter
      // future={{
      //   v7_relativeSplatPath: true,
      //   v7_startTransition: true,
      // }}
      >
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
