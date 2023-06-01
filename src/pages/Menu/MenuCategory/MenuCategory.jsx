import { Link } from "react-router-dom";
import Cover from "../../shared/Cover/Cover";
import MenuItems from "../../shared/MenuItems/MenuItems";

const MenuCategory = ({ items, img, tittle }) => {
  return (
    <div className="mt-8">
      {tittle && <Cover bgImage={img} tittle={tittle}></Cover>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mx-10 md:mx-3 my-8">
        {items.map((item) => (
          <MenuItems items={item} key={item._id}></MenuItems>
        ))}
      </div>

      <Link to={`/order/${tittle}`}>
        <div className="text-center mt-5">
          <button className="btn btn-outline border-0 border-b-4 btn-warning">
            Order Now
          </button>
        </div>
      </Link>
    </div>
  );
};

export default MenuCategory;
