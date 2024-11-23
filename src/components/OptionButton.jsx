
function OptionButton(props) {

    return (
        <button
            className=" border min-w-fit border-gray-300 px-3 rounded-2xl shadow-lg hover:scale-105 hover:shadow-red-400 transition-all duration-150"
        >
            {props.label}
        </button>
    );
}

export default OptionButton;