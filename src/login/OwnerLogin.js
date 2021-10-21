import React,{useState} from "react";
import {Link} from "react-router-dom";
function OwnerLogin() {
  const owners = [{username:"amul",password:"amul123"},{username:"nescafe",password:"nescafe123"},{username:"canteen",password:"canteen123"} ];
  const [ownerLogin, setOwnerLogin] = useState({
    username:"",
    password:""
  });
  function handleChange(event){
    const name = event.target.name;
    const value = event.target.value;
    setOwnerLogin({...ownerLogin, [name]:value});
  }
  function validateForm(){
    var i;
    for(i=0; i<owners.length; i++){
      if(owners[i].username === ownerLogin.username && owners[i].password === ownerLogin.password){
        return true;
      }
    }
    return false;
  }
  var link = "/owner"+ownerLogin.username
  return (
    // <div>
    //     <form action="">
    //         <div>
    //             <label htmlFor="username">Username</label>
    //             <input type="text" value={ownerLogin.username} onChange={handleChange} name="username" id="username" />
    //         </div>
    //         <div>
    //             <label htmlFor="password">Password</label>
    //             <input type="text" value={ownerLogin.password} onChange={handleChange} name="password" id="password" />
    //         </div>
    //         <Link to="/owner"><button type="submit" disabled={!validateForm()}>LogIn</button></Link>
    //     </form>

    // </div>
    <div style={{backgroundColor:"#F3F1F5", minHeight:"100vh", backgroundImage:`url(${"https://www.transparenttextures.com/patterns/padded-light.png"})`}}>
    <div class="login-box">
      <h2>Owner Login</h2>
      <form>
        <div class="user-box">
          <input
            type="text"
            value={ownerLogin.username}
            onChange={handleChange}
            name="username"
            id="username"
          />
          <label htmlFor="username">Username</label>
        </div>
        <div class="user-box">
          <input
            type="text"
            value={ownerLogin.phoneno}
            onChange={handleChange}
            name="password"
            id="password"
          />
          <label htmlFor="password">Password</label>
        </div>
        <Link to={link}>
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

export default OwnerLogin;