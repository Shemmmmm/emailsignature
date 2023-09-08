import { useState } from "react"; 

export default function Search(){
    const [text, setText] = useState('');
    return(
        <input type='text' value={text} onChange={setText(text)} />
    );
}