import React, { useState } from 'react'
import SidebarLeft from "../../components/SidebarLeft"
import './Cform.css'



function Compform() {
  const [searchTerm, setSearchTerm] = useState('');

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
                        <div>
      <input for="search" type="text" placeholder="Search..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      <button type="button" onClick={() => setSearchTerm('')}>Clear</button>
    </div>
                    </div>
                    
                </div>
            </div>
        </header>

       
          <form className="neumorphic-form">
            <label for="date-input">Enter a date:</label>
            <input type="date" id="date-input" name="date-input" required/>
            <label for="name">Name of Customer:</label>
            <input type="text" id="name" name="name"  required />
            <label for="mobile">Mobile Number:</label>
            <input type="tel" id="mobile" name="mobile" required/>

            <label for="street-address">Street Address:</label>
            <input type="text" id="street-address" name="street-address" required/>

            <label for="area">Area:</label>
            <input type="text" id="area" name="area" required/>

            <label for="zip">Zip Code:</label>
            <input type="text" id="zip" name="zip" required/>

            <label for="eng_names">Engineer Assigned to Complaint:</label>
            <select name="eng_names" id="eng_names">
                <option value="Banwari Ji"> Banwari Ji</option>
              <option value="Ramkanvar">Ramkanvar</option>
              <option value="Prahalad">Prahalad</option>
              <option value="Ramavatar">Ramavatar</option>
            </select>

            <label for="problem">Nature of Problem:</label>
            <select name="nature_of_problem" id="nature_of_problem">
              <option value="Chimney Service">Chimney Service</option>
              <option value="A.C. Service">A.C. Service</option>
              <option value="Plumber">Plumber</option>
              <option value="Fridge Double Door">Fridge Double Door</option>
              <option value="Geyser">Geyser</option>
              <option value="Fully Automatic Washing Machine">Fully Automatic Washing Machine</option>
              <option value="Front Loading Washing Machine">Front Loading Washing Machine</option>
            </select>

            <label for="cstatus">Status of Complaint:</label>
            <select name="cstatus" id="cstatus">
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
            <input type="date" id="ccdate" name="ccdate" />
            <button type="submit" value='submit' >Submit</button>
        </form>
          
          </div>
        </div>
    </div>
  )
}

export default Compform