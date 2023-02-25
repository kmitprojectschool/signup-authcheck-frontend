import React from 'react';
import MyDashNavbar from './MyDashNavbar';

const DashboardAdmin = () => {
    console.log(localStorage);
    return (
        <div>
           
           <h1>  Welcome  {localStorage.getItem("user")}! (Admin)</h1>
           <h2 className='bg-primary'> User DashBoard placeholder page! </h2>                       
        </div>
    );
};

export default DashboardAdmin;