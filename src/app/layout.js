// app/layout.js

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor:"#a8e61aff", padding: "1rem", borderBottom: "1px solid #ccc" }}>
          <h1>My Site Title</h1>
          <p>Navigation placeholder</p>
        </header>

        <main style={{ padding: "1rem" }}>
          {children}
        </main>

        <footer style={{ backgroundColor:"black", color:"white", padding: "1rem", borderTop: "1px solid #ccc" }}>
          <p>© 2025 My Website. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
