import url from "./../assets/doge.png"

export default function Meme(){
    function getMemeImage(){
        console.log("Hello")
    }
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top Text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom Text"
                    className="form--input"
                />
                <button 
                    className="form--button" 
                    onClick={getMemeImage}
                >
                    Get a new meme image 📸
                </button>
            </div>
            <img src={url} className="meme--image"/>
        </main>
    )
}