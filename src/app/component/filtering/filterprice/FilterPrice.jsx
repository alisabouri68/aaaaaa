// import React from "react";
// import { UseMinePriceStore } from "@/app/zustand/UseMinePriceStore";
// function FilterPrice({ styles }) {
//   const { minPrice, maxPrice, changeValueMax, changeValueMin } =
//     UseMinePriceStore();
//   return (
//     <div className={styles}>
//       <div>
//         <div className="flex items-center gap-5 ">
//           <div>
//             <span className="text-2xl">از</span>
//           </div>
//           <div className="border-b border-b-foreground">
//             <input
//               className="text-4xl w-full rounded-lg outline-none pr-10 py-5  "
//               // value={minPrice}
//               onChange={(e) => changeValueMin(e.target.value)}
//               type="number"
//               placeholder={minPrice}

//             />
//           </div>
//           <div>
//             <span>تومان</span>
//           </div>

//         </div>

//       </div>
//       <div className="flex items-center gap-5 ">
//         <div>
//           <span className="text-2xl">تا</span>
//         </div>
//         <div className="border-b border-b-foreground">
//           <input
//             className="text-4xl w-full rounded-lg outline-none pr-10 py-5 "
//             // value={maxPrice}
//             onChange={(e) => changeValueMax(e.target.value)}
//             type="number"
//             placeholder={maxPrice}
//           />
//         </div>
//         <div>
//           <span>تومان</span>
//         </div>

//       </div>
//       <div></div>
//     </div>
//   );
// }

// export default FilterPrice;
