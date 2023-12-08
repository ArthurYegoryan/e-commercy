const MakeProductsCall = async ({ setData }) => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        setData(await result);            
    } catch (err) {
        console.error(err.message);
    }
};

export default MakeProductsCall;