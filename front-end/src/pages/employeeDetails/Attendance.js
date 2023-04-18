import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import axios from "axios";
import Modal from "../../components/Modal";

function Attendance() {
  const [error, setError] = useState(null);
  const [employeeData, setEmployeeData] = useState([]);
  const [attendanceData, setAttendanceData] = useState([{}]);
  const [selectedDate, setSelectedDate] = useState();

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



  // OnClick update button

  async function fetchEmployee() {
    try {
      const response = await axios.get("http://localhost:5000/get-employee");
      console.log(response.data);
      setEmployeeData(response.data);
      // setOriginalEmployeeData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchAttendanceData(selectedDate){
    try{
        const response = await axios.get(`http://localhost:5000/get-attendance/${selectedDate}`);
        console.log(`http://localhost:5000/get-attendance/${selectedDate}`)
        // console.log(response.data);
        // setAttendanceData(response.data);
        return response;

        // console.log(attendanceData);

    }catch(error){
        console.log(error);
    }
  }

  const handleDateChange = async (event) => {
    

    try{
      setSelectedDate(event.target.value);
      // console.log(date);
      // let dd = event.target.value;
      // setSelectedDate(date);
      console.log(selectedDate);
      const response = await fetchAttendanceData(event.target.value);
      
        setAttendanceData(response.data);
        console.log(attendanceData);
        
    }catch(error) {
        console.error('Error fetching student:', error);
    };
  };

  // correct
  const handleAbsentChange = (employeeId) => {
    const updatedAttendanceData = attendanceData.map((attendance) => {
      if (attendance.employeeId === employeeId) {
        return {
          ...attendance,
          absent: true,
          present: false,
        };
      }
      return attendance;
    });
    setAttendanceData(updatedAttendanceData);
  };

  
  const handlePresentChange = (employeeId) => {
    setAttendanceData({
      ...attendanceData,
      [employeeId]: {
        ...attendanceData[employeeId],
        absent: false,
        present: !attendanceData[employeeId].present
      }
    });
  };

 
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("attendance");

    // const id = "1";
    try {
        const response = await fetch('http://localhost:5000/add-update-attendance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({date: {selectedDate}, attendanceData: {attendanceData}})
      });

        const data = response;
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
    // fetchAttendanceData();
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
                <h1 className="h2 mb-0 ls-tight">Employees Attendance</h1>
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
                  <a
                    href="/Eform"
                    className="btn d-inline-flex btn-sm btn-primary mx-1"
                  >
                    <span className=" pe-2">
                      {/* <i className="bi bi-pencil"></i> */}
                        Date:
                        <input type="date" value={selectedDate} onChange={(e) => {setSelectedDate(e.target.value);console.log(selectedDate)}} />
                        
                    </span>
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
                    <th scope="col"><b>EmpId</b></th>
                    <th scope="col"><b>Name</b></th>
                    <th scope="col"><b>Present</b></th>
                    <th scope="col"><b>Absent</b></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {employeeData.map((employee, index) => (
                    <tr key ={employee.id}>
                      <td>
                        <a className="text-heading font-semibold" href="#">
                          {employee.id}
                        </a>
                      </td>
                      <td>
                        <a className="text-heading font-semibold" href="#">
                          {employee.name}
                        </a>
                      </td>
                      {attendanceData.find(data => data.employeeId === employee.id ) &&(
                        
                         <form>
                           <td>
                            <input type="checkbox" name="present" checked={attendanceData.find(data => data.employeeId === employee.id).present} onChange={() => handleAbsentChange(employee._id)}/>
                          </td>
                          <td>
                            <input type="checkbox" name="absent" checked={attendanceData.find(data => data.employeeId === employee.id).absent} onChange={() => handleAbsentChange(employee._id)}/>
                          </td>
                        </form>
                      )}
                     
                      
                      {/* <td className="text-end">
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
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* <Modal
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
        </Modal> */}
      </main>
    </div>
  );
}

export default Attendance;
