import React, {useState, useEffect} from 'react';
import axios from  "axios";


// const main = () => {
function Main() {

    const [inventoryData, setInventoryData] = useState([]);
    const [originalInventoryData, setOriginalInventoryData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');


    async function fetchInventory(){
        try{
            const response = await axios.get('http://localhost:5000/get-inventory');
            console.log(response.data);
            setInventoryData(response.data);
            setOriginalInventoryData(response.data);
        }catch(error){
            console.error("Failed to fetch inventory data:", error);

            console.log(error);
        }
    }; 

    async function deleteInventory(itemId) {
        try {
            await axios.post(`http://localhost:5000/delete-inventory/?itemId=${itemId}`);
            console.log(`Item with ID ${itemId} deleted successfully`);
            // Fetch updated inventory data after successful delete
            setInventoryData(inventoryData.filter(item => item._id !== itemId));
            setOriginalInventoryData(originalInventoryData.filter(item => item._id !== itemId));
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    }

    useEffect(() => {
        fetchInventory();
    }, []);   
    
    const handleSearch = event => {
        setSearchTerm(event.target.value);
      };
      const handleSearchSubmit = event => {
        event.preventDefault();
        const filteredItems = originalInventoryData.filter((item) =>
         item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
         item.quantity.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
         item.price.toString().toLowerCase().includes(searchTerm.toLowerCase())

  );
        setInventoryData(filteredItems);
      };

      const handleRefresh = () => {
        // Reset filtered data and clear search term
        setInventoryData(originalInventoryData);
        setSearchTerm("");
      };





  return (
    <div>
       
            <header className="bg-surface-primary border-bottom pt-6">
                <div className="container-fluid">
                    <div className="mb-npx">
                        <div className="row align-items-center">
                            <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                                <h1 className="h2 mb-0 ls-tight">Inventory</h1>
                                <form onSubmit={handleSearchSubmit} style={{ display: "flex" }} >
                                    <input
                                        type="text"
                                        placeholder="Search Inventory"
                                        value={searchTerm}
                                        onChange={handleSearch}
                                        style={{ marginRight: "10px" }}
                                    />
                                    <button  className="btn btn-sm btn-square btn-neutral text-hover "style={{ borderRadius: "8px", marginLeft: "5px",marginTop:'12px', padding: "20px 30px", fontSize: "15px" }} type="submit">Search</button>
                                    <button  className="btn btn-sm btn-square btn-neutral text-hover "style={{ borderRadius: "8px", marginLeft: "5px",marginTop:'12px', padding: "20px 10px", fontSize: "15px" }} onClick={handleRefresh} type="button"><i class="bi bi-arrow-clockwise"></i></button>
                                    
                                </form>
                            </div>
                            <div className="col-sm-6 col-12 text-sm-end">
                                <div className="mx-n1">
                                    <a href="#" className="btn d-inline-flex btn-sm btn-neutral border-base mx-1">
                                        <span className=" pe-2">
                                            <i className="bi bi-pencil"></i>
                                        </span>
                                        <span>Edit</span>
                                    </a>
                                    <a href="/Inventform" className="btn d-inline-flex btn-sm btn-primary mx-1">
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
                                {inventoryData.map((item,index) => (
                                    <tr key = {index}>
                                    <td>
                                        <a className="text-heading font-semibold" href="#">
                                            {item.name}
                                        </a>
                                    </td>
                                    <td>
                                        {item.quantity}
                                    </td>
                                    <td>
                                        <a className="text-heading font-semibold" href="#">
                                           {item.price}/-
                                        </a>
                                    </td>
                                    <td className="text-end">
                                        <a href="#" className="btn btn-sm btn-neutral">View</a>
                                        <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover" onClick={() => deleteInventory(item._id)}>
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
           </main>
           
    </div>
  )
}

export default Main;
