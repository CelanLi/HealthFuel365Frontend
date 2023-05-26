// import css file
import './index.css';
import {Link} from 'react-router-dom'

//import components
import Topnav from "../components/topnav"
import Footer from "../components/footer"
import Category from "../components/category"
import Product from "../components/product"
import Carousel from "../components/carousel"
import Alternative from "../components/alternatives"


//import junkfood images
import Chips from '../../assets/images/homepage/junkfood/chips.png'
import Friedchicken from '../../assets/images/homepage/junkfood/friedchicken.png'
import Pommes from '../../assets/images/homepage/junkfood/pommes.png'
import Nutri from '../../assets/images/homepage/NutriScore-on-Package.jpg'

function Page() {
  return (
    // HTML structure
    <div className="homepage-wrap"> 
      
      {/* homepage body */}
      <div className='homepage-body'>

        {/* The carousel ads block */}
        {/* TODO */}
        <div className='homepage-carousel-ad'>
          {/* <img className='homepage-carousel-ads' src={Carousel1}/> */}
          <Carousel/>
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
            <div className='homepage-product-1'>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
            </div>
            <div className='homepage-product-1'>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
            </div>
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
            <Alternative/>
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
    </div>
  );
}

export default Page;