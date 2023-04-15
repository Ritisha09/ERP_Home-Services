import React, {useState, useEffect} from 'react'
import axios from "axios";

function Main(){
    const [complainData, setComplainData] = useState([]);
    const [originalComplainData, setOriginalComplainData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    async function fetchComplain(){
        try{
            const response = await axios.get('http://localhost:5000/get-complain');
            console.log(response.data);
            setComplainData(response.data);
            setOriginalComplainData(response.data);

        }catch(error){
            console.log(error);
        }
    }; 

    async function deleteComplain(itemId) {
        try {
            await axios.post(`http://localhost:5000/delete-complain/?itemId=${itemId}`);
            console.log(`Item with ID ${itemId} deleted successfully`);
            // Fetch updated inventory data after successful delete
            setComplainData(complainData.filter(item => item._id !== itemId));
            setOriginalComplainData(originalComplainData.filter(item => item._id !== itemId));
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    }

    useEffect(() => {
        fetchComplain();
    }, [])


    const handleSearch = event => {
        setSearchTerm(event.target.value);
      };
      const handleSearchSubmit = event => {
        event.preventDefault();
        const filteredItems = originalComplainData.filter((item) =>
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
      };

  return (
    <div>
            <header className="bg-surface-primary border-bottom pt-6">
                <div className="container-fluid">
                    <div className="mb-npx">
                        <div className="row align-items-center">
                            <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                                <h1 className="h2 mb-0 ls-tight">Complaints</h1>
                                <form onSubmit={handleSearchSubmit} style={{ display: "flex" }} >
                                    <input
                                        type="text"
                                        placeholder="Search Complains"
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
                                    <a href="/Compform" className="btn d-inline-flex btn-sm btn-primary mx-1">
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
                                       <th scope="col">Complaint ID</th>
                                       <th scope="col">About </th>
                                       <th scope="col">Status</th>
                                       <th scope="col">Date of Opening</th>
                                       <th scope="col">Date of Closing</th>
                                       <th scope="col">Bill Amount</th>
                                       <th></th>
                                   </tr>
                               </thead>
                               <tbody>
                                    {complainData.map((item,index) => (
                                        <tr>
                                        <td>
                                            {/* <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" /> */}
                                            <a className="text-heading font-semibold" href="#">
                                                {item.compId}
                                            </a>
                                        </td>
                                        <td>
                                            <span className="badge badge-lg badge-dot">
                                                {item.serviceType}
                                            </span>
                                        </td>
                                        <td>
                                            <span className="badge badge-lg badge-dot">
                                                {(item.status === "Completed")? <i className="bg-success"></i>:(item.status === "Under Progress")? <i className="bg-warning"></i>:<i className="bg-secondary"></i>}
                                                    {item.status}
                                            </span>
                                        </td>
                                        <td className="text-heading font-semibold">
                                            {/* <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-1.png" className="avatar avatar-xs rounded-circle me-2" /> */}
                                            {/* <a className="text-heading font-semibold" href="#"> */}
                                               {item.dateOpening.substring(0, 10)}
                                            {/* </a> */}
                                        </td>
                                        {(item.dateClosing === null)? <td></td>: <td className="text-heading font-semibold"> {item.dateClosing.substring(0, 10)} </td>}
                                        <td>
                                            5000/-
                                        </td>
                                        <td className="text-end">
                                            <a href="#" className="btn btn-sm btn-neutral">View</a>
                                            <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover" onClick={() => deleteComplain(item._id)}>
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
