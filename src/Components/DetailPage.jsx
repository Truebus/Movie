import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CgCalendarDates } from "react-icons/cg";
import { FaVideo } from "react-icons/fa";
import ThemeValue from "../Context/ContextTheme";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { useContext } from "react";
import CartContext from "../Context/CartContext"; // Import CartContext
import Counter from "../Context/Counter";

export const DetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [Isloading, setIsLoading] = useState(true);
  const My_Key = import.meta.env.VITE_API_KEY;
  const { theme } = useContext(ThemeValue);
  const { Like, HandleLike, HandleDislike, dislike } = useContext(Counter);
  const { Handlelogic } = useContext(CartContext); // Use Handlelogic from CartContext

  // Add movie to cart when called
  const handledel = () => {
    if (data) {
      Handlelogic(data); // Add the current movie to the cart
    }
  };

  useEffect(() => {
    const handledata = async () => {
      try {
        const fetchdata = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${My_Key}&language=en-US`
        );
        if (!fetchdata.ok) {
          throw new Error('Something went wrong');
        }
        const response = await fetchdata.json();
        setData(response);
      } catch (err) {
        console.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    handledata();
  }, [id]);

  return (
    <div>
      {Isloading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="relative bg-cover bg-center ">
          <div
            style={{
              backgroundImage: `url('https://image.tmdb.org/t/p/w500${data?.backdrop_path}')`,
              zIndex: -1,
            }}
            className="absolute inset-0 bg-cover opacity-50"
          ></div>

          <h1
            id="shadow"
            className={`${theme === 'light' ? 'bg-amber-100 text-blue-600' : 'bg-black text-white'} animate-pulse text-center font-semibold font-serif p-2 text-xl shadow-yellow-300 shadow-md`}
          >
            Welcome To Detail Page
          </h1>

          <div className="flex p-[10px] gap-x-10 justify-around mt-5">
            <div className="ml-[20px] shadow-amber-600 shadow-xl p-2 border-2 border-gray-100">
              <img
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt={data.title}
                className="h-[400px] w-[700px] rounded-3xl"
              />
            </div>

            <div className="mt-5">
              <h1
                className={`text-xl font-semibold font-serif ${theme === 'light' ? 'text-black' : 'text-blue-900'}`}
              >
                Title: {data.title}
              </h1>
              <p
                className={`font-semibold mb-2 ${theme === 'light' ? 'text-black' : 'text-blue-900'}`}
              >
                Language: {data.original_language}
              </p>
              <h3
                className={`font-semibold mb-1 ${theme === 'light' ? 'text-black' : 'text-blue-900'}`}
              >
                <CgCalendarDates className="inline-flex text-xl" />
                {data.release_date}
              </h3>
              <h3
                className={`font-semibold mb-1 ${theme === 'light' ? 'text-black' : 'text-blue-900'}`}
              >
                <FaVideo className="inline-flex text-xl" /> Video is not Available
              </h3>

              <div className="inline-flex gap-x-5 mb-2">
                <h3
                  className={`font-semibold ${theme === 'light' ? 'text-black' : 'text-blue-900'}`}
                >
                  Vote Average: {data.vote_average}
                </h3>
                <h3
                  className={`font-semibold ${theme === 'light' ? 'text-black' : 'text-blue-900'}`}
                >
                  Vote Count: {data.vote_count}
                </h3>
              </div>

              <h3
                className={`font-semibold mb-3 ${theme === 'light' ? 'text-black' : 'text-blue-900'}`}
              >
                Popularity: {data.popularity}
              </h3>

              <hr className="mb-3" />

              <h1
                className={`font-semibold font-serif mb-2 ${theme === 'light' ? 'text-black' : 'text-blue-900'}`}
              >
                Description:
              </h1>
              <p
                className={`text-balance font-serif ${theme === 'light' ? 'text-black' : 'text-blue-950'}`}
              >
                {data.overview}
              </p>

              <div className="inline-flex p-1 gap-x-5 text-xl mt-2">
                <button
                  type="button"
                  onClick={() => HandleLike(data.id)}
                  className="flex items-center"
                >
                  <BiLike className="text-3xl hover:text-blue-700 hover:scale-90" />
                  {Like[data.id] || 0}
                </button>
                <button
                  type="button"
                  onClick={() => HandleDislike(data.id)}
                  className="flex items-center"
                >
                  <BiDislike className="text-3xl hover:text-blue-700 hover:scale-90" />
                  {dislike[data.id] || 0}
                </button>
                <button
                  type="button"
                  className="border-2 border-black mt-7 p-2 rounded-xl animate-bounce cursor-pointer bg-gradient-to-tl from-orange-400 to-yellow-300 text-amber-900 font-extrabold"
                  onClick={handledel} // Add to favourites
                >
                  Add to Favourite List
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
