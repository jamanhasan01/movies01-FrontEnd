import { FaYoutube } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareFacebook } from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
  <nav>
    <div className="grid grid-flow-col gap-4 items-center text-4xl">
        <a href="https://www.youtube.com/"><FaYoutube></FaYoutube></a>
        <a href="https://www.instagram.com/"><AiFillInstagram></AiFillInstagram></a>
        <a href="https://www.facebook.com/"><FaSquareFacebook></FaSquareFacebook></a>
    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
    </div>
  )
}

export default Footer