import React from 'react';
import HeroBanner from '../components/marketplace/HeroBanner';
import FooterBanner from '../components/marketplace/FooterBanner';
import Product from '../components/marketplace/Product';

const product = [
    {
      name: "NFT marketplace smart contract",
      description: "NFT marketplace smart contract (Keep nft in MARKETPLACE CONTRACT)",
      imgUrl: "./about_icons/flutter.webp",
      price:"300",
      slug:"first"
    },
    {
      name: "Files/image storage Dapp",
      description: "store files in decentralized manner",
      imgUrl: "./marketplace/Banner.png",
      price:"120",
      slug:"second"
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
      imgUrl: "./marketplace/Banner.png",
      price:"100",
      slug:"first"
    },
  ]
const marketplace = () => {
  return (
    <>
    {/* <HeroBanner/> */}
    
    <div className="products-heading">
      <h2>Best Selling Products</h2>
      <p>software to soft-copy notes and more</p>
      
    </div>
    <div className="products-container">
      {product.map((product,index)=><Product key={index} product={product}/>)}
    </div>
    {/* <FooterBanner/> */}
    
    </>
  )
}

export default marketplace
