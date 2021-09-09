import './emailSignin.styles.scss';
import {Button,Tooltip} from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';


const EmailSignIn = ({history}) => {
   
  
  const [currentUser, setUser] = useState({email: null,  password: null});

  const handleClick = () => {
    
    if(!currentUser.email)
    {toast.error("Please Enter A valid Email", {
      position: toast.POSITION.TOP_CENTER
    });}
    else if (!currentUser.password || currentUser.password.length <= 8) {
      toast.error("Password is less than 8 characters. Please Try Again!", {
        position: toast.POSITION.TOP_CENTER
      });
    } else {
      toast.success("Login Successfull", {
        position: toast.POSITION.TOP_CENTER
      });
    };

  }


    return (
        <form>
        <div className="mb-3">
          <label for="email" className="form-label">Email <Tooltip title="required"> <span style={{color: "#553ce4"}}>*</span> </Tooltip> </label>
          <input  onChange={(e) => setUser({...currentUser, email: e.target.value})} value={currentUser.email} type="email" className="form-control input-size p-2" id="email"   placeholder="mail@website.com" />
          
        </div>
        <div className="mb">
          <label for="password" className="form-label ">Password<Tooltip title="required"><span style={{color: "#553ce4"}}>*</span></Tooltip></label>
          <input  onChange={(e) => setUser({...currentUser, password: e.target.value})} value={currentUser.password} type="password" className="form-control input-size p-2" id="password" placeholder=".Min. 8 character" />
        </div>
        <div class=" mt-3 mb-3 form-check">
          <input type="checkbox" className="form-check-input k-checkbox" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">Remember me</label>
          <a href className="ms-5">Forget Password?</a>
        </div>
        <Button onClick={ handleClick} size="large" type="submit" className="btn check-edit">Login</Button>
        <ToastContainer />
        
      </form>
        )
};


export default EmailSignIn;