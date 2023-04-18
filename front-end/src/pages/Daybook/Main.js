import React, { useState, useEffect } from "react";
import "./Dayform.css";
import axios from "axios";
import Modal from "../../components/Modal";

function Main() {
  const [error, setError] = useState(null);

  const [daybookData, setDaybookData] = useState([]);
  const [originalDaybookData, setOriginalDaybookData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  const [record, setRecord] = useState({
    action: "",
    date: "",
    accountNo:"",
    amount: "",
    recipient_payer: "",
    referenceNo: "",
    reason: "",
    folionum: "",
  });

  async function fetchData() {
    try {
      const response = await axios.get(
        "http://localhost:5000/get-daybook"
      );
      console.log(response.data);
      setDaybookData(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  
  // Modal show
  const [show, setShow] = useState(false);
  const [selecedId, setSelectedId] = useState(null);

  const handleInputChange = (event) => {
      setRecord({ ...record, [event.target.name]: event.target.value });
  };

  // OnClick update button
  function handleClick(record) {
    console.log("clicked!!");
    setShow(true);
    setSelectedId(record._id);
    setRecord({
      ...record,
      action: record.action,
      date: record.date,
      accountNo: record.accountNo,
      amount: record.amount,
      recipient_payer: record.recipient_payer,
      referenceNo: record.referenceNo,
      reason: record.reason,
      folionum: record.folionum,
    });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("record");

    // const id = "1";
    try {
      const response = await axios.post(
        `http://localhost:5000/update-daybookRecord?recordId=${selecedId}`,
        record
      );

      const data = response.data;
      console.log(data); // Do something with the response

      if (
        response.status === 400 && 
        data.error === "record already exists."
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

  async function deleteRecord(recordId) {
    try {
      await axios.post(
        `http://localhost:5000/delete-daybookRecord/?recordId=${recordId}`
      );
      console.log(`Record with ID ${recordId} deleted successfully`);
      // Fetch updated inventory data after successful delete
      setDaybookData(daybookData.filter((item) => item._id !== recordId));
      setOriginalDaybookData(
        originalDaybookData.filter((item) => item._id !== recordId)
      );
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const filteredItems = originalDaybookData.filter(
      (item) =>
        item.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.serviceType.toLowerCase().includes(searchTerm.toLowerCase())
      //  item.dateOpening.toLowerCase().includes(searchTerm.toLowerCase())||
      //  item.dateClosing.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDaybookData(filteredItems);
  };

  const handleRefresh = () => {
    // Reset filtered data and clear search term
    setDaybookData(originalDaybookData);
    setSearchTerm("");
  };

  const currentDate = new Date();
  const [day, setDay] = useState(currentDate.getDate());
  const [month, setMonth] = useState(currentDate.toLocaleString("en-us", { month: "long" }));
  const [year, setYear] = useState(currentDate.getFullYear());

  return (
    <div>
      <header className="bg-surface-primary border-bottom pt-6">
        <div className="container-fluid">
          <div className="mb-npx">
            <div className="row align-items-center">
              <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                <h1 className="h2 mb-0 ls-tight">Day Book Details</h1>
                <form onSubmit={handleSearchSubmit} style={{ display: "flex" }}>
                  <input
                    type="text"
                    for = "search"
                    placeholder="Search records"
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
                    href="/daybookform"
                    className="btn d-inline-flex btn-sm btn-primary mx-1"
                  >
                    <span className=" pe-2">
                      <i className="bi bi-plus"></i>
                    </span>
                    <span>Add Transaction</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="py-6 bg-surface-secondary">
        <div className="container-fluid">
          <div className="date-card">
            <div className="day">{day}</div>
            <div>
              <div className="month">{month}</div>
              <div className="year">{year}</div>
            </div>
          </div>
          <div className="row g-6 mb-6">
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card shadow border-0">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                        Opening Balance
                      </span>
                      <span className="h3 font-bold mb-0">Rs.1000</span>
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
                      <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                        Closing Balance
                      </span>
                      <span className="h3 font-bold mb-0">Rs.4000</span>
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
                      <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                        Total amount for day
                      </span>
                      <span className="h3 font-bold mb-0">Rs. 5500</span>
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
                      <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                        No. of Transactions 
                      </span>
                      <span className="h3 font-bold mb-0">3</span>
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
                  <th scope="col">
                      <b>S.No</b>
                    </th>
                    <th scope="col">
                      <b>Date</b>
                    </th>
                    <th scope="col">
                      <b>Amount Recieved/Paid</b>
                    </th>
                    <th scope="col">
                      <b>Account Number</b>
                    </th>
                    <th scope="col">
                      <b>Recipient/Payer</b>
                    </th>
                    <th scope="col">
                      <b>Reference No</b>
                    </th>
                    <th scope="col">
                      <b>Reason</b>
                    </th>
                    <th scope="col">
                      <b>Amount</b>
                    </th>
                    <th scope="col">
                      <b>Folio Number</b>
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {daybookData.map((record, index) => (
                    <tr key ={index}>
                      <td>
                        <a className="text-heading font-semibold">
                          {index+1}
                        </a>
                      </td>
                       <td>
                        <a className="text-heading font-semibold" >
                          {record.date}
                        </a>
                      </td>
                      <td>
                        <span className="badge badge-lg badge-dot">
                          {record.action === "Recieved" ?  (<i className="bg-success"></i>)
                          : (<i className="bg-warning"></i>)}
                          {record.action}
                        </span>
                      </td>
                      <td>
                        <a className="text-heading font-semibold" >
                          {record.accountNo}
                        </a>
                      </td>
                      <td>
                        <a className="text-heading font-semibold" >
                          {record.recipient_payer}
                        </a>
                      </td>
                      <td>
                        <a className="text-heading font-semibold">
                          {record.referenceNo}
                        </a>
                      </td>
                      <td>
                        <a className="text-heading font-semibold" >
                          {record.reason}
                        </a>
                      </td>
                      <td>{record.amount}/-</td>
                      <td>{record.folionum}</td>
                      <td className="text-end">
                        <button
                          type="button"
                          className="btn btn-sm btn-square btn-neutral text-danger-hover"
                          onClick={() => handleClick(record)}
                        >
                          <i className="bi bi-pencil"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-square btn-neutral text-danger-hover"
                          onClick={() => deleteRecord(record._id)}
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
          <label className="modal_label" for="date">Account Number:</label>
            <input className="modal_input" type="date" id="date" name="date" value={record.date}
              onChange={(event) => handleInputChange(event)} 
            />
            <label className="modal_label" for="action">Recieved from/Paid to:</label>
            <select className="modal_select" name="action" id="action" value={record.action} onChange={(event) => handleInputChange(event)}>
              <option value="Recieved">Recieved</option>
              <option value="Paid">Paid</option>
            </select>

            <label className="modal_label" for="amount">Amount:</label>
            <input className="modal_input" type="text" id="amount" name="amount" value={record.amount}
              onChange={(event) => handleInputChange(event)} 
            />

            <label className="modal_label" for="recipient_payer">Recipient/Payer:</label>
            <input className="modal_input" type="text" id="recipient_payer" name="recipient_payer" value={record.recipient_payer} 
              onChange={(event) => handleInputChange(event)} required
            />

            <label className="modal_label" for="accountNo">Account Number:</label>
            <input className="modal_input" type="text" id="accountNo" name="accountNo" value={record.accountNo}
              onChange={(event) => handleInputChange(event)} 
            />

            <label className="modal_label" for="referenceNo">Reference Number:</label>
            <input className="modal_input" type="text" id="referenceNo" name="referenceNo" value={record.referenceNo}
              onChange={(event) => handleInputChange(event)} 
            />

            <label className="modal_label" for="reason">Reason</label>
            <input className="modal_input" type="text" id="reason" name="reason" value={record.reason}
              onChange={(event) => handleInputChange(event)} required
            />
           
           

            <label className="modal_label" for="folionum">Folio No:</label>
            <input className="modal_input" type="text" id="folionum" name="folionum" value={record.folionum}
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
