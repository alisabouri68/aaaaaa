// "use client"
// import React from 'react'
// import { FaPenAlt, FaPenFancy, FaPen, FaMouse, FaPrint } from "react-icons/fa";
// import { TbGoGame } from "react-icons/tb";
// import { GiSewingMachine } from "react-icons/gi";
// import { GiSewingNeedle } from "react-icons/gi";
// import Container from '../header/Container'
// import { dbmegamenu } from '../header/db';
// import { allproducts } from '../header/db';
// import Link from 'next/link';
// import Image from 'next/image';
// import img from '../../../../public/img/logo.png'
// import Card from '../cardItem/Card';

// function SliderProduct({ styles, i, title, href, colorText, }) {
//     const icons = [<FaPenAlt />, <FaPenFancy />, <FaPen />, <FaMouse />, <FaPrint />, <TbGoGame />, <GiSewingMachine />, <GiSewingNeedle />]
//     return (
//         <section className={`${styles} flex min-h-full w-full bgimage`}>
//             <Container>
//                 <div className='w-full h-full flex flex-col'>
//                     <div className={`${styles} text-white items-center flex gap-5 py-5 px-3`}>
//                         <div className='inline-block '><span className='text-3xl'>{icons[i]}</span></div>
//                         <div className='text-2xl font-semibold'>{title}</div>
//                         <div className=''><Link href={`/category/${href}`} className={`bg-white rounded-lg px-3 py-1 ${colorText}`}><span>مشاهده همه</span></Link></div>
//                     </div>
//                     <div className='w-full'>
//                         <div className='flex items-center w-full py-3 *:min-h-[260px] *:max-h-[260px] *:w-[50%] *:lg:w-40 px-3 *:shrink-0'>
//                             {dbmegamenu[i] ? dbmegamenu[i].submenu.map((item, index) => {
//                                 return (

//                                     allproducts ? allproducts.map((val, ix) => {
//                                         if (item[1] && item[1] === val.products) {
//                                             return (
//                                                 <Card xxx={val.productsitems[0]} styles='hidden' key={val.productsitems[0].id} darkstyle='bg-white text-black ' />




//                                             )

//                                         }
//                                     }) : <span>wwwwwwwwwwwwwwwwww</span>
//                                 )
//                             }) : <span>fffffffffffffffffffffffff</span>}
//                         </div>
//                     </div>
//                 </div>
//             </Container>
//         </section>
//     )
// }

// export default SliderProduct