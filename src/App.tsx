import {
  BrowserRouter as Router,  
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Login from "./componenets/Login";


import TimeTrackingForm from "./componenets/TimeTrackingForm";

const App = () => {
  return (
    <div className='App'>
    {/* <Navbar></Navbar> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<TimeTrackingForm />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
