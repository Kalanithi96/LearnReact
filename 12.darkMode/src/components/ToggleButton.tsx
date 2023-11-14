export default function ToggleButton(props: {
  option1: string;
  option2: string;
  value: boolean;
  handleChange: () => void;
}) {
  return (
    <div>
      <p>{props.option1}</p>
      <input
        type="checkbox"
        checked={props.value}
        onChange={props.handleChange}
      />
      <p>{props.option2}</p>
    </div>
  );
}
