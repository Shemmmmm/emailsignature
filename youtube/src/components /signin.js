import { useNavigate } from "react-router-dom";
export default function Signin() {
   
   const navigate = useNavigate();
    return (
        <button onClick= {() => navigate(-1)} >Sign in</button>
    );
}