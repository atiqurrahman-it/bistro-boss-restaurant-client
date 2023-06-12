import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import singUpLogo from "../../../assets/others/authentication2.png";
import { AuthContext } from "../../../providers/AuthProviders";
import SocialLogin from "../../shared/SocialLogin/SocialLogin";

const SingUp = () => {
  const [registerError, setRegisterError] = useState("");
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    // user registration
    setRegisterError(" ");
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        // update profile  start
        updateUser(result.user, data.name, data.photo_url)
          .then(() => {
            console.log("profile update");

            // save user info in MongoDB
            const saveUserInfo = { name: data.name, email: data.email };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUserInfo),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  console.log("userInfo save to DB ");
                  // form.reset();
                  Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: " Your account has been successfully created",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  //
                  navigate("/");
                }
              });
              
          })
          .catch((error) => {
            console.log(error);
            setRegisterError(error.message);
          });
        // update end
      })
      .catch((error) => {
        const errorMessage = error.message;
        setRegisterError(errorMessage);
      });
  };

  return (
    <>
      {/* web site title  */}
      <Helmet>
        <title>Bistro Boss/SingUp</title>
      </Helmet>
      <div className="hero min-h-screen bg-white ">
        <div className="hero-content flex-col justify-between lg:flex-row w-full">
          <div className="card md:mr-10 flex-shrink-0 w-full max-w-sm bg-white">
            <div className="card-body ">
              <h1 className="text-2xl font-bold text-center">SingUP </h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">
                      Name <span className="text-red-600"> *</span>{" "}
                    </span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    name="name"
                    placeholder="Enter Your Name "
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="form-text text-red-600">
                      Name is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">
                      Photo URL <span className="text-red-600"> *</span>{" "}
                    </span>
                  </label>
                  <input
                    {...register("photo_url", { required: true })}
                    type="text"
                    name="photo_url"
                    placeholder="Enter Your Photo URL "
                    className="input input-bordered"
                  />
                  {errors.photo_url && (
                    <span className="form-text text-red-600">
                      Name is required
                    </span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">
                      Email <span className="text-red-600"> *</span>{" "}
                    </span>
                  </label>
                  <input
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                    type="email"
                    name="email"
                    placeholder="Your email"
                    className="input input-bordered"
                  />
                  {errors.email?.type === "required" && (
                    <span className="form-text text-red-600">
                      Email is required
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="form-text text-red-600">
                      Email Not Valid
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">
                      Password <span className="text-red-600"> *</span>{" "}
                    </span>
                  </label>
                  <input
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 24,
                      pattern:
                        /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]/,
                    })}
                    type="password"
                    name="password"
                    placeholder="Your password"
                    className="input input-bordered"
                  />
                  {errors.password?.type === "required" && (
                    <span className="form-text text-red-600">
                      Password is required
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="form-text text-red-600">
                      password at list 6 character
                    </span>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <span className="form-text text-red-600">
                      password must be less then 24 character
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <div className="form-text text-red-600">
                      <span className="font-bold"> Password must have</span>{" "}
                      <br /> one Upper character <br /> one lower character{" "}
                      <br /> one special character <br /> one number{" "}
                    </div>
                  )}
                </div>

                <div className="mt-1">
                  <p className="text-error"> {registerError} </p>
                </div>

                <div className="form-control mt-6">
                  <input
                    className="btn btn-warning"
                    type="submit"
                    value="SingUP"
                  />
                </div>
              </form>

              <SocialLogin></SocialLogin>

              <p className="text-center">
                Already have an account?
                <Link to="/login" className="text-orange-600 text-bold ms-2">
                  Login Here
                </Link>
              </p>
            </div>
          </div>
          <div className="w-1/2 md:ml-10">
            <img src={singUpLogo} alt="logo not found" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingUp;
