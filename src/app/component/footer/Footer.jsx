import React from 'react'
import { CiDeliveryTruck, CiTimer, CiDollar } from "react-icons/ci";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { PiGooglePlayLogoThin } from "react-icons/pi";
import { AiOutlineAndroid } from "react-icons/ai";
import { AiOutlineApple } from "react-icons/ai";
import { SlSocialInstagram } from "react-icons/sl";
import Container from '../header/Container';
function Footer() {
    return (
        <footer className='text-sm'>

            <div className='flex items-center justify-center dark:bg-gray-500 py-2'>
                <Container>
                    <ul className='flex items-center justify-evenly flex-wrap'>
                        <li className='grid *:py-1'>
                            <span className='text-7xl flex justify-center'>
                                <CiTimer />
                            </span>
                            <span>خدمات 24 ساعته</span>
                        </li>
                        <li className='grid *:py-1'>
                            <span className='text-7xl flex justify-center'>
                                <CiDeliveryTruck />
                            </span>
                            <span>ارسل رایگان و به موقع</span>
                        </li>
                        <li className='grid *:py-1'>
                            <span className='text-7xl flex justify-center'>
                                <HiOutlineArrowPathRoundedSquare />
                            </span>
                            <span>امکان مرجوع و تعویض</span>
                        </li>
                        <li className='grid *:py-1'>
                            <span className='text-7xl flex justify-center'>
                                <CiDollar />
                            </span>
                            <span>امکان مقایسه قیمت </span>
                        </li>

                    </ul>
                </Container>
            </div>
            <div className='bg-amber-500 p-2 text-gray-600'>
                <Container>
                    <div className=''>
                        <ul className='flex flex-wrap '>
                            <li className=' grid justify-center w-[50%] p-2 lg:w-[20%]'>
                                <span className='text-black mb-2 text-lg '>راهنما</span>
                                <ul className='grid *:py-1.5 '>
                                    <li>
                                        <span>چگونگی ثبت سفارش</span>

                                    </li>
                                    <li>
                                        <span>چگونگی پرداخت</span>

                                    </li>
                                    <li>
                                        <span>چگونگی ارسال کالا</span>

                                    </li>
                                </ul>
                            </li>
                            <li className=' grid justify-center w-[50%] lg:w-[20%] p-2'>
                                <span className='text-black mb-2 text-lg'>خدمات مشتریان</span>
                                <ul className='grid *:py-1.5  '>
                                    <li>
                                        <span>چگونگی بازگشت کالا</span>

                                    </li>
                                    <li>
                                        <span>اطلاع رسانی</span>

                                    </li>
                                    <li>
                                        <span>پرسش‌های متداول</span>

                                    </li>
                                </ul>
                            </li>
                            <li className=' grid items-center w-full mt-2 lg:m-0 p-2  md:w-[50%] lg:w-[40%]'>
                                <span className='text-black text-lg text-center'>درباره ما</span>
                                <ul className=''>
                                    <li>
                                        <p className='leading-10'>فروشگاه اینترنتی لوازم تحریر ویرگول آماده ارائه خدمات 24 ساعته به شما عزیزان است. این فروشگاه از سال 96 تاسیس شده و یکی از بهترین و کامل‌ترین مراکز فروش لوازم مورد نیاز شماست.</p>

                                    </li>

                                </ul>
                            </li>
                            <li className='grid gap-5 items-center w-full mt-2 lg:m-0  p-2 md:w-[50%] lg:w-[20%]'>
                                <span className='text-black text-lg text-center'>ارتباط با ما</span>
                                <ul className='flex flex-wrap text-4xl py-3 justify-evenly'>
                                    <li>
                                        <span><SlSocialInstagram /></span>

                                    </li>
                                    <li>
                                        <span><PiGooglePlayLogoThin /></span>

                                    </li>
                                    <li>
                                        <span><AiOutlineAndroid /></span>

                                    </li>
                                    <li>
                                        <span><AiOutlineApple /></span>

                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </Container>
            </div>


        </footer>
    )
}

export default Footer