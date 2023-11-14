import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleChange() {
    setIsDarkMode((prevValue) => !prevValue);
  }

  return (
    <>
      <Header value={isDarkMode} handleChange={handleChange} />
    </>
  );
}

export default App;
