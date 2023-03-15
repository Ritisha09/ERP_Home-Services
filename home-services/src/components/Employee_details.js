import React from 'react'

export const Employee_details = () => {
  return (
    <div>
        <div>
        <a href="https://webpixels.io/components?ref=codepen" className="btn w-full btn-primary text-truncate rounded-0 py-2 border-0 position-relative" style={{zIndex: 1000}}>
            <strong>Crafted with Webpixels CSS:</strong> The design system for Bootstrap 5. Browse all components →
        </a>
        
        <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
           
            <nav className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
                <div className="container-fluid">
                    <button className="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="#">
                        <img src="https://preview.webpixels.io/web/img/logos/clever-primary.svg" alt="..." />
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
                                <a className="nav-link" href="Dashboard">
                                    <i className="bi bi-house"></i> Dashboard
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Analytics">
                                    <i className="bi bi-bar-chart"></i> Analitycs
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-chat"></i> Messages
                                    <span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">6</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-bookmarks"></i> Collections
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-people"></i> Users
                                </a>
                            </li>
                        </ul>
                        <hr className="navbar-divider my-5 opacity-20" />
                        <ul className="navbar-nav mb-md-4">
                            <li>
                                <div className="nav-link text-xs font-semibold text-uppercase text-muted ls-wide" href="#">
                                    Contacts
                                    <span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-4">13</span>
                                </div>
                            </li>
                            <li>
                                <a href="#" className="nav-link d-flex align-items-center">
                                    <div className="me-4">
                                        <div className="position-relative d-inline-block text-white">
                                            <img alt="Image Placeholder" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar rounded-circle" />
                                            <span className="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-success rounded-circle"></span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="d-block text-sm font-semibold">
                                            Marie Claire
                                        </span>
                                        <span className="d-block text-xs text-muted font-regular">
                                            Paris, FR
                                        </span>
                                    </div>
                                    <div className="ms-auto">
                                        <i className="bi bi-chat"></i>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link d-flex align-items-center">
                                    <div className="me-4">
                                        <div className="position-relative d-inline-block text-white">
                                            <span className="avatar bg-soft-warning text-warning rounded-circle">JW</span>
                                            <span className="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-success rounded-circle"></span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="d-block text-sm font-semibold">
                                            Michael Jordan
                                        </span>
                                        <span className="d-block text-xs text-muted font-regular">
                                            Bucharest, RO
                                        </span>
                                    </div>
                                    <div className="ms-auto">
                                        <i className="bi bi-chat"></i>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link d-flex align-items-center">
                                    <div className="me-4">
                                        <div className="position-relative d-inline-block text-white">
                                            <img alt="..." src="https://images.unsplash.com/photo-1610899922902-c471ae684eff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar rounded-circle" />
                                            <span className="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-danger rounded-circle"></span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="d-block text-sm font-semibold">
                                            Heather Wright
                                        </span>
                                        <span className="d-block text-xs text-muted font-regular">
                                            London, UK
                                        </span>
                                    </div>
                                    <div className="ms-auto">
                                        <i className="bi bi-chat"></i>
                                    </div>
                                </a>
                            </li>
                        </ul>
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
                                    <h1 className="h2 mb-0 ls-tight">Application</h1>
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
                            <ul className="nav nav-tabs mt-4 overflow-x border-0">
                                <li className="nav-item ">
                                    <a href="#" className="nav-link active">All files</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link font-regular">Shared</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link font-regular">File requests</a>
                                </li>
                            </ul>
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
                                                <span className="h3 font-bold mb-0">$750.90</span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                                    <i className="bi bi-credit-card"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-2 mb-0 text-sm">
                                            <span className="badge badge-pill bg-soft-success text-success me-2">
                                                <i className="bi bi-arrow-up me-1"></i>13%
                                            </span>
                                            <span className="text-nowrap text-xs text-muted">Since last month</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12">
                                <div className="card shadow border-0">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <span className="h6 font-semibold text-muted text-sm d-block mb-2">New projects</span>
                                                <span className="h3 font-bold mb-0">215</span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="icon icon-shape bg-primary text-white text-lg rounded-circle">
                                                    <i className="bi bi-people"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-2 mb-0 text-sm">
                                            <span className="badge badge-pill bg-soft-success text-success me-2">
                                                <i className="bi bi-arrow-up me-1"></i>30%
                                            </span>
                                            <span className="text-nowrap text-xs text-muted">Since last month</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12">
                                <div className="card shadow border-0">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <span className="h6 font-semibold text-muted text-sm d-block mb-2">Total hours</span>
                                                <span className="h3 font-bold mb-0">1.400</span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="icon icon-shape bg-info text-white text-lg rounded-circle">
                                                    <i className="bi bi-clock-history"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-2 mb-0 text-sm">
                                            <span className="badge badge-pill bg-soft-danger text-danger me-2">
                                                <i className="bi bi-arrow-down me-1"></i>-5%
                                            </span>
                                            <span className="text-nowrap text-xs text-muted">Since last month</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12">
                                <div className="card shadow border-0">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <span className="h6 font-semibold text-muted text-sm d-block mb-2">Work load</span>
                                                <span className="h3 font-bold mb-0">95%</span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                                    <i className="bi bi-minecart-loaded"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-2 mb-0 text-sm">
                                            <span className="badge badge-pill bg-soft-success text-success me-2">
                                                <i className="bi bi-arrow-up me-1"></i>10%
                                            </span>
                                            <span className="text-nowrap text-xs text-muted">Since last month</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card shadow border-0 mb-7">
                            <div className="card-header">
                                <h5 className="mb-0">Applications</h5>
                            </div>
                            
                            <div className="card-footer border-0 py-5">
                                <span className="text-muted text-sm">Showing 10 items out of 250 results found</span>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        </div>
    </div>
  )
}
