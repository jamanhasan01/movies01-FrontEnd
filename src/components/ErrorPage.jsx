import { Link } from "react-router-dom"
import { FaSadCry } from "react-icons/fa";
const ErrorPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center gap-4 flex-col">
        <h1 className="text-9xl font-extrabold">404</h1>
        <h2 className="text-6xl font-bold">Ops..!!!</h2>
        <h3 className="text-2xl font-semibold flex gap-2">Page Not Found <FaSadCry></FaSadCry></h3>
        <Link className="btn bg-mainClr" to={'/'}>Go Back Home</Link>
    </div>
  )
}

export default ErrorPage