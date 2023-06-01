import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const SingUp = () => {
       
    const [registerError, setRegisterError] = useState("");
    const {createUser,updateUser}=useContext(AuthContext)

    const handelSingUP=(event)=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo_url = form.profile_photo.value;
    console.log(email, password, name,photo_url);

    setRegisterError("");
    // validation
    if (password.length < 6) {
      setRegisterError("Passwords must be at least 6 characters long");
      return;
    }
     else if (!/(?=.*[!@#$%^&*])/.test(password)) {
      setRegisterError(
        "Passwords must include at least one  special character"
      );
      return;
    } else if (password === "" && email === "" && password === "") {
      setRegisterError("please fill up register form !!");
    }

    // user registration 
    createUser(email,password)
    .then(result=>{
        const loggedUser=result.user
        console.log(loggedUser)

          // update profile  start

          updateUser(result.user, name,photo_url)
          .then(() => {
            console.log("profile update");
          })
          .catch((error) => {
            console.log(error);
            setRegisterError(error.message);
          });
          // update end 
          
        form.reset()
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: ' Your account has been successfully created',
            showConfirmButton: false,
            timer: 1500
          })
    })
    .catch((error) => {
        const errorMessage = error.message;
        setRegisterError(errorMessage)
      });



    }
    return (
        <div className="hero min-h-screen bg-white ">
        <div className="hero-content flex-col justify-between   lg:flex-row w-full">
          <div className="w-1/2 md:ml-10">
            <img src={singUpLOgo} alt="logo not found" />
          </div>
          <div className="card md:mr-10 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body ">
              <h1 className="text-2xl font-bold">SingUP </h1>
              <form onSubmit={handelSingUP}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    placeholder="Enter Your Name "
                    className="input input-bordered"
                  />
                </div>
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
                    name="password"
                    placeholder="Your password"
                    className="input input-bordered"
                  />
                
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="profile_photo"
                    placeholder="Your password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
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
             
    
               {/* <SocialLogin></SocialLogin> */}
    
              <p className="text-center">
                Already have an account?
                <Link  to='/login' className="text-orange-600 text-bold ms-2">
                  Login Here 
                </Link>
              </p>
            </div>
          </div>
        </div>
        </div>
    );
};

export default SingUp;