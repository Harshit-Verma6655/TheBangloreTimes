import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useNewsContext } from '../context/NewsContext';
import Card2 from '../components/Card2';

function ParticularNews() {
    const { category } = useParams();

    const { getTopBusiness, active, setactive, getTopTech, getTopNews, getTopWorld, getNation, getentertainment, getSports, getHealth, getScience } = useNewsContext();
    // const [toptech, setTopTech] = useState(null);
    // const [topBusiness, setTopBusiness] = useState(null);
    // const [entertainment, setentertainment] = useState(null);
    // const [sports, setsports] = useState(null);
    // const [science, setscience] = useState(null);
    // const [health, sethealth] = useState(null);



    const [arr, setArr] = useState(null);
    useEffect(() => {
        if (category == "Technology") {
            getTopTech({}).then((data) => {
                console.log("techno", data)
                setArr(data);
            }).catch((error) => {
                console.log(error);
            });
        } else if (category == "Business") {
            getTopBusiness({}).then((data) => {
                console.log("business", data)
                setArr(data);
            }).catch((error) => {
                console.log(error);
            });

        } else if (category == "Entertainment") {
            getentertainment().then((data) => {

                setArr(data);
            }).catch((error) => {
                console.log(error);
            });

        } else if (category == "Sports") {
            getSports().then((data) => {

                setArr(data);
            }).catch((error) => {
                console.log(error);
            });

        } else if (category == "Science") {
            getScience().then((data) => {

                setArr(data);
            }).catch((error) => {
                console.log(error);
            });

        } else if (category == "Health") {
            getHealth().then((data) => {

                setArr(data);
            }).catch((error) => {
                console.log(error);
            });
        }
    }, [active])
    return (
        <>
            <div>

                <Header active={active} setactive={setactive} />
                <div className='flex  w-full flex-col border-r pr-3 pl-2 border-gray-600'>
                    {arr?.articles?.map((obj, index) => <Card2 key={index} obj={obj} />)}

                </div>

            </div>

        </>
    )
}

export default ParticularNews