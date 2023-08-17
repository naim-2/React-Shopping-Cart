import React, {useState, useEffect} from "react";

function Cart () {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const json = localStorage.getItem("cart");
        const loadedUsers = JSON.parse(json);
        if (loadedUsers) {
          setCart(loadedUsers);
        }
      }, []);

    useEffect(() => {
        if(cart.length > 0) {
            const json = JSON.stringify(cart);
            localStorage.setItem("cart", json);
        }
      }, [cart]); 

    return (
        <div>
            {cart.map((product) => {
                return(
                    <div id="p">
                        <p id="bold">Name: {product.name}</p>
                        <p>Price: Ksh. {product.price}</p>
                    </div>
                );
                })}
        </div>
    )
}

export default Cart;