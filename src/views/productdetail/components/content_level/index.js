// 引入样式文件
import "./index.css";

function ContentLevel({degree}) {
  function getContentLevelSrc(degree="small") {
    return require(`../../../../assets/images/content_level_${degree}.png`);
  }
  return (
    <div className="content_level">
      <img src={getContentLevelSrc(degree)}></img>
    </div>
  );
}

export default ContentLevel;
