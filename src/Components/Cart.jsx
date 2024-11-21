import { useContext } from "react"
import CartContext from "../Context/CartContext"

export const Cart=()=>{
const {addcart,clearcart,handleremove} = useContext(CartContext)

    return(
        <div>
    <div>
        {addcart.length===0?(
            <h1>Your Cart is Empty.</h1>
        ):( 
            <div>
                {addcart.map((item)=>(
                    <div key={item.id}>
                        <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.title}
                    className="w-20 h-30 object-cover rounded"
                  />
                         <div className="text-sm">Quantity: {item.quantity}</div>
                  <div>
                    <button type="button" onClick={()=>handleremove(item.id)}>Remove</button>
                  </div>
                    </div>
                ))}
                <div>
                    <button type="button" onClick={clearcart}>Clear</button>
                  </div>
            </div>
        )}
    </div>
        </div>
    )
}