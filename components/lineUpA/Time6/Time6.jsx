import React from 'react'
import Logo from '../Images/city.png';
import Logo1 from '../Images/grotta.png';
export default function Time6() {
  return (
    <>
    <div style={{display:"flex",flexDirection: "row",width: 600, height: 70,
     backgroundColor: "purple",marginLeft:"20px"}}>
        <div style={{width: 270, height:70,backgroundColor:"white"}}>
        <img
                        src={Logo}
                        alt=''
                        style={{ height: 40, margin: 6 }}
                    />
        </div>
    <div style={{color:"white",fontSize:28,marginLeft: 50,marginTop: 20}}>
        CITY
    </div>
    <div style={{width:30,height:20,backgroundColor:"purple",fontSize:28,
         marginLeft: 50,marginTop: 20}}>
        0</div>
    <div style={{width: 290, height:70,backgroundColor:"red",marginLeft: 50,color:"white",fontSize:18}}>
     <center>
     <br/>
     </center>
     </div>
     <div style={{color:"white",fontSize:28,marginLeft: 50,marginTop: 20}}>ASR
     </div>
     <div style={{width:30,height:20,backgroundColor:"purple",fontSize:28,
         marginLeft: 50,marginTop: 20}}>
        0</div>
     <div style={{width: 270, height:70,backgroundColor:"white",marginLeft:43}}>
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
