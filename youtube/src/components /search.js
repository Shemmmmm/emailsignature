import { useState } from "react"; 
import { useNavigate } from "react-router-dom";

export default function Search(){
    const [text, setText] = useState('');
   const navigate = useNavigate();
    return(
        <>
        <input type='text' value={text} onChange={setText(text)} />
       < button onClick={navigate('/signin')} >Signin</button>
       </>
    );
}