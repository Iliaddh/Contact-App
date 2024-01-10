import { useState } from 'react'
import app1 from "./App";

function Contact({contacts, deleteHandler}) {
  const [deletedContactId, setDeletedContactId] = useState(null);
  const handleDelete = (id) => {
    setDeletedContactId(id);
    // Delay the actual deletion to allow time for the transition effect
    setTimeout(() => {
      deleteHandler(id);
    }, 300); // Adjust the duration to match your transition duration
  };
  return (
   <>
   
   
            {
              contacts.map((contact) => (
             <ul  key={contact.id} className={`contact-item ${deletedContactId === contact.id ? 'deleted' : ''} `}>
                <li className='flex  justify-center items-center bg-gray-100 my-4 rounded-lg  border-none'>
                <p  className='my-2 mx-4 p-2 text-md text-gray-500  w-2/5'>{contact.name} {contact.lastName}</p>
                <p className='my-2 p-2  mx-4 text-md text-gray-500 w-2/5'>{contact.email}</p>
                <p  className='my-2 p-2 mx-4  text-md text-gray-500 w-2/5'>{contact.phone}</p>
                <button className=' border-2 border-none  bg-blue-500 text-white p-2 h-full rounded-lg cursor-pointer mr-4 text-sm' onClick={() => handleDelete(contact.id)}>Delete</button>
                </li>
              </ul>
              ))


            }
   
   </>
    
  )
}

export default Contact
