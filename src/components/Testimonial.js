import React from 'react'
import Image from 'next/image'

const Testimonial = () => {
  return (
    <div>
        <div className='container grid-cols-2 py-16'>
            <h2 className='pb-4 text-2xl font-medium'>Testimonials</h2>
            <div className='grid lg:grid-cols-[300px,1fr] gap-4'>
                <div className='grid p-6 border border-gray-300 rounded-2xl place-items-center lg:p-0'>
                    <div className='flex flex-col items-center gap-1 text-center'>
                        <Image
                        className='inline-block rounded-full'
                        src="/user1.jpg"
                        width={80}
                        height={80}
                        alt='profile'
                        />
                        <h2 className='font-black text-gray-500 text-[20px]'>Jowamu</h2>
                        <p>CEO & Founder Petinder</p>
                        {/* <Image 
                            className='inline-block py-2'
                            src="" 
                            width={30} 
                            height={30} 
                            alt="quotes"
                        /> */}
                        <p className='max-w-[200px] text-gray-500'>
                           Wow, I couldn't believe my luck when I stumbled upon this amazing discount on shoes! Not only did I find the perfect pair that I've been eyeing for months, but I also saved a significant amount of money. The quality is exceptional, and the style is exactly what I was looking for. Thank you for the fantastic deal!
                        </p>
                    </div>
                </div>
                <div className='bg-red-600 bg-[url(/cta-banner.jpg)] bg-cover h-[500px] rounded-2xl grid place-items-center'>
                    <div className='bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3'>
                        <button className='p-2 text-white rounded-md bg-blackish'>50% DISCOUNT</button>
                        <h2 className='text-2xl font-extrabold text-[#272727]'>Summer Collection</h2>
                        <p className='text-gray-500 text-[20px]'>
                            Starting @ $20 <strong>Shop Now</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Testimonial
