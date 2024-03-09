import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MenuPage from "./Components/MenuPage/MenuPage";
import "./index.css";
import "animate.css";
import { Outlet } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import BlogPage from "./Components/BlogPage/BlogPage";
import MainPage from "./Components/MainPage/MainPage";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
function App() {
  return (
    <div className="main">
      <Header />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="/" element={<MainPage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="blog" element={<BlogPage />} />

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
