import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Card from "./components/Card.js";
import data from "./assets/data.js";
import "./index.css"

function App(){

    const cards = data.map(
        (item) => <Card 
            key={item.id}
            item={item}
            //{...item} = id:item.id, title:item.title, ... => Spreading
            />
    )

    return(
        <div>
            <Navbar/>
            <Hero/>
            <div className="cardholder">
                {cards}
            </div>
        </div>
    )
}

export default App;