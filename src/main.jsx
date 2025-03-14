import '@/index.css';
import * as Pages from '@pages';
import { store } from '@store/store';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const routes = [
  { path: '/', element: <Pages.Home /> },
  { path: '/collections', element: <Pages.Collections /> },
  { path: '/about', element: <Pages.About /> },
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </Provider>
  </StrictMode>,
);
