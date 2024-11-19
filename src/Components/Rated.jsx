import React from 'react'
import { useState,useEffect } from 'react'
import ThemeValue from '../Context/ContextTheme';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export const Rated = () => {
  const[fetchrateddata,setFetchRateddata]=useState({results:[]});
  const[Isloading,setIsLoading]=useState(true);
  const {theme} = useContext(ThemeValue);
  const My_Key=import.meta.env.VITE_API_KEY;

  useEffect(()=>{
    const handlerateddata=async()=>{
      try{
      const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${My_Key}&language=en-US&page=1`);
    if(!data.ok){
      throw new Error("Something went wrong");
    }
    const response = await data.json();
    setFetchRateddata(response);
      }
      catch(err){
    console.log(err.message);
      }
      finally{
    setIsLoading(false);
      }
    }
    handlerateddata();
  },[])
  return (
    <div>
      {Isloading ? ( <div>
        Loading....
      </div>) : ( 
    <div className={`flex flex-wrap justify-around gap-4  ${theme==='light'?'bg-amber-100':'bg-black'}`}>
      {fetchrateddata.results.map((rated)=>(
        <div key={rated.id} className={`mt-3 h-auto w-[250px] p-2 ${theme==='light'?'border-2 border-gray-500':'border-2 border-white'}`}>
          <p className={`${theme==='light'?'text-purple-900':'text-white'} font-semibold text-right`}>{rated.release_date}</p>
            <img
            src={`https://image.tmdb.org/t/p/w500${rated.poster_path}`}
            alt={rated.title}
          />
         <Link to={`/movie/${rated.id}`}><h1 className={`font-bold ${theme==='light'?'text-purple-900':'text-white'}`}>{rated.title}</h1></Link> 
          </div>
      ))}
    </div>

      )}
    </div>
  )
}
