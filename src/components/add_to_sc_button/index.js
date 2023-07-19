import "./index.css"

function AddToScButton({ onClick, disabled }) {
  /* used to assign corresponding classname based on the "disabled" value */
  const containerClassName = "add_container" + (disabled ? " disabled" : "");
  return (
    <div className = {containerClassName}>
      <button onClick = { onClick }/>
    </div>
  );
}

export default AddToScButton;