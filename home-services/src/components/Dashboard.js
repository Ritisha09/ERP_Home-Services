import React from 'react'

const Dashboard = () => {
    return (
        <div>
        
        <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
           
            <nav className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
                <div className="container-fluid">
                    <button className="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand " href="#">
                        <img src="../icons/skylink.jpeg" alt='Company Logo' width = {70} height = {65} />
                    </a>


                    <div className="navbar-user d-lg-none">
                        <div className="dropdown">
                            <a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <div className="avatar-parent-child">
                                    <img alt="Image Placeholder" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar- rounded-circle" />
                                    <span className="avatar-child avatar-badge bg-success"></span>
                                </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
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
                                <a className="nav-link" href="/Employee_details">
                                    <i className="bi bi-people"></i> Employee Details
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Inventory">
                                    <i className="bi bi-tools"></i> Inventory
                                    <span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">3</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Complaints">
                                    <i className="bi bi-bookmarks"></i> Complaints
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                <i className="bi bi-card-list"></i> Daily Technician Record
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                <i className="bi bi-book"></i> Day Book
                                </a>
                            </li>
                        </ul>
                        <hr className="navbar-divider my-5 opacity-20" />
                       
                        <div className="mt-auto"></div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-person-square"></i> Account
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-box-arrow-left"></i> Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="h-screen flex-grow-1 overflow-y-lg-auto">
                <header className="bg-surface-primary border-bottom pt-6">
                    <div className="container-fluid">
                        <div className="mb-npx">
                            <div className="row align-items-center">
                                <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                                    <h1 className="h2 mb-0 ls-tight">Dashboard</h1>
                                </div>
                                <div className="col-sm-6 col-12 text-sm-end">
                                    <div className="mx-n1">
                                        <a href="#" className="btn d-inline-flex btn-sm btn-neutral border-base mx-1">
                                            <span className=" pe-2">
                                                <i className="bi bi-pencil"></i>
                                            </span>
                                            <span>Edit</span>
                                        </a>
                                        <a href="#" className="btn d-inline-flex btn-sm btn-primary mx-1">
                                            <span className=" pe-2">
                                                <i className="bi bi-plus"></i>
                                            </span>
                                            <span>Create</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </header>
                <main className="py-6 bg-surface-secondary">
                    <div className="container-fluid">
                        <div className="row g-6 mb-6">
                            <div className="col-xl-3 col-sm-6 col-12">
                                <div className="card shadow border-0">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <span className="h6 font-semibold text-muted text-sm d-block mb-2">Budget</span>
                                                <span className="h3 font-bold mb-0">Rs.75090</span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                                    <i className="bi bi-credit-card"></i>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12">
                                <div className="card shadow border-0">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <span className="h6 font-semibold text-muted text-sm d-block mb-2">Number of Employees</span>
                                                <span className="h3 font-bold mb-0">215</span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="icon icon-shape bg-primary text-white text-lg rounded-circle">
                                                    <i className="bi bi-people"></i>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12">
                                <div className="card shadow border-0">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <span className="h6 font-semibold text-muted text-sm d-block mb-2">Number of Complaints</span>
                                                <span className="h3 font-bold mb-0">1400</span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="icon icon-shape bg-info text-white text-lg rounded-circle">
                                                    <i className="bi bi-clock-history"></i>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12">
                                <div className="card shadow border-0">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <span className="h6 font-semibold text-muted text-sm d-block mb-2">Inventory Stock</span>
                                                <span className="h3 font-bold mb-0">95%</span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                                    <i className="bi bi-minecart-loaded"></i>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        </div>
    )
}

export default Dashboard