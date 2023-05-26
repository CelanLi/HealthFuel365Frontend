import { Radio, Space, Tabs } from 'antd';
import { useState } from 'react';

import Product from "../../../components/product"

import Chips from '../../../assets/images/homepage/junkfood/chips.png'
import Friedchicken from '../../../assets/images/homepage/junkfood/friedchicken.png'
import Pommes from '../../../assets/images/homepage/junkfood/pommes.png'


const alternative1 = (
    <div className='homepage-alternative-product1'>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
    </div>)
const alternative2 = (
    <div className='homepage-alternative-product1'>
        <Product/>
        <Product/>
    </div>)
const alternative3 = (
    <div className='homepage-alternative-product1'>
        <Product/>
        <Product/>
        <Product/>
    </div>)

const junkfoodList = [1,2,3,4]

const App = () => {


  return (
    <div>
      <Tabs
        tabPosition="left"
        size='small'
        centered= "true"
        type='card'
        items = {junkfoodList.map((v,i) =>
            {
                const id = String(i + 1);
                return {
                    label: (
                        <div className='homepage-junk-food-icon'>
                            <img className='homepage-junk-food-icons' src={Chips}/>
                        </div>
                    ),
                    key: id,
                    children: id,
                  };
            })

        }


        // items={new Array(6).fill(null).map((_, i) => {
        //   const id = String(i + 1);
        //   if (id == 1) { var alternative = alternative1 }
        //   if (id == 2) { var alternative = alternative2 }
        //   if (id == 3) { var alternative = alternative3 }
        //   return {
        //     label: (
        //         <div>
        //             <img className='homepage-junk-food-icons' src={Chips}/>
        //         </div>
        //     ),
        //     key: id,
        //     children: alternative,
        //   };
        // })}
      />
    </div>
  );
};
export default App;