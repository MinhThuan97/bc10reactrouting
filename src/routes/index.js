import AboutPage from "../container/HomeTemplate/AboutPage";
import HomePage from "../container/HomeTemplate/HomePage";
import ListMoviePage from "../container/HomeTemplate/ListMoviePage";

const routesHome = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    exact: false,
    path: "/about",
    component: AboutPage,
  },
  {
    exact: false,
    path: "/list-movie",
    component: ListMoviePage,
  },
];

const routesAdmin = [];

export { routesHome, routesAdmin };
