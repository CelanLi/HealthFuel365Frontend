import { Carousel } from 'antd';


// size of carousel images: 1450*500
import Carousel1 from '../../../../assets/images/homepage/Healthy-Snacks.jpg'
import Carousel2 from '../../../../assets/images/homepage/snacks2.jpg'

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
        <img  src={Carousel1}/>
    </div>
    <div>
        <img  src={Carousel2}/>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);
export default App;