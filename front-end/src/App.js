import LoginForm from "./pages/auth/loginform";
// import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route, Form } from 'react-router-dom';
import  Employee  from "./pages/employeeDetails/Employee";
import Inventory from "./pages/inventory/Inventory";
// import { Complaints } from "./components/Complaints";
import Compform from "./pages/complaints/Compform"
import SearchBar from "./components/SearchBar";
import SidebarLeft from "./components/SidebarLeft";
import Dashboard from "./pages/dashboard/Dashboard";
// import Dashboard from "./components/Dashboard";
import Complaints from "./pages/complaints/Complaints";
import Signup from "./pages/auth/SignupForm";
import Inventform from "./pages/inventory/Inventform";
import Eform from "./pages/employeeDetails/Eform";
import DT from "./pages/Daily_Technician_Record/DT";
import Daybook from "./pages/Daybook/Daybook";
import Dayamtrecievedform from "./pages/Daybook/Dayamtrecievedform";
import Dayamtexpensesform from "./pages/Daybook/Dayamtexpensesform";
import Account from "./pages/Account/Account";

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
        <Route exact path="/inventory" element={<Inventory />} />  
        <Route exact path="/Complaints" element={<Complaints />} />
        <Route exact path="/Compform" element={<Compform />} />         
        <Route exact path="/Inventform" element={<Inventform />} />         
        <Route exact path="/Eform" element={<Eform />} />         
        <Route exact path="/DT" element={<DT />} />         
        <Route exact path="/Daybook" element={<Daybook />} />  
        <Route exact path="/Dayamtrecievedform" element={<Dayamtrecievedform />} />  
        <Route exact path="/Dayamtexpensesform" element={<Dayamtexpensesform />} />  
        <Route exact path="/Account" element={<Account />} />   

            
      </Routes>
    </BrowserRouter>  
  );

}

export default App;
