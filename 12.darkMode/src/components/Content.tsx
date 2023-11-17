import logo from "./../assets/react-bg.svg"

export default function Content() {
  return (
        <div>
            <h1 className="content--title">Fun facts about React</h1>
            <ul className="content--list">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <img src={logo} className="bg--img"/>
        </div>
    );
}
