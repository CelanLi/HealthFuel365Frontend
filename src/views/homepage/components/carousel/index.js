import { Carousel } from 'antd';
import "./index.css"


// size of carousel images: 1450*500
import Carousel1 from '../../../../assets/images/homepage/promocode.jpg'
import Carousel2 from '../../../../assets/images/homepage/Alnatura.jpg'
import Carousel3 from '../../../../assets/images/homepage/fitness.jpg'

const contentStyle = {
  height: '200px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const App = () => (
  <Carousel autoplay>
    <div>
      <div className="carousel-image-container">
        <img  src={Carousel1}/>
      </div>
    </div>
    <div>
      <div className="carousel-image-container">
        <img  src={Carousel2}/>
      </div>
    </div>
    <div>
      <div className="carousel-image-container">
        <img  src={Carousel3}/>
      </div>
    </div>
  </Carousel>
);
export default App;