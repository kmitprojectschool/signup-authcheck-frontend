import React from 'react';

const Contactus = () => {
    return (
        <div>
            <h1 className='bg-success'> Hi {localStorage.getItem("user")}! Welcome to Contactus page</h1>
        </div>
    );
};

export default Contactus;