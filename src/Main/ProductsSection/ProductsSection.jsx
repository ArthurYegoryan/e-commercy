import { useEffect, useState } from "react";
import ProductComponent from "./ProductComponent";
import "./Products.css";

const ProoductsSection = ({ basketData, setBasketData }) => {
    const [ data, setData ] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const result = await response.json();
            setData(result);
        }

        fetchData();
    }, []);    

    return (
        <section className="products-section">
            {data && data.map((product) => <ProductComponent key={product.id} 
                                                             className={product.id} 
                                                             title={product.title}
                                                             image={product.image}
                                                             price={product.price}
                                                             count={product.rating.count}
                                                             rate={product.rating.rate}
                                                             basketData={basketData}
                                                             setBasketData={setBasketData}
                                                             data={data}
                                            />)}
        </section>
    );
};

export default ProoductsSection;