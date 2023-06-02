import { Outlet, useLocation } from "react-router-dom";
import Header from ".././pages/shared/Header/Header";
import Footer from "../pages/shared/Footer/Footer";
const Main = () => {
  const location = useLocation();
  const noHeaderAndFooter = location?.pathname.includes("login") || location?.pathname.includes("sing-up");
//   console.log(noHeaderAndFooter);
  return (
    <div>
      {noHeaderAndFooter || <Header></Header>}
      <Outlet></Outlet>
      {noHeaderAndFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
