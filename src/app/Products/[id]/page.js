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
    </div>
  ); 
}
