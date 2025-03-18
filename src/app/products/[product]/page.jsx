import React, { use } from 'react'
import ProductPage from '@/app/component/productpage/ProductPage'
function page({ params }) {
  const { product } = use(params)
  return (
    <>
      <ProductPage product={product} />
    </>
  )
}
export default page