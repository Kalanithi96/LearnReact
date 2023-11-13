import Header from "./components/Header";
import Body from "./components/Body";
import { useState } from "react";

function App() {
  let [user, setUser] = useState("Joe");

  return (
    <>
      <Header user={user}/>
      <Body user={user}/>
    </>
  )
}

export default App
