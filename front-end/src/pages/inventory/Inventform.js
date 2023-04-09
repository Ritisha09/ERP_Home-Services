import React from 'react'
import SidebarLeft from "../../components/SidebarLeft"
import "./Iform.css"
function Inventform() {
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

          <form className="neumorphic-form">
            <label for="name">Component Name:</label>
            <input type="text" id="name" name="name"  required />
            <label for="quantity">Quantity:</label>
            <input type="number" id="quantity" name="quantity" required/>

            <label for="price">Price of Each:</label>
            <input type="number" id="price" name="price" required/>
            <button type="submit" value='submit' >Submit</button>
        </form>
          
          </div>
        </div>
    </div>
  )
}

export default Inventform