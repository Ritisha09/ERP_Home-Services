import React, {useState, useEffect} from 'react';
import SidebarLeft from "../../components/SidebarLeft";
import "./Iform.css";
import axios from "axios";

function Inventform() {

  const [error, setError] = useState("");
  const [id, setId] = useState("item1");

  async function fetchId() {
    try {
      const response = await axios.get("http://localhost:5000/get-inventId");

      // if inventory is empty assign 1 to id of first element
      
      console.log(response.data.length);
      if(response.data.length != 0){
        setId("item" + (parseInt(response.data[0]['id'].substring(4)) +1));
        console.log(id);
      }
    } catch (error) {
      console.error("Failed to fetch inventory data:", error);

      console.log(error);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('2');

    // const id = {id};
    const name = document.getElementById('name').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;
    try {
      const response = await fetch('http://localhost:5000/add-inventory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id, name, quantity, price})
      });

      const data = await response.json();
      console.log(data); // Do something with the response

      const ans = await fetch('http://localhost:5000/add-attendance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({date: "22-04-2023", attendanceData: [
          {
            "employeeId": "123",
            "present": true,
            "absent": false
          },
          {
            "employeeId": "456",
            "present": false,
            "absent": true
          }
        ]})
      });

      const pt = await ans.json();
      console.log(pt);

      if(response.status === 400 && data.error === "Item already exists."){
        // setIsRegistered(true);
        setError(data.error);
      }else{
        setError("");
      }
      // edge case
      e.target.reset();
    } catch (error) {
      console.log('error');
    }
  };

  useEffect(() => {
    fetchId();
  })

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
                            <h1 className="h2 mb-0 ls-tight">Inventory Management</h1>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </header>

          <form className="neumorphic-form" onSubmit = {submitHandler}>
            <label for="name">Component Name:</label>
            <input className = "input_form" type="text" id="name" name="name"  required />
            <label for="quantity">Quantity:</label>
            <input className = "input_form" type="number" id="quantity" name="quantity" required/>

            <label for="price">Price of Each:</label>
            <input className = "input_form" type="number" id="price" name="price" required/>
            <button type="submit" value='submit' >Submit</button>
            <p style={{ color: 'brown' }}>{error}</p>
        </form>

          
          </div>
        </div>
    </div>
  )
}

export default Inventform