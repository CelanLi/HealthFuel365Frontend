import "./index.css"

function AddToScButton({ onClick, disabled }) {
  const containerClassName = "add_container" + (disabled ? " disabled" : "")
  return (
    <div className = {containerClassName}>
      <button onClick = { onClick } disabled ={ disabled }/>
    </div>
  );
}

export default AddToScButton;
