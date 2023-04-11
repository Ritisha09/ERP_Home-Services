import React, {useState , useEffect} from "react";
import SidebarLeft from "../../components/SidebarLeft";
import "./Dayform.css";



function Dayamtexpensesform() {
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("2");

    const id = "1";
    const date = document.getElementById("date").value;
    const amtexp = document.getElementById("amtexp").value;
    const paidto = document.getElementById("paidto").value;
    const reason = document.getElementById("reason").value;
    const folionum = document.getElementById("folionum").value;
    try {
      const response = await fetch("http://localhost:5000/add-Dayamtexpenses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          date,
          amtexp,
          paidto,
          reason,
          folionum,
        }),
      });

      const data = await response.json();
      console.log(data); // Do something with the response

      if (response.status === 400 && data.error === "Item already exists.") {
        // setIsRegistered(true);
        setError(data.error);
      } else {
        setError("");
      }
      // edge case
      e.target.reset();
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div>
      <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <SidebarLeft />
        <div className="h-screen flex-grow-1 overflow-y-lg-auto w-100">
          <header className="bg-surface-primary border-bottom pt-6">
            <div className="container-fluid">
              <div className="mb-npx">
                <div className="row align-items-center">
                  <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                    <h1 className="h2 mb-0 ls-tight">
                      DayBook Amount Expenses
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <form className="neumorphic-form" onSubmit = {submitHandler}>
            <label for="date-input">Enter a date:</label>
            <input type="date" id="date" name="date-input" required />
            <label for="amtexp">Amount Expenses:</label>
            <input type="number" id="amtexp" name="amtexp" required />
            <label for="moneypt">Money Paid To:</label>
            <input type="text" id="paidto" name="moneypt" required />
            <label for="reason">Reason:</label>
            <input type="text" id="reason" name="reason" required />
            <label for="folionum">Folio Number:</label>
            <input type="number" id="folionum" name="folionum" required />

            <button type="submit" value="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Dayamtexpensesform;
