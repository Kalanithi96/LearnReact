import logo from "./Yin_yang.svg";
import fb from "./fb.png";
import gh from "./gh.png";
import insta from "./insta.png";
import twitter from "./twitter.png";
import "./app.css";

function Header(){
  return <div className="head">
    <img className="header-img" src={logo}/>
  </div>
}

function Body(){
  return <>
    <h1>Yin and Yang</h1>
    <h3>Order and Chaos</h3>
    <h4>From Kovai</h4>
    <span className="button-container">
      <button>Yin</button>
      <button>Yang</button>
    </span>
    <h3 className="subtitle">About</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sequi dignissimos repellendus ipsam repudiandae excepturi asperiores corporis. Eveniet modi ipsum fugiat ratione debitis error omnis tempora possimus quis placeat. Sed.</p>
    <h3 className="subtitle">Interesting facts</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi earum illo fugiat natus ducimus similique nam porro voluptatum corporis nesciunt error, cumque amet maiores laudantium! Voluptatem distinctio hic consequatur id.</p>
  </>
}

function Footer(){
  return <ul className="footer-list">
    <li><img src={fb} className="footer-icon"/></li>
    <li><img src={gh} className="footer-icon"/></li>
    <li><img src={twitter} className="footer-icon"/></li>
    <li><img src={insta} className="footer-icon"/></li>
  </ul>
}

function App() {
  return <div className="container">
    <Header/>
    <Body />
    <Footer />
  </div>
}

export default App;
