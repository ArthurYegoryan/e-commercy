import SearchFormArea from "./SearchForm/SearchFormArea";
import "./SearchBusketSection.css";
import BusketModal from "./Busket/BusketModal";

const SearchBusketSection = () => {
    return (
        <section className="search-busket-section">
            <SearchFormArea />
            <BusketModal />
        </section>
    );
};

export default SearchBusketSection;