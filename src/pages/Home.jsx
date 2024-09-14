import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { HorizontalCard } from '../components/Card'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Card3 from '../components/Card3'
import { useNewsContext } from '../context/NewsContext'
import { Spinner } from "@material-tailwind/react";

function Home() {

    // const { getTopNews, getTopTech, toptech, topNews, topBusiness, topWorld, getTopWorld, getTopBusiness } = useNewsContext();
    const { getTopBusiness, getTopTech, getTopNews, getTopWorld, getNation, getentertainment, getSports, getHealth, getScience, setactive, active } = useNewsContext();
    const [topNews, setTopNews] = useState(null);
    const [topWorld, setTopWorld] = useState(null);
    const [topBusiness, setTopBusiness] = useState(null);
    const [toptech, setTopTech] = useState(null);
    const [topNation, setTopNation] = useState(null);
    const [load, setLoad] = useState(null);
    const [entertainment, setentertainment] = useState(null);
    const [science, setscience] = useState(null);
    const [sports, setsports] = useState(null);
    const [health, sethealth] = useState(null);
    const [nation, setnation] = useState(null);
    const [nationLoad, setNationLoad] = useState(null);


    useEffect(() => {
        console.log("runned");
        getNation().then((data) => {
            console.log(data);
            setTopNation(data);
        })
    }, [nationLoad])
    useEffect(() => {
        setTimeout(() => {

            getTopNews({}).then((data) => {
                console.log("topNews", data);
                setTopNews(data);
            });
        }, 1000)


    }, [])
    useEffect(() => {

        getTopWorld({}).then((data) => {
            setTopWorld(data);
            console.log("world data", data);
        });



    }, [])


    useEffect(() => {
        getSports().then((data) => {

            setsports(data);
        }).catch((error) => {
            console.log(error);
        });
        setTimeout(() => {
            getTopTech({}).then((data) => {
                console.log("techno", data)
                setTopTech(data);
            }).catch((error) => {
                console.log(error);
            });
        }, 10000)

    }, [load])

    useEffect(() => {
        setTimeout(() => {
            getScience().then((data) => {

                setscience(data);
            }).catch((error) => {
                console.log(error);
            });
        }, 6000)
        getScience().then((data) => {

            setscience(data);
        }).catch((error) => {
            console.log(error);
        });
        setTimeout(() => {
            getTopBusiness({}).then((data) => {
                console.log("business", data)
                setTopBusiness(data);
            }).catch((error) => {
                console.log(error);
            });
        }, 3000)

    }, [load])

    return (
        <>
            <Header setactive={setactive} active={active} />
            {topNews ? <div className='px-1'>
                <h1 className='font-serif text-center font-extrabold text-2xl sm:text-5xl mb-5 mt-3'>{topNews?.articles[0]?.title}</h1>
                <div className='sm:flex  gap-1'>
                    <div className=' text-left'>
                        <h1 className='font-black sm:text-3xl text-lg mb-3'>{topNews?.articles[0]?.description}</h1>
                        <p>{topNews?.articles[0]?.content}</p>
                        <div className='my-2 flex gap-3 text-gray-800 font-semibold'>
                            <p>Date-{topNews?.articles[0].publishedAt.split('T')[0]}</p>
                            <p>Time-{topNews?.articles[0].publishedAt.split('T')[1]}</p>
                        </div>

                    </div>
                    <div className='flex-2 mr-3 text-right border-r p-2 border-gray-600'>
                        <img className='w-[2000px]' src={topNews?.articles[0]?.image} />



                    </div>
                    <div className='sm:w-[600px]'>
                        <p>Source:-<br />
                            {topNews?.articles[0]?.source.name}<br />
                            https://www.theage.com.au
                        </p>
                        <p className='my-3 text-black font-serif'>Published At:<br /> {topNews?.articles[0].publishedAt}</p>
                        <p className='text-xs mt-2 text-gray-700'>Check details <a href={topNews?.articles[0].source.url}>{topNews?.articles[0].source.url} </a></p>

                    </div>
                </div>
            </div> : <Spinner />}
            <div className='scroll_hide border-t border-b mb-3 gap-2 overflow-x-scroll flex p-5 border-gray-600'>
                {topNation ? topNation?.articles?.map((obj, index) => {

                    return (<HorizontalCard key={index} obj={obj} />)

                }) : <button onClick={() => {
                    console.log(nationLoad);
                    setNationLoad(!nationLoad)
                }} className='bg-black px-2 py-2 text-white rounded'>Load Again</button>}

            </div>
            <Hero topNews={topNews} topWorld={topWorld} />

            <hr className='text-black   w-full mt-2 font-black' />
            <hr className='text-black w-full mt-1 font-black' />
            <div className='px-2'>
                <p className='font-black text-xl'>News</p>
                {!load && <button className='bg-black px-2 py-1 rounded text-white my-2' onClick={() => setLoad(true)}>Click to Load More...</button>}
                {load && (<div className='flex justify-around flex-wrap gap-1'>
                    {topBusiness ? <Card3 obj={topBusiness?.articles[0]} category={"Business"} /> : <Spinner />}

                    {toptech ? <Card3 obj={toptech?.articles[0]} category={"Tech"} /> : <Spinner />}
                    {sports ? <Card3 obj={sports?.articles[0]} category={"sports"} /> : <Spinner />}

                    {science ? <Card3 obj={science?.articles[0]} category={"science"} /> : <Spinner />}



                </div>)}
            </div>
            <Footer />




        </>
    )
}

export default Home