import './App.css'

function Header(){
  return(
    <>
      <header>
        <nav className="nav">
          <h1>App Number 3</h1>
        </nav>
      </header>
    </>
  )
}

function MainContent(){
  return(
    <>
      <h2>Menu</h2>
      <ol>
        <li>Dosa</li>
        <li>Podi Dosa</li>
        <li>Onion Dosa</li>
        <li>Masala Dosa</li>
      </ol>
    </>
  )
}

function Footer(){
  return(
    <>
      <footer>
        <small>2023 Developed by Kalanithi JP</small>
      </footer>
    </>
  )
}

function App() {

  return (
    <>
      <Header/>
      <MainContent/>
      <Footer/>
    </>
  )
}

export default App
