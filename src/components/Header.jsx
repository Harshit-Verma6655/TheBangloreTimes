import React from 'react'
import NavListMenu from './NavListMenu'



function Header({ setactive, active }) {
    const currentDate = new Date();
    return (
        <>
            <p className='text-center text-xs flex gap-5 justify-center font-semibold'>Bengaluru <span className='text-gray-500'>International. India.</span></p>
            <div className='text-center px-2 relative'>

                <span className='text-6xl  font-serif font-black mb-5'>The Global Times</span>
                <div className='absolute top-8 font-serif '>{currentDate.toDateString()}</div>
            </div>



            <div className='mt-1'>  <NavListMenu setactive={setactive} active={active} />     </div>

        </>
    )
}

export default Header