import React from 'react'

function Card3({ obj, category }) {
    const handleClick = async () => {
        await localStorage.setItem('obj', JSON.stringify(obj),);
        navigate("/news");
    }
    return (
        <div onClick={handleClick} className='mx-2 cursor-pointer my-4 pb-4  border-b border-gray-800 max-w-[280px]'>
            <p className='text-sm font-black'>{category ? category : "Top World"}</p>
            <img className='max-w-[280px] h-[150px] w-[280px]' src={obj?.image} />
            <p className='px-1 font-semibold text-gray-700 '>{obj?.title}</p>
            <p className='px-1 text-xs'>{obj?.description}</p>
        </div>
    )
}

export default Card3