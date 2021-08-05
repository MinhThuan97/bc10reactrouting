import logo from "./logo.svg";
import "./App.css";
import HomePage from "./container/HomeTemplate/HomePage";
import AboutPage from "./container/HomeTemplate/AboutPage";
import ListMoviePage from "./container/HomeTemplate/ListMoviePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageNotFound from "./container/PageNotFound";
import Navbar from "./container/HomeTemplate/_components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {/* Trang chủ - localhost:3000 */}
        <Route exact path="/" component={HomePage} />

        {/* Trang about - localhost:3000/about */}
        <Route path="/about" component={AboutPage} />

        {/* Trang Listmovie - localhost:3000/list-movie */}
        <Route path="/list-movie" component={ListMoviePage} />

        {/* Trang Không tồn tại */}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
