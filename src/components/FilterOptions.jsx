import OptionButton from "./OptionButton.jsx";

function FilterOptions(props) {
    return (
        <div
            className="flex gap-x-2"
        >
            <OptionButton label={"Filter"}/>
            <OptionButton label={"Sort By"}/>
            <OptionButton label={"Fast Delivery"}/>
            <OptionButton label={"New of Spicy"}/>
            <OptionButton label={"Pure Veg"}/>
            <OptionButton label={"Offers"}/>
        </div>
    );
}

export default FilterOptions;