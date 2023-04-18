import React from 'react'
import skylink from "../icons/logo_skylink.jpeg"
import "./dashboard.css";

const SidebarLeft = () => {
  return (
    <div>
        <nav className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
            <div className="container-fluid">
                <button className="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-image" href="#">
                    <img src={skylink} alt='Company Logo' />
                </a>    
                <hr />      
                <div className="navbar-user">
                    <div className="dropdown">
                        <a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="avatar-parent-child">
                                <img alt="Image Placeholder" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar- rounded-circle" />
                                <span className="avatar-child avatar-badge bg-success"></span>
                            </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end" >
                            <a href="#" className="dropdown-item">Profile</a>
                            <a href="#" className="dropdown-item">Settings</a>
                            <a href="#" className="dropdown-item">Billing</a>
                            <hr className="dropdown-divider" />
                            <a href="#" className="dropdown-item">Logout</a>
                        </div>
                    </div>
                </div>
                <div className="collapse navbar-collapse" id="sidebarCollapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/Dashboard">
                                <i className="bi bi-house"></i> Dashboard
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/employee_details">
                                <i className="bi bi-people"></i> Employee Details
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/customer_details">
                                <i className="bi bi-people"></i> Customer Details
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/inventory">
                                <i className="bi bi-tools"></i> Inventory
                                {/* <span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">3</span> */}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Complaints">
                                <i className="bi bi-bookmarks"></i> Complaints
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/DT">
                            <i className="bi bi-card-list"></i> Daily Technician Record
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Daybook">
                            <i className="bi bi-book"></i> Day Book
                            </a>
                        </li>
                    </ul>
                    <hr className="navbar-divider my-5 opacity-20" />
                
                    <div className="mt-auto"></div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/Account">
                                <i className="bi bi-person-square"></i> Account
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                <i className="bi bi-box-arrow-left"></i> Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default SidebarLeft
