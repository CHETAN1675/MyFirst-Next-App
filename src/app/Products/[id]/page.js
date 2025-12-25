import Image from "next/image";

export default async function ProductDetailsPage({ params }) {
  const res = await fetch(
    `https://dummyjson.com/products/${params.id}`
  );
  const product = await res.json();

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>

       <Image
        src="/image.jpg"  
        alt={product.title||"Product Image"}
        width={400}                    
        height={300}                    
      />

    </div>
  ); 
}
