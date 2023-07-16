import { Carousel } from "antd";
import "./index.css";

import Carousel1 from "../../../../assets/images/homepage/promocode.jpeg";
import Carousel2 from "../../../../assets/images/homepage/alnatura.jpg";
import Carousel3 from "../../../../assets/images/homepage/gym.jpg";

const App = () => (
  <Carousel autoplay>
    <div className="carousel-img">
      <img src={Carousel1} />
    </div>
    <div className="carousel-img">
      <img src={Carousel2} />
    </div>
    <div className="carousel-img">
      <img src={Carousel3} />
    </div>
  </Carousel>
);
export default App;
