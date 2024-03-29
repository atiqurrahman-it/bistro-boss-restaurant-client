import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { FaShoppingCart }  from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/userAdmin";
const Header = () => {
  const [isAdmin]=useAdmin();
  const { user, logOutUser } = useContext(AuthContext);
  const [cart]=useCart()

  const handelLogOut = () => {
    logOutUser()
      .then(() => {
        console.log("logout ");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navList = (
    <>
      <li>
        <Link to="/"> Home </Link>
      </li>
      <li>
        <Link to="/contactUs"> CONTACT US </Link>
      </li>
      {
        isAdmin ? <li><Link to="/dashboard/adminHome"> DASHBOARD </Link></li> : <li><Link to="/dashboard/userHome"> DASHBOARD </Link></li>
      }
      
      <li>
        <Link to="/menu"> Our Menu </Link>
      </li>
      <li>
        <Link to="/order/salad"> Order Food </Link>
      </li>
      {user ? (
        <>
          <li>
            <a onClick={handelLogOut}> LogOut </a>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login </Link>
          </li>
          <li>
            <Link to="/sing-up">SingUP</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-[#0f121266] text-white h-20 mb-4 max-w-screen-xl ">
      <div className="navbar-start ">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact drop text-black dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navList}
          </ul>
        </div>
        <Link>
          <img
            src="menue logo"
            className="w-20 h-8 md:w-40 md:h-10 "
            alt="logo Not found"
          />
          {/* <p className="ms-2 hidden sm:block normal-case text-xl">
            KidzCarLand
          </p> */}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">{navList}</ul>
      </div>
      <div className="navbar-end items-center">
    
          <Link to="/dashboard/my-cart">
            <div className="indicator mr-5">
              <FaShoppingCart/>
              <span className="badge badge-sm indicator-item">{cart?.length || 0} </span>
            </div>
          </Link>
       

        {user && (
          <div>
            {user?.photoURL ? (
              <>
                <img
                  title={user?.displayName}
                  className="w-10 me-2 h-10 rounded-full"
                  src={user?.photoURL}
                  alt="logo"
                />
              </>
            ) : (
              <>
                <img
                  title={user?.displayName}
                  className="w-10 me-2 h-10 rounded-full"
                  src="user  logo"
                  alt="av logo"
                />
              </>
            )}
          </div>
        )}

        

      </div>
    </div>
  );
};

export default Header;
