import React from 'react'
import ProductCard from './ProductCard'

const productsData = [
    {
        img: "/jacket.jpg",
        title: "Jacket",
        desc: "Men Yarn Fleece Full-Zip Jacket",
        rating: 4,
        price: "45.00"
    },
    {
        img: "/skirt.jpg",
        title: "Skirt",
        desc: "White Floral Wrap Midi Skirt",
        rating: 5,
        price: "55.00"
    },
    {
        img: "/partywear.jpg",
        title: "Party Wear",
        desc: "Women's party wear",
        rating: 3,
        price: "25.00"
    },
    {
        img: "/shirt1.jpg",
        title: "Shirt",
        desc: "Pure Garment Dyed Cotton Shirt",
        rating: 4,
        price: "45.00"
    },
    {
        img: "/sport.jpg",
        title: "Shirt",
        desc: "Pure Garment Dyed Cotton Shirt",
        rating: 3,
        price: "45.00"
    },
    {
        img: "/watch1.jpg",
        title: "Watch",
        desc: "Smart watches vital plus",
        rating: 4,
        price: "100.00"
    },
    {
        img: "/watch2.jpg",
        title: "Watch",
        desc: "Pocket watch Leather Pouch",
        rating: 3,
        price: "100.00"
    },

    
]

const NewProducts = () => {
  return (
    <div>
        <div className='container pt-16'>
            <h2 className='pb-4 text-2xl font-medium'>New Products</h2>
            <div className='grid grid-cols-1 gap-10 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl;gap-y-10'>
                {
                    productsData.map((item, index) => {
                        return(
                            <ProductCard 
                            key={index}
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                            rating={item.rating}
                            price={item.price}
                            />
                        )

                    })
                }
            </div>
        </div>
    </div>
  )
}

export default NewProducts
