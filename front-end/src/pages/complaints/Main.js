import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import axios from "axios";
import "./Cform.css";

import Modal from "../../components/Modal";

function Main() {
  const [error, setError] = useState(null);

  const [complainData, setComplainData] = useState([]);
  const [originalComplainData, setOriginalComplainData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filters
  const [filterComplain, setFilterComplain] = useState([]);

  const [filters, setFilters] = useState({
    phone: "",
    serviceType: "",
    status: "",
    empId: "",
    dateOpening: "",
    dateClosing: "",
    bill: "",
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));

  };

const filteredComplaints = complainData.filter((complain) => {
    // Filter the students based on the current filter values
    return (
        complain.phone &&
        complain.serviceType.toLowerCase().includes(filters.serviceType.toLowerCase()) &&
        complain.status.toLowerCase().includes(filters.status.toLowerCase()) &&
        complain.empId.toLowerCase().includes(filters.empId.toLowerCase()) &&
        complain.dateOpening.toLowerCase().includes(filters.dateOpening.toLowerCase()) &&
        complain.dateClosing.toLowerCase().includes(filters.dateClosing.toLowerCase()) &&
        complain.bill.toLowerCase().includes(filters.bill.toLowerCase())
    );
});

  // Modal show
  const [complain, setComplain] = useState({
    phone: "",
    serviceType: "",
    status: "",
    empId: "",
    dateOpening: "",
    dateClosing: "",
    bill: "",
  });

  const [show, setShow] = useState(false);
  const [selecedId, setSelectedId] = useState(null);


  const handleInputChange = (event) => {
      setComplain({ ...complain, [event.target.name]: event.target.value });
  };

      // OnClick update button
  function handleClick(complain) {
    console.log("clicked!!");
    setShow(true);
    setSelectedId(complain._id);
    setComplain({
      ...complain,
        phone: complain.phone,
        serviceType: complain.serviceType,
        status: complain.status,
        empId: complain.empId,
        dateOpening: complain.dateOpening,
        dateClosing: complain.dateClosing,
        bill: complain.bill,
    });

    console.log(complain.dateOpening);
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("complain");

    // const id = "1";
    try {
      const response = await axios.post(
        `http://localhost:5000/update-complain?compId=${selecedId}`,
        complain
      );

      const data = response.data;
      console.log(data); // Do something with the response

      if (
        response.status === 400 && 
        data.error === "Complain already exists."
      ) {
        // setIsRegistered(true);
        setError(data.error);
      } else {
        setError("");

        // reloading the same page
        window.location.reload();
      }
      // edge case
    } catch (error) {
      console.log("error");
    }
  };

  async function fetchComplain() {
    try {
      const response = await axios.get("http://localhost:5000/get-complain");
      console.log(response.data);
      setComplainData(response.data);
      setOriginalComplainData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteComplain(itemId) {
    try {
      await axios.post(
        `http://localhost:5000/delete-complain/?itemId=${itemId}`
      );
      console.log(`Item with ID ${itemId} deleted successfully`);
      // Fetch updated inventory data after successful delete
      setComplainData(complainData.filter((item) => item._id !== itemId));
      setOriginalComplainData(
        originalComplainData.filter((item) => item._id !== itemId)
      );
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  }

  useEffect(() => {
    fetchComplain();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const filteredItems = originalComplainData.filter(
      (item) =>
        item.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.serviceType.toLowerCase().includes(searchTerm.toLowerCase())
      //  item.dateOpening.toLowerCase().includes(searchTerm.toLowerCase())||
      //  item.dateClosing.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setComplainData(filteredItems);
  };

  const handleRefresh = () => {
    // Reset filtered data and clear search term
    setComplainData(originalComplainData);
    setSearchTerm("");
                                   
    // Filters
    setFilters({
      phone: "",
      serviceType: "",
      status: "",
      empId: "",
      dateOpening: "",
      dateClosing: "",
      bill: "",
      });
  };

  return (
    <div>
      <header className="bg-surface-primary border-bottom pt-6">
        <div className="container-fluid">
          <div className="mb-npx">
            <div className="row align-items-center">
              <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                <h1 className="h2 mb-0 ls-tight">Complaints</h1>
                <form onSubmit={handleSearchSubmit} style={{ display: "flex" }}>
                  <input
                    type="text"
                    for = "search"
                    placeholder="Search Complains"
                    value={searchTerm}
                    onChange={handleSearch}
                    style={{ marginRight: "10px" }}
                  />
                  <button
                    className="btn btn-sm btn-square btn-neutral text-hover "
                    style={{
                      borderRadius: "8px",
                      marginLeft: "5px",
                      marginTop: "10px",
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
                      marginTop: "10px",
                      padding: "15px 10px",
                      fontSize: "15px",
                    }}
                    onClick={handleRefresh}
                    type="button"
                  >
                    <i class="bi bi-arrow-clockwise"></i>
                  </button>
                </form>
              </div>
              <div className="col-sm-6 col-12 text-sm-end">
                <div className="mx-n1">
                  <a
                    href="#"
                    className="btn d-inline-flex btn-sm btn-neutral border-base mx-1"
                  >
                    <span className=" pe-2">
                      <i className="bi bi-pencil"></i>
                    </span>
                    <span>Edit</span>
                  </a>
                  <a
                    href="/Compform"
                    className="btn d-inline-flex btn-sm btn-primary mx-1"
                  >
                    <span className=" pe-2">
                      <i className="bi bi-plus"></i>
                    </span>
                    <span>Add Complaint</span>
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
                    <th scope="col"><b>Mobile No</b></th>
                    <th scope="col"><b>Complaint ID</b></th>
                    <th scope="col"><b>About Complain</b></th>
                    <th scope="col"><b>Status</b></th>
                    <th scope="col"><b>Engineer Assigned</b></th>
                    <th scope="col"><b>Date of Opening</b></th>
                    <th scope="col"><b>Date of Closing</b></th>
                    <th scope="col"><b>Bill Amount</b></th>
                    <th></th>
                  </tr>
                  <tr>
                    <td>
                      <input className="filter_input" 
                        type="text"
                        name="phone"
                        value={filters.phone}
                        onChange={handleFilterChange}
                      />
                      </td>
                      <td>
                      </td>
                      <td>
                        <input className = "filter_input"
                          type="text"
                          name="serviceType"
                          value={filters.serviceType}
                          onChange={handleFilterChange}
                        />
                      </td>
                      <td className = "filter_td">
                        <select className = "filter_select" name ="status" id ="status" value = {filters.status} onChange={handleFilterChange}>
                          {/* <option >All</option> */}
                          <option value="Completed">Completed</option>
                          <option value="Under Progress">Under Progress</option>
                          <option value="Invalid">Invalid</option>
                        </select>
                        {/* <input className = "input"
                          type="text"
                          name="status"
                          value={filters.status}
                          onChange={handleFilterChange}
                        /> */}
                      </td>
                      <td>
                        <input className = "filter_input"
                          type="text"
                          name="empId"
                          value={filters.empId}
                          onChange={handleFilterChange}
                        />
                      </td>
                      <td>
                        <input className = "filter_input"
                          type="text"
                          name="dateOpening"
                          value={filters.dateOpening}
                          onChange={handleFilterChange}
                        />
                      </td>
                      <td>
                        <input className = "filter_input"
                          type="text"
                          name="dateClosing"
                          value={filters.dateClosing}
                          onChange={handleFilterChange}
                        />
                      </td>
                      <td>
                        <input className = "filter_input"
                          type="text"
                          name="bill"
                          value={filters.bill}
                          onChange={handleFilterChange}
                        />
                      </td>
                  </tr>
                </thead>
                <tbody>
                  {filteredComplaints.map((complain, index) => (
                    <tr>
                      <td>
                        {/* <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" /> */}
                        <a className="text-heading font-semibold" href="#">
                          {complain.phone}
                        </a>
                      </td>
                      <td>
                        {/* <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" /> */}
                        <a className="text-heading font-semibold" href="#">
                          {complain.compId}
                        </a>
                      </td>
                      <td>
                        <span className="badge badge-lg badge-dot">
                          {complain.serviceType}
                        </span>
                      </td>
                      <td>
                        <span className="badge badge-lg badge-dot">
                          {complain.status === "Completed" ? (
                            <i className="bg-success"></i>
                          ) : complain.status === "Under Progress" ? (
                            <i className="bg-warning"></i>
                          ) : (
                            <i className="bg-secondary"></i>
                          )}
                          {complain.status}
                        </span>
                      </td>
                      <td>
                        <span className="badge badge-lg badge-dot">
                          {complain.empId}
                        </span>
                      </td>
                      <td className="text-heading font-semibold">
                        {/* <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-1.png" className="avatar avatar-xs rounded-circle me-2" /> */}
                        {/* <a className="text-heading font-semibold" href="#"> */}
                        {complain.dateOpening}
                        {/* </a> */}
                      </td>
                      {complain.dateClosing === null ? (
                        <td></td>
                      ) : (
                        <td className="text-heading font-semibold">
                          {complain.dateClosing}
                        </td>
                      )}
                      <td>{complain.bill}</td>
                      <td className="text-end">
                        <button
                          type="button"
                          className="btn btn-sm btn-square btn-neutral text-danger-hover"
                          onClick={() => handleClick(complain)}
                        >
                          <i className="bi bi-pencil"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-square btn-neutral text-danger-hover"
                          onClick={() => deleteComplain(complain._id)}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Modal
          show={show}
          onClose={() => setShow(false)}
          height={500}
          width={550}
        >
          <form className="modal_form" onSubmit={submitHandler}>
            <label className="modal_label" for="phone">Mobile:</label>
            <input className="modal_input" type="text" id="phone" name="phone" value={complain.phone} required
            />
            <label className="modal_label" for="date">Enter a Date:</label>
            <input className="modal_input" type="date" id="dateOpening" name="dateOpening" value={complain.dateOpening}
                onChange={(event) => handleInputChange(event)} 
            />
            <label className="modal_label" for="serviceType">Nature of Problem:</label>
            <select className="modal_select" name="serviceType" id="serviceType" value={complain.serviceType} onChange={(event) => handleInputChange(event)}>
              <option value="Chimney Service">Chimney Service</option>
              <option value="A.C. Service">A.C. Service</option>
              <option value="Plumber">Plumber</option>
              <option value="Fridge Double Door">Fridge Double Door</option>
              <option value="Geyser">Geyser</option>
              <option value="Fully Automatic Washing Machine">Fully Automatic Washing Machine</option>
              <option value="Front Loading Washing Machine">Front Loading Washing Machine</option>
            </select>
            <label className="modal_label" for="status">Status of Complaint</label>
            <select className="modal_select" name="status" id="status"  value={complain.status} onChange={(event) => handleInputChange(event)} >
              <option value="Completed">Completed</option>
              <option value="Under Progress">Under Progress</option>
              <option value="Invalid">Invalid</option>
            </select>
           
            <label className="modal_label" for="dateClosing">Complaint Closing date:</label>
            <input className="modal_input" type="date" id="dateClosing" name="dateClosing" value={complain.dateClosing}
                onChange={(event) => handleInputChange(event)} 
            />

            <label className="modal_label" for="bill">Bill Amount:</label>
            <input className="modal_input" type="text" id="bill" name="bill" value={complain.bill}
                onChange={(event) => handleInputChange(event)} required
            />
            
            <div className="button">
              <button className="modal_button" type="submit" value="submit">
                Submit
              </button>
            </div>
          </form>
        </Modal>
      </main>
    </div>
  );
}

export default Main;