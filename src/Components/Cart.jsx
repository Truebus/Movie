import { useContext } from "react"
import CartContext from "../Context/CartContext"
import { Link } from "react-router-dom"

export const Cart=()=>{
const {addcart,clearcart,handleremove} = useContext(CartContext)

    return(
        <div>
    <div>
        {addcart.length===0?(
            <h1 className="flex items-center justify-center">Your Cart is Empty.</h1>
        ):( 
            <div>
            <div className="font-bold flex justify-end items-end p-2 flex-wrap">
            <button type="button" onClick={clearcart} className="border-2 border-gray-600 shadow-md shadow-slate-400
            p-1 w-[80px] rounded-3xl hover:bg-orange-200 hover:scale-110 duration-300 ease-linear text-red-800 font-serif">Clear</button>
          </div>
            <div className={`bg-gradient-to-tl from-amber-200 to-amber-300 p-[10px] flex h-auto gap-5 font-serif`}>
                {addcart.map((item)=>(
                    <div key={item.id} className="p-2 border-2 border-slate-500 rounded-3xl shadow-lg shadow-white h-[330px] w-[200px]">
                        <div className="justify-end items-end flex p-1">
                    <button type="button" onClick={()=>handleremove(item.id)}
                        className="bg-amber-100 p-1 rounded-lg font-serif font-semibold cursor-pointer
                        hover:scale-105 duration-300 ease-in-out">Remove</button>
                  </div>
                       <Link to={`/movie/${item.id}`}> <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.title}
                    className="w-full h-[230px] object-cover rounded p-2"
                  /></Link>
                         <div className="text-center p-1 text-red-900 text-lg font-semibold">Quantity: {item.quantity}</div>
                  
                    </div>
                ))}
                
            </div>
            </div>
        )}
    </div>
        </div>
    )
}