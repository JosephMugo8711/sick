import React from 'react'

import {BsSearch} from "react-icons/bs"
import {BiUser} from "react-icons/bi"
import {FiHeart} from "react-icons/fi"
import {HiOutlineShoppingBag} from "react-icons/hi"

const HeaderMain = () => {
  return (
    <div className='py-6 border-b border-gray-200'>
        <div className='container items-center justify-between sm:flex'> 
            <div className='pb-4 text-4xl font-bold text-center sm:pb-0 text-blackish'>Sick</div>

            <div className='w-full sm:w-[300px] md:w-[70%] relative'>
                <input 
                  className='w-full p-2 px-4 border border-gray-200 rounded-lg'
                  type="text" 
                  placeholder='Enter any product name....'/>
                <BsSearch  className='absolute top-0 right-0 mt-3 mr-3'  size={20}/>
            </div>

            <div className='hidden text-gray-500 lg:flex text-[30px] gap-4'>
                <BiUser />
                <div className='relative'>
                    <FiHeart />
                    <div className='absolute top-0 right-0 bg-red-600 rounded-full w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1'>0</div>
                </div>

                <div className='relative'>
                    <HiOutlineShoppingBag />
                    <div className='absolute top-0 right-0 bg-red-600 rounded-full w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1'>0</div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default HeaderMain
