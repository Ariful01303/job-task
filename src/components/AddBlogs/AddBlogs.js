import { useForm } from 'react-hook-form';
import Typical from 'react-typical'

const AddBlogs = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
   
      fetch("https://whispering-sierra-10389.herokuapp.com/services", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
  
      reset();
    }; 
  
    return (
        <div className="container mb-5 mt-5 extra-sty col-lg-6 m-auto col-md-6 col-sm-12 p-2 col-12 w-75 ">
            <h1  className="title" style={{color: ' black'}}>
       
        {""}
        <Typical  
        loop={Infinity}
        steps={[

            "Add Your",
            1000, 
            "Own Exprience",
            1000,
        ]}
        />
    </h1>
       
         <form onSubmit={handleSubmit(onSubmit)}>

 
  <input className="p-2 m-2 w-100" type="text" {...register("name")} placeholder="Title"/> <br />
 
  <input className="p-2 m-2 w-100" type="text" {...register("description")} placeholder="Description"/> <br />
  <input className="p-2 m-2 w-100" type="date" {...register("date")} placeholder="Date"/> <br />
  <input className="p-2 m-2 w-100" type="time" {...register("time")} placeholder="Time"/> <br />
  <input className="p-2 m-2 w-100" type="text" {...register("location")} placeholder="Location"/> <br />
  <input className="p-2 m-2 w-100" type="number" {...register("totalcost")} placeholder="Total cost"/> <br />
 
 <input className="p-2 m-2 w-100" {...register("photo")} placeholder="Img Url"/> <br />
 <select
          className="p-2 m-2 w-25"
          {...register("star")}>
        <option value="1">0 Star</option>
        <option value="1">1 Star</option>
        <option value="2">2 Star</option>
        <option value="3">3 Star</option>
        <option value="4">4 Star</option>
        <option value="5">5 Star</option>
      </select>
           <br/>
  <input className="btn btn-primary" type="submit" />
</form>
    </div>
    );
};

export default AddBlogs;