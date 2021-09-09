import { signInWithGoogle } from "../../firebase/firebase.utils";
import btnLogo from '../../assets/20px.png'
import './googleButton.styles.scss';
import {Button } from 'antd';

const GoogleSignIn = () => {
    
    return(
        <div className="d-grid gap-2 col-4  wrapper">
  <Button size='large' className="btn btn-outline-dark edit " onClick={signInWithGoogle}><img className="me-3" src={btnLogo} alt="btn1"/><span style={{fontWeight: 'bold'}}>Sign in with google</span> </Button>
</div>
        
);
};


export default GoogleSignIn;