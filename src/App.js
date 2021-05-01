import React from 'react';
//import Login from './Components/LoginSignUp/Login';
//import SignUp from './Components/LoginSignUp/SignUp';

import AddContact from './Components/AddContact/AddContact';
import EditContact from './Components/EditContact/EditContact';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import NavBar from './NavBar'


const App = () => {
    return (
        <div>
            
            <BrowserRouter>
            <div>
            {/*<ul className="ul-list">
                    <li className="items">
                    <Link to="/">Login</Link> 
                    </li> 
                    <li className="items">
                    <Link to="/signUp">SignUp</Link> 
                    </li>
                    <li className="items">
                    <Link to="/navbar">NavBar</Link> 
                    </li>
                    <li className="items">
                        <Link to="/add">AddContact</Link>
                    </li>
                    <li className="items">
                        <Link to="/edit/:id">EditContact</Link>
                    </li>
    </ul>*/}
                <Switch>
                   {/* <Route exact path="/">
                        <Login/>
                    </Route>
                    <Route  path="/SignUp">
                        <SignUp/>
</Route>*/}
                    <Route  path="/">
                        <NavBar/>
                    </Route>
                    <Route path="/add">
                        <AddContact />
                    </Route>
                    <Route path="/edit/:id">
                        <EditContact />
                    </Route>
                </Switch>
            </div>
            </BrowserRouter>
            
       
           
        </div>
        
    );
};

export default App;