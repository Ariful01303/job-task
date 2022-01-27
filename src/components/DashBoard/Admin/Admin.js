import React from 'react';
import { useForm } from 'react-hook-form';
import Typical from 'react-typical'


const Admin = () => {
    const { register, handleSubmit,reset} = useForm();

  const onSubmit = (data) => {
    fetch(" https://whispering-sierra-10389.herokuapp.com/adminMaker", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
      reset()
  };
    return (
        <div>
              <h1  className="title" style={{color: ' black'}}>
       
       {""}
       <Typical  
       loop={Infinity}
       steps={[

           "Make Admin ",
           1000, 
            " by Email",
           1000, 
           
       ]}
       />
   </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input  className="p-2 m-2 w-50"  name="email" placeholder="Email"  type="email" {...register("email", { required: true })}/>
          <br />
  
          <input className="submit-btn btn btn-danger mt-3" type="submit" value="Send"/>
        </form>
      </div>
    );
};

export default Admin;