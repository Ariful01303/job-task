import React, { useEffect } from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import Aos from 'aos';

import './Blogs.css'
const Blogs = ({service}) => {
   
    const {name,date,time,photo,_id,star,description,totalcost}=service
    useEffect(()=>{
        Aos.init({
            offset:100,
            duration:1000,
        });
    })
    return (

        <div className='adjust extra-style p-2' data-aos="fade-up">
            <div>
            <img src={photo} alt="" />
             <h4>{name}</h4>
             <p>{description?.slice(0,120)} . . . . . . . </p>
             <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
             <div className="d-flex justify-content-between ">
            
             <span className='ms-5'><i class="far fa-clock"></i> {time}</span>
             <span className='me-5'><i class="far fa-calendar-alt"></i> {date}</span>
             </div>
             <h4>Total Coast: {totalcost}$</h4>
            <Link to={`/detail/${_id}`}>
                       <button className="btn btn-warning  mb-2">View</button>
                   </Link>
            </div>
        </div>
    );
};

export default Blogs;