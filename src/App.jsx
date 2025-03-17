import "./App.css";
import Header from "./components/header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import Headerlist from "./components/header/hlists";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollTop from "./scrolltop";

function App() {
  return (
    <>
      <ScrollTop />
      <Header />
      <Headerlist />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
