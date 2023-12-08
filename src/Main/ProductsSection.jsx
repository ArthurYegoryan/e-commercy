import { useEffect ,useState } from "react";

const ProoductsSection = () => {
    const [ data, setData ] = useState(null);

    useEffect(() => {
        // fetch("https://fakestoreapi.com/products")
        // .then((response) => response.json())
        // .then((data) => setData(data))
        // .catch((error) => console.error(error));

        const fetchData = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const result = await response.json();
            setData(await result);
        };
        fetchData();
    });

    return (
        <section>
            {data.map((product) => <p key={product.id}>{product.title}</p>)}
        </section>
    );
};

export default ProoductsSection;