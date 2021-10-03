import React,{useState, useEffect} from 'react';
import NoteOrder from "./NoteOrder"
import {viewData} from "./ViewData"
import axios from "axios";


function ViewOrderCanteen() {
    const [info, setInfo] = useState([]);
    useEffect(() => {
        axios.get('https://no-queue-webapp.herokuapp.com/Canteen/orders')
  .then((response) => {
       setInfo(response.data);

  });
    }, []);
    return (
        <div style={{backgroundColor: "#FEFBF3",backgroundImage: `url(${"https://www.transparenttextures.com/patterns/brick-wall.png"})`,minHeight:"100vh"}}>
            {/* <AmulProduct heading="Welcome to Amul" data={amulData}/> */}
            <div className="viewHeading">
                <h1 className="viewOrderh1">VIEW ORDER</h1>
            </div>
            
            {info.map((note, index)=>{
                return <NoteOrder items={note.Order.Items} qt={note.Order.Qt} total={note.Order.Total} name={note.Name} phone={note.Phone} shopName="Canteen" />;
            })}

        </div>
    )
}

export default ViewOrderCanteen;
