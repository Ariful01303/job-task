import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import useAuth from '../Firebase/useFirebase/useAuth';
import Typical from 'react-typical'

import './Home.css'

const Home = () => {
    const {loading}=useAuth()
    const [services,setServices]=useState([])
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const size = 10;
    useEffect(()=>{
        fetch(`http://localhost:5000/services?page=${page}&&size=${size}`)
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
      </div>
        </div>
    );
};

export default Home;