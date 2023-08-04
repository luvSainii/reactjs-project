import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
const API_KEY = process.env.REACT_APP__GIPHY_API_KEY

const Tag = () => {
    const [gif, setGif] = useState(null);
    const [tag, setTag] = useState(null);
    const [loading, setLoading] = useState(true);
    async function fetchData() {
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
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
        <div className="w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
            <h2 className='text-2xl mt-[15px] underline uppercase font-bold'>RANDOM {tag} GIF</h2>

            {loading ? (<Spinner />) : (<img src={gif} alt="" />)}
            <input
            className='w-1/4 bg-white text-lg py-2 rounded-lg mb-[20px] text-center'
            type="text"
            onChange={(event)=>setTag(event.target.value)}
            value={tag}
            placeholder='Search here '
            />
            <button onClick={gifHandler} className='w-1/4 bg-white text-lg py-2 rounded-lg mb-[20px]'>Generate</button>
        </div>
    )
}

export default Tag