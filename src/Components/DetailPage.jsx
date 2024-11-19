import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

export const DetailPage=()=>{
  const {id} =useParams();
  const[data,setData]=useState(null);
  const[Isloading,setIsLoading]=useState(true);
  const My_Key = import.meta.env.VITE_API_KEY;

  useEffect(()=>{
    const handledata=async()=>{
      try{
      const fetchdata = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${My_Key}&language=en-US`);
       if(!fetchdata.ok){
        throw new Error('Something went wrong');
       }
       const response = await fetchdata.json();
       setData(response);
      }
      catch(err){
        console.error(err.message);
      }
      finally{
      setIsLoading(false);
      }
    }
    handledata()
  },[id])
  return(
    <div>
      <div>
    {Isloading ?(<h1>Loading.....</h1>):(
      data && (
        <div>
          <h1>{data.title}</h1>
          <p>{data.overview}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data.title}
            className="rounded-lg"
          />
          <p>Release Date: {data.release_date}</p>
          <p>Rating: {data.vote_average}</p>
          {/* Add other fields you need */}
        </div>
      )
    )}
      </div>
    </div>
  )
}