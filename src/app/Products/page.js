import Link from "next/link";
export const metadata = {
title:"Products Store - Products List"
}
export default async function ProductsPage(){

  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

    return(
        <main>
      <h1>Products Page</h1>
      <p>Select a product to view details:</p>

      <ul>
         {data.products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
    )
}