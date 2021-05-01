import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from "react-router";
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router';

const AddEdit = () => {
  const { Id } = useParams();
  const history=useHistory();
  history.push("/")
  const dispatch=useDispatch();

  const contacts=useSelector(state=>state)
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(Id)
  )

  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  
  useEffect(() => {
    setName(currentContact.Name);
    setPhone(currentContact.Phone);
  }, [currentContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkPhone= contacts.filter((contact) =>
      contact.Phone === Phone && contact.Id !== currentContact.Id
        ? contact
        : null
    );

    if (!Name || !Phone) {
      return("Please fill in all fields!!");
    }
    
    if (checkPhone.length > 0) {
      return("This phone number already exists!!");
    }

    const data = {
      id: parseFloat(Id),
      Name,
      Phone,
    };
    dispatch({type:"UPDATE_CONTACT",payload:data})
    return("Contact Updated")
    
  }



    return (
        
    <div className="container-fluid">
      {currentContact?(
      <>
      <h1 className="text-center text-dark py-3 display-2">Edit Contact{Id}</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <input
                className="form-control"
                type="number"
                placeholder="Phone"
                value={Phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="btn  btn-dark "
                type="submit"
                value="Update"
              />
              <Link to="/" className="btn  btn-dark ml-3">Cancel</Link>
            </div>
          </form>
        </div>
      </div>
     
      </>
      ):(<h1 className="text-center text-dark py-3 display-2">Contact not found</h1>)
      }
    </div>
      
   
    );
    

        
    
};

export default AddEdit;