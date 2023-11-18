import ToggleButton from "./ToggleButton";
import react from "./../assets/react.svg";

export default function Header(props: {
  isDark: boolean;
  handleChange: () => void;
}) {
  return (
    <header>
      <nav className={`${props.isDark ? 'nav--dark dark' : ''}`}>
        <img src={react} className="header--logo"/>
        <h2 className="header--title">React Facts</h2>
        <ToggleButton
          option1="Light"
          option2="Dark"
          value={props.isDark}
          handleChange={props.handleChange}
        />
      </nav>
    </header>
  );
}
