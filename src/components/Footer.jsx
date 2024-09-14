import React from 'react'
import Card3 from './Card3'
let arr = ["Home Page",
    "U.S.",
    "World",
    "Politics",
    "New York",
    "Education",
    "Sports",
    "Business",
    "Tech",
    "Science",
    "Weather",
    "The Great Read",
    "Obituaries",
    "Headway",
    "Visual Investigations",
    "The Magazine"]

let arr2 = [
    "Account",
    "Subscribe",
    "Manage My Account",
    "Home Delivery",
    "Gift Subscriptions"
]
let arr3 = [
    "Books",
    "Best Sellers Book List",
    "Dance",
    "Movies",
    "Music",
    "Pop Culture",
    "Television",
    "Theater",
    "Visual Arts"
]
let arr4 = ["Health",
    "Well",
    "Food",
    "Restaurant Reviews",
    "Love",
    "Travel",
    "Style",
    "Fashion",
    "Real Estate",
    "T Magazine"]
let arr5 = [
    "Today's Opinion",
    "Columnists",
    "Editorials",
    "Guest Essays",
    "Op-Docs",
    "Letters",
    "Sunday Opinion",
    "Opinion Video",
    "Opinion Audio"
]
function Footer() {
    return (<>
        <p className='font-black text-2xl bg-gray-50 pb-5'>The Global Times</p>
        <div className='px-3 py-2 bg-gray-50 border-t-2 border-gray-100 '>

            <div className='flex justify-around' >
                <div className='flex w-3/4 border-r border-gray-600 justify-between'>
                    <div>
                        <h1 className='text-lg font-bold'>
                            News</h1>
                        <ul>
                            {arr.map((item, index) => {
                                return <li className='text-xs m-1 p-1' key={index}>{item}</li>
                            })}
                        </ul>

                    </div>
                    <div>
                        <h1 className='text-lg font-bold'>
                            ARTS</h1>
                        <ul>
                            {arr3.map((item, index) => {
                                return <li className='text-xs m-1 p-1' key={index}>{item}</li>
                            })}
                        </ul>

                    </div>
                    <div>
                        <h1 className='text-lg font-bold'>
                            Lifestyle</h1>
                        <ul>
                            {arr4.map((item, index) => {
                                return <li className='text-xs m-1 p-1' key={index}>{item}</li>
                            })}
                        </ul>

                    </div>
                    <div className='hidden sm:block'>
                        <h1 className='text-lg font-bold'>
                            OPINION</h1>
                        <ul>
                            {arr5.map((item, index) => {
                                return <li className='text-xs m-1 p-1' key={index}>{item}</li>
                            })}
                        </ul>

                    </div>
                </div>
                <div>
                    <ul>
                        {arr2.map((item, index) => {
                            return <li className='text-sm sm:text-lg font-black m-2 p-2' key={index}>{item}</li>
                        })}
                    </ul>
                </div>
            </div>



        </div>
    </>
    )
}

export default Footer