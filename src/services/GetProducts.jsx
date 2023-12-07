import { useEffect, useState } from "react";

const GetProducts = () => {
    const [ data, setData ] = useState(null);

    useEffect(() => {
        // try {
        //     // const response = await fetch("https://fakestoreapi.com/products");
        //     // const result = await response.json();
            
            
        // } catch (err) {
        //     console.error(err.message);
        // }
        fetch("https://fakestoreapi.com/products")
                .then((response) => response.json())
                .then((data) => setData(data))
                .catch((error) => console.error(error));
    }, []);

    return data;
};

export default GetProducts;