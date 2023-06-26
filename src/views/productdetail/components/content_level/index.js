import "./index.css";

function ContentLevel({degree}) {
  function getContentLevelSrc(degree="low") {
    return require(`../../../../assets/images/content_level_${degree}.png`);
  }
  return (
    <div className="content_level">
      <img src={getContentLevelSrc(degree)}></img>
    </div>
  );
}

export default ContentLevel;
