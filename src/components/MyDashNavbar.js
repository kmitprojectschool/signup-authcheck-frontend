import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyDashNavbar = () => {

  const navigate = useNavigate();
  const logOut = () =>{
    localStorage.clear();
    navigate("/");
  
  }
    return (
        <div>           

            <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">ProjectSchool</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/about">AboutUs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/mydata">Get Data</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact Us</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <span className="d-flex" role="search">
         <input type="button" onClick={logOut} value="Logout" className="btn btn-info btn-md">
        </input>
      </span>
    </div>
  </div>
</nav>
        </div>
    );
};

export default MyDashNavbar;