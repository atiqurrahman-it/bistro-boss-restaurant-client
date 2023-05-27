const MenuItems = ({ items }) => {
  const { name, image, price, recipe } = items;
  return (
    <div className="flex space-x-4">
      <img style={{borderRadius:"0 200px 200px 200px"}} className="w-[120px] h-[105px]" src={image} alt="" />
      <div>
        <h1 className="uppercase ">{name}-----------</h1>
        <p className="text-[#737373]">{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItems;
