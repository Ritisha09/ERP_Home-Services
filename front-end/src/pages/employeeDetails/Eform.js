import React, {useState} from 'react'
import SidebarLeft from "../../components/SidebarLeft"
import "./Eform.css"


function Eform() {

  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('2');

    const id = "1";
    const name = document.getElementById('name').value;
    const phone = document.getElementById('mobile').value;
    const dateJoining = document.getElementById('date-joining').value;
    const email = document.getElementById('email').value;
    const streetaddress = document.getElementById('street-address').value;
    const area = document.getElementById('area').value;
    const zipCode = document.getElementById('zip').value;
    const bankName = document.getElementById('bankname').value;
    const accountNo = document.getElementById('accountno').value;
    const accountholderName = document.getElementById('accname').value;
    const IFSCcode = document.getElementById('ifsc').value;
    const aadharNo = document.getElementById('file').value; 
    const designation = document.getElementById('designation').value;
    
    
    try {
      const response = await fetch('http://localhost:5000/add-employee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id, name,phone, dateJoining, streetaddress, email, area, zipCode, aadharNo, bankName, accountNo, accountholderName, IFSCcode, designation})
      });

      const data = await response.json();
      console.log(data); // Do something with the response

      if(response.status === 400 && data.error === "Employee already exists."){
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
                            <h1 className="h2 mb-0 ls-tight">Employee Details</h1>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </header>

          <form className="neumorphic-form" onSubmit = {submitHandler}>
            <label for="name">Name of Employee:</label>
            <input type="text" id="name" name="name"  required />
            <label for="designation">Designation:</label>
            <input type="text" id="designation" name="designation"  required />
            <label for="mobile">Mobile Number:</label>
            <input type="tel" id="mobile" name="mobile" required/>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required/>
            <label for="date-input">Joining Date:</label>
            <input type="date" id="date-joining" name="date-joining" required/>

            <label for="street-address">Street Address:</label>
            <input type="text" id="street-address" name="street-address" required/>

            <label for="area">Area:</label>
            <input type="text" id="area" name="area" required/>

            <label for="zip">Zip Code:</label>
            <input type="text" id="zip" name="zip" required/>

            {/* <label for="file">Aadhar or Any Government Proof:</label>
            <input type="file" id="file" name="file" accept=".pdf,.doc,.docx,.txt" required/> */}

            <label for="file">Aadhar Number</label>
            <input type="number" id="file" name="file"  required/>

            <label for="bankdetails">Bank Details:</label>
            <label for="bankname">Bank Name:</label>
            <input type="text" id="bankname" name="bankname" required/>

            <label for="accountno">Account Number:</label>
            <input type="text" id="accountno" name="accountno" required/>

            <label for="accname">Account Holder Name:</label>
            <input type="text" id="accname" name="accname" required/>

            <label for="ifsc">IFSC Code:</label>
            <input type="text" id="ifsc" name="ifsc" required/>


            <button type="submit" value='submit' >Submit</button>
        </form>
          
          </div>
        </div>
    </div>
  )
}

export default Eform