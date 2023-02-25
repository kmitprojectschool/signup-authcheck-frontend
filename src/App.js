import logo from './logo.svg';
import './App.css';
import Login from './components/Login';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import DashboardAdmin from './components/DashboardAdmin';
import DashboardUser from './components/DashboardUser';
import MyDashNavbar from './components/MyDashNavbar';
import Mynavbar from './components/Mynavbar';
import { useEffect, useState } from 'react';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import TechData from './components/TechData';
import SignUp from './components/SignUp';

function App() {
  // let username = sessionStorage.username;
  // console.log(sessionStorage);

  const [user, setUser] = useState()

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  if (user) {
        return (
          <BrowserRouter>
            <div className="App">
              
                  <Routes>   
                    <Route path="/" element={<><Mynavbar/><Login/> </>} />             
                    <Route path="/admin" element={<> <MyDashNavbar/> <DashboardAdmin/> </> } />
                    <Route path="/user" element={<> <MyDashNavbar/> <DashboardUser/> </>} />
                    <Route path="/about" element={<> <MyDashNavbar/> <Aboutus/> </>} />
                    <Route path="/contact" element={<> <MyDashNavbar/> <Contactus/> </>} />
                    <Route path="/mydata" element={<> <MyDashNavbar/> <TechData/> </>} />
                    <Route path="/signup" element={ <><Mynavbar/><SignUp/></>} />
                  </Routes>  
            </div>      
          </BrowserRouter>
        );
  }
  else {
            return ( 
              <BrowserRouter>
               <Routes>  
                <Route path="/" element={<><Mynavbar/><Login/> </>} />
                <Route path="/signup" element={ <><Mynavbar/><SignUp/></>} />
                 
              </Routes>
              </BrowserRouter>
         );
  }
{
  /*
ToDo:
Create a login component , on click, it should talk to middleware 
and check if user exists or not.
If user exists then the middile ware should send an ok status and role.
Front end should 
                - Set authorization to true, username to username, role to role, using context
                - then get the role and based on role should navigate to admin/user page.
                - Once this is done user should be able to access data appropriate to the login
                - on navigating to other components the context data should still exist.
                - Based on whether auth  is done or not, pre-login nav bar and component should display.
Make sure that FrontEnd is able to access username or auth , from any component.

In any other component, read data from db and display in a table.
In any other component, add sign up functionality
In any other component , add update profle.

For authentication -  
      use useContext
      use jwt
      use localstorage

Fint out the difference between above 3 methods








*/
  }







      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    

}

export default App;
