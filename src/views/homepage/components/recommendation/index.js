import React, { useState, useEffect } from 'react'

import { getCookie } from '../../../../util/cookie'
import { getRecommendation } from '../../../../services/recommendationService'

import Product from "../../../../components/product"

function Recommendation() {

    const [recommendations,setRecommendations] = useState([])

    // when load the page, get recommendations
    useEffect(() => {
        fetchRecommendations()
    },[])

    const fetchRecommendations = async () => {
        try {
            setTimeout(async () => {
                const recommendationlist = await (getRecommendation());
                console.log(recommendationlist + "recommendation to test");
                setRecommendations(recommendationlist);
              }, 300);
        } catch (error) {
            console.error("recommendation get error:", error);
        }
    }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
        {recommendations.map((recommendationProduct) => {
            return(
                <div key={recommendationProduct.productID} style={{ marginBottom: '10px' }}>
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

export default Recommendation