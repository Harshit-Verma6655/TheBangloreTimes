import React from 'react'
import { useNavigate } from 'react-router-dom';

function Card2({ obj }) {
    const navigate = useNavigate();
    const handleClick = async () => {
        await localStorage.setItem('obj', JSON.stringify(obj),);
        navigate("/news");
    }
    return (<>
        <div onClick={handleClick} className='flex cursor-pointer  py-3 my-3 border-b border-gray-700'>
            <div>
                <h1 className='text-2xl text-gray-800 font-bold mb-3'>{obj?.title}</h1>
                <h1 className=' text-gray-800 font-bold mb-3'>{obj?.description}</h1>
                <h2>{obj?.content}</h2>
                <div className='my-2 flex text-xs gap-3 text-gray-800 font-semibold'>
                    <p>Date-{obj?.publishedAt.split('T')[0]}</p>
                    <p>Time-{obj?.publishedAt.split('T')[1]}</p>
                </div>

            </div>
            <div>
                <img className='max-h-[250px] w-[400px] max-w-[400px]' src={obj.image} />
                <p className='text-xs text-gray-600'> The Indian Express</p>
            </div>


        </div>

    </>
    )
}

export default Card2