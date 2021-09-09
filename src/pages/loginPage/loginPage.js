import GoogleSignIn from '../../components/googleButton/googleButton.components.jsx';
import './loginPage.scss';
import EmailSignIn from '../../components/emailSignIn/emailSignIn.component.jsx';
import vector from '../../assets/light.png';

const LoginPage = () => {

    return(
        <div className='page'>
        <img src={vector} alt = "lightening" />
        <h1 >Login</h1>
        <p className="pb-2">See your growth and get consulting support!</p>

        <GoogleSignIn />
        

        <div class="separator">
  <div class="line"></div>
  <p>or Sign in with Email</p>
  <div class="line"></div>
</div>

        <EmailSignIn />
    <p className="mt-4">Not registered yet? <a href style={{color: '#4428e6'}}>Create an Account</a></p>
        </div>
        
    );
};


export default LoginPage;