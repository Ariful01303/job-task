import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import AddBlogs from '../AddBlogs/AddBlogs';
import useAuth from '../Firebase/useFirebase/useAuth';
import Admin from './Admin/Admin';
import './DashBord.css'
import ManageBlogs from './ManageBlogs/ManageBlogs';

const DashBoard = () => {

    let { path, url } = useRouteMatch();
     const {logOut,user}=useAuth()
     const [isAdmin, setIsAdmin] = useState(false);

     useEffect(() => {
       fetch(` https://whispering-sierra-10389.herokuapp.com/adminCheker/${user?.email}`)
         .then((res) => res.json())
         .then((data) => {
           if (data[0]?.role === "admin") {
             setIsAdmin(true);
           } else {
             setIsAdmin(false);
           }
         });
     }, [user?.email]);
     console.log(isAdmin);
    return (
   
     <div className=" container mb-5">
          <div className="dashboard-container  ">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
            <div className="dashboard">
            <img className="dash-pic mt-5" src={user?.photoURL} alt="" />
               <p className='text-danger'>{user.email}</p>
            
        

           { isAdmin && ( <div className="admin-dashboard">
                <h5 className="dashboard-menu mt-5 text-primary">Admin Dashboard</h5>

                <Link to={`${url}/manageblogs`} className="teast">
                  <li className="dashboard-menu"><i class="fas fa-tasks fs-4 icon-color"></i> Manage Blogs</li>
                </Link>
               
               
               <Link to={`${url}/makeAdmin`} className="teast">
                  <li className="dashboard-menu"><i class="fas fa-users-cog fs-4 icon-color"></i> Make Admin</li>
                </Link>
               
                <Link to={`${url}/addblog`} className="teast">
                  <li className="dashboard-menu"><i class="fas fa-plus-circle fs-4 icon-color"></i> Add A Blog</li>
                </Link>
              </div>)}
              <Button className="mt-5" onClick={logOut} variant="danger"><i class="fs-3 fas fa-sign-out-alt"></i></Button>

            </div>
            </div>
       
            <div className="col-lg-9 col-md-9 col-sm-12 col-12">
            <Switch>
             
            
             
              <Route exact path={`${path}/addblog`}>
                <AddBlogs></AddBlogs>
              </Route>
               <Route exact path={`${path}/manageblogs`}>
              <ManageBlogs></ManageBlogs>
              </Route>
              <Route exact path={`${path}/makeAdmin`}>
              <Admin></Admin>
              </Route>
              
             
            </Switch>
          </div>
          </div>
        </div>
     </div>
    );
};

export default DashBoard;