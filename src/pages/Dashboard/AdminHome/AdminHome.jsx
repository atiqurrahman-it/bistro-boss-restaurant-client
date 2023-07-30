import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaWallet,FaUsers,FaTruckMoving,FaRestroom } from "react-icons/fa";
const AdminHome = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-stats");
      return res.data;
    },
  });

  return (
    <div className="w-full px-4">
      <h2 className="text-3xl my-3">Hi, {user.displayName}</h2>
 
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 ">
        <div className="card text-white" style={{background: "linear-gradient(90deg, #BB34F5 0%, #FCDBFF 100%)"}}>
          <div className="card-body ">
            <div className="flex justify-center items-center gap-4">
            <div> <FaWallet className="text-4xl" /> </div> 
            <div className="">
            <h1 className="text-2xl">${stats.revenue}</h1>
            <p> Revenue</p>
            </div>
            </div>
          </div>
        </div>
        <div  className="card text-white" style={{background: "linear-gradient(90deg, #D3A256 0%, #FDE8C0 100%)"}}>
        <div className="card-body ">
            <div className="flex justify-center items-center gap-4">
            <div> <FaUsers className="text-4xl" /> </div> 
            <div className="">
            <h1 className="text-2xl">{stats.users}</h1>
            <p> Customers</p>
            </div>
            </div>
          </div>
        </div>
        <div className="card  text-white" style={{background: "linear-gradient(90deg, #FE4880 0%, #FECDE9 100%)"}}>
        <div className="card-body ">
            <div className="flex justify-center items-center gap-4">
            <div> <FaRestroom className="text-4xl" /> </div> 
            <div className="">
            <h1 className="text-2xl">{stats.products}</h1>
            <p> Products</p>
            </div>
            </div>
          </div>
        </div>
        <div className="card text-white" style={{background: "linear-gradient(90deg, #6AAEFF 0%, #B6F7FF 100%)"}}>
        <div className="card-body ">
            <div className="flex justify-center items-center gap-4">
            <div> <FaTruckMoving className="text-4xl" /> </div> 
            <div className="">
            <h1 className="text-2xl">{stats.orders}</h1>
            <p> Orders</p>
            </div>
            </div>
          </div>
        </div>
      </div>






    </div>
  );
};

export default AdminHome;
