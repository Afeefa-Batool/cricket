import React from 'react';
import Logo from '../Images/city.png';
import Logo1 from '../Images/grotta.png';


export default function Time4() {
  return (
      <>
      
      <div style={{width: 450,height: 100,backgroundColor: "purple",marginLeft: "190px",fontSize: 28,color: "#fff"}}>
        
      <div style={{width: 150,height: 60,backgroundColor: "red",marginLeft: "190px",float:"right",
      marginTop:"-60px"}}></div>  
       <center><p> <br/>NJARÐVÍK </p></center>      
       <div style={{width: 100, height: 100, backgroundColor: "#fff",marginTop: -100}}>
       <img
            src={Logo}
            alt=''
            style={{ height: 80, margin: 10 }}
          />
       </div>
       
      </div>
      
      <div style={{width: 750, height: 4, backgroundColor:"yellow",marginLeft: "190px"}}></div>
      <div style={{width: 310, height: 18, backgroundColor:"yellow",marginLeft: "190px",fontSize: 14, fontWeight: "bold"}}>
      <center>  
        <p>VIVALDIVÖLLURINN FIELD</p>
    </center>
      </div>
      
      <div style={{width: 450,height: 100,backgroundColor: "purple",marginLeft: "490px",marginTop:"-17px",fontSize: 28,color: "#fff"}}>       
       <div style={{width: 100, height: 100, backgroundColor: "#fff",float:"right"}}>
       <img
            src={Logo1}
            alt=''
            style={{ height: 97, margin: 6 }}
          />
       </div>
        <center><p> <br/>GRÓTTA </p></center>
      </div>
      </>
  )
}
