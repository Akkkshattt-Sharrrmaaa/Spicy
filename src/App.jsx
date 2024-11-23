import './App.css'
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import {Route, Routes} from "react-router-dom";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";

function App() {
    return (
        <div
            className=" min-h-[100vh] w-full h-full px-[10vw]"
        >
                <Header />

            <Routes>
                <Route path="/" element={<Body />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    )
}


export default App
