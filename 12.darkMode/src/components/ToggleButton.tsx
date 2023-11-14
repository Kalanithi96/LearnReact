export default function ToggleButton(props: {
  option1: string;
  option2: string;
  value: boolean;
  handleChange: () => void;
}) {
  return (
    <div className="toggle--container">
      <p>{props.option1}</p>
      <input
        type="checkbox"
        checked={props.value}
        onChange={props.handleChange}
        className="toggle--button"
        id="toggle"
      />
      <label htmlFor="toggle"></label>
      <p>{props.option2}</p>
    </div>
  );
}
{
    /*
        Credits to https://www.youtube.com/watch?v=N8BZvfRD_eU for toggle button.
    */
}