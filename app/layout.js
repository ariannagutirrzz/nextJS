
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/store">Store</a></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
