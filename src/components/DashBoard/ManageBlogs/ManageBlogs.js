import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../Firebase/useFirebase/useAuth';

const ManageBlogs = () => {
    const {loading}=useAuth()
    const [services,setServices]=useState([])


    useEffect(()=>{
        fetch(' https://whispering-sierra-10389.herokuapp.com/service')
        .then(res=>res.json())
        .then(data=>setServices(data)) 
        
  },[])
  const handleDelete= (id) => {
    const proceed=window.confirm("Are you sure, You want to Delete?")
      if(proceed){
        fetch(` https://whispering-sierra-10389.herokuapp.com/services/${id}`, {
          method: "DELETE",
        
        })
          .then((res) => res.json())
          .then((result) => {
              
            if (result.deletedCount) {
               
               alert("Successfully Deleted")
               const remaining=services.filter(bk=>bk._id !==id)
               setServices(remaining)
    
            } 
          });
      }
    };
    return (
        <div className="container">
        <h2 className="text-danger">Control Blogs</h2>
        {loading?<Spinner animation="border" variant="warning" /> : 
        <div>
        <div className="d-flex p-5 ">
             
           <div className="row">
           {
                  services.map((servi)=><div className="col-lg-4 col-md-6 g-2 col-sm-12 col-12 border extra-style">
                  <img className="w-100" src={servi.photo} alt="" />
                 <h2>{servi.name}</h2>
                 <button className="btn btn-danger mb-2" onClick={()=>handleDelete(servi._id)}><i class="fas fa-trash"></i></button>
                   
             </div>)
                     

                  
             }
           </div>
          </div>
          </div>}
          </div>
    );
};

export default ManageBlogs;