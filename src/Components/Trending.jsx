import { useState,useEffect,useContext } from "react"
import { Link } from "react-router-dom";
import ThemeValue from "../Context/ContextTheme";

export const Trending=()=>{
const[trenddata,setTrendData]=useState([]);
const[value,setValue]=useState('');
const[searchValue,setSearchValue]=useState('');
const[category,setCategory]=useState('');
const[Isloading,setIsLoading]=useState(true);
const My_Key = import.meta.env.VITE_API_KEY;
const { theme } = useContext(ThemeValue);

useEffect(()=>{
    const handledata=async()=>{
       try{
        let urls = '';
        if(searchValue){
        urls = `https://api.themoviedb.org/3/search/movie?api_key=${My_Key}&query=${searchValue}`;
        }
        else if(category){
            urls = `https://api.themoviedb.org/3/discover/movie?api_key=${My_Key}&with_genres=${category}`;
        }
        else{
            urls = `https://api.themoviedb.org/3/trending/movie/day?api_key=${My_Key}`;
        }
        const data = await fetch(urls)
        if(!data.ok){
        throw new Error("Something went wrong!!");
       }
        const res = await data.json();
        setTrendData(res.results);
       }
       catch(err){
    console.error(err.message);
       }
       finally{
        setIsLoading(false);
       }
    }
    handledata();
},[searchValue,category])
const handlevalue=(e)=>{
    setValue(e.target.value);
}
const handlesearch=()=>{
    if(value.trim()){
        setSearchValue(value.trim());
        setCategory('')
    }
}
const handlecategory=(genereId)=>{
    setCategory(genereId)
    setSearchValue()
}
    return(
        <div>
        {Isloading ? (
        <div>Loading...</div>
      ) : (
            <div>
                <div className={`flex justify-center items-center p-4 ${theme==='light'?'bg-rose-100':'bg-black'} w-full h-auto rounded-tr-3xl rounded-tl-3xl border-2 border-black`}>
                    <div className="flex flex-wrap justify-center gap-3 w-full max-w-[800px]">
                   <button type="button" className="bg-red-500 shadow-lg shadow-zinc-500 hover:-translate-y-1 duration-200 ease-linear rounded-lg p-1 text-white font-semibold cursor-pointer" onClick={()=>handlecategory(28)}>Action</button>
                   <button type="button" className="bg-red-500 shadow-lg shadow-zinc-500 hover:-translate-y-1 duration-200 ease-linear rounded-lg p-1 text-white font-semibold cursor-pointer" onClick={()=>handlecategory(35)}>Comedy</button>
                   <button type="button" className="bg-red-500 shadow-lg shadow-zinc-500 hover:-translate-y-1 duration-200 ease-linear rounded-lg p-1 text-white font-semibold cursor-pointer" onClick={()=>handlecategory(18)}>Drama</button>
                   <button type="button" className="bg-red-500 shadow-lg shadow-zinc-500 hover:-translate-y-1 duration-200 ease-linear rounded-lg p-1 text-white font-semibold cursor-pointer" onClick={()=>handlecategory(12)}>Adventure</button>
                   <button type="button" className="bg-red-500 shadow-lg shadow-zinc-500 hover:-translate-y-1 duration-200 ease-linear rounded-lg p-1 text-white font-semibold cursor-pointer" onClick={()=>handlecategory(16)}>Animation</button>
                   <button type="button" className="bg-red-500 shadow-lg shadow-zinc-500 hover:-translate-y-1 duration-200 ease-linear rounded-lg p-1 text-white font-semibold cursor-pointer" onClick={()=>handlecategory(80)}>Crime</button>
                   <button type="button" className="bg-red-500 shadow-lg shadow-zinc-500 hover:-translate-y-1 duration-200 ease-linear rounded-lg p-1 text-white font-semibold cursor-pointer" onClick={()=>handlecategory(99)}>Documentary</button>
                   <button type="button" className="bg-red-500 shadow-lg shadow-zinc-500 hover:-translate-y-1 duration-200 ease-linear rounded-lg p-1 text-white font-semibold cursor-pointer" onClick={()=>handlecategory(10751)}>Family </button>
                   <button type="button" className="bg-red-500 shadow-lg shadow-zinc-500 hover:-translate-y-1 duration-200 ease-linear rounded-lg p-1 text-white font-semibold cursor-pointer" onClick={()=>handlecategory(14)}>Fantasy</button>
                   <button type="button" className="bg-red-500 shadow-lg shadow-zinc-500 hover:-translate-y-1 duration-200 ease-linear rounded-lg p-1 text-white font-semibold cursor-pointer" onClick={()=>handlecategory(36)}>History</button>
                   <button type="button" className="bg-red-500 shadow-lg shadow-zinc-500 hover:-translate-y-1 duration-200 ease-linear rounded-lg p-1 text-white font-semibold cursor-pointer" onClick={()=>handlecategory(27)}>Horror</button>
                   <button type="button" className="bg-red-500 shadow-lg shadow-zinc-500 hover:-translate-y-1 duration-200 ease-linear rounded-lg p-1 text-white font-semibold cursor-pointer" onClick={()=>handlecategory(10402)}>Music</button>
                   <button type="button" className="bg-red-500 shadow-lg shadow-zinc-500 hover:-translate-y-1 duration-200 ease-linear rounded-lg p-1 text-white font-semibold cursor-pointer" onClick={()=>handlecategory(9648)}>Mystery </button>
                   <button type="button" className="bg-red-500 shadow-lg shadow-zinc-500 hover:-translate-y-1 duration-200 ease-linear rounded-lg p-1 text-white font-semibold cursor-pointer" onClick={()=>handlecategory(10749)}>Romance</button>
                   <button type="button" className="bg-red-500 shadow-lg shadow-zinc-500 hover:-translate-y-1 duration-200 ease-linear rounded-lg p-1 text-white font-semibold cursor-pointer" onClick={()=>handlecategory(878)}>Science Fiction</button>
                   <button type="button" className="bg-red-500 shadow-lg shadow-zinc-500 hover:-translate-y-1 duration-200 ease-linear rounded-lg p-1 text-white font-semibold cursor-pointer" onClick={()=>handlecategory(10770)}>TV Movie</button>
                   <button type="button" className="bg-red-500 shadow-lg shadow-zinc-500 hover:-translate-y-1 duration-200 ease-linear rounded-lg p-1 text-white font-semibold cursor-pointer" onClick={()=>handlecategory(53)}>Thriller</button>
                   <button type="button" className="bg-red-500 shadow-lg shadow-zinc-500 hover:-translate-y-1 duration-200 ease-linear rounded-lg p-1 text-white font-semibold cursor-pointer" onClick={()=>handlecategory(10752)}>War</button>
                   <button type="button" className="bg-red-500 shadow-lg shadow-zinc-500 hover:-translate-y-1 duration-200 ease-linear rounded-lg p-1 text-white font-semibold cursor-pointer" onClick={()=>handlecategory(37)}>Western</button>
                   </div>
                <div className="flex items-start gap-3 relative left-[30px]">
                    <input type="text" placeholder="Enter Here" className="p-1 outline-none focus:border-2 border-sky-500 rounded-lg" onChange={handlevalue} value={value}/>
                    <button type="button" className="bg-gradient-to-tr from-yellow-300 to-orange-400 text-blue-800 font-bold rounded-md p-1" onClick={handlesearch}>Search</button>
                </div>
                </div>
            <div className={`${theme==='light'?'bg-amber-100':'bg-black'} flex justify-around flex-wrap p-2 gap-5 text-center`}>
                {trenddata.map((trend)=>(
                    <div key={trend.id} className="bg-pink-100 h-auto w-[250px] border-2 border-gray-300 p-2
                    hover:scale-95 duration-300 ease-linear rounded-3xl shadow-xl shadow-orange-400">
                <img src={`https://image.tmdb.org/t/p/w500${trend.poster_path}`}  alt={trend.title}
                className="rounded-2xl border-2 border-black"/>
               <Link to={`/movie/${trend.id}`}>{trend.title ? <h1 className="font-bold font-sans text-lg text-blue-700 hover:underline">{trend.title}</h1> : <h1 className="text-lg text-center">"Title is not found"</h1>}</Link>
                    </div>
                ))}
            </div>
            </div>
        )}
        </div>
    )
}