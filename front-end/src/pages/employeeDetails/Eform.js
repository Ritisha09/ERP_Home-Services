import React from 'react'
import SidebarLeft from "../../components/SidebarLeft"
import "./Eform.css"

function Eform() {
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

          <form className="neumorphic-form">
            <label for="name">Name of Employee:</label>
            <input type="text" id="name" name="name"  required />
            <label for="designation">Designation:</label>
            <input type="text" id="name" name="name"  required />
            <label for="mobile">Mobile Number:</label>
            <input type="tel" id="mobile" name="mobile" required/>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required/>

            <label for="street-address">Street Address:</label>
            <input type="text" id="street-address" name="street-address" required/>

            <label for="area">Area:</label>
            <input type="text" id="area" name="area" required/>

            <label for="zip">Zip Code:</label>
            <input type="text" id="zip" name="zip" required/>

            <label for="file">Aadhar or Any Government Proof:</label>
            <input type="file" id="file" name="file" accept=".pdf,.doc,.docx,.txt" required/>

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