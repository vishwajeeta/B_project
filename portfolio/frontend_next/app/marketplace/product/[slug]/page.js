import React from "react";
import { productsLists} from "../../productslists";
const page = ({params}) => {  
  let data=productsLists.filter(productsLists=>productsLists.slug == params.slug)
  console.log(data)
  let image="../../."+data[0]["imgUrl"];
  console.log(image)
  return (
    <div className="product-detail-container">
      <div>
        <div className="image-container">
          <img src={image} alt="headphones" />
        </div>
        <div className="small-images-container" >{params.slug}</div>
      </div>
    </div>
  );
};

export default page;
