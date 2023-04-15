import React,{useState, useEffect} from 'react'
import axios from "axios";

function Main(){

    const [employeeData, setEmployeeData] = useState([]);
    const [originalEmployeeData, setOriginalEmployeeData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    async function fetchEmployee(){
        try{
            const response = await axios.get('http://localhost:5000/get-employee');
            console.log(response.data);
            setEmployeeData(response.data);
            setOriginalEmployeeData(response.data);

        }catch(error){
            console.log(error);
        }
    }; 

    async function deleteEmployee(itemId) {
        try {
            await axios.post(`http://localhost:5000/delete-employee/?itemId=${itemId}`);
            console.log(`Item with ID ${itemId} deleted successfully`);
            // Fetch updated inventory data after successful delete
            setEmployeeData(employeeData.filter(item => item._id !== itemId));
            setOriginalEmployeeData(originalEmployeeData.filter(item => item._id !== itemId));
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    }

    useEffect(() => {
        fetchEmployee();
    }, [])
    const handleSearch = event => {
        setSearchTerm(event.target.value);
      };
      const handleSearchSubmit = event => {
        event.preventDefault();
        const filteredItems = originalEmployeeData.filter((item) =>
         item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
         item.bankName.toLowerCase().includes(searchTerm.toLowerCase()) ||
         item.accountholderName.toLowerCase().includes(searchTerm.toLowerCase()) ||
         item.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
         item.streetaddress.toLowerCase().includes(searchTerm.toLowerCase()) ||
         item.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
         item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
         item.phone.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
         item.zipCode.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
         item.aadharNo.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
         item.accountNo.toString().toLowerCase().includes(searchTerm.toLowerCase()) 

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
                            <form onSubmit={handleSearchSubmit} style={{ display: "flex" }} >
                                    <input
                                        type="text"
                                        placeholder="Search Employee"
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
                                    <a href="/Eform" className="btn d-inline-flex btn-sm btn-primary mx-1">
                                        <span className=" pe-2">
                                            <i className="bi bi-pencil"></i>
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
                                    <th scope="col">Name</th>
                                    <th scope="col">Date of Joining</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Contact</th>
                                    <th scope="col">Department</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {employeeData.map((item, index) =>(
                                    <tr>
                                    <td>
                                        <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                                        <a className="text-heading font-semibold" href="#">
                                            {item.name}
                                        </a>
                                    </td>
                                    <td>
                                        Feb 15, 2021
                                    </td>
                                    <td>
                                        <a className="text-heading font-semibold" href="#">
                                            {item.streetaddress} {item.area}  {item.zipCode}
                                        </a>
                                    </td>
                                    <td>
                                        {item.phone}
                                    </td>
                                    <td>
                                        <span className="badge badge-lg badge-dot">
                                            { (item.designation === "technician") ? <i className="bg-success"></i> : <i className="bg-warning"></i> }
                                            {item.designation}
                                        </span>
                                    </td>
                                    <td className="text-end">
                                        <a href="#" className="btn btn-sm btn-neutral">View</a>
                                        <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover" onClick={() => deleteEmployee(item._id)}>
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

export default Main
