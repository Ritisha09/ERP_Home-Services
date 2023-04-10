import React from 'react'

function Main() {
  return (
    <div>
        <header className="bg-surface-primary border-bottom pt-6">
            <div className="container-fluid">
                <div className="mb-npx">
                    <div className="row align-items-center">
                        <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                            <h1 className="h2 mb-0 ls-tight">Day Book Details</h1>
                        </div>
                        <div className="col-sm-6 col-12 text-sm-end">
                                <div className="mx-n1">
                                    <a href="/Dayamtrecievedform" className="btn d-inline-flex btn-sm btn-primary mx-1">
                                        <span className=" pe-2">
                                            <i className="bi bi-plus"></i>
                                        </span>
                                        <span>Add Amount Recieved Details</span>
                                    </a>
                                    <a href="/Dayamtexpensesform" className="btn d-inline-flex btn-sm btn-primary mx-1">
                                        <span className=" pe-2">
                                            <i className="bi bi-plus"></i>
                                        </span>
                                        <span>Add Amount Expenses Details</span>
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
                                            <span className="h6 font-semibold text-muted text-sm d-block mb-2">Opening Balance</span>
                                            <span className="h3 font-bold mb-0">Rs.75090</span>
                                        </div>
                                        <div className="col-auto">
                                            <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                                <i className="bi bi-wallet"></i>
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
                                            <span className="h6 font-semibold text-muted text-sm d-block mb-2">Closing Balance</span>
                                            <span className="h3 font-bold mb-0">215</span>
                                        </div>
                                        <div className="col-auto">
                                            <div className="icon icon-shape bg-primary text-white text-lg rounded-circle">
                                                <i className="bi bi-wallet2"></i>
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
                                            <span className="h6 font-semibold text-muted text-sm d-block mb-2">Total amount for the day</span>
                                            <span className="h3 font-bold mb-0">1400</span>
                                        </div>
                                        <div className="col-auto">
                                            <div className="icon icon-shape bg-info text-white text-lg rounded-circle">
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
                                            <span className="h6 font-semibold text-muted text-sm d-block mb-2">No. of Transactions Done</span>
                                            <span className="h3 font-bold mb-0">95%</span>
                                        </div>
                                        <div className="col-auto">
                                            <div className="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                                <i className="bi bi-cash"></i>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                
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
  )
}

export default Main