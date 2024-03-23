import React from 'react'

import {BsFacebook, BsTwitterX, BsInstagram, BsLinkedin} from "react-icons/bs"

const HeaderTop = () => {
  return (
    <div className='hidden border-b border-gray-200 sm:block'>
        <div className='container py-4'>
            <div className='flex items-center justify-between'>
                <div className='hidden gap-2 lg:flex'>
                    <div className='header_top_icon_wrapper'>
                        <BsFacebook />
                    </div>
                    <div className='header_top_icon_wrapper'>
                        <BsTwitterX />
                    </div>
                    <div className='header_top_icon_wrapper' >
                        <BsInstagram  />
                    </div>
                    <div className='header_top_icon_wrapper'>
                        <BsLinkedin />
                    </div>
                </div>
                <div className='text-gray-500 text-[12px]'> 
                    <strong>FREE SHIPPING</strong>
                    THIS WEEK ORDER OVER - $55
                </div>
                <div className='flex gap-4'>
                    <select name='currency' 
                            id="currency"
                            className='text-gray-500 text-[12px] w-[70px]'>
                        <option value="USD $">USD $</option>
                        <option value="EUR €">EUR €</option>
                        <option value="KES K">KES K</option>
                    </select>

                    <select name='language' 
                            id='language'
                            className='text-gray-500 text-[12px] w-[80px]'>
                        <option value="English">English</option>
                        <option value="French">French</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderTop
