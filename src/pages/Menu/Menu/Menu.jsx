import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import imgDessert from "../../../assets/menu/dessert-bg.jpeg"
import imgPizza from "../../../assets/menu/pizza-bg.jpg"
import imgSoup from "../../../assets/menu/soup-bg.jpg"
import imgSalad from "../../../assets/menu/salad-bg.jpg"

import menuImage from "../../../assets/menu/menu-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTittle from "../../../component/SectionTittle/SectionTittle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const pizza = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  const desserts = menu.filter((item) => item.category === "dessert");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      {/* web site title  */}
      <Helmet>
        <title>Bistro Boss/Menu</title>
      </Helmet>

     {/* main cover  */}
      <Cover bgImage={menuImage} tittle="OUR MENU"></Cover>
      
     {/* offered  section */}
      <SectionTittle
      heading="TODAY'S OFFER"
      subHeading="Don't miss"
      ></SectionTittle>

    <MenuCategory items={offered}></MenuCategory>
     {/* dessert  section */}
     <MenuCategory items={desserts} tittle="desserts" img={imgDessert}></MenuCategory>

     {/* dessert  section */}
     <MenuCategory items={pizza} tittle="pizza" img={imgPizza}></MenuCategory>

     {/* dessert  section */}
     <MenuCategory items={salads} tittle="salad" img={imgSalad}></MenuCategory>

     {/* dessert  section */}
     <MenuCategory items={soups} tittle="soup" img={imgSoup}></MenuCategory>


    </div>
  );
};

export default Menu;
