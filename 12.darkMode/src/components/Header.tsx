import ToggleButton from "./ToggleButton";
import react from "./../assets/react.svg";

export default function Header(props: {
  value: boolean;
  handleChange: () => void;
}) {
  return (
    <header>
      <nav className="navbar">
        <img src={react} className="header--logo"/>
        <h2 className="header--title">React Facts</h2>
        <ToggleButton
          option1="Light"
          option2="Dark"
          value={props.value}
          handleChange={props.handleChange}
        />
      </nav>
    </header>
  );
}
