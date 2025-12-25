export default function ProductDetailsPage({ params }) {
  const { id } = params;

  return (
    <main>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "16px",
          maxWidth: "400px",
        }}
      >
        <h2>Product {id} details page — content coming soon!</h2>
      </div>
    </main>
  ); 
}
