import React from "react";
import "./Card.css";
import img from "../../assets/img.jpg";

function Card(props) {
  return (
    
      <div className="cards">
        <div className="card" style={{ backgroundColor: props.bgcolor }}>
          <img src={props.image} className="img" />
          <div style={{display:'flex', flexDirection:'column'}}>
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
          <h3>{props.price}rs</h3>
          <button name="button" style={{backgroundColor: props.btnColor,width:'fit-content',alignSelf:"center", padding:'5px',borderRadius:'10px', border:"none"}}>click me</button>
          </div>
        </div>
      </div>

  );
}

export default Card;
