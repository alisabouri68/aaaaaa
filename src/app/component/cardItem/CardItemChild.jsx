'use client'
import React from 'react'
import Card from './Card';
function CardItemChild({ filteredProducts }) {

    return (
        <>
            {filteredProducts.length > 0 &&
                filteredProducts.map((xxx) => {
                  
                    return (
                        <Card xxx={xxx}  key={xxx.id} darkstyle='shadow shadow-gray-700 dark:shadow-gray-200 dark:hover:bg-gray-500'/>
                    );
                })}
        </>
    )
}

export default CardItemChild