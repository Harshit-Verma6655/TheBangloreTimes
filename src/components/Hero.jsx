import React from 'react'
import Card2 from './Card2'
import Card3 from './Card3'
import { Spinner } from '@material-tailwind/react'

function Hero({ topNews, topWorld }) {
    return (
        <><div className='flex mb-4 '>
            <div className='flex  w-3/4 flex-col border-r pr-3 pl-2 border-gray-600'>
                {topNews?.articles?.map((obj, index) => <Card2 key={index} obj={obj} />)}

            </div>
            <div className='w-1/4 flex flex-col  items-center '>
                <h1 className='text-center font-bold '>World Top Headings...</h1>
                <hr className='text-black w-5/6 mt-2' />
                {topWorld ? (topWorld?.articles?.map((obj, index) => <Card3 key={index} obj={obj} />)) : <Spinner />}
            </div>

        </div>
        </>
    )
}

export default Hero