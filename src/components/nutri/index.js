import "./index.css";

function ShoppingcartNutri({nutri}) {
  function getNutriLevelSrc(nutri = "A") {
    return require(`../../assets/images/nutri_score/nutriscore${nutri}.png`);
  }
  return (
    <div className="sc_nutri">
      <img src={getNutriLevelSrc(nutri)} alt={`Nutritional score ${nutri}`}></img>
    </div>
  );
}

export default ShoppingcartNutri;
