import React from 'react';
import Logo from '../Images/city.png';
import Logo1 from '../Images/grotta.png';


export default function Time2() {
    return (

        <>
            <div className='main'
                style={{
                    width: "500px",
                    height: "50px",
                    backgroundColor: "#032e4f",
                    display: "flex",
                    flexDirection: "row",
            
                
                }}
            >
                <div style={{ width: 60, height: 20, backgroundColor: "#032e4f", color: "#fff", fontSize: 19, marginLeft: 30, margin: 10 }}>
                <div 
                style={{width:100,height: 40,backgroundColor:"#032e4f",
                marginTop:"-10px",marginLeft:"10px",}}>
                
                  CITY
                  <div style={{width:80, height:6,backgroundColor: 'yellow'}}></div>
                </div>
                </div>
                <div style={{ width: 50, height: 60, backgroundColor: "#032e4f", marginTop: "-10px", color: "#fff", fontSize: 19, borderRadius: 10,marginLeft: 30 }}>
                    <img
                        src={Logo}
                        alt=''
                        style={{ height: 40, margin: 6 }}
                    />
                </div>
                <div style={{ width: 60, height: 20, backgroundColor: "#032e4f", color: "#fff", fontSize: 19, margin: 10 }}>
                   
                </div>

                <div style={{ display: "flex", flexDirection: "row", width: 60, height: 25, backgroundColor: "#032e4f", color: "#fff", fontSize: 19, margin: "10", marginTop: "-90" }}>
                    <div style={{ width: 65, height: 65, backgroundColor: "#032e4f", border: " 2px solid gray",marginLeft:"-30px", borderRadius: 4 ,marginTop:"-20px"}}>
                        <br/>
                       <center> 10</center>
                    </div>
                    <div style={{ width: 65, height: 65, backgroundColor: "#032e4f", border: " 2px solid gray",marginTop:"-20px", borderRadius: 4, marginLeft: 4 }} >
                        <br/>
                        <center> 10</center>
                    </div>
                </div>

              

                <div style={{ width: 50, height: 60, backgroundColor: "#032e4f", marginTop: "-10px", color: "#fff", fontSize: 19, borderRadius: 10, marginLeft: 30 }}>
                    <img
                        src={Logo1}
                        alt=''
                        style={{ height: 70 }}
                    />
                </div>
                <div 
                style={{width:100,height: 40,backgroundColor:"#032e4f",
                marginTop:"0px",marginLeft:"-3px",}}>
                <div style={{ width: 60, height: 20, backgroundColor: "#032e4f", color: "#fff", fontSize: 19, marginLeft: 40, margin: 10 }}>
                  GRO
                  <div style={{width:80, height:6,backgroundColor: 'red'}}></div>
                </div>
                </div>
                </div>

           

        </>
    )
}
