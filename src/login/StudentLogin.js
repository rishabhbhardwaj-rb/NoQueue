import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
function StudentLogin() {
  const [studentLogin, setStudentLogin] = useState({
    sname:"",
    rollno: "",
    phoneno: "",
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name);
    console.log(value);
    setStudentLogin({ ...studentLogin, [name]: value });
  };
  function validateForm() {
    return (
      studentLogin.rollno.length === 11 && studentLogin.phoneno.length === 10
    );
  }
  const [records, setRecords] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecord = { ...studentLogin, id: new Date().getTime().toString };
    setRecords([...records, newRecord]);
  };
  // const handleClick = () => {
  //   if(validateForm){
  //     console.log("hello World");
  //   }

  // }
  return (
    // <div>

    //     <form action="" onSubmit={handleSubmit}>
    //         <div>
    //             <label htmlFor="rollno">Roll No</label>
    //             <input type="text" value={studentLogin.rollno} onChange={handleChange} name="rollno" id="rollno" />
    //         </div>
    //         <div>
    //             <label htmlFor="phoneno">Phone No</label>
    //             <input type="text" value={studentLogin.phoneno} onChange={handleChange} name="phoneno" id="phoneno" />
    //         </div>
    //         <Link to="/Home"><button type="submit"  disabled={!validateForm()}>LogIn</button></Link>
    //     </form>

    // </div>
    <div style={{backgroundColor:"#F3F1F5", minHeight:"100vh", backgroundImage:`url(${"https://www.transparenttextures.com/patterns/padded-light.png"})`}}>
      <div class="login-box">
        <h2>Student Login</h2>
        <form onSubmit={handleSubmit}>
        <div class="user-box">
            <input
              type="text"
              value={studentLogin.sname}
              onChange={handleChange}
              name="sname"
              id="sname"
            />
            <label htmlFor="rollno">Name</label>
          </div>
          <div class="user-box">
            <input
              type="text"
              value={studentLogin.rollno}
              onChange={handleChange}
              name="rollno"
              id="rollno"
            />
            <label htmlFor="rollno">Roll No</label>
          </div>
          <div class="user-box">
            <input
              type="text"
              value={studentLogin.phoneno}
              onChange={handleChange}
              name="phoneno"
              id="phoneno"
            />
            <label htmlFor="phoneno">Phone No</label>
          </div>
          <Link to={{
            pathname:'/Home',
            state: {
              mobile:studentLogin.phoneno,
              sName: studentLogin.sname
            }
          }}>
            <button type="submit" disabled={!validateForm()}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default StudentLogin;
