import doge from "./../assets/doge.png"

export default function Header(){
    return(
        <header className="header">
            <img src={doge} className="header--image"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 6</h4>
        </header>
    )
}