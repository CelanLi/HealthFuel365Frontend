// 引入样式文件
import "./index.css";

function ShoppingcartNutri({nutri}) {
  function getNutriLevelSrc(nutri = "A") {
    return require(`../../assets/images/nutri_score/nutriscore${nutri}.jpeg`);
  }
  return (
    <div className="sc_nutri">
      <img src={getNutriLevelSrc(nutri)}></img>
    </div>
  );
}

export default ShoppingcartNutri;
