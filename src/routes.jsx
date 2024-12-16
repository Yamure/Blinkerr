import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as Pages from "@pages";
import { FavoritesProvider } from "@/context/FavoritesContext";

const routes = [
  { path: "/", element: <Pages.Home /> },
  { path: "/collections", element: <Pages.Collections /> },
  { path: "/about", element: <Pages.About /> },
];

const AppRoutes = () => {
  return (
    <Router>
      <FavoritesProvider>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </FavoritesProvider>
    </Router>
  );
};

export default AppRoutes;
