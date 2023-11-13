/* 
import { useState } from "react";

export default function Box(props:{square:{id:number, on:boolean}}){
    
    const [on, setOn] = useState(props.square.on);

    const styles = {
        backgroundColor: on ? "#cccccc" : "#ffffff"
      }

    function onClickListener(){
        setOn(
            prevValue => !prevValue
        );
    }

    return(
        <div style={styles} className='box' onClick={onClickListener}>{props.square.id}</div>
    );
} 
*/

export default function Box(props:{square:{id:number, on:boolean}, onPress: (id:number)=>void}){
    
    const styles = {
        backgroundColor: props.square.on ? "#cccccc" : "#ffffff"
      }

    function onClickListener(id:number){
        props.onPress(id);
    }

    return(
        <div style={styles} className='box' onClick={()=>onClickListener(props.square.id)}>{props.square.id}</div>
    );
}