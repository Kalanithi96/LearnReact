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
      <Header isDark={isDarkMode} handleChange={handleChange} />
      <main className={(isDarkMode)?"dark main--dark":""}>
        <Content />
      </main>
    </>
  );
}

export default App;
