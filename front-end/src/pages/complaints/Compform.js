import React, {useState, useEffect} from 'react'
import SidebarLeft from "../../components/SidebarLeft"
import './Cform.css'
import axios from  "axios";



function Compform() {

  const [custError, setCustError] = useState("");
  // const [compError, setCompError] = useState("");

  // To get names of technicians
  const [technicianData, setTechnicianData] = useState([]);

  async function fetchEmployee(){
    try{
      const response = await axios.get('http://localhost:5000/get-employee_technician');
      console.log(response.data);
      setTechnicianData(response.data);
    }catch(error){
      console.log(error);
    }
  }; 

  useEffect(() => {
    fetchEmployee();
  }, [])


  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('2');


    // customer data
    const custId = "1";
    const name = document.getElementById('name').value;
    // const designation = document.getElementById('designation').value;
    const phone = document.getElementById('mobile').value;
    // const email = document.getElementById('email').value;
    const streetaddress = document.getElementById('street-address').value;
    const area = document.getElementById('area').value;
    const zipCode = document.getElementById('zip').value;

    // complaint data
    const compId = "1";
    const serviceType = document.getElementById('nature_of_problem').value;
    const status = document.getElementById('cstatus').value;
    const dateOpening = document.getElementById('date-input').value;
    const dateClosing = document.getElementById('ccdate').value;
    const empId = document.getElementById('eng_names').value;
    // const custId = document.getElementById('eng_names').value;
    const bill = document.getElementById('bill').value;


    try {
      // To post customer data 
      const responseCust = await fetch('http://localhost:5000/add-customer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({custId,name,phone,streetaddress,area,zipCode})
      });

      const dataCust = await responseCust.json();
      console.log(dataCust); // Do something with the response

      // To post complain data
      const responseComp = await fetch('http://localhost:5000/add-complain', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({custId, compId, phone, serviceType, empId, status, dateOpening, dateClosing,bill })
      });

      const dataComp = await responseComp.json();
      console.log(dataComp); // Do something with the response

      if(responseCust.status === 400 && dataCust.error === "Customer already exists."){
        // setIsRegistered(true);
        setCustError(dataCust.error);

      }else{
        setCustError("");
      }
      // edge case
      e.target.reset();

    } catch (error) {
      console.log('error');
    }
  };

  return (
    <div>
        <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
          <SidebarLeft />
          <div className="h-screen flex-grow-1 overflow-y-lg-auto w-100">
          <header className="bg-surface-primary border-bottom pt-6">
            <div className="container-fluid">
                <div className="mb-npx">
                    <div className="row align-items-center">
                        <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                            <h1 className="h2 mb-0 ls-tight">Complaints</h1>
                        </div>
                    </div>
                    
                </div>
            </div>
        </header>

       
          <form className="neumorphic-form" onSubmit = {submitHandler}>
            <label for="date-input">Enter a date:</label>
            <input className = "input_form" type="date" id="date-input" name="date-input" required/>
            <label for="name">Name of Customer:</label>
            <input className = "input_form" type="text" id="name" name="name"  required />
            <label for="mobile">Mobile Number:</label>
            <input className = "input_form" type="tel" id="mobile" name="mobile" required/>

            <label for="street-address">Street Address:</label>
            <input className = "input_form" type="text" id="street-address" name="street-address" required/>

            <label for="area">Area:</label>
            <input className = "input_form" type="text" id="area" name="area" required/>

            <label for="zip">Zip Code:</label>
            <input className = "input_form" type="text" id="zip" name="zip" required/>

            <label for="eng_names">Engineer Assigned to Complaint:</label>
            <select className = "input_form" name="eng_names" id="eng_names">
              {technicianData.map((item,index) =>(
                <option value={item.name}>{item.name}</option>
              ))}
              {/* <option value="Banwari Ji"> Banwari Ji</option>
              <option value="Ramkanvar">Ramkanvar</option>
              <option value="Prahalad">Prahalad</option>
              <option value="Ramavatar">Ramavatar</option> */}
            </select>

            <label for="problem">Nature of Problem:</label>
            <select className = "input_form" name="nature_of_problem" id="nature_of_problem">
              <option value="Chimney Service">Chimney Service</option>
              <option value="A.C. Service">A.C. Service</option>
              <option value="Plumber">Plumber</option>
              <option value="Fridge Double Door">Fridge Double Door</option>
              <option value="Geyser">Geyser</option>
              <option value="Fully Automatic Washing Machine">Fully Automatic Washing Machine</option>
              <option value="Front Loading Washing Machine">Front Loading Washing Machine</option>
            </select>

            <label for="cstatus">Status of Complaint:</label>
            <select className = "input_form" name="cstatus" id="cstatus">
              <option value="Completed">Completed</option>
              <option value="Under Progress">Under Progress</option>
              <option value="Invalid">Invalid</option>
            </select>

            <label for="call">Source of Call/Info:</label>
            <select name="call" id="call">
              <option value="Google">Google</option>
              <option value="Whatsapp Group">Whatsapp Group</option>
              <option value="Data Calling">Data Calling</option>
              <option value="Just Dial">Just Dial</option>
              <option value="Self">Self</option>
            </select>

            <label for="ccdate">Complaint Closing date:</label>
            <input className = "input_form" type="date" id="ccdate" name="ccdate" />

            <label for="bill">Bill Amount:</label>
            <input className = "input_form" type="text" id="bill" name="bill" />
            <button type="submit" value='submit' >Submit</button>
        </form>
          
          </div>
        </div>
    </div>
  )
}

export default Compform