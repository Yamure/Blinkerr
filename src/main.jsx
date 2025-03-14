import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@store/store';
import { createRoot } from 'react-dom/client';
import AppRoutes from '@/routes.jsx';
import '@/index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </StrictMode>,
);
