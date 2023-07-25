import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrash,FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  // using tank stack query because user create update delete then user interface update

    // const { data: users = [], refetch } = useQuery(["users"], async () => {
    // const res = await fetch("http://localhost:5000/users");
    // return res.json();
    const [axiosSecure]=useAxiosSecure();
    const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data

  });

  // make admin 
  const handelMakeAdmin=user=>{
    fetch(`http://localhost:5000/users/admin/${user._id}`,{
        method:"PATCH"
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.modifiedCount){
            refetch()
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: `${user.name} is an admin now!`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
  }

  const handelDeleteUser = (user) => {
    console.log("delete user ",user);
  };

  return (
    <div className="w-full">
      {/* web site title  */}
      <Helmet>
        <title>Bistro Boss/All users </title>
      </Helmet>
      <h1 className="text-3lx font-semibold ">total user {users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,index) => (
              <tr key={user._id}>
                <th>{index+1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    {
                        user.role==='admin' ? "admin" : <>
                        <button onClick={()=>handelMakeAdmin(user)} className="bg-yellow-600 btn-ghost btn-md text-2xl hover:bg-yellow-700 text-white"><FaUsers/></button>
                        </>
                    }
                    </td>
                <td>
                  <button
                    onClick={() => handelDeleteUser(user)}
                    className="bg-red-600 btn btn-md border-0 hover:bg-red-500 text-white"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
