import { useState } from 'react'
import './App.css';
import ContactList from "./contactsList";
import { v4  } from 'uuid';

const inputs = [
  {type:"text", name:"name", placeholder:"Name"},
  {type:"text", name:"lastName", placeholder:"Last Name"},
  {type:"email", name:"email", placeholder:"Email"},
  {type:"number", name:"phone", placeholder:"Phone"},
]

function App() {

  const [contacts , setContacts] = useState([]);
  const [alert , setAlert] = useState("");
 const [contact, setContact] = useState({
  id:"",
  name: "",
  lastName: "",
  email: "",
  phone:"",
 });

 const changeHandler = (event) => {
  const name = event.target.name;
  const value = event.target.value;

  setContact((contact) => ({...contact , [name] : value}));

 }

 const addHandler = (event) =>{
  if(
    !contact.name ||
    !contact.lastName ||
    !contact.email ||
    !contact.phone
  ){
    setAlert("Please enter valid data!");
    return;
  }
  setAlert("");
  const newContact = {...contact, id: v4()}
  setContacts((contacts) => [... contacts, newContact]);
  setContact({
    name: "",
    lastName: "",
    email: "",
    phone:"",
  })
 }

 const deleteHandler = id => {
  const newContacts = contacts.filter((contact) => contact.id !== id );
  setContacts(newContacts);
 }
 
  return (
    <body className= 'justify-center m-12'>
      
      <div className=' justify-center text-center shadow-2xl rounded-lg p-2 shadow-blue-200' >
          <h1 className='my-8 text-blue-500 text-2xl'>Contact App</h1>
          {
            inputs.map( input => (<input
              className='border-gray-400 border-2 border-solid p-1 mx-7 rounded-md w-2/5  max-w-2/5 mb-3'
               type={input.type}
                placeholder={input.placeholder} 
                name= {input.name} 
                value= {contact[input.name]}
                onChange={changeHandler}
              />))
          }
          
        <button onClick={addHandler} className=' border-2 border-none  bg-blue-500 text-white p-2 rounded-lg w-full mt-8 cursor-pointer ' >Add Contact</button>
      </div>
      <p className='mt-6 text-blue-500 text-2xl'>Contacts List</p>
      {alert && <div className='rounded-lg bg-red-200  p-1 mt-2  '>
        <p className='text-red-500 '>{alert}</p>
      </div> }

      
      <div className='border-solid border-gray-200 border-2 px-4 rounded-lg my-5'>
        
        {
          contacts.length ? (
            
            <ContactList contacts= {contacts} deleteHandler = {deleteHandler}></ContactList>
          ) : (
            <p className='flex text-center justify-center p-4 text-blue-500 text-lg'>No contacts yet!</p>
          )



        }
        
      </div>

    </body>
    
  )
}

export default App
