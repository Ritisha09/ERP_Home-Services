import React, {useEffect, useState} from 'react'
import Ichart from '../inventory/Ichart';
import SearchBar from '../../components/SearchBar'
import axios from "axios";

function Main() {

    const [employeeNo, setEmployeeNo] = useState();
    const [complainNo, setComplainNo] =useState();

    async function fetchEmployee() {
        try {
          const response = await axios.get("http://localhost:5000/get-employee");
          console.log(response.data);
          setEmployeeNo(response.data.length);
        } catch (error) {
          console.log(error);
        }
      }

      async function fetchComplain() {
        try {
          const response = await axios.get("http://localhost:5000/get-complain");
          console.log(response.data);
          setComplainNo(response.data.length);
        } catch (error) {
          console.log(error);
        }
      }

      useEffect(() => {
        fetchEmployee();
        fetchComplain();
      },[]);

  return (
    <div>
        <header className="bg-surface-primary border-bottom pt-6">
        <div className="container-fluid">
          <div className="mb-npx">
            <div className="row align-items-center">
              <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                <h1 className="h2 mb-0 ls-tight">Dashboard</h1>
                <form  style={{ display: "flex" }}>
                  <input
                    type="text"
                    for = "search"
                    placeholder="Search Employee"
                    style={{ marginRight: "10px" }}
                  />
                  <button
                    className="btn btn-sm btn-square btn-neutral text-hover "
                    style={{
                      borderRadius: "8px",
                      marginLeft: "5px",
                      marginTop: "12px",
                      padding: "15px 30px",
                      fontSize: "15px",
                    }}
                    type="submit"
                  >
                    Search
                  </button>
                  <button
                    className="btn btn-sm btn-square btn-neutral text-hover "
                    style={{
                      borderRadius: "8px",
                      marginLeft: "5px",
                      marginTop: "12px",
                      padding: "15px 10px",
                      fontSize: "15px",
                    }}
                    type="button"
                  >
                    <i class="bi bi-arrow-clockwise"></i>
                  </button>
                </form>
              </div>
              <div className="col-sm-6 col-12 text-sm-end">
                <div className="mx-n1">
                <a href="#" className="btn d-inline-flex btn-sm btn-neutral border-base mx-1">
                                        <span className=" pe-2">
                                            <i className="bi bi-pencil"></i>
                                        </span>
                                        <span>Import csv</span>
                                    </a>
                  <a
                    href="/Eform"
                    className="btn d-inline-flex btn-sm btn-primary mx-1"
                  >
                    <span className=" pe-2">
                      <i className="bi bi-plus"></i>
                    </span>
                    <span>Add Badge</span>
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
                                            <span className="h3 font-bold mb-0">{employeeNo}</span>
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
                                            <span className="h3 font-bold mb-0">{complainNo}</span>
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
                    <Ichart/>
                </div>
            </main>
    </div>
  )
}

export default Main;
