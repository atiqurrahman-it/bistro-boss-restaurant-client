import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();
  // total price calculation
  const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);

  const handelDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // delete item form cart
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              // update item cart
              refetch();
              // delete successful message
              Swal.fire("Deleted!", "Your item  has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-full">
      {/* web site title  */}
      <Helmet>
        <title>Bistro Boss/My Cart</title>
      </Helmet>

      <div className="uppercase md:flex justify-evenly h-[60px]">
        <h1>total Order : {cart?.length}</h1>
        <h1>total Price : $ {totalPrice}</h1>
        <button className="btn btn-warning btn-sm"> PAY</button>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="text-end">${item.price}</td>
                <th>
                  <button
                    onClick={() => handelDelete(item)}
                    className="btn btn-ghost btn-sm bg-red-600 text-white hover:bg-red-900"
                  >
                    <FaTrash />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
