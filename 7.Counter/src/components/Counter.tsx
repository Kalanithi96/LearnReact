import { useState } from "react";

export default function Counter(){
    let [count, setCount] = useState(0);

    function add(){
        setCount((prevCount) => prevCount+1);
    }
    
    function subtract(){
        setCount((prevCount) => prevCount-1);
    }

    return(
        <div className="container">
            <div className="display">
                <h3>{count}</h3>
                <button className="add" onClick={add}>+</button>
                <button className="subtract" onClick={subtract}>-</button>
            </div>
        </div>
    );
}