import axios from 'axios';
import React, { createContext, useContext, useState } from 'react'

const newsContext = createContext();
export const useNewsContext = () => {
    return useContext(newsContext);
}

function NewsContext({ children }) {


    const [active, setActive] = useState();

    const setactive = (cat) => {
        setActive(cat);
    }

    const getTopNews = async (params) => {
        const response = await axios.post("http://localhost:3000/api/getNews", {
            ...params
        })
        // console.log("topnews", response)
        return response.data;
        // setTopNews(response?.data);

    }
    // getTopNews();
    const getTopWorld = async (params) => {
        const response = await axios.post("https://server-9lh1.onrender.com/api/getNews", { ...params, category: "world" }
        )
        return response.data;

    }

    const getTopBusiness = async (params) => {
        const response = await axios.post("https://server-9lh1.onrender.com/api/getNews", { ...params, category: "business" }
        )
        return response.data;

    }
    // technology
    const getTopTech = async (params) => {
        const response = await axios.post("https://server-9lh1.onrender.com/api/getNews",
            { ...params, category: "technology" }
        )
        return response.data;

    }

    const getentertainment = async (params) => {
        const response = await axios.post("https://server-9lh1.onrender.com/api/getNews",
            { ...params, category: "entertainment" }
        )
        return response.data;

    }


    const getSports = async (params) => {
        const response = await axios.post("https://server-9lh1.onrender.com/api/getNews",
            { ...params, category: "sports" }
        )
        return response.data;

    }

    const getScience = async (params) => {
        const response = await axios.post("https://server-9lh1.onrender.com/api/getNews",
            { ...params, category: "science" }
        )
        return response.data;

    }


    const getHealth = async (params) => {
        const response = await axios.post("https://server-9lh1.onrender.com/api/getNews",
            { ...params, category: "health" }
        )
        return response.data;

    }
    const getNation = async (params) => {
        const response = await axios.post("https://server-9lh1.onrender.com/api/getNews",
            { ...params, category: "nation" }
        )
        console.log(response.data);
        return response.data;

    }


    return (
        <newsContext.Provider value={{ getTopBusiness, getTopTech, getTopNews, getTopWorld, getentertainment, getSports, getHealth, getNation, getScience, setactive, active }}>

            {children}
        </newsContext.Provider>
    )
}

export default NewsContext