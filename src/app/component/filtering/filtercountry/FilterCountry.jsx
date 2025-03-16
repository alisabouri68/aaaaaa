// 'use client'
// import React, { useEffect, useState } from 'react'
// import { allproducts } from '../../header/db'
// import { UseFilterCountryStore } from '@/app/zustand/UseFilterCountryStore'
// import { UseFilterCountryIndex } from '@/app/zustand/UseFilterCountryIndex'
// function FilterCountry({ styles }) {
// const {countryIndex}=UseFilterCountryIndex()
//   const {countryValue , setCountryValue}=UseFilterCountryStore()
//   const [items, SetItemms] = useState([])
//   useEffect(() => {
//     const arrItems = allproducts[countryIndex]?.productsitems.map((country) => country.country.toString()) || []
//     const uniqueArray = [...new Set(arrItems)]
//     const updatedItems = [...uniqueArray, "تمام کشور ها"].reverse();
//     SetItemms(updatedItems)

//   }, [countryIndex])
//   return (
//     <div className={styles}>

//       {items.length > 0 ? items.map((x, i) => (
//         <div className="control-group" key={i}>
//           <label className="control control-radio text-2xl">
//             {x}
//             <input type="radio" name={x} checked={countryValue === x} value={x} onChange={(e)=>setCountryValue(e.target.value)} />
//             <div className="control_indicator"></div>
//           </label>

//         </div>
//       )) : null
//       }

//     </div>
//   )
// }

// export default FilterCountry