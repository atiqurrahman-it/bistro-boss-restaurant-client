import { useEffect, useState } from "react";
import SectionTittle from "../../../component/SectionTittle/SectionTittle";
import MenuItems from "../../shared/MenuItems/MenuItems";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../../Menu/MenuCategory/MenuCategory";

const PopularMenu = () => {
  const [menu]=useMenu()
  const popularItems=menu.filter((item) => item.category === "popular");

  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // filter popular menu form total menu
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div className="mb-10">
      <SectionTittle
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionTittle>

      <MenuCategory items={popularItems}></MenuCategory>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mx-10 md:mx-3 my-2">
        {popularItems.map((item) => (
          <MenuItems items={item} key={item._id}></MenuItems>
        ))}
      </div> */}

      <div className="text-center mt-5">
        <button className="btn btn-outline border-0 border-b-4 btn-warning">
        View Full  Menu
        </button>
      </div>
      
    </div>
  );
};

export default PopularMenu;
