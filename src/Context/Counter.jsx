import { useState,createContext } from "react";

const Counter = createContext();

export const HandleCounter=({children})=>{
    const [Like,setLike] = useState(()=>{
        const datalike = localStorage.getItem('Like');
        return datalike?JSON.parse(datalike):{};
    });
    const[dislike,setDisLike] = useState(()=>{
        const dislikedata = localStorage.getItem('dislike');
        return dislikedata?JSON.parse(dislikedata):{}
    })
    const HandleLike=(trendId)=>{
       setLike((prev)=>{
        const newlike = {...prev,[trendId] :(prev[trendId] ||0)+1}
        localStorage.setItem('Like',JSON.stringify(newlike));
        return newlike;
       })
    }
    const HandleDislike=(trendId)=>{
        setDisLike((prev)=>{
            const newdislike = {...prev,[trendId]:(prev[trendId]||0)+1}
            localStorage.setItem('dislike',JSON.stringify(newdislike));
            return newdislike;
        })
    }
    
    return(
        <Counter.Provider value={{HandleLike,Like,HandleDislike,dislike}}>
            {children}
        </Counter.Provider>
    )
}

export default Counter;