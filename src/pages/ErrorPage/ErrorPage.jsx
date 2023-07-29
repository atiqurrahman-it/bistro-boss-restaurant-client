import { Helmet } from "react-helmet-async";
import { Link, useRouteError } from "react-router-dom";

import errorImage from "../../assets/404.gif";

import { FaHome } from "react-icons/fa";

const ErrorPage = () => {
  const error = useRouteError();

  const my_button = {
    background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)",
    color: "#FFFFFF",
    padding: "0px 30px",
  };

  const iconStyle = {
    marginLeft: "8px",
    marginTop:"-5px",
    display:"inline",
  };

  return (
    <div className="min-h-screen">
      {/* web site title  */}
      <Helmet>
        <title>Bistro Boss/ErrorPage</title>
      </Helmet>

      <div className="flex justify-center items-center pt-10">
        <div className="text-center py-10">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p className="text-red-500">
            Page :<i> {error.statusText || error.message}</i>
          </p>
          <img src={errorImage} alt="img not Found " />

          <div>
            <Link to="/" >
              <button style={my_button} >Back To Home<FaHome style={iconStyle} className="text-2xl"/> </button>
            </Link>
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
