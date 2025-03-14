import * as Pages from '@pages';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const routes = [
  { path: '/', element: <Pages.Home /> },
  { path: '/collections', element: <Pages.Collections /> },
  { path: '/about', element: <Pages.About /> },
];

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
