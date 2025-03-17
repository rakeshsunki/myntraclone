import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const ScrollTop = ({ children }) => {
  const navBar = useSelector((store) => store.products);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, navBar]);
  return <>{children}</>;
};
export default ScrollTop;
