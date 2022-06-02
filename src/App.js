import "./App.css";
import ApproveFile from "./components/Admin/ApproveFile";
import ApproveSubjects from "./components/Admin/ApproveSubjects";
import ApproveUsers from "./components/Admin/ApproveUser";
import LeftSection from "./components/LeftSection";

// import Home from "./pages/Home";


import './App.css';

// import LeftSection from './components/LeftSection';
import Navbar from './components/Navbar';
// import Form from './Components/SingIn/Form';
// import Form from './Components/SignUp/SignUpForm';
// import ApproveFile from './components/ApproveFile';

// import Home from './pages/Home';
// import Form from './components/SignIn/Form';
import UploadPage from './components/UploadPage/UploadPage';

function App() {
  return (
    <>

    {/* <BasicModal/> */}
    {/* <Form/> */}
       {/* <Navbar /> */}
      {/*<div id="circle"></div>
      <div className="leftSection">
        <LeftSection />
      </div>
      <div id="sally"></div> */}

    <UploadPage /> 
    
      {/* <Home/> */}
      {/* <SignUpForm/> */}
      {/* <SignInForm/> */}
      {/* <ApproveFile/> */}

    </>
  );

}

export default App;
