import React from 'react';
import Logo from '../Images/city.png';
import Logo1 from '../Images/grotta.png';

export default function Time() {
  return (
    <>
      <div className='main'
        style={{
          width: "430px",
          height: "40px",
          backgroundColor: "#032e4f",
          display: "flex",
          flexDirection: "row",
          borderRadius: 10
        }}
      >
        <div style={{ width: 60, height: 20, backgroundColor: "#032e4f", color: "#fff", fontSize: 19, margin: 10 }}>
          07 : 23
        </div>
        <div style={{ width: 50, height: 60, backgroundColor: "#032e4f", marginTop: "-10px", color: "#fff", fontSize: 19, borderRadius: 10 }}>
          <img
            src={Logo}
            alt=''
            style={{ height: 40, margin: 6 }}
          />
        </div>
        <div style={{ width: 60, height: 20, backgroundColor: "#032e4f", color: "#fff", fontSize: 19, margin: 10 }}>
          <u >CITY</u>
        </div>

        <div style={{ display: "flex", flexDirection: "row", width: 60, height: 25, backgroundColor: "#032e4f", color: "#fff", fontSize: 19, margin: 10, marginTop: "-90" }}>
          <div style={{ width: 25, height: 24, backgroundColor: "#032e4f", border: " 1px solid yellow", borderRadius: 3 }}>
            10
          </div>
          <div style={{ width: 25, height: 24, backgroundColor: "#032e4f", border: " 1px solid yellow", borderRadius: 3, marginLeft: 4 }} >
            10
          </div>
        </div>

        <div style={{ width: 60, height: 20, backgroundColor: "#032e4f", color: "#fff", fontSize: 19, margin: 10 }}>
          <u >GRO</u>
        </div>

        <div style={{ width: 50, height: 60, backgroundColor: "#032e4f", marginTop: "-10px", color: "#fff", fontSize: 19, borderRadius: 10 }}>
          <img
            src={Logo1}
            alt=''
            style={{ height: 70 }}
          />
        </div>



      </div>

    </>
  )
}
