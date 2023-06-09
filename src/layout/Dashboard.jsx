import { NavLink , Outlet } from "react-router-dom";

import { FaHome,FaWallet ,FaRegCalendarAlt,FaShoppingCart,FaList} from 'react-icons/fa';
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart]=useCart()
  return (
    <div className="drawer drawer-mobile">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col items-center justify-center">
      {/* <!-- Page content here --> */}
      <Outlet></Outlet>
      <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    
    </div> 
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
      <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content uppercase">
        {/* <!-- Sidebar content here --> */}
        <li><NavLink to='/dashboard/'> <FaHome> </FaHome> Admin Home </NavLink ></li>
        <li><NavLink  to='/dashboard/reservation'> <FaRegCalendarAlt></FaRegCalendarAlt> reservation  </NavLink ></li>
        <li><NavLink  to='/dashboard/history' > <FaWallet></FaWallet> payment history  </NavLink ></li>

        

        <li><NavLink  to='/dashboard/my-cart'>
             <div className="indicator mr-1 flex items-center justify-start">
              <FaShoppingCart/>
              <span className="badge badge-sm indicator-item">{cart?.length ||0} </span>
             </div> 
          my cart  </NavLink ></li>

        <li><NavLink  to='/dashboard/all-user'> all users  </NavLink ></li>

        <div className="divider"></div>

        <li><NavLink  to="/"><FaHome> </FaHome>  Home </NavLink ></li>
        <li><NavLink  to="/menu/"> <FaList/> Our Menu  </NavLink ></li>
        <li><NavLink  to='/order/salad'> Our Food  </NavLink ></li>

      </ul>
    
    </div>
  </div>
  );
};

export default Dashboard;
