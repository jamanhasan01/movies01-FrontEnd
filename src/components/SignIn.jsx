import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"; // Import React Hook Form
import { authContext } from "../provider/AuthProvider";

const SignIn = () => {
  const { signInUser, setuser } = useContext(authContext);
  const navigate = useNavigate();

  // Initialize useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    const { email, password } = data;
    signInUser(email, password).then((res) => {
      setuser(res.user);
      navigate("/");
    });
  };

  return (
    <div className="max-w-[500px] mx-auto my-20 border border-white/50 rounded-xl">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <h1 className="text-2xl text-center">Login</h1>

        {/* Email Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>

        {/* Submit Button */}
        <div className="form-control mt-6">
          <button type="submit" className="btn bg-mainClr text-white/80">
            Login
          </button>
        </div>

        {/* Registration Link */}
        <p className="text-center">
          Don't have an account?{" "}
          <Link className="text-mainClr" to="/signup">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
