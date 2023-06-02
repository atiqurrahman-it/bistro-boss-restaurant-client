import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import loginImage from "../../../assets/others/authentication2.png";
import "./Login.css";
// for captcha
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import Swal from "sweetalert2";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [disabled,setDisabled]=useState(true)

  const {logInUser}=useContext(AuthContext)
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  // useRef user korte partam 
  const handelVerifyCaptcha = (event) => {
    const user_captcha = event.target.value;
    if (user_captcha.length === 6) {
      if (validateCaptcha(user_captcha) === true) {
        setDisabled(false);
      } else {
        setDisabled(true)
      }
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.pass.value;
    console.log("password",password)
    // user login 
    setLoginError(" ")
    logInUser(email,password)
    .then((result) => {
      // Signed in 
      const loggedUser = result.user;
      console.log(loggedUser)
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: " user login successful",
        showConfirmButton: false,
        timer: 1500,
      });
    })
    .catch((error) => {
      const errorMessage = error.message;
      setLoginError(errorMessage)
      console.log(errorMessage)
    });

  };
  return (
    <div className="hero min-h-screen bg-white ">
      <div className="hero-content flex-col justify-between lg:flex-row w-full">
        <div className="w-1/2 md:ml-10">
          <img src={loginImage} alt="logo not found" />
        </div>
        <div className="card md:mr-10 flex-shrink-0 w-full max-w-sm  bg-white">
          <div className="card-body ">
            <h1 className="text-2xl font-bold text-center">Login </h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  placeholder="Your email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  required
                  name="pass"
                  placeholder="Your password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  
                  onChange={handelVerifyCaptcha}
                  type="text"
                  required
                  name="password"
                  placeholder="Type tha captcha above"
                  className="input input-bordered"
                />
              </div>

              <div className="mt-1">
                <p className="text-error"> {loginError} </p>
              </div>
              <div className="form-control mt-6">
                <input
                disabled={disabled}
                  className="btn btn-[#D1A054B3]"
                  type="submit"
                  value="SingIn"
                />
              </div>
            </form>

            {/* <SocialLogin></SocialLogin> */}

            <p className="text-center">
              New here?
              <Link to="/sing-up" className="text-orange-600 text-bold ms-2">
                Create a New Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
