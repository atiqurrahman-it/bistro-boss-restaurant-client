import { useContext, useState } from "react";
import { FaGooglePlusG } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [error, setError] = useState("");

  const { loginWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handelGoogleLogin = () => {
    setError(" ");

    loginWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        // save user info mongoDB
        // save user info in MongoDB
        const saveUserInfo = {
          name: loggedUser.displayName,
          email: loggedUser.email,
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUserInfo),
        })
          .then((res) => res.json())
          .then(() => {
            console.log("userInfo save to DB ");
            // page redirect
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        const message = error.message;
        console.log(message);
        setError(message);
      });
  };

  return (
    <div>
      <p className="text-danger"> {error} </p>
      <div className="divider">OR</div>
      <div className="text-center">
        <button
          onClick={handelGoogleLogin}
          className="btn btn-circle btn-outline btn-warning mr-2"
        >
          <FaGooglePlusG className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
