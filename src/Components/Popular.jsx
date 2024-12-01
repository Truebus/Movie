import React from 'react'
import { useState,useEffect } from 'react'
import ThemeValue from '../Context/ContextTheme';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const Popular = () => {
  const[populardata,setPopularData]=useState({results:[]});
  const[Isloading,setIsLoading]=useState(true);
  const {theme} = useContext(ThemeValue)
  const My_Key=import.meta.env.VITE_API_KEY;

  useEffect(()=>{
       const handlepopular=async()=>{
       try{
        const populardata = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${My_Key}&language=en-US&page=1`);
        if(!populardata.ok){
          throw new Error("Something went wrong!!")
        }
        const response = await populardata.json();
        setPopularData(response);
       }
       catch(err){
      console.error(err.message);
       }
       finally{
      setIsLoading(false);
       }
       }
  handlepopular();
  },[])
  return (
    <div>
      {Isloading ?( 
      <div>
        <div className={`flex flex-wrap justify-around p-2 gap-5 items-center ${theme==='light'?'bg-gradient-to-tl from-slate-300 to-gray-400':'bg-black'}`}>
        {[...Array(6)].map((_, index) => (
         <div key={index} className='h-[350px] w-[250px]'>
          <Skeleton height={'100%'} width={'100%'}/>
         </div>
        ))}
          </div>
      </div> ):( 
      <div className={`flex flex-wrap justify-around p-2 gap-5 items-center ${theme==='light'?'bg-gradient-to-tl from-slate-300 to-gray-400':'bg-black'}`}>
    {populardata.results.map((popular)=>(
      <div key={popular.id} className='h-[350px] w-[250px] p-2 hover:-translate-y-3 ease-out duration-300'>
      <Link to={`/movie/${popular.id}`}><img src={`https://image.tmdb.org/t/p/w500${popular.poster_path}`} alt={popular.title}
        className='h-full w-full rounded-2xl'/></Link>
      </div>
    ))}
      </div>
      )}
    </div>
  )
}
