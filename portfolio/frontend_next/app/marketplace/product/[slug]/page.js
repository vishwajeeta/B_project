// app/products/[slug]/page.jsx
import { productsLists } from "../../productslists";
import { FaWhatsapp } from "react-icons/fa";


export async function generateMetadata({ params }) {
const product = productsLists.find(p => p.slug === params.slug);
  if (!product) {
    return {
      title: "Product Not Found | ASVSI Marketplace",
      description: "This Product could not be found.",
    };
  }
  const image = product.imgUrl.startsWith("./")
    ? product.imgUrl.replace("./", "/")
    : product.imgUrl;


  return {
    title: `${product.name}`,
    description: product.description,
    openGraph: {
      title: `${product.name}`,
      description: product.description,
      url: `https://vishwajeetportfolio.vercel.app/marketplace/product/${params.slug}`,
      siteName: "ASVSI Marketplace",
      images: [
        {
          url: image || "https://vishwajeetportfolio.vercel.app/default-og.png",
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      images: [image || "https://vishwajeetportfolio.vercel.app/default-og.png"],
    },
    keywords: [
      "Marketplace",
      "product",
      "Solidity",
      "Smart Contract",
      "digital",
      product.name
    ],
    alternates: {
      canonical: `https://vishwajeetportfolio.vercel.app/marketplace/product/${params.slug}`,
    },
  };
}


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
const baseUrl = "https://vishwajeetportfolio.vercel.app/marketplace/product";
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
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700" disabled>
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

