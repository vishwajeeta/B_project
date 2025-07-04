import Link from 'next/link'
import React from 'react'

const Product = ({product:{name,imgUrl,price,slug}}) => {
  
  return (
    <div>
      <Link href={`/product/${slug}`}>
      <div className='product-card'>
      <img
      src={imgUrl}
      width={250}
      height={250}
      className='product-image'
      />
      <p className='product-name'>{name}</p>
      <p className='product-price'>${price}</p>
      </div>
      </Link>
    </div>
  )
}

export default Product
