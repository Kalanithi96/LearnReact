import { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleChange() {
    setIsDarkMode((prevValue) => !prevValue);
  }

  return (
    <>
      <Header value={isDarkMode} handleChange={handleChange} />
      <Content />
    </>
  );
}

export default App;
