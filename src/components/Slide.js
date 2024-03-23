import React from 'react'
import Image from 'next/image'

const Slide = ({img, title, mainTitle, price}) => {
  return (
    <div className='relative border-none outline-none'>
      <div className="relative w-full h-[500px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
        <Image src={img} layout="fill" objectFit="cover" alt="banner" />
      </div>
      <div className='absolute left-[30px] md:left-[70px] top-[50%] -translate-y-[50%] space-y-2 max-w-[250px] sm:max-w-[350px] bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none lg:space-y-4'>
        <h3 className='text-green-500 text-[24px] lg:text-[28px]'>{title}</h3>
        <h2 className='text-blackish text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-1.2'>{mainTitle}</h2>
        <h3 className='text-[24px] text-gray-500'>
            starting at <strong className='text-[20px] md:text-[24px] lg:text-[30px]'>{price}</strong>.00
        </h3>
        <div className='text-white bg-blackish text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-accent'>Shop Now</div>
      </div>
    </div>
  )
}

export default Slide


