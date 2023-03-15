import LoginForm from "./components/loginform";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Employee_details } from "./components/Employee_details";
import { Inventory } from "./components/Inventory";
import { Complaints } from "./components/Complaints";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginForm />} /> 
       
        <Route exact path="/dashboard" element={<Dashboard />} /> 
        <Route exact path="/Employee_details" element={<Employee_details />} />        
        <Route exact path="/Inventory" element={<Inventory />} />  
        <Route exact path="/Complaints" element={<Complaints />} />       
      </Routes>
    </BrowserRouter>
  
    
  );

}

export default App;