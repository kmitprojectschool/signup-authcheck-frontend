import React, { useState } from 'react';
import axios from 'axios';

const TechData =  () => {
    const mydata = [{"_id":"1","name":"blah","details":"blah"}];
    const [newData,setNewData] = useState([]);

    const fun = async () => {
        const res = await axios.get("http://localhost:5000/user/tech");
        console.log("status is "+res.status)
        if (res.status === 200) {         
          console.log(res.data.techdetails);
          setNewData(res.data.techdetails); 
        }
    }


    try {
        fun();
      } catch(error) {
        console.log(" error" +error);
      } finally {
          console.log("in techdata finally");
      }
    
    return (
        <div>
               <h1 > Hi {localStorage.getItem("user")}! Welcome!</h1>
       
            <table className='table table-hover my-3'>
                <thead>
                    <tr>
                        
                        <th> Name </th> 
                        <th> Details </th> 
                    </tr>                    
                </thead>
                <tbody>
                    {
                         newData && newData.map( (e,i) => {
                            return  <tr key={i}>
                                <td>{e.name}</td>
                                <td> {e.details}</td>
                                 </tr>                   
                         })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default TechData;