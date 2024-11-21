import { useState,createContext } from "react";

const CartContext = createContext();

export const HandleCart=({children})=>{
    const[addcart,setAddCart]  = useState([]);

    const Handlelogic=(movie)=>{
      setAddCart((prev)=>{
        const checkitem = prev.find((items)=>items.id===movie.id);
        if(checkitem){
            return prev.map((item)=>
            item.id===movie.id ? {...item, quantity: item.quantity+1 }: item
            )
        }
        else{
            return [...prev,{...movie,quantity:1}];
        }
      })
    }
     
     const handleremove=(movieId)=>{
        setAddCart((prev)=>prev.filter((item)=>item.id!==movieId));
     }

    const clearcart=()=>{
        setAddCart([]);
    }
    
    return(
        <CartContext.Provider value={{clearcart,handleremove,Handlelogic,addcart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;