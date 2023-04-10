import React from 'react'
import SidebarLeft from "../../components/SidebarLeft"
import "./Dayform.css"

function Dayamtexpensesform() {
  return (
    <div><div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
    <SidebarLeft />
    <div className="h-screen flex-grow-1 overflow-y-lg-auto w-100">
    <header className="bg-surface-primary border-bottom pt-6">
      <div className="container-fluid">
          <div className="mb-npx">
              <div className="row align-items-center">
                  <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                      <h1 className="h2 mb-0 ls-tight">DayBook Amount Expenses</h1>
                  </div>
                  
              </div>
              
          </div>
      </div>
  </header>

  <form className="neumorphic-form">
            <label for="date-input">Enter a date:</label>
            <input type="date" id="date-input" name="date-input" required/>
            <label for="amtexp">Amount Expenses:</label>
            <input type="number" id="amtexp" name="amtexp" required/>
            <label for="moneypt">Money Paid To:</label>
            <input type="text" id="moneypt" name="moneypt"  required />
            <label for="reason">Reason:</label>
            <input type="text" id="reason" name="reason"  required />
            <label for="folionum">Folio Number:</label>
            <input type="number" id="folionum" name="folionum"  required />


            <button type="submit" value='submit' >Submit</button>
        </form>
    
    </div>
  </div></div>
  )
}

export default Dayamtexpensesform