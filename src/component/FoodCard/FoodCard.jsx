import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProviders";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  const { user } = useContext(AuthContext);
  const [,refetch]=useCart()
  const navigate = useNavigate();
  const location = useLocation();

  const handelAddToCartItem = (item) => {
    const CartOrderItem = {
      productItemId: item._id,
      name,
      image,
      price,
      userEmail: user?.email,
    };

    if (user && user.email) {
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(CartOrderItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch()// refetch cart to update the number of item in the card
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Food added on the cart",
              showConfirmButton: false,
              timer: 1500,
            });
            console.log(data);
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order the food ",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 bg-[#111827] text-white  px-3 py-1 mr-5 mt-5">
        ${price}
      </p>
      <div className="card-body text-center">
        <h2 className="card-title mx-auto">{name}</h2>
        <p>{recipe}</p>
        <div
          onClick={() => handelAddToCartItem(item)}
          className="card-actions justify-center"
        >
          <button className="text-[#BB8506] bg-[#E8E8E8] btn btn-outline border-0 border-b-4  border-[#BB8506] btn-[#BB8506]">
            Add To Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
