import { Link } from "react-router-dom"

const SignIn = () => {
  return (
  
      <div className="max-w-[500px] mx-auto my-20 border border-white/50 rounded-xl">
        
      <form className="card-body">
      <h1 className="text-2xl text-center">Login</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p className="text-center">dont have any account? <Link className='text-mainClr' to='/signup'>Register</Link></p>
      </form>
      </div>
    
  )
}

export default SignIn