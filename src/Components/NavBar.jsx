import { Link } from "react-router-dom"
import { PiSunBold } from "react-icons/pi";
import { IoMoonOutline } from "react-icons/io5";
import ThemeValue from "../Context/ContextTheme";
import { useContext } from "react";
import { MdFavorite } from "react-icons/md";

export const NavBar=()=>{
    const {theme,HandleTheme} = useContext(ThemeValue);
    return(
        <div>
            <div style={{background:theme==='light'?'white':'black',color:theme==='light'?'black':'white'}} className="p-3 font-bold text-xl text-blue-800 flex justify-evenly items-center" id="nav">
                <div className="inline-flex gap-x-2">
                <img src="https://imgix.bustle.com/lovelace/uploads/994/acd68d70-f041-0132-f0cb-0ed54733f8f5.png?w=414&h=391&fit=crop&crop=faces&auto=format%2Ccompress" alt="movie app"
                className="shadow-md shadow-white h-[30px] w-[30px] rounded-full animate-bounce"/>
                <h1>ReelSpark</h1>
                </div>
                    <ul className="flex gap-3">
                    <li> <Link to={"/"}>Trending</Link></li>
                    <li> <Link to={"/popular"}>Popular</Link></li>
                    <li> <Link to={"/upcoming"}>Upcoming</Link></li>
                    <li> <Link to={"/rated"}>Top-Rated</Link></li>
                    </ul>
                    <div className="inline-flex gap-3">
                    <button type="button" onClick={HandleTheme}>{theme==='light'?<IoMoonOutline/>:<PiSunBold/>}</button>
                <Link to={"/cart"}><p><MdFavorite /></p></Link>
                </div>
            </div>
        </div>
    )
}