import React from 'react';
import MyDashNavbar from './MyDashNavbar';

const DashboardUser = () => {
    return (
        <div>
          
           <h1>  Welcome {localStorage.getItem("user")}! (user)</h1>
           <h2 className='bg-warning'> User DashBoard placeholder page! </h2> 
           
        </div>
    );
};

export default DashboardUser;