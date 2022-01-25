import React, { useEffect, useState } from 'react';
import AddAproduct from '../AddAproduct/AddAproduct';
import Banner from '../Banner/Banner';
import useAuth from '../Firebase/useFirebase/useAuth';
import './Home.css'

const Home = () => {
    const {user,logOut}=useAuth()
    const [services,setServices]=useState([])
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const size = 2;
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
            <h1>This is home</h1>
            {
                services.map(serv=><div><h1>
                    {serv.name}
                    </h1></div>)
            }
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
            <AddAproduct></AddAproduct>
            <button
                  onClick={logOut}
                  className="btn btn-warning m-2"
                >Sign Out
                </button>
        </div>
    );
};

export default Home;