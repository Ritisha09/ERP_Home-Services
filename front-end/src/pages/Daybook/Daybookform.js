import React, {useState, useEffect} from 'react'
import SidebarLeft from "../../components/SidebarLeft"
import "./Dayform.css"

function Daybookform() {

  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('2');

    const id = "1";
    const action = document.getElementById('action').value;
    const date = document.getElementById('date').value;
    const accountNo = document.getElementById('accountNo').value;
    const amount = document.getElementById('amount').value;
    const recipient_payer = document.getElementById('recipient_payer').value;
    const referenceNo = document.getElementById('referenceNo').value;
    const reason = document.getElementById('reason').value;
    const folionum = document.getElementById('folionum').value;
    try {
      const response = await fetch('http://localhost:5000/add-daybook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id, action,date,accountNo,amount,recipient_payer,referenceNo,reason,folionum})
      });

      const data = await response.json();
      console.log(data); // Do something with the response

      if(response.status === 400 && data.error === "Record already exists."){
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
                            <h1 className="h2 mb-0 ls-tight">DayBook Record</h1>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </header>

          <form className="neumorphic-form" onSubmit = {submitHandler}>
            <label for="date-input">Enter a date:</label>
            <input className = "input_form" type="date" id="date" name="date" required/>
            <label for="amtrec">Money Recieved/Paid:</label>
                <select className = "input_form" name="action" id="action">
                <option value="Recieved">Recieved</option>
                <option value="Paid">Paid</option>
                </select>
            <label for="date-input">Amount:</label>
            <input className = "input_form" type="text" id="amount" name="amount" required/>
            <label for="moneyrf">Recipient/Payer:</label>
            <input className = "input_form" type="text" id="recipient_payer" name="recipient_payer"  required />
            <label for="moneyrf">Account Number:</label>
            <input className = "input_form" type="text" id="accountNo" name="accountNo"   />
            <label for="moneyrf">Reference Number:</label>
            <input className = "input_form" type="text" id="referenceNo" name="referenceNo"  />
            <label for="reason">Reason:</label>
            <input className = "input_form" type="text" id="reason" name="reason"  required />
            <label for="folionum">Folio Number:</label>
            <input className = "input_form" type="number" id="folionum" name="folionum"  required />
            <button type="submit" value='submit' >Submit</button>
        </form>
          
          </div>
        </div>
    </div>
  )
}

export default Daybookform
