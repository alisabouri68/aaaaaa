import React, { use } from 'react'
import ProductPage from '@/app/component/productpage/ProductPage'
function page({params}) {
    const {product} = use(params)
    console.log(product)
  return (
    
    
    
    <>
<ProductPage product={product}>



</ProductPage>
    
    
    </>
  )
}

export default page