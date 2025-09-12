// app/products/[slug]/page.jsx
import { productsLists } from "../../productsLists";
import { FaWhatsapp } from "react-icons/fa";


export default function ProductPage({ params }) {
  const product = productsLists.find(p => p.slug === params.slug);

  if (!product) {
    return (
      <div className="mx-auto max-w-2xl text-center py-20">
        <h1 className="text-2xl font-semibold">Product not found</h1>
      </div>
    );
  }
  const image = product.imgUrl.startsWith("./")
    ? product.imgUrl.replace("./", "/")
    : product.imgUrl;



const phoneNumber = "9741236051";
const baseUrl = "https://vishwajeetportfolio.vercel.app/marketplace";
const productUrl = `${baseUrl}/${product.slug}`;
const message = `Hi, I'm interested in buying ${product.name}.
Here’s the product link: ${productUrl}`;
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="product-detail-container max-w-4xl mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="image-container">
        <img
          src={image}
          alt={product.name}
          className="rounded-2xl shadow-md w-full object-cover"
        />
      </div>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="whitespace-pre-line text-gray-700">
          {product.description}
        </p>
        <p className="text-xl font-semibold text-blue-600">${product.price}</p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
          Buy Now
        </button>
<a
  href={whatsappUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700"
>
  <FaWhatsapp size={20} />
  Buy on WhatsApp
</a>


      </div>
    </div>
  );

  
}
export async function generateStaticParams() {
  return productsLists.map(p => ({ slug: p.slug }));
}



// import React from "react";
// import { productsLists } from "../../productslists";

// const Page = ({ params }) => {
//   const product = productsLists.find(p => p.slug === params.slug);

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   // if images are in public/about_icons/flutter.webp
//   const image = product.imgUrl.startsWith("./")
//     ? product.imgUrl.replace("./", "/")
//     : product.imgUrl;

//   return (
//     <div className="product-detail-container">
//       <div>
//         <div className="image-container">
//           <img src={image} alt={product.name} />
//         </div>
//         <div className="small-images-container">{params.slug}</div>
//         <h1>{product.name}</h1>
//         <p>{product.description}</p>
//         <p>Price: ${product.price}</p>
//       </div>
//     </div>
//   );
// };

// export default Page;

//-------------------------------------

// import React from "react";
// import { productsLists} from "../../productslists";
// const page = ({params}) => {  
//   let data=productsLists.filter(productsLists=>productsLists.slug == params.slug)
//   console.log(data)
//   let image="../../."+data[0]["imgUrl"];
//   console.log(image)
//   return (
//     <div className="product-detail-container">
//       <div>
//         <div className="image-container">
//           <img src={image} alt="headphones" />
//         </div>
//         <div className="small-images-container" >{params.slug}</div>
//       </div>
//     </div>
//   );
// };

// export default page;
