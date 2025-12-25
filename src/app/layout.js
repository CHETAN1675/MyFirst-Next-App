import Link from "next/link"
import Image from "next/image"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            backgroundColor: "#a8e61aff",
            padding: "1rem",
            borderBottom: "1px solid #ccc",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/images/logo.png"
              alt="Site logo"
              width={120}
              height={40}
              priority
              style={{ marginRight: "1rem" }}
            />
            <h1 style={{ margin: 0 }}>My Site Title</h1>
          </div>

          <nav>
            <Link href="/" style={{ marginRight: "1rem" }}>
              Home
            </Link>
            <Link href="/products">Products</Link>
          </nav>
        </header>

        <main style={{ padding: "1rem" }}>
          {children}
        </main>

        <footer
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "1rem",
            borderTop: "1px solid #ccc",
          }}
        >
          <p>© 2025 My Website. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
