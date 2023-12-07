import "./SearchForm.css";
import ButtonComponent from "../Buttons/ButtonComponent";

const SearchFormArea = () => {
    return (
        <div>
            <form action="" className="search-form">
                <img src="" alt="search-image" />
                <input type="text" placeholder="What do you want to find?" />
                <ButtonComponent label="Search" />
                {/* <button>Search</button> */}
            </form>
        </div>
    );
};

export default SearchFormArea;