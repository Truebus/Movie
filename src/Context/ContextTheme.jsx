import { useState,createContext } from "react";

const ThemeValue = createContext();

export const HandleToggler=({children})=>{
    const[theme,setTheme]=useState(()=>{
        const data = localStorage.getItem('theme');
        return data?data:'light';
    })

    const HandleTheme=()=>{
        setTheme((prev)=>{
            const newvalue = prev==='light'?'dark':'light';
            localStorage.setItem('theme',newvalue);
            return newvalue;
        })
    }

    return(
        <ThemeValue.Provider value={{theme,HandleTheme}}>
            {children}
        </ThemeValue.Provider>
    )
}

export default ThemeValue;