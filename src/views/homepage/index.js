import React, { useState } from 'react';

// import css file
import './index.css';
import { Link } from "react-router-dom";

//import components
import Category from "../../components/category"
import Carousel from "./components/carousel"
import Alternative from "./components/alternatives"
import Recommendation from './components/recommendation';
import Nutri from '../../assets/images/homepage/NutriScore-on-Package.jpg'
import Refresh from '../../assets/images/homepage/refresh.png'
import Alnatura from '../../assets/images/homepage/suppliers/alnatura.png'
import Davert from '../../assets/images/homepage/suppliers/davert.png'
import Alpro from '../../assets/images/homepage/suppliers/alpro.png'
import Seitenbacher from '../../assets/images/homepage/suppliers/seitenbacher.png'
import Seeberger from '../../assets/images/homepage/suppliers/seeberger.png'
import Rapunzel from '../../assets/images/homepage/suppliers/rapunzel.png'

function Page() {
  const [refreshKey, setRefreshKey] = useState(0);
  

  const handleRefresh = () => {
    setRefreshKey(prevKey => prevKey + 1);
  };
  // store current path
  localStorage.setItem("navigationHistory", JSON.stringify(window.location.pathname));
  return (
    // HTML structure
    <div className="homepage-wrap"> 
      
      {/* homepage body */}
      <div className='homepage-body'>

        {/* The carousel ads block */}
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
          <div className='homepage-recommendation-wrap'>
            <div className='homepage-title'>
              <p className='homepage-title-1'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Special Recommend for You&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
              <p className='homepage-title-2'>{">>>"}</p>
            </div>
            <div className='homepage-refresh' onClick={handleRefresh}>
              <p className='homepage-title-3'> Change </p>
              <img src={Refresh} className='homepage-refresh-icon'/>
            </div>
            
          </div>

          {/* the recommended products */}
          <div className='homepage-product'>
            <Recommendation key={refreshKey}/>
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
          <div className='homepage-suppliers-icon'>
            <Link to="https://www.alnatura.de/de-de/" className='homepage-suppliers-image'>
              <img src={Alnatura}/>
            </Link>
            <Link to="https://www.alpro.com/de/" className='homepage-suppliers-image'>
              <img src={Alpro}/>
            </Link>
            <Link to="https://www.davert.de/" className='homepage-suppliers-image'>
              <img src={Davert}/>
            </Link>
            <Link to="https://www.seitenbacher.de/" className='homepage-suppliers-image'>
              <img src={Seitenbacher}/>
            </Link>
            <Link to="https://www.seeberger.de/" className='homepage-suppliers-image'>
              <img src={Seeberger}/>
            </Link>
            <Link to="https://www.rapunzel.de/" className='homepage-suppliers-image'>
              <img src={Rapunzel}/>
            </Link>
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
              {/*<a href='/faqs'>*/}
              <Link to='/faqs'>
                <button className='homepage-learn-more'>Learn More {">>>"}</button>
              </Link>
              {/*</a>*/}
            </div>
          </div>

        </div>



      </div> 
    </div>
  );
}

export default Page;