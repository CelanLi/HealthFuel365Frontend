import "./index.css";

function NovaScore({ nova }) {
  function getNovaScore(nova = "1.0") {
    return require(`../../../../assets/images/nova_score/novascore${nova}.jpeg`);
  }
  function getNovaText(nova = "1.0") {
    if (nova === "1.0") {
      return "Unprocessed or minimally processed foods";
    } else if (nova === "2.0") {
      return "Processed culinary ingredients";
    } else if (nova === "3.0") {
      return "Processed foods";
    } else if (nova === "4.0") {
      return "Ultra processed foods";
    } else return "Unknown Nova";
  }
  return (
    <div className="nova">
      <img src={getNovaScore(nova)} className="nova-img" />
      <p> {getNovaText(nova)} </p>
    </div>
  );
}

export default NovaScore;
