// import css file
import './index.css';
import {Link} from 'react-router-dom'

//import components
import Topnav from "../components/topnav"
import Footer from "../components/footer"
import Category from "../components/category"

//import carousel images
import Carousel1 from '../../assets/images/homepage/Healthy-Snacks.jpg'

//import junkfood images
import Chips from '../../assets/images/homepage/junkfood/chips.png'
import Friedchicken from '../../assets/images/homepage/junkfood/friedchicken.png'
import Pommes from '../../assets/images/homepage/junkfood/pommes.png'
import Nutri from '../../assets/images/homepage/NutriScore-on-Package.jpg'

function Page() {
  return (
    // HTML structure
    <div className="homepage-wrap">

      {/* navigation bar */}
      <Topnav/>
      
      {/* homepage body */}
      <div className='homepage-body'>

        {/* The carousel ads block */}
        {/* TODO */}
        <div className='homepage-carousel-ad'>
          <img className='homepage-carousel-ads' src={Carousel1}/>
        </div>

        {/* categories */}
        <div className='homepage-category'>

          {/* the title of blocks on homepage */}
          {/* links should be changes to categories */}
          <div className='homepage-title'>
            <p className='homepage-title-1'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Assortments&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p className='homepage-title-2'>{">>>"}</p>
          </div>
          
          {/* category component */}
          <Category/>

        </div>

        {/* recommendations */}
        <div className='homepage-recommendation'>

          {/* the title of blocks on homepage */}
          <div className='homepage-title'>
            <p className='homepage-title-1'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Special Recommend for You&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p className='homepage-title-2'>{">>>"}</p>
          </div>

          {/* the recommended products */}
          {/* TODO */}
          <div className='homepage-product'>

          </div>

        </div>
        
        {/* suppliers */}
        <div className='homepage-supplier'>

          {/* the title of blocks on homepage */}
          <div className='homepage-title'>
            <p className='homepage-title-1'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our Reputable Suppliers&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p className='homepage-title-2'>{">>>"}</p>
          </div>

          {/* the suppliers' icons */}
          {/* TODO */}
          <div className='homepage-suppliers-icon'>

          </div>

        </div>

        {/* Alternatives of Junk Foods */}
        <div className='homepage-alternative'>

          {/* the title of blocks on homepage */}
          <div className='homepage-title'>
            <p className='homepage-title-1'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Alternatives of Junk Foods&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p className='homepage-title-2'>{">>>"}</p>
          </div>

          {/* the alternatives area */}
          <div className='homepage-alternative-block'>

            {/* two rows of icons */}
            <div className='homepage-junkfood-icon'>

              <div className='homepage-junkfood-icon1'>
                {/* add hyperlinks on pictures */}
                {/* add text of categories on pictures */}
                <a href='/product'>
                  <img className='homepage-junk-food-icons' src={Chips}/>
                </a>
                
                <img className='homepage-junk-food-icons' src={Friedchicken}/>
                <img className='homepage-junk-food-icons' src={Pommes}/>
              </div>

              <div className='homepage-junkfood-icon1'>
                <img className='homepage-junk-food-icons' src={Chips}/>
                <img className='homepage-junk-food-icons' src={Friedchicken}/>
                <img className='homepage-junk-food-icons' src={Pommes}/>
              </div>

            </div>

            {/* TODO */}
            <div className='homepage-alternative-product'>

            </div>

          </div>

        </div>

        {/* introduction to nutri-score */}
        <div className='homepage-nutri-score'>

          {/* the title of blocks on homepage */}
          <div className='homepage-title'>
            <p className='homepage-title-1'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HealthFuel365——Your Online Healthy Food Retailing Store&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p className='homepage-title-2'>{">>>"}</p>
          </div>

          {/* the nutri-score block */}
          <div className='homepage-nutri-score-block'>

            {/* text */}
            <div className='homepage-nutri-score-introduction'>
              <p className='homepage-nutri-score-title'>Nutri-Score</p>
              <span className='homepage-nutri-score-content'>
              It can translates the nutritional quality of a product into a five-letter code
               (A, B, C, D, and E), while A represents the best nutritional quality, 
               and E represents the worst nutritional quality.
              </span>
            </div>

            {/* images */}
            <div className='homepage-nutri-score-to-faqs'>
              <img className='homepage-nutri-score-image' src={Nutri}></img>
              <a href='/faqs'>
                <button className='homepage-learn-more'>Learn More {">>>"}</button>
              </a>
            </div>
          </div>

        </div>



      </div>

      {/* footer */}
      <Footer/>
    </div>
  );
}

export default Page;