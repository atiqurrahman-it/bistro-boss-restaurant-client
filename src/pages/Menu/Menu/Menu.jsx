import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";

import menuImage from "../../../assets/menu/menu-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTittle from "../../../component/SectionTittle/SectionTittle";

const Menu = () => {
  const [menu] = useMenu();
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      {/* web site title  */}
      <Helmet>
        <title>Bistro Boss/Menu</title>
      </Helmet>

      <Cover bgImage={menuImage} tittle="OUR MENU"></Cover>

      <SectionTittle
      heading="TODAY'S OFFER"
      subHeading="Don't miss"
      ></SectionTittle>


    </div>
  );
};

export default Menu;
