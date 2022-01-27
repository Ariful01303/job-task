import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AddBlogs from '../AddBlogs/AddBlogs';
import { Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import AuthProvider from '../Authcontext/AuthProvider';
import PrivateRoute from '../PrivateRout/PrivateRoute';
import Rating from 'react-rating';


const BlogDetail = () => {
    const [details,setDetails]=useState([])
    const [detail,setDetail]=useState({})
    const {idn}=useParams()
    let { path, url } = useRouteMatch();

    
    useEffect(()=>{
         fetch('http://localhost:5000/service')
         .then(res=>res.json())
         .then(data=>setDetails(data))
    },[])
   
   useEffect(()=>{
       const founddel=details.find((del)=>del._id===idn)
              setDetail(founddel)
   },[details,idn])
   
    return (
        <div className="div d-flex container   mt-5 mb-5 justify-content-center align-items-center">
        <div className="row p-2">
        <div className="col-lg-6 extra-style adjust col-md-6 col-sm-12 col-12 pb-5">
         
           <img className=" p-2" src={detail?.photo} alt="" />
           <h4>{detail?.name}</h4>
           <h3>{detail?.description}</h3>
           <Rating
                    initialRating={detail?.star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
             <div className="d-flex justify-content-between ">
            
             <span className='ms-5'><i class="far fa-clock"></i> {detail?.time}</span>
             <span className='me-5'><i class="far fa-calendar-alt"></i> {detail?.date}</span>
             </div>
             <h4>Total Coast: {detail?.totalcost}$</h4>
         
        <Link to={`${url}/addblog`} className="teast">
                  <h2 className="dashboard-menu">Add Your Own Exprience</h2>
                </Link>
           </div>
           <div  className="extra-sty col-lg-6 m-auto col-md-6 col-sm-12 p-2 col-12 w-50  ">
          
       
                <AuthProvider>
                <Switch>
                    <PrivateRoute exact path={`${path}/addblog`}>
                    <AddBlogs></AddBlogs> 
                    </PrivateRoute>
                </Switch>
                </AuthProvider>
          
             </div>
           </div>
           </div>
    );
};

export default BlogDetail;