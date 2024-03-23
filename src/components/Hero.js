import React from 'react'

const Hero = () => {

    let settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
    }

    const slideData = [
        {
            id: 0,
            img: "/banner1.jpg",
            title: "Trending Item",
            mainTitle: "WOMEN'S LATEST FASHION SALE",
            price: "$20",
        },
        {
            id: 1,
            img: "/banner2.jpg",
            title: "Trending Accessories",
            mainTitle: "MODERN SUNGLASSES",
            price: "$15",
        },
        {
            id: 2,
            img: "/banner3.jpg",
            title: "Sale Offer",
            mainTitle: "NEW FASHION SUMMER SALE",
            price: "$30",
        },
    ]


  return (
    <div>
      
    </div>
  )
}

export default Hero
