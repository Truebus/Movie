import React, { useState, useEffect, useContext } from "react";
import ThemeValue from "../Context/ContextTheme";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const Rated = () => {
  const [fetchrateddata, setFetchRateddata] = useState({ results: [] });
  const [Isloading, setIsLoading] = useState(true);
  const { theme } = useContext(ThemeValue);
  const My_Key = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const handlerateddata = async () => {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${My_Key}&language=en-US&page=1`
        );
        if (!data.ok) {
          throw new Error("Something went wrong");
        }
        const response = await data.json();
        setFetchRateddata(response);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    handlerateddata();
  }, []);

  return (
    <div>
      {Isloading ? (
        <div className="p-2 flex flex-wrap justify-around gap-4">
          {/* Skeleton loader for rated movie cards */}
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className={`mt-3 h-auto w-[250px] p-2 ${
                theme === "light" ? "border-2 border-gray-500" : "border-2 border-white"
              }`}
            >
              <Skeleton height={200} width="100%" />
              <Skeleton count={1} height={20} width="80%" style={{ marginTop: "10px" }} />
              <Skeleton count={1} height={15} width="60%" />
            </div>
          ))}
        </div>
      ) : (
        <div className={`flex flex-wrap justify-around gap-4 ${theme === "light" ? "bg-amber-100" : "bg-black"}`}>
          {fetchrateddata.results.map((rated) => (
            <div
              key={rated.id}
              className={`mt-3 h-auto w-[250px] p-2 ${
                theme === "light" ? "border-2 border-gray-500" : "border-2 border-white"
              }`}
            >
              <p className={`${theme === "light" ? "text-purple-900" : "text-white"} font-semibold text-right`}>
                {rated.release_date}
              </p>
              <img
                src={`https://image.tmdb.org/t/p/w500${rated.poster_path}`}
                alt={rated.title}
              />
              <Link to={`/movie/${rated.id}`}>
                <h1 className={`font-bold ${theme === "light" ? "text-purple-900" : "text-white"}`}>
                  {rated.title}
                </h1>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
