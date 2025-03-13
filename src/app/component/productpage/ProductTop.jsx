import React from 'react'
import ProductSlider from './ProductSlider'
import ProductInfo from './ProductInfo'

function ProductTop() {
  return (
   <>
<div className='w-full flex flex-wrap *:w-full *:lg:w-[50%] *:p-5'>
<ProductSlider/>
<ProductInfo/>
</div>
   </>
  )
}

export default ProductTop