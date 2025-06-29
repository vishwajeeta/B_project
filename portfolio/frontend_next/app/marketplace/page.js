import React from 'react'

const marketplace = () => {
  return (
    <>
    HeroBanner
    <div className="products-heading">
      <h2>Best Selling Products</h2>
      <p>software to soft-copy notes and more</p>
      
    </div>
    <div className="product-container">
      {['product1','product2'].map((product)=>product)}
    </div>
    Footer
    
    </>
  )
}

export default marketplace
