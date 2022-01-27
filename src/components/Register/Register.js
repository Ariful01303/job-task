import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useAuth from '../Firebase/useFirebase/useAuth';

const Register = () => {
    const {singInGoogle,user,logOut, handleUserRegister, hanldeUserInfoRegister}=useAuth()
   
    const location=useLocation();
    const history=useHistory();
    const redirectUrl=location.state?.from||'/';
    const [email, setEmail] = useState("");
    const [userName,setUserName]=useState("")
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');

    const hanldeName = (e) => {

      setUserName(e.target.value);
     
      
    };
  
  
    const hanldeEmail = (e) => {
      setEmail(e.target.value);
      
     
    };
    const hanldePassword = (e) => {
      setPassword(e.target.value);
     
      
    };
 
  
    const handleRegister = () => {

      if (password.length < 6) {
        setError('Password Must be at least 6 characters long')
        return;
      }
     
      
      handleUserRegister(email, password)
      .then((result) => {
        history.push(redirectUrl)
     
        hanldeUserInfoRegister(result.user.email)
        setError('');
       })
       .catch(error => {
        setError("This Email are registered try to login");
      })
    };
  
  
  
    const handleSingInGoogle=()=>{
        singInGoogle()
        .then(result=>{
           history.push(redirectUrl);
           hanldeUserInfoRegister(result.user.email)
           setError('');
        })
        .catch(error => {
          setError("something is wrong");
        })
    }
    return (
      <div className="div d-flex container   mt-5 mb-5 justify-content-center align-items-center">
      <div className="row p-2">
        <div className="col-lg-6 p-2  login-side  col-md-6 col-sm-12 col-12">
          <div>
            <div className="form-input mt-5">
              <input
                onChange={hanldeName}
                className="mt-2 p-2"
                type="userName"
                placeholder="User Name"
              />
              <br />
              <input
                onChange={hanldeEmail}
                className="mt-2 p-2"
                type="email"
                placeholder="Email"
              />
              <br />
              <input
              onChange={hanldePassword}
                className="mt-2 p-2"
                type="password"
                placeholder="Password"
              />
              <br />
              <div className="row p-5 text-danger">{error}</div>
             <div className="login-regiater-btn mt-4">
           

                <button
                  onClick={handleRegister}
                  className="btn btn-primary ms-1"
                >Register</button>
                
              </div>
            </div>
            <div className="login-btn mt-4">
             {user?.email? <button
                onClick={logOut}
                className="btn btn-warning m-2"
              >google Sign Out
              </button> :
              <button
                onClick={handleSingInGoogle}
                className="btn btn-warning m-2"
              >google Sign In
              </button>}
              
            </div>
          </div>
        </div>
        <div className="col-lg-6  p-5 col-md-6 col-sm-12 col-12">
          
            {user?.email?
            <img className="w-100 ms-5 mt-5" src={user?.photoURL} alt=""/>:<img className="w-100" src="https://eastyorkshirelocksmiths.co.uk/wp-content/uploads/2013/03/motorcyle-key.jpg"alt=""/>}
           <Nav.Link as ={Link} to="/login">Are you already register here</Nav.Link>
          ;
        </div>
      </div>
    </div>
    );
};

export default Register;