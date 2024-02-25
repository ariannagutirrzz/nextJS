import React from 'react'
import Link from 'next/link'
function Categories() {
  return (
    <div>
        <h1>Categories</h1>
            <ul>
                <li><Link href="/store/categories/laptops">Laptops</Link></li>
                <li><Link href="/store/categories/desktops">Desktops</Link></li>
                <li><Link href="/store/categories/phones">Phones</Link></li>
                <li><Link href="/store/categories/tablets">Tablets</Link></li>
            </ul>
    </div>
  )
}

export default Categories