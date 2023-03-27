import LoginForm from "./pages/auth/loginform";
// import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Employee  from "./pages/employeeDetails/Employee";
import Inventory from "./pages/inventory/Inventory";
// import { Complaints } from "./components/Complaints";

import SidebarLeft from "./components/SidebarLeft";
import Dashboard from "./pages/dashboard/Dashboard";
// import Dashboard from "./components/Dashboard";
import Complaints from "./pages/complaints/Complaints";
import Signup from "./pages/auth/SignupForm";

function App() {
  return (
    <BrowserRouter>
    {/* <SidebarLeft />
    <Dashboard />
    <Complaints />
    <Inventory /> */}
    {/* <Signup/> */}
      <Routes>


        <Route exact path="/" element={<LoginForm />} /> 
        <Route exact path="/signUp" element={<Signup />} /> 
        <Route exact path="/dashboard" element={<Dashboard />} /> 
        <Route exact path="/Employee_details" element={<Employee />} />        
        <Route exact path="/Inventory" element={<Inventory />} />  
        <Route exact path="/Complaints" element={<Complaints />} />       
      </Routes>
    </BrowserRouter>
  
  );

}

export default App;
