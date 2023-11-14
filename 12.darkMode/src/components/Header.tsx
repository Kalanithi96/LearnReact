import ToggleButton from "./ToggleButton";

export default function Header(props: {
  value: boolean;
  handleChange: () => void;
}) {
  return (
    <header>
      <nav>
        <img src=""></img>
        <h2>React Facts</h2>
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
