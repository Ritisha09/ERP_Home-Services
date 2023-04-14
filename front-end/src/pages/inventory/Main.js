import React, { useState, useEffect } from "react";
import axios from "axios";
// import InventoryChart from './InventoryChart';
import SearchBar from "../../components/SearchBar";
import Modal from "../../components/Modal";
import { Link } from "react-router-dom";

// const main = () => {
function Main() {
  const [inventoryData, setInventoryData] = useState([]);

  const [item, setitem] = useState({
    itemName: "",
    quantity: "",
    price: "",
  })



  // Modal show
  const [show, setShow] = useState(false);
  const [selecedId, setSelectedId] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) =>{
    setitem({ ...item, [event.target.name]: event.target.value});

  }
  // OnClick update button
  function handleClick(item) {
    console.log('clicked!!');
    setShow(true);
    setSelectedId(item._id);
    setitem({ ...item, itemName: item.name, quantity: item.quantity, price: item.price });
  }

  async function fetchInventory() {
    try {
      const response = await axios.get("http://localhost:5000/get-inventory");
      console.log(response.data);
      setInventoryData(response.data);
    } catch (error) {
      console.error("Failed to fetch inventory data:", error);

      console.log(error);
    }
  }

  //
  async function deleteInventory(itemId) {
    try {
      await axios.post(
        `http://localhost:5000/delete-inventory?itemId=${itemId}`
      );
      console.log(`Item with ID ${itemId} deleted successfully`);
      // Fetch updated inventory data after successful delete
      setInventoryData(inventoryData.filter((item) => item._id !== itemId));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  }

  // Update
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("u");

    // const id = "1";
    try {
      const response = await axios.post(
        `http://localhost:5000/update-inventory?itemId=${selecedId}`,
        item
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
    fetchInventory();
  }, []);

  // Graph Generate code

  // Create data for chart

  //graph end code

  return (
    <div>
      <header className="bg-surface-primary border-bottom pt-6">
        <div className="container-fluid">
          <div className="mb-npx">
            <div className="row align-items-center">
              <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                <h1 className="h2 mb-0 ls-tight">Inventory</h1>
                <SearchBar />
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
                    href="/Inventform"
                    className="btn d-inline-flex btn-sm btn-primary mx-1"
                  >
                    <span className=" pe-2">
                      <i className="bi bi-plus"></i>
                    </span>
                    <span>Add Item</span>
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
                    <th scope="col">Component Name</th>
                    <th scope="col">Count</th>
                    <th scope="col">Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {inventoryData.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <img
                          alt="..."
                          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                          className="avatar avatar-sm rounded-circle me-2"
                        />
                        <a className="text-heading font-semibold" href="#">
                          {item.name}
                        </a>
                      </td>
                      <td>{item.quantity}</td>
                      <td>
                        {/* <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-1.png" className="avatar avatar-xs rounded-circle me-2" /> */}
                        <a className="text-heading font-semibold" href="#">
                          {item.price}/-
                        </a>
                      </td>
                      <td className="text-end">
                        {/* <a href="#" className="btn btn-sm btn-neutral">
                                            
                                        </a>  */}
                        <button
                          type="button"
                          className="btn btn-sm btn-square btn-neutral text-danger-hover"
                          onClick={() => handleClick(item)}
                        >
                          <i className="bi bi-pencil"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-square btn-neutral text-danger-hover"
                          onClick={() => deleteInventory(item._id)}
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
          height={380}
          width={450}
          // itemName={item.name}
          // quantity={item.quantity}
          // price={item.price}
        >
          <form className="modal_form" onSubmit={submitHandler}>
            <label className="modal_label" for="name">
              Component Name:
            </label>
            <input
              className="modal_input"
              type="text"
              id="name"
              name="itemName"
              value = {item.itemName}
              onChange = {(event) =>handleInputChange(event)}
              required
            />
            <label className="modal_label" for="quantity">
              Quantity:
            </label>
            <input
              className="modal_input"
              type="number"
              id="quantity"
              name="quantity"
              value={item.quantity}
              onChange = {(event) =>handleInputChange(event)}
              required
            />
            <label className="modal_label" for="price">
              Price of Each:
            </label>
            <input
              className="modal_input"
              type="number"
              id="price"
              name="price"
              value = {item.price}
              onChange = {(event) =>handleInputChange(event)}
              required
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
