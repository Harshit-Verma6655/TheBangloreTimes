import React, { useState } from 'react'
import NavListMenu from './NavListMenu'



function Header({ setactive, active }) {
    const currentDate = new Date();
    const [visible, setVisible] = useState(false);
    return (
        <>
            <p className='text-center text-xs flex gap-5 justify-center font-semibold'>Bengaluru <span className='text-gray-500'>International. India.</span></p>
            <div className='text-center px-2 relative'>

                <span className='sm:text-6xl text-4xl font-serif font-black mb-5'>The Global Times</span>
                <div className='absolute sm:top-8 top-12 font-serif '>{currentDate.toDateString()}</div>
            </div>



            <div className='mt-1'>
                <div onClick={() => setVisible(!visible)} className={`mt-10 sm:hidden ${!visible ? "block" : "hidden"}`} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>
                </div>

                <div className={`mt-10 relative ${visible ? "block" : "hidden"} sm:block`}>
                    <div
                        onClick={() => {
                            console.log(visible)
                            setVisible(!visible)
                        }}
                        className=' cursor-pointer '>

                        <img className='w-[30px] sm:hidden cursor-pointer' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYvZNgwSJFO0HpucBoFCNrRA1noXhds7qVTQ&s' />


                    </div>

                    <NavListMenu setactive={setactive} active={active} />
                </div>
            </div>

        </>
    )
}

export default Header