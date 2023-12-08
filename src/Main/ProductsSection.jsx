import { useEffect, useState } from "react";
import ProductComponent from "./ProductComponent";
import "./Products.css";

const ProoductsSection = () => {
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
            {data && data.map((product) => <ProductComponent className={product.id} 
                                                             title={product.title}
                                                             image={product.image}
                                                             price={product.price}
                                                             count={product.rating.count}
                                                             rate={product.rating.rate}
                                            />)}
        </section>
    );
};

export default ProoductsSection;