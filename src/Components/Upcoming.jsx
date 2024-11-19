import React, { useState, useEffect, useContext } from "react";
import ThemeValue from "../Context/ContextTheme";
import { Link } from "react-router-dom";

export const Upcoming = () => {
  const [upcomingdata, setUpcomingData] = useState({ results: [] });
  const [Isloading, setIsLoading] = useState(true);
  const [currentpage, setCurrentPage] = useState(1);
  const iterperpage = 3;
  const { theme } = useContext(ThemeValue);
  const My_Key=import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const handleupcoming = async () => {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${My_Key}&language=en-US&page=1`
        );
        if (!data.ok) {
          throw new Error("Something went wrong");
        }
        const response = await data.json();
        setUpcomingData(response);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    handleupcoming();
  }, []);

  const firstIndex = (currentpage - 1) * iterperpage;
  const current = upcomingdata.results.slice(firstIndex, firstIndex + iterperpage);

  const totalpages = Math.ceil(upcomingdata.results.length / iterperpage);

  const handleprev = () => {
    if (currentpage > 1) {
      setCurrentPage(currentpage - 1);
    }
  };

  const handlenext = () => {
    if (currentpage < totalpages) {
      setCurrentPage(currentpage + 1);
    }
  };

  const handlepage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="content">
      {Isloading ? (
        <div>Loading.....</div>
      ) : (
        <div className={`p-2 flex flex-wrap justify-around gap-4 ${theme === 'light' ? 'bg-gradient-to-tr from-blue-300 to-purple-300' : 'bg-black'}`}>
          {current.map((upcome) => (
            <div key={upcome.id} className={`${theme === 'light' ? 'border-2 border-black' : 'border-white border-2'} h-auto w-[250px] p-2`}>
              <p className={`text-right font-bold ${theme === 'light' ? 'text-blue-900' : 'text-white'}`}>Release Date: {upcome.release_date}</p>
              <img src={`https://image.tmdb.org/t/p/w500${upcome.poster_path}`} alt={upcome.title} />
             <Link to={`/movie/${upcome.id}`}><h1 className={`text-center ${theme === 'light' ? 'text-blue-900' : 'text-white'} font-semibold `}>{upcome.title}</h1></Link>
            </div>
          ))}
        </div>
      )}

      <div className={`flex justify-center items-center gap-x-3 p-3 ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
        <button
          type="button"
          disabled={currentpage === 1}
          onClick={handleprev}
          className={`p-1 rounded-md font-bold cursor-pointer ${theme === 'light' ? 'border-2 border-sky-400 text-blue-700' : 'border-2 border-white text-white'}`}
        >
          Prev
        </button>
        {Array.from({ length: totalpages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlepage(index + 1)}
            className={`p-1 rounded-md font-bold cursor-pointer ${theme === 'light' ? 'border-2 border-sky-400 text-blue-700' : 'border-2 border-white text-white'} text-center w-[35px]`}
          >
            {index + 1}
          </button>
        ))}
        <button
          type="button"
          disabled={currentpage === totalpages}
          onClick={handlenext}
          className={`p-1 rounded-md font-bold cursor-pointer ${theme === 'light' ? 'border-2 border-sky-400 text-blue-700' : 'border-2 border-white text-white'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};
