import FilterOptions from "./FilterOptions.jsx";
import {useEffect, useState} from "react";
import {swiggyApiUrl} from "../config.js";
import Restaurant from "./Restaurant.jsx";
import BodyShimmer from "./BodyShimmer.jsx";

function Body() {

    const [searchText, setSearchText] = useState("");
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const filterUsingSearch = () => {
        setIsLoading(true);
        if(searchText !== "") {
            setFilteredRestaurantList(restaurantList.filter(item => item?.info?.name.toLowerCase().includes(searchText.toLowerCase())))
        }else{
            setFilteredRestaurantList(restaurantList);
        }
        setIsLoading(false);
    }

    const fetchSwiggyData = async () => {
        setIsLoading(true);
        const apiData = await fetch(swiggyApiUrl)
        const apiDataJson = await apiData.json();
        setRestaurantList(apiDataJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurantList(apiDataJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setIsLoading(false);
    }

    useEffect(()=>{
        filterUsingSearch();
    },[searchText])

    useEffect(() => {
        fetchSwiggyData()
    }, []);


    return (
        <>
            <div
                className="flex justify-between h-full w-full px-10 py-3"
            >
                {/* Filter types*/}
                <FilterOptions />

                {/* Search Bar (Filter) */}
                <div>
                    <input
                        type="text"
                        className="border border-gray-400 rounded-xl px-3 py-1 hover:scale-105 hover:shadow-red-400 shadow-lg transition-all duration-200"
                        placeholder={"Search..."}
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                            console.log(searchText);
                        }}
                    />
                    <button
                        className="relative -left-7"
                        onClick={() => filterUsingSearch()}
                    >
                        🔍
                    </button>
                </div>
            </div>

            {/* Available Restaurants*/}
            <div
                className="flex flex-wrap justify-evenly gap-4"
            >
                {
                    (isLoading) ? (
                        <BodyShimmer />
                    ):(
                        filteredRestaurantList.map((rest) => {
                            return (<Restaurant restaurant={rest} key={rest.info.id}/>)
                        })
                    )

                }
            </div>
        </>
    );
}

export default Body;