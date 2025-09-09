import React from 'react';
import HeroBanner from '../components/marketplace/HeroBanner';
import FooterBanner from '../components/marketplace/FooterBanner';
import Product from '../components/marketplace/Product';
import {productsLists} from './productslists'
const marketplace = () => {
  
  return (
    <>
    {/* <HeroBanner/> */}
    
    <div className="products-heading">
      <h2>Best Selling Products</h2>
      <p>software to soft-copy notes and more</p>
      
    </div>
    <div className="products-container">
      {productsLists.map((product,index)=><Product key={index} product={product}/>)}
    </div>
    {/* <FooterBanner/> */}
    
    </>
  )
}

export default marketplace
