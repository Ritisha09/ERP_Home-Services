import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import axios from "axios";
import Modal from "../../components/Modal";

function Main() {
  const [error, setError] = useState(null);
  const [employeeData, setEmployeeData] = useState([]);
  const [originalEmployeeData, setOriginalEmployeeData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");



  // Modal show
  const [employee, setEmployee] = useState({
    empName: "",
    phone: "",
    dateJoining: "",
    streetaddress: "",
    email: "",
    area: "",
    zipCode: "",
    aadharNo: "",
    bankName: "",
    accountNo: "",
    accountholderName: "",
    IFSCcode: "",
    designation: "",
  });

  const [show, setShow] = useState(false);
  const [selecedId, setSelectedId] = useState(null);

  const [expand, setExpand] = useState(false);
  const [employeeExpand, setEmployeeExpand] = useState([]);

  const handleInputChange = (event) => {
    setEmployee({ ...employee, [event.target.name]: event.target.value });
  };

  // OnClick update button
  function handleClick(employee) {
    console.log("clicked!!");
    setShow(true);
    setSelectedId(employee._id);
    setEmployee({
      ...employee,
      empName: employee.name,
      phone: employee.phone,
      dateJoining: employee.dateJoining,
      streetaddress: employee.streetaddress,
      email: employee.email,
      area: employee.area,
      zipCode: employee.zipCode,
      aadharNo: employee.aadharNo,
      bankName: employee.bankName,
      accountNo: employee.accountNo,
      accountholderName: employee.accountholderName,
      IFSCcode: employee.IFSCcode,
      designation: employee.designation,
    });
  };

  function handleExpandClick(employee){
    setExpand(true);
    setEmployeeExpand(employee);
  };

  async function fetchEmployee() {
    try {
      const response = await axios.get("http://localhost:5000/get-employee");
      console.log(response.data);
      setEmployeeData(response.data);
      setOriginalEmployeeData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  async function deleteEmployee(itemId) {
    try {
      await axios.post(
        `http://localhost:5000/delete-employee/?itemId=${itemId}`
      );
      console.log(`Item with ID ${itemId} deleted successfully`);
      // Fetch updated inventory data after successful delete
      setEmployeeData(employeeData.filter((item) => item._id !== itemId));
      setOriginalEmployeeData(
        originalEmployeeData.filter((item) => item._id !== itemId)
      );
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("emp");

    // const id = "1";
    try {
      const response = await axios.post(
        `http://localhost:5000/update-employee?empId=${selecedId}`,
        employee
      );

      const data = response.data;
      console.log(data); // Do something with the response

      if (response.status === 400 && data.error === "Item already exists.") {
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

  useEffect(() => {
    fetchEmployee();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const filteredItems = originalEmployeeData.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.bankName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.accountholderName
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        item.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.streetaddress.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.phone
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        item.zipCode
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        item.aadharNo
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        item.accountNo
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    );
    setEmployeeData(filteredItems);
  };

  const handleRefresh = () => {
    // Reset filtered data and clear search term
    setEmployeeData(originalEmployeeData);
    setSearchTerm("");
  };
  
  return (
    <div>
      <header className="bg-surface-primary border-bottom pt-6">
        <div className="container-fluid">
          <div className="mb-npx">
            <div className="row align-items-center">
              <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                <h1 className="h2 mb-0 ls-tight">Employees Details</h1>
                <form onSubmit={handleSearchSubmit} style={{ display: "flex" }}>
                  <input
                    type="text"
                    for = "search"
                    placeholder="Search Employee"
                    value={searchTerm}
                    onChange={handleSearch}
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
                    onClick={handleRefresh}
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
                    <th scope="col"><b>Name</b></th>
                    <th scope="col"><b>Date of Joining</b></th>
                    <th scope="col"><b>Address</b></th>
                    <th scope="col"><b>Contact</b></th>
                    <th scope="col"><b>Department</b></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {employeeData.map((employee, index) => (
                    <tr>
                      <td>
                        <img
                          alt="..."
                          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                          className="avatar avatar-sm rounded-circle me-2"
                        />
                        <a className="text-heading font-semibold" onClick={() => handleExpandClick(employee)} href="#">
                          {employee.name}
                        </a>
                      </td>
                      <td>{employee.dateJoining}</td>
                      <td>
                        {/* <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-1.png" className="avatar avatar-xs rounded-circle me-2" /> */}
                        <a className="text-heading font-semibold" href="#">
                          {employee.streetaddress} {employee.area}{" "}
                          {employee.zipCode}
                        </a>
                      </td>
                      <td>{employee.phone}</td>
                      <td>
                        <span className="badge badge-lg badge-dot">
                          {employee.designation === "technician" ? (
                            <i className="bg-success"></i>
                          ) : (
                            <i className="bg-warning"></i>
                          )}
                          {employee.designation}
                        </span>
                      </td>
                      <td className="text-end">
                        <button
                          type="button"
                          className="btn btn-sm btn-square btn-neutral text-danger-hover"
                          onClick={() => handleClick(employee)}
                        >
                          <i className="bi bi-pencil"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-square btn-neutral text-danger-hover"
                          onClick={() => deleteEmployee(employee._id)}
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
            <label className="modal_label" for="name">Name of Employee:</label>
            <input className="modal_input" type="text" id="name" name="empName" value={employee.empName}
                onChange={(event) => handleInputChange(event)} required
            />
            <label className="modal_label" for="designation">Designation:</label>
            <input className="modal_input" type="text" id="designation" name="designation" value={employee.designation}
                onChange={(event) => handleInputChange(event)} required
            />
            <label className="modal_label" for="phone">Mobile Number:</label>
            <input className="modal_input" type="tel" id="phone" name="phone" value={employee.phone}
                onChange={(event) => handleInputChange(event)} required
            />
            <label className="modal_label" for="email">Email:</label>
            <input className="modal_input" type="email" id="email" name="email" value={employee.email}
                onChange={(event) => handleInputChange(event)} required
            />``
            <label className="modal_label" for="date-input">Joining Date:</label>
            <input className="modal_input" type="date" id="date-joining" name="date-joining" value={employee.dateJoining}
                onChange={(event) => handleInputChange(event)} required
            />
            <label className="modal_label" for="street-address">Street Address:</label>
            <input className="modal_input" type="text" id="street-address" name="streetaddress" value={employee.streetaddress}
                onChange={(event) => handleInputChange(event)} required
            />
            <label className="modal_label" for="area">Area:</label>
            <input className="modal_input" type="text" id="area" name="area" value={employee.area}
                onChange={(event) => handleInputChange(event)} required
            />
            <label className="modal_label" for="zip">Zip Code:</label>
            <input className="modal_input" type="text" id="zip" name="zipCode" value={employee.zipCode}
                onChange={(event) => handleInputChange(event)} required
            />

            <label className="modal_label" for="file">Aadhar Number</label>
            <input className="modal_input" type="number" id="file" name="aadharNo" value={employee.aadharNo}
                onChange={(event) => handleInputChange(event)} required
            />

            <label className="modal_label" for="bankdetails">Bank Details:</label>
            <label className="modal_label" for="bankname">Bank Name:</label>
            <input className="modal_input" type="text" id="bankname" name="bankName" value={employee.bankName}
                onChange={(event) => handleInputChange(event)} required
            />

            <label className="modal_label" for="accountno">Account Number:</label>
            <input className="modal_input" type="text" id="accountno" name="accountno" value={employee.accountNo}
                onChange={(event) => handleInputChange(event)} required
            />

            <label className="modal_label" for="accname">Account Holder Name:</label>
            <input className="modal_input" type="text" id="accname" name="accountholderName" value={employee.accountholderName}
                onChange={(event) => handleInputChange(event)} required
            />

            <label className="modal_label" for="ifsc">IFSC Code:</label>
            <input className="modal_input" type="text" id="ifsc" name="IFSCcode" value={employee.IFSCcode}
                onChange={(event) => handleInputChange(event)} required
            />
            <div className="button">
              <button className="modal_button" type="submit" value="submit">
                Submit
              </button>
            </div>
          </form>
        </Modal>

        <Modal
          show={expand}
          onClose={() => setExpand(false)}
          height={350}
          width={550}
        >
          <form className="modal_form" >
            <tr>
            <label className="modal_label" ><b>Employee ID:</b> {employeeExpand.id}</label>
            <label className="modal_label" ><b>Employee Name:</b> {employeeExpand.name}</label>
            <label className="modal_label" ><b>Contact:</b> {employeeExpand.phone}</label>
            <label className="modal_label" ><b>Designation:</b> {employeeExpand.designation}</label>
            <label className="modal_label" ><b>Employee Address:</b> {employeeExpand.streetaddress} {employeeExpand.area} {employeeExpand.zipCode}</label>
            <label className="modal_label" ><b>Email:</b> {employeeExpand.email}</label>
            <label className="modal_label" ><b>Aadhar No:</b> {employeeExpand.aadahrNo}</label>
            <label className="modal_label" ><b>Bank Name:</b> {employeeExpand.bankName}</label>
            <label className="modal_label" ><b>Account No:</b> {employeeExpand.accountNo}</label>
            <label className="modal_label" ><b>IFSC Code:</b> {employeeExpand.IFSCcode}</label>
            
            </tr>

          </form>
        </Modal>
      </main>
    </div>
  );
}

export default Main;
