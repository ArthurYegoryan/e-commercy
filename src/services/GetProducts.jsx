import { useEffect, useState } from "react";
import MakeProductsCall from "./MakeProductsCall";

const GetProducts = () => {
    const [ data, setData ] = useState(null);

    useEffect(() => {
        MakeProductsCall({setData});
        // fetch("https://fakestoreapi.com/products")
        //         .then((response) => response.json())
        //         .then((data) => setData(data))
        //         .catch((error) => console.error(error));
    }, []);

    return data;
};

export default GetProducts;