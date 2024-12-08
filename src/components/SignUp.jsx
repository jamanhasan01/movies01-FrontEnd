import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";

const SignUp = () => {
  const { createUser, setuser ,logInWithGoogle } = useContext(authContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  let handleGoogleLogin=()=>{
    logInWithGoogle()
    .then(res=>{
      
  
      setuser(res.user)
      toast.success('login successfully')
      navigate('/')
      
  })
  .catch(error=>toast.warn(error.message))
  }
  const handleSignUp = (e) => {
    
    e.preventDefault();
    const form = new FormData(e.target);
    const username = form.get("username");
    const email = form.get("email");
    const password = form.get("password");
    const photo = form.get('photo');

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 6 characters, include an uppercase letter, a lowercase letter, a number, and a special character."
      );
      return;
    }

    createUser(email, password)
      .then((res) => {
        let userObj = res.user;
        userObj.displayName = username;
        userObj.photoURL = photo;
        setuser(userObj);
        navigate('/signin');
        toast.success("Registration Successful!");
        e.target.reset();
      })
      .catch((error) => {
        toast.error(error.code || "Registration failed. Please try again.");
      });
  };

  return (
    <div className="max-w-[500px] mx-auto my-20 border border-white/50 rounded-xl">
      <form onSubmit={handleSignUp} className="card-body">
        <h1 className="text-2xl text-center">Registration</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input
            type="text"
            placeholder="User Name"
            name="username"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input
            type="text"
            placeholder="Photo Url"
            name="photo"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            className="input input-bordered"
            required
          />
          <div
            className="absolute right-3 top-[50%] transform -translate-y-[50%] cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <AiOutlineEyeInvisible size={20} />
            ) : (
              <AiOutlineEye size={20} />
            )}
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-mainClr">Sign Up</button>
      <button onClick={handleGoogleLogin} className="btn bg-mainClr mt-1"><FaGoogle></FaGoogle>Login With Google</button>
         
        </div>
        <p className="text-center">
          Already have an account?{" "}
          <Link className="text-mainClr" to="/signin">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
