import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
const API_KEY = process.env.REACT_APP__GIPHY_API_KEY

const Random = () => {
    const [gif, setGif] = useState(null);
    const [loading, setLoading] = useState(true);
    async function fetchData() {
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const { data } = await axios.get(url);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    }
    useEffect(() => {
        fetchData();
    }, [])

    function gifHandler() {
        fetchData();
    }
    return (
        <div className="w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
            <h2 className='text-2xl mt-[15px] underline uppercase font-bold'>A RANDOM GIF</h2>

            {loading ? (<Spinner />) : (<img src={gif} alt="" />)}

            <button onClick={gifHandler} className='w-1/4 bg-white text-lg py-2 rounded-lg mb-[20px]'>Generate</button>
        </div>
    )
}

export default Random