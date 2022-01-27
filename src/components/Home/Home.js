import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import useAuth from '../Firebase/useFirebase/useAuth';
import Typical from 'react-typical'
import './Home.css'
const url=(`https://3gwifi.net/wp-content/uploads/2018/05/khai-niem-travel.jpg`)

const Home = () => {
    const {loading}=useAuth()
    const [services,setServices]=useState([])
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const size = 10;
    useEffect(()=>{
        fetch(` https://whispering-sierra-10389.herokuapp.com/services?page=${page}&&size=${size}`)
        .then(res=>res.json())
        .then(data=>
            {setServices(data.products);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
    });
}, [page]);
  
     


    return (
       <div>
            <Banner></Banner>
       <div className='container mt-5'>
           
       <h1  className="title" style={{color: ' black'}}>
       
       {""}
       <Typical  
       loop={Infinity}
       steps={[

           " Travelers experiences",
           1000, 
           "Share Your Own Exprience",
           1000,
       ]}
       />
   </h1>
            {loading?<Spinner animation="border" variant="warning" /> :
                
                  
                <div className="service-container" >
            {
                services.map(serv=><Blogs
                key={serv._id}
                service={serv}
                
                >

                </Blogs>)
            }
            </div>}
            <div>
                
            <div className="pagination">
                        {
                            [...Array(pageCount).keys()]
                                .map(number => <button
                                    className={number === page ? 'selected' : ''}
                                    key={number}
                                    onClick={() => setPage(number)}
                                >{number + 1}</button>)
                        }
                    </div>
   
  </div>
  <div id="about">
           <div>
             <div className="mt-5 mb-5 container">
            <h2 className="text-danger mt-5 mb-5" id="about">About us</h2>
            <div className="d-flex justify-content-cente align-items-center row ">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <p>Our Focus is on Boutique-Style Hotels and Unique Travel Experiences Worldwide. Contact Us. Join Our Membership Or Book A One Time Trip For Customized Itineraries. Book Your Trip! Customized Itineraries. Boutique Hotels. Hassle-Free Process. Destinations: Asia, Europe, Oceania, The Middle East, North America, Africa, South America.</p>
             </div>

             <div className="col-lg-6">
               <img className="w-100 p-3" src={url}alt="" />
            </div>
            </div>
            

            </div>
        </div>
           </div> 

      </div>
        </div>
    );
};

export default Home;