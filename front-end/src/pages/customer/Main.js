import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import axios from "axios";
import Modal from "../../components/Modal";

function Main() {
  const [error, setError] = useState(null);
  const [customerData, setCustomerData] = useState([]);
  const [originalCustomerData, setOriginalCustomerData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Phone update
  const [previousPhone, setPreviousPhone] = useState("");
  
  // Modal show
  const [customer, setCustomer] = useState({
    custName: "",
    phone: "",
    streetaddress: "",
    area: "",
    zipCode: "",
  });

  const [show, setShow] = useState(false);
  const [selecedId, setSelectedId] = useState(null);

  const handleInputChange = (event) => {
    setCustomer({ ...customer, [event.target.name]: event.target.value });
  };

  // OnClick update button
  function handleClick(customer) {
    console.log("clicked!!");
    setShow(true);
    setSelectedId(customer._id);
    setPreviousPhone(customer.phone);
    setCustomer({
      ...customer,
      custName: customer.name,
      phone: customer.phone,
      streetaddress: customer.streetaddress,
      area: customer.area,
      zipCode: customer.zipCode,
    });
  }

  async function fetchCustomer() {
    try {
      const response = await axios.get("http://localhost:5000/get-customer");
      console.log(response.data);
      setCustomerData(response.data);
      setOriginalCustomerData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteCustomer(custId) {
    try {
      await axios.post(
        `http://localhost:5000/delete-customer/?custId=${custId}`
      );
      console.log(`Item with ID ${custId} deleted successfully`);
      // Fetch updated inventory data after successful delete
      setCustomerData(customerData.filter((item) => item._id !== custId));
      setOriginalCustomerData(
        originalCustomerData.filter((item) => item._id !== custId)
      );
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("emp");

    // const id = "1";
    try {
      const response = await axios.post(
        `http://localhost:5000/update-customer?custId=${selecedId}`,
        customer
      );

      const data = response.data;
      console.log(data); // Do something with the response

      if(previousPhone != customer.phone){
        // setPreviousPhone(customer.phone)
        const CompResponse = await axios.put(
          `http://localhost:5000/update-phoneComplain`,
          {oldPhone: previousPhone, newPhone: customer.phone}
        );
        console.log(`Updated ${CompResponse.data.message} complaint(s)`);
      }

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
    fetchCustomer();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const filteredItems = originalCustomerData.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.streetaddress.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.phone
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        item.zipCode
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    );
    setCustomerData(filteredItems);
  };

  const handleRefresh = () => {
    // Reset filtered data and clear search term
    setCustomerData(originalCustomerData);
    setSearchTerm("");
  };
  return (
    <div>
      <header className="bg-surface-primary border-bottom pt-6">
        <div className="container-fluid">
          <div className="mb-npx">
            <div className="row align-items-center">
              <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                <h1 className="h2 mb-0 ls-tight">Customers Details</h1>
                <form onSubmit={handleSearchSubmit} style={{ display: "flex" }}>
                  <input
                    type="text"
                    for = "search"
                    placeholder="Search Customer"
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
                      <i className="bi bi-pencil"></i>
                    </span>
                    <span>Add Customer</span>
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
                    <th scope="col"><b>Address</b></th>
                    <th scope="col"><b>Contact</b></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {customerData.map((customer, index) => (
                    <tr>
                      <td>
                        <img
                          alt="..."
                          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                          className="avatar avatar-sm rounded-circle me-2"
                        />
                        <a className="text-heading font-semibold" href="#">
                          {customer.name}
                        </a>
                      </td>
                      <td>
                        <a className="text-heading font-semibold" href="#">
                          {customer.streetaddress} {customer.area}{" "}
                          {customer.zipCode}
                        </a>
                      </td>
                      <td>{customer.phone}</td>
                      
                      <td className="text-end">
                        <button
                          type="button"
                          className="btn btn-sm btn-square btn-neutral text-danger-hover"
                          onClick={() => handleClick(customer)}
                        >
                          <i className="bi bi-pencil"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-square btn-neutral text-danger-hover"
                          onClick={() => deleteCustomer(customer._id)}
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
            <label className="modal_label" for="name">Name of Customer:</label>
            <input className="modal_input" type="text" id="name" name="custName" value={customer.custName}
                onChange={(event) => handleInputChange(event)} required
            />
            <label className="modal_label" for="phone">Mobile Number:</label>
            <input className="modal_input" type="tel" id="phone" name="phone" value={customer.phone}
                onChange={(event) => handleInputChange(event)} required
            />
            <label className="modal_label" for="street-address">Street Address:</label>
            <input className="modal_input" type="text" id="street-address" name="streetaddress" value={customer.streetaddress}
                onChange={(event) => handleInputChange(event)} required
            />
            <label className="modal_label" for="area">Area:</label>
            <input className="modal_input" type="text" id="area" name="area" value={customer.area}
                onChange={(event) => handleInputChange(event)} required
            />
            <label className="modal_label" for="zip">Zip Code:</label>
            <input className="modal_input" type="text" id="zip" name="zipCode" value={customer.zipCode}
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
