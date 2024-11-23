import { useState, createContext, useEffect } from "react";

const CartContext = createContext();

export const HandleCart = ({ children }) => {
    // Safely parse cart from localStorage or set to an empty array
    const storecart = JSON.parse(localStorage.getItem('cart') || '[]');
    const [addcart, setAddCart] = useState(storecart);

    const Handlelogic = (movie) => {
        // Validate movie object and its id
        if (!movie || !movie.id) {
            console.error('Invalid movie data');
            return;
        }
        setAddCart((prev) => {
            const checkitem = prev.find((item) => item.id === movie.id);
            if (checkitem) {
                // Increase quantity of the existing item
                return prev.map((item) =>
                    item.id === movie.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                // Add a new item with quantity 1
                return [...prev, { ...movie, quantity: 1 }];
            }
        });
    };

    const handleremove = (movieId) => {
        setAddCart((prev) => prev.filter((item) => item.id !== movieId));
    };

    const clearcart = () => {
        setAddCart([]);
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            // Ensure localStorage is only accessed in the browser
            if (addcart.length > 0) {
                localStorage.setItem("cart", JSON.stringify(addcart));
            } else {
                localStorage.removeItem("cart");
            }
        }
    }, [addcart]);

    return (
        <CartContext.Provider value={{ clearcart, handleremove, Handlelogic, addcart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
