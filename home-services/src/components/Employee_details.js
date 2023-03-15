import React from 'react'

export const Employee_details = () => {
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
                                <i className="bi bi-chat"></i> Inventory
                                <span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">6</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Complaints">
                                <i className="bi bi-bookmarks"></i> Complaints
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            <i className="bi bi-currency-rupee"></i> Revenue
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
                                <h1 className="h2 mb-0 ls-tight">Employees Details</h1>
                            </div>
                            <div className="col-sm-6 col-12 text-sm-end">
                                    <div className="mx-n1">
                                        <a href="#" className="btn d-inline-flex btn-sm btn-neutral border-base mx-1">
                                            <span className=" pe-2">
                                                <i className="bi bi-pencil"></i>
                                            </span>
                                            <span>Add Employee</span>
                                        </a>
                                        
                                    </div>
                                </div>
                            
                        </div>
                        
                    </div>
                </div>
            </header>
            <main className="py-6 bg-surface-secondary">
                <div className="container-fluid">
                    
                    <div className="card shadow border-0 mb-7">
                        
                        <div className="table-responsive">
                            <table className="table table-hover table-nowrap">
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Date of Joining</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Contact</th>
                                        <th scope="col">Department</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                                            <a className="text-heading font-semibold" href="#">
                                                Robert Fox
                                            </a>
                                        </td>
                                        <td>
                                            Feb 15, 2021
                                        </td>
                                        <td>
                                            {/* <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-1.png" className="avatar avatar-xs rounded-circle me-2" /> */}
                                            <a className="text-heading font-semibold" href="#">
                                               Shipra Path
                                            </a>
                                        </td>
                                        <td>
                                           9349449****
                                        </td>
                                        <td>
                                            <span className="badge badge-lg badge-dot">
                                                <i className="bg-success"></i>Technical
                                            </span>
                                        </td>
                                        <td className="text-end">
                                            <a href="#" className="btn btn-sm btn-neutral">View</a>
                                            <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                                <i className="bi bi-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                                            <a className="text-heading font-semibold" href="#">
                                                Robert Fox
                                            </a>
                                        </td>
                                        <td>
                                            Feb 15, 2021
                                        </td>
                                        <td>
                                            {/* <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-1.png" className="avatar avatar-xs rounded-circle me-2" /> */}
                                            <a className="text-heading font-semibold" href="#">
                                               Shipra Path
                                            </a>
                                        </td>
                                        <td>
                                           9349449****
                                        </td>
                                        <td>
                                            <span className="badge badge-lg badge-dot">
                                                <i className="bg-success"></i>Technical
                                            </span>
                                        </td>
                                        <td className="text-end">
                                            <a href="#" className="btn btn-sm btn-neutral">View</a>
                                            <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                                <i className="bi bi-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                                            <a className="text-heading font-semibold" href="#">
                                                Robert Fox
                                            </a>
                                        </td>
                                        <td>
                                            Feb 15, 2021
                                        </td>
                                        <td>
                                            {/* <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-1.png" className="avatar avatar-xs rounded-circle me-2" /> */}
                                            <a className="text-heading font-semibold" href="#">
                                               Shipra Path
                                            </a>
                                        </td>
                                        <td>
                                           9349449****
                                        </td>
                                        <td>
                                            <span className="badge badge-lg badge-dot">
                                                <i className="bg-warning"></i>Management
                                            </span>
                                        </td>
                                        <td className="text-end">
                                            <a href="#" className="btn btn-sm btn-neutral">View</a>
                                            <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                                <i className="bi bi-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    
                            
                                   
             
                                    
                                    
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                </div>
            </main>
        </div>
    </div>
    </div>
  )
}
