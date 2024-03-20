import { useState } from "react";
import "./FormStyles.css";
import Modal from "./Modal";

export default function LoanForm() {
  const [errormsg,setErrorMsg]=useState(null)
  const [showModal, setShowModal] = useState(false);
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });

  function handelFromSubmit(e) {
    e.preventDefault();
    setErrorMsg(null)
    const {age,phoneNumber}=loanInputs
  if(age<18 || age>65){
  
    setErrorMsg("The age is not allowed!")
  }else if(phoneNumber.length<11 || phoneNumber.length>12){
    setErrorMsg("Phone number format is  incorrect ,Check your phone number!")
  }
    setShowModal(true);
  }
  function handelDivClick() {
  
    if (showModal) {
      setShowModal(false);
    }
  }
  const btnIsDisabled =
    loanInputs.name === "" ||
    loanInputs.age === "" ||
    loanInputs.phoneNumber === "";

  return (
    <div
      className="flex"
      style={{ flexDirection: "column" }}
      onClick={handelDivClick}
    >
      <form id="loan-form" className="flex" style={{ flexDirection: "column" }}>
        <h1>Requesting a Loan</h1>
        <hr></hr>
        <label>Name </label>
        <input
          type="text"
          placeholder="Your Full Name"
          value={loanInputs.name}
          onChange={(e) => {
            setLoanInputs({ ...loanInputs, name: e.target.value });
          }}
        />
        <label>Phone number</label>
        <input
          type="number"
          placeholder="Your phone Number"
          value={loanInputs.phoneNumber}
          onChange={(e) => {
            setLoanInputs({ ...loanInputs, phoneNumber: e.target.value });
          }}
        />
        <label>Age </label>
        <input
          type="number"
          placeholder="Your Age"
          value={loanInputs.age}
          onChange={(e) => {
            setLoanInputs({ ...loanInputs, age: e.target.value });
          }}
        />
        <label style={{ marginTop: "30px" }}>Are you an employee? </label>
        <input
          type="checkbox"
          checked={loanInputs.isEmployee}
          onChange={(e) => {
            setLoanInputs({ ...loanInputs, isEmployee: e.target.checked });
          }}
        />
        <label>Salery </label>
        <select
          value={loanInputs.salaryRange}
          onChange={(e) => {
            setLoanInputs({ ...loanInputs, salaryRange: e.target.value });
          }}
        >
          <option>less than 500$</option>
          <option>between 500$ and 2000$</option>
          <option>above 2000$</option>
        </select>
        <button
          className={btnIsDisabled ? "disabled" : ""}
          disabled={btnIsDisabled}
          id="submit-Loan-btn"
          onClick={handelFromSubmit}
        >
          Submit
        </button>
      </form>
      <Modal isVisible={showModal} errormsg={errormsg}/>
    </div>
  );
}
