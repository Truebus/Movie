import ThemeValue from "../Context/ContextTheme"
import { useContext } from "react"

export const NotFound=()=>{
    const {theme} = useContext(ThemeValue);
    return(
        <div>
            <div className={`text-center h-[500px] w-full flex-col flex justify-center ${theme==='light'?'bg-white':'bg-black'}`}>
                <h1 className={`${theme==='light'?'text-red-600':'text-white'} text-6xl font-semibold`}>404 Page Not Found</h1>
                <p className={`${theme==='light'?'text-red-600':'text-white'} font-semibold text-7xl mt-3`}>This Page is not Available.</p>
            </div>
        </div>
    )
}