import { SyntheticEvent, useEffect, useState } from "react"

export default function Meme(){
    const [meme, setMeme] = useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect( () => {
        async function getMemeImage(){
            const memes = await fetch("https://api.imgflip.com/get_memes")
            const memesData = await memes.json();
            setAllMemes(memesData.data.memes)
        }
        getMemeImage()
    }, [])

    function handleClick(event:SyntheticEvent){
        event.preventDefault();
        const length = allMemes.length;
        const rand = Math.floor(Math.random() * length)
        const randomMeme:{url:string} = allMemes[rand]
        setMeme(
            (prevMeme) => {
                    return {
                        ...prevMeme,
                        randomImage:randomMeme.url
                    }
                }
            )
    }

    function handleChange(event:any){
        const {name, value} = event.target;
        setMeme(
            (prevMeme) => {
                    return {
                        ...prevMeme,
                        [name]:value
                    }
                }
            )
    }

    return (
        <main>
            <form className="form">
                <input 
                    type="text"
                    placeholder="Top Text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom Text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button" 
                    onClick={handleClick}
                >
                    Get a new meme image 📸
                </button>
            </form>
            <div className="meme--container">
                <p className="meme--text top-text">{meme.topText}</p>
                <p className="meme--text bottom-text">{meme.bottomText}</p>
                <img src={meme.randomImage} className="meme--image"/>
            </div>
        </main>
    )
}