import Link from "next/link";

export default function ProductsPage(){
    return(
        <main>
      <h1>Products Page</h1>
      <p>Select a product to view details:</p>

      <ul>
        {Array.from({ length: 10 }, (_, i) => {
          const id = i + 1;
          return (
            <li key={id}>
              <Link href={`/Products/${id}`}>
                Product's {id} 
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
    )
}