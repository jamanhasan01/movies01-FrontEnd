import { useContext } from "react"
import { Link } from "react-router-dom"
import { authContext } from "../provider/AuthProvider"

const SignUp = () => {

  let {createUser}=useContext(authContext)

  let handleSignUp=(e)=>{
    e.preventDefault()
    let form=new FormData(e.target)
    let email=form.get('email')
    let password=form.get('password')
    
    createUser(email,password)
    .then(res=>console.log(res.user)
    )
    
    
  }
  return (
    <div className="max-w-[500px] mx-auto my-20 border border-white/50 rounded-xl">
        
    <form onSubmit={handleSignUp} className="card-body">
    <h1 className="text-2xl text-center">Registation</h1>
      <div className="form-control">
        <label className="label">
          <span className="label-text">User Name</span>
        </label>
        <input type="User Name" placeholder="User Name" name="username" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input type="password" placeholder="password" name='password' className="input input-bordered" required />
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Login</button>
      </div>
      <p className="text-center">All Ready Have An Account? <Link className='text-mainClr' to='/signin'>Login</Link></p>
    </form>
    </div>
  )
}

export default SignUp