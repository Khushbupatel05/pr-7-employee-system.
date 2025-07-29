import { useEffect } from "react";
import { useNavigate } from "react-router-dom"


const ProtectedRoute = ({isLoggedIn, component}) => {
    const navigate = useNavigate();
    useEffect(() => {
         let status = JSON.parse(localStorage.getItem("isLoggedin") || false);
        if(!status){
            navigate('/login')
        }
    },[]);

    if(!isLoggedIn){
        navigate('/login')
    }else {
        return(
            <>
                {component}
            </>
        )
    }
 
}

export default ProtectedRoute