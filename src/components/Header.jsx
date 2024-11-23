import UserAuth from "./UserAuth.jsx";
import Navbar from "./Navbar.jsx";

function Header() {
    return(
        <div className="header bg-gray-700 mt-4 mb-2">
            <header className=" w-100% h-full lg:max-w-[80vw] mx-auto bg-white">
                <nav
                    className=" flex nowrap items-center justify-between px-4 py-2 md:px-6 lg:px-8"
                >
                    <div
                        className="text-3xl font-bold text-red-500"
                    >
                        Sp🌶️cy
                    </div>

                    <Navbar />

                    <UserAuth />
                </nav>
            </header>
        </div>
    )
}

export default Header;