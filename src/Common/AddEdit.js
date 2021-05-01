import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';


const AddEdit = () => {
  
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const contacts=useSelector((state)=>state)
  const dispatch=useDispatch();
  const history=useHistory();
  history.push("/")

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkPhone = contacts.filter((contact) =>
      contact.Phone === parseInt(Phone) && contact
    );
  
    if(!Name || !Phone){
       return ("Enter Valid Details")
    }
    if(checkPhone){
      return("Number already Exists")
    }
    const data={
      Id:contacts[contacts.length-1].Id+1,
      Name,
      Phone
    }
    dispatch({type:"ADD_CONTACT",payload:data})
    return("Contact Added")
  }
      return(
    
        <div>
    <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-2">Add Contact</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form  onSubmit={handleSubmit}>
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
                className="btn btn-block btn-dark"
                type="submit"
                value="Add Contact"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
    );

        
    
  };
export default AddEdit;