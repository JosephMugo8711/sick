import React from 'react'

const Navbar = () => {
  return (
    <div className='hidden lg:block'>
        <div className='container'>
            <div className='flex gap-10 py-4 mx-auto font-medium w-fit text-blackish'>
                <div className='relative cursor-pointer navbar_link'>HOME</div>
                <div className='relative cursor-pointer navbar_link'>CATEGORIES</div>
                <div className='relative cursor-pointer navbar_link'>{`MEN'S`}</div>
                <div className='relative cursor-pointer navbar_link'>{`WOMEN'S`}</div>
                <div className='relative cursor-pointer navbar_link'>JEWELRY</div>
                <div className='relative cursor-pointer navbar_link'>PERFUME</div>
                <div className='relative cursor-pointer navbar_link'>BLOG</div>
                <div className='relative cursor-pointer navbar_link'>HOT OFFERS</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
