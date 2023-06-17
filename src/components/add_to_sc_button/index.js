import "./index.css"

function AddToScButton({ onClick }) {
  return (
    <div className="add_container">
      <button onClick={onClick}/>
    </div>
  );
}

export default AddToScButton;
