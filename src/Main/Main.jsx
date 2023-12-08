import { useState } from "react";
import ProoductsSection from "./ProductsSection/ProductsSection";
import SearchBusketSection from "./SearchBusketSection/SearchBusketSection";

const Main = () => {
    const [ basketData, setBasketData ] = useState([]);

    return (
        <main>
            <SearchBusketSection basketData={basketData}
                                 setBasketData={setBasketData}/>
            <ProoductsSection basketData={basketData}
                              setBasketData={setBasketData} />
        </main>
    );
};

export default Main;