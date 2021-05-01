import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

const Home = () => {
    const contacts=useSelector((state)=>state);
    const dispatch=useDispatch();
    const deleteContact=(Id)=>{
    dispatch({type:"DELETE_CONTACT",
              payload:Id
            })
    return("Contact Deleted")

    }
    return (
        
            
            <div className="container">
                <h3>Contacts</h3>
                <div className="row d-flex flex-column">
                    <Link to="/add" className="btn btn-outline-dark my-5 ml-auto ">
                        Add Contact
                    </Link>
                </div>
                
               <div className="col-md-10 mx-auto my-4">
                    <table className="table table-hover">
                        <thead className="table-header bg-dark text-white ">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {contacts.map((contact, Id) => (
                            <tr key={Id}>
                                <td>{Id + 1}</td>
                                <td>{contact.Name}</td>
                                <td>{contact.Phone}</td>
                                <td> <Link to={`/edit/${contact.Id}`} className="btn btn-sm btn-primary mr-1"/>Edit</td> 
                                <td><button type="button" onClick={() => deleteContact(contact.id)}   className="btn btn-sm btn-danger"> Delete</button></td>
                            </tr>
                            ))}
                        </tbody>     
                       
                    </table>        
                </div>
            </div>
    );
}

export default Home;