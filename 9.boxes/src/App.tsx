import './App.css';
import { useState } from 'react';
import boxes from "./assets/boxes";
import Box from './components/Box';

function App() {
  const [squares, setSquares] = useState(boxes);
  
  function toggle(id:number){
    setSquares(
      (prevSquares)=>{
        /* 
        Method 1:
        let newSquares:Array<{id:number,on:boolean}> = [];
        for (let i=0; i<prevSquares.length; i++){
          let currentSquare = prevSquares[i];
          if(currentSquare.id === id){
            let newSquare = {
              ...currentSquare,
              on: !currentSquare.on
            }
            newSquares.push(newSquare);
          } else{
            newSquares.push(currentSquare);
          }
        }
        return newSquares; 
        */
        
        return prevSquares.map(
          (square) => (square.id===id) ? {...square, on: !square.on} : square
        )
      }
    )
  }

  const squareElements = squares.map((square)=>(
    <Box key={square.id} square={square} onPress={toggle}/>
  ));

  return (
    <main>
      {squareElements}
    </main>
  )
}

export default App
