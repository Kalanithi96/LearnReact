import {useState, useEffect} from "react";

function App() {
  const [starWarsData, setStarWarsData] = useState({});

  useEffect(()=>{
    fetch("https://swapi.dev/api/people/1")
      .then(res=>res.json())
      .then(data=>setStarWarsData(JSON.stringify(data)))
  }, [starWarsData])

  return (
    <>
      <p>{JSON.stringify(starWarsData,null,2)}</p>
    </>    
  )
}

export default App
