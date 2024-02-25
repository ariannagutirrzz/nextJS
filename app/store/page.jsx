import React from 'react'
import Link from 'next/link'

function Store() {
  return (
    <div>
      <h1>Store</h1>
      <li><Link href="/store/categories">Categories</Link></li>
    </div>
  )
}

export default Store