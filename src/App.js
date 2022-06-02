import "./App.css";
import ApproveFile from "./components/Admin/ApproveFile";
import ApproveSubjects from "./components/Admin/ApproveSubjects";
import ApproveUsers from "./components/Admin/ApproveUser";
import LeftSection from "./components/LeftSection";
import Navbar from "./components/Navbar";
// import Home from "./pages/Home";

function App() {
    return (
        <>
            {/* <Home/> */}
            <Navbar />
            {/* <div id='circle'></div>
            <div className='leftSection'>
                <LeftSection />
            </div>
            <div id='sally'></div> */}
            {/* <ApproveFile /> */}
            {/* <ApproveSubjects/> */}
            <ApproveUsers/>
        </>
    );
}

export default App;
