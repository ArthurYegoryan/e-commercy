import { useEffect, useState } from "react";

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
        <section>
            {data && data.map((product) => <p key={product.id}>{product.title}</p>)}
        </section>
    );
};

export default ProoductsSection;