import React from 'react';
import HeroBanner from '../components/marketplace/HeroBanner';
import FooterBanner from '../components/marketplace/FooterBanner';
import Product from '../components/marketplace/Product';

const product = [
    {
      name: "10th standard",
      description: "Sample Portfolio using HTML/css and js.",
      imgUrl: "./about_icons/flutter.webp",
      price:"100",
      slug:"first"
    },
    {
      name: "10th standard",
      description: "Sample Portfolio using HTML/css and js.",
      imgUrl: "./about_icons/flutter.webp",
      price:"100",
      slug:"first"
    },
    {
      name: "10th standard",
      description: "Sample Portfolio using HTML/css and js.",
      imgUrl: "./about_icons/flutter.webp",
      price:"100",
      slug:"first"
    },
    {
      name: "10th standard",
      description: "Sample Portfolio using HTML/css and js.",
      imgUrl: "./about_icons/flutter.webp",
      price:"100",
      slug:"first"
    },
  ]
const marketplace = () => {
  return (
    <>
    <HeroBanner/>
    <div className="products-heading">
      <h2>Best Selling Products</h2>
      <p>software to soft-copy notes and more</p>
      
    </div>
    <div className="products-container">
      {product.map((product)=><Product key={product._id} product={product}/>)}
    </div>
    <FooterBanner/>
    
    </>
  )
}

export default marketplace
