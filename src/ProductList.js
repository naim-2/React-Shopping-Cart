import React, {useState, useEffect} from "react";

function ProductList (props) {
    const productlist = props.productsdata;
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

    const addintocart = (name, price) => {
        const newCart = {
            name: name,
            price: price,
        };
        setCart([...cart].concat(newCart));
      };   

    return (
        <div>
            <p id="top">The total number of products is: {cart.length}</p>
            <h1>List of Products</h1>
            {productlist.map((product) => {
                return(
                    <div id="p">
                        <p id="bold">Name: {product.Name}</p>
                        <p>Price: Ksh. {product.Price}</p>
                        <button onClick={(e) => addintocart(product.Name, product.Price)}>Add to Cart</button>
                        <img id="images" src={product.image}></img>
                    </div>
                );
                })}
        </div>
    )
}

export default ProductList;