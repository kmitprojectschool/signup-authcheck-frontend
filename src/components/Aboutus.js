import React from 'react';

const Aboutus = () => {
    return (
        <div>
            <h1 className='bg-secondary'> Welcome {localStorage.getItem("user")}! About us page</h1>
        </div>
    );
};

export default Aboutus;