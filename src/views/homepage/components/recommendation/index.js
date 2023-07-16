import React, { useState, useEffect } from 'react'

import { getRecommendation } from '../../../../services/recommendationService'

import Product from "../../../../components/product"
import { LoadingScreen } from '../../../../components/loading'

function Recommendation() {
  const [isLoading, setIsLoading] = useState(true);
  const [recommendations,setRecommendations] = useState([])
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // when load the page, get recommendations
    useEffect(() => {
        fetchRecommendations()
    },[])

    const fetchRecommendations = async () => {
      try {
        console.log(isLoading)
        setTimeout(async () => {
            const recommendationlist = await (getRecommendation());
            console.log(recommendationlist + "recommendation to test");
            setRecommendations(recommendationlist);
            setIsLoading(false);
          }, 300);
      } catch (error) {
        console.error("recommendation get error:", error);
      }
    }

  // listen the change of size of window
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    const calculateItemWidth = () => {
        if (windowWidth >= 1400) {
          return '15% ';
        } else if (windowWidth >= 1100) {
          return '20%';
        } else if (windowWidth >= 900) {
          return '25%';
        } else {
            return '40%';
        }
      };

      if (isLoading) {
        return <LoadingScreen />;
      } 
      else {
        return (
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
              
              {recommendations.map((recommendationProduct) => {
                  return(
                      <div key={recommendationProduct.productID} className='recommendation-wrap-product' style={{
                          marginBottom: '20px',
                          width: calculateItemWidth()
                        }}>
                          <Product productID = {recommendationProduct.productID}
                                  productName = {recommendationProduct.productName}
                                  productPrice = {recommendationProduct.productPrice}
                                  nutriScore = {recommendationProduct.nutriScore}
                                  imageUrl = {recommendationProduct.imageUrl}
                                  capacity = {recommendationProduct.capacity}/>
                      </div>
                  )})}
          </div>
        )
      }
}

export default Recommendation