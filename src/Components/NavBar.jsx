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
            <div style={{background:theme==='light'?'white':'black',color:theme==='light'?'black':'white'}} className="p-3 font-bold text-xl text-blue-800 flex justify-around items-center" id="nav">
                <h1>MOVIE APP</h1>
                    <ul className="flex gap-3">
                    <li> <Link to={"/"}>Trending</Link></li>
                    <li> <Link to={"/popular"}>Popular</Link></li>
                    <li> <Link to={"/upcoming"}>Upcoming</Link></li>
                    <li> <Link to={"/rated"}>Top-Rated</Link></li>
                    </ul>
                    <div className="inline-flex gap-3">
                    <button type="button" onClick={HandleTheme}>{theme==='light'?<IoMoonOutline/>:<PiSunBold/>}</button>
                <p><MdFavorite /></p>
                </div>
            </div>
        </div>
    )
}