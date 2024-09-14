import React, { useState } from 'react'
import { MenuCustomList } from './Nav'
import { useNavigate } from 'react-router-dom'

function NavListMenu({ active, setactive }) {
    const navigate = useNavigate();

    return (<>
        <div className='flex mt-8 sticky top-0 rounded justify-center'>
            <ul className='sm:flex-row flex flex-col     sm:gap-16 gap-4 items-center font-serif '>
                <li className={`${active == "Headlines" ? "border-b-4" : ""} border-gray-600 cursor-pointer p-2 rounded`} onClick={() => {
                    setactive("Headlines")
                    navigate("/")
                }} >
                    Top-Headlines
                </li>
                <li className={`${active == "Technology" ? "border-b-4" : ""} border-gray-600 p-2 cursor-pointer rounded`} onClick={() => {
                    setactive("Technology")
                    navigate("/Technology")
                }} >Technology</li>
                <li className={`${active == "Business" ? "border-b-4" : ""} border-gray-600 p-2 cursor-pointer rounded`}
                    onClick={() => {
                        setactive("Business")
                        navigate("/Business")
                    }}
                >Business</li>
                <li className={`${active == "Entertainment" ? "border-b-4" : ""} border-gray-600 p-2 cursor-pointer rounded`}
                    onClick={() => {
                        setactive("Entertainment")
                        navigate("/Entertainment")
                    }}

                >Entertainment</li>
                <li className={`${active == "Sports" ? "border-b-4" : ""} border-gray-600 p-2 cursor-pointer rounded`}
                    onClick={() => {
                        setactive("Sports")
                        navigate("/Sports")
                    }}
                >Sports</li>
                <li className={`${active == "Science" ? "border-b-4" : ""} border-gray-600 p-2 cursor-pointer rounded`}
                    onClick={() => {
                        setactive("Science")
                        navigate("/Science")
                    }}

                >Science</li>
                <li className={`${active == "Health" ? "border-b-4" : ""} border-gray-600 p-2 cursor-pointer rounded`}
                    onClick={() => {
                        setactive("Health")
                        navigate("/Health")
                    }}

                >Health</li>

                <li>
                    <MenuCustomList />
                </li>
            </ul>

        </div>
        <div className='flex justify-center'>
            <hr color='black' className='text-black bg-black w-[90%] mb-2' />

        </div >
        <div className='flex justify-center'>
            <hr className='text-black w-[95%] ' />

        </div >
    </>
    )
}

export default NavListMenu



