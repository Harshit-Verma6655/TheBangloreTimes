import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { Spinner } from '@material-tailwind/react';

function News() {
    const [obj, setObj] = useState(null);

    useEffect(() => {
        const obj = JSON.parse(localStorage.getItem('obj'));
        setObj(obj);
    }, [])




    return (
        <>
            <Header />
            {obj ? <div className='bg-gray-100'>
                <div className='sm:w-full  sm:flex sm:justify-center'>
                    <div className='flex text-wrap flex-col p-5 bg-white items-center w-full sm:w-[55%]'>
                        <h1 className='text-4xl mt-8 mb-4 font-black'>{obj.title}</h1>
                        <img src={obj.image} />
                        <h2 className='text-3xl my-4 text-gray-600'>{obj.description}</h2>


                        <p className='sm:text-lg  mb-4font-serif'>{obj.content}</p>
                        <h2 className='my-3  font-semibold w-full text-wrap  text-gray-700'><a href={obj.url}>See full article:-{obj.url}</a></h2>
                        <div className='flex bg-white sm:w-full flex-col items-start font-semibold text-gray-600 py-5'>
                            <div>Source-</div>
                            <p>name: Yahoo Canada Finance</p>
                            <p>url: https://ca.finance.yahoo.com</p>

                            <p className='font-semibold text-gray-600 '> publishedAt: 2024-09-11T17:47:49Z</p>
                        </div>
                    </div>
                </div>
            </div> : <Spinner />}


        </>
    )
}

export default News