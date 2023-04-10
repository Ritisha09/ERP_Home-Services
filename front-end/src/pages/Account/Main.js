import React from 'react'
import "./Profile.css"
function Main() {
  return (
    <div>
        <header className="bg-surface-primary border-bottom pt-6">
                <div className="container-fluid">
                    <div className="mb-npx">
                        <div className="row align-items-center">
                            <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                                <h1 className="h2 mb-0 ls-tight">Account</h1>
                            </div>
                            <div className="col-sm-6 col-12 text-sm-end">
                                <div className="mx-n1">
                                    <a href="#" className="btn d-inline-flex btn-sm btn-neutral border-base mx-1">
                                        <span className=" pe-2">
                                            <i className="bi bi-pencil"></i>
                                        </span>
                                        <span>Update</span>
                                    </a>
                                </div>
                            </div>
                        </div> 
                        
                    </div>
                </div>
            </header>
            <div className="container1">
      <div className="profile">
        <div className="profile-picture">
          <img src="https://via.placeholder.com/150" alt="Profile Picture"/>
        </div>
        <div className="profile-info">
          <h1>Sakshi Kashyap</h1>
          <h2>Web Developer</h2>
          <p>Hi, I'm John. </p>
          <ul>
            <li><strong>Email:</strong> johndoe@example.com</li>
            <li><strong>Phone:</strong> (123) 456-7890</li>
            <li><strong>Location:</strong> New York City</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Main