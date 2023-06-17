import { useState } from 'react';
import './index.css'

import Product from "../../../../components/product"

import Chips from '../../../../assets/images/homepage/junkfood/chips.png'
import Friedchicken from '../../../../assets/images/homepage/junkfood/friedchicken.png'
import Pommes from '../../../../assets/images/homepage/junkfood/pommes.png'

const alternative0 = (
    <div className='alternative-product'>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
    </div>)
const alternative1 = (
    <div className='alternative-product'>
        <Product/>
        <Product/>
        <Product/>
    </div>)
const alternative2 = (
    <div className='alternative-product'>
        <Product/>
        <Product/>
    </div>)
const alternative3 = (
    <div className='alternative-product'>
        <Product/>
        <Product/>
        <Product/>
    </div>)
const alternative4 = (
    <div className='alternative-product'>
        <Product/>
        <Product/>
    </div>)
const alternative5 = (
    <div className='alternative-product'>
        <Product/>
        <Product/>
        <Product/>
    </div>)


const Tab101 = () => {
    const [value, setValue] = useState(0);
    const className = (baseName, isSelected) => 
      (isSelected ? [baseName].concat('selected') : [baseName]).join(' ');
    return (
        <div className='alternative-wrap'>
            <div className="alternative-nav">
                <div className="alternative-nav-tabs">
                    <div className='alternative-nav-row'>
                        <div className={className('alternative-tab-item', value === 0)} onClick={() => setValue(0)} >
                            <img src={Chips} className='alternative-tab-icon'/>
                        </div>
                        <div className={className('alternative-tab-item', value === 1)} onClick={() => setValue(1)}>
                            <img src={Friedchicken} className='alternative-tab-icon'/>
                        </div>
                        <div className={className('alternative-tab-item', value === 2)} onClick={() => setValue(2)}>
                            <img src={Pommes} className='alternative-tab-icon'/>
                        </div>
                    </div>
                    <div className='alternative-nav-row'>
                        <div className={className('alternative-tab-item', value === 3)} onClick={() => setValue(3)}>
                            <img src={Chips} className='alternative-tab-icon'/>
                        </div>
                        <div className={className('alternative-tab-item', value === 4)} onClick={() => setValue(4)}>
                            <img src={Friedchicken} className='alternative-tab-icon'/>
                        </div>
                        <div className={className('alternative-tab-item', value === 5)} onClick={() => setValue(5)}>
                            <img src={Pommes} className='alternative-tab-icon'/>
                        </div>
                    </div>
                </div>

                <div className="alternative-panels">
                    {value === 0 && <div className="alternative-panel-item">
                        {alternative0}
                    </div>}
                    {value === 1 && <div className="alternative-panel-item">
                        {alternative1}
                    </div>}
                    {value === 2 && <div className="alternative-panel-item">
                        {alternative2}
                    </div>}
                    {value === 3 && <div className="alternative-panel-item">
                        {alternative3}
                    </div>}
                    {value === 4 && <div className="alternative-panel-item">
                        {alternative4}
                    </div>}
                    {value === 5 && <div className="alternative-panel-item">
                        {alternative5}
                    </div>}
                </div>
            </div>
        </div>
        )
}

export default Tab101;