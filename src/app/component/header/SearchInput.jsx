"use client"
import React, { useEffect, useState } from 'react'
import Container from './Container'
import { FaFire, FaSearch } from "react-icons/fa";
import { PulseLoader } from 'react-spinners'
import Link from 'next/link';
import { ModalParentHandler } from '@/app/zustand/ModalStoreParent';
function SearchInput() {
    const { isModal, setIsModal, index } = ModalParentHandler()
    const [val, setVal] = useState("")
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // Fetch data with error handling
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://67cd78d0dd7651e464ee7491.mockapi.io/api/v1/products")
                if (!response.ok) throw new Error('خطا در دریافت داده‌ها')
                const data = await response.json()
                setData(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    // Filter data based on search input
    const filteredData = data.filter(item =>
        item.description?.toLowerCase().includes(val.toLowerCase())
    )
    // Popular searches (first 5 items)
    const popularSearches = data.slice(0, 5)

    return (
        <div className='w-full h-full flex px-5'>
            <Container>
                <div className='w-full flex flex-col gap-5'>
                    {/* Search Input */}
                    <div className='relative'>
                        <input
                            className='px-5 py-3 w-full shadow-md shadow-gray-200 outline-none dark:shadow-gray-700 rounded-2xl pr-12'
                            placeholder='جستجو...'
                            value={val}
                            onChange={(e) => setVal(e.target.value)}
                            type="text"
                        />
                        <FaSearch className='absolute right-4 top-1/2 -translate-y-1/2 opacity-50' />
                    </div>

                    {/* Loading State */}
                    {loading && (
                        <div className='flex justify-center py-8'>
                            <PulseLoader color='#6b7280' size={10} />
                        </div>
                    )}

                    {/* Error State */}
                    {error && (
                        <div className='text-red-500 text-center py-4'>
                            {error}
                        </div>
                    )}

                    {/* Popular Searches */}
                   {!val &&( <div className='grid gap-4'>
                        <div className='flex gap-3 items-center text-orange-500'>
                            <FaFire />
                            <h6 className='font-semibold'>جستجوهای پرطرفدار</h6>
                        </div>
                        <div className='flex flex-wrap gap-3'>
                            {popularSearches.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setVal(item.description)}
                                    className='px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
                                >
                                    {item.description}
                                </button>
                            ))}
                        </div>
                    </div>)}

                    {/* Search Results */}
                    {!loading && !error && val && (
                        <div className='space-y-3 grid min-w-full h-[500px] !overflow-y-scroll pb-20 scrollbar-hide  rounded-lg p-3'>
                            {filteredData.length > 0 ? (
                                filteredData.map((item) => (
                                    <Link
                                    href={`/products/${item.title+"-"+item.id}`}
                                        key={item.id}
                                        className='p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md shadow-gray-200 dark:shadow-gray-700 transition-shadow'
                                        onClick={setIsModal}
                                    >
                                        <h3 className='font-medium'>{item.description}</h3>
                                        {item.description && (
                                            <p className='text-gray-500 mt-1'>
                                                {item.title}
                                            </p>
                                        )}
                                    </Link>
                                ))
                            ) : (
                                <div className='text-center py-6 text-gray-500'>
                                    نتیجه‌ای یافت نشد
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </Container>
        </div>
    )
}

export default SearchInput