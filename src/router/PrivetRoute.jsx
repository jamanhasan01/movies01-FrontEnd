import { useContext } from "react"
import { authContext } from "../provider/AuthProvider"
import { useNavigate } from "react-router-dom"


const PrivetRoute = ({children}) => {
    let {user}=useContext(authContext)
    
    if (user) {
        return children
    }

}

export default PrivetRoute