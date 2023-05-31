import MenuItems from "../../shared/MenuItems/MenuItems";

const MenuCategory = ({items}) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mx-10 md:mx-3 my-2">
        {items.map((item) => (
          <MenuItems items={item} key={item._id}></MenuItems>
        ))}
      </div>
    </>
  );
};

export default MenuCategory;
