import {swiggyCloudinaryImgUrl} from "../config.js";

const Restaurant = (props) => {

    const data = props.restaurant;

    return(

        <div
            className=" w-[250px] bg-gray-100 rounded-md shadow-md p-2 flex flex-col justify-center cursor-pointer hover:scale-105 transition duration-200 relative"
        >
            <h1
                className="text-3xl font-bold mx-auto absolute top-7 text-white z-20 "
            >
                {data?.info?.name}
            </h1>

            <img
                className=" rounded-2xl h-[150px] object-cover opacity-85"
                src={swiggyCloudinaryImgUrl + data?.info?.cloudinaryImageId}
            />

            <div>
                Price : {data?.info?.costForTwo}
            </div>

            <div>
                Delivery Time : {data?.info?.sla?.deliveryTime}
            </div>
        </div>
    )
}

export default Restaurant;