import Link from "next/link";
import classes from "./products.module.css"


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

      <ul className={classes.list} >
         {data.products.map((product) => (
          <li key={product.id} className={classes.listItem}>
            <Link href={`/products/${product.id}`}  className={classes.link}>
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
    )
}