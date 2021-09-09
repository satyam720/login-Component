import './dashboardPage.styles.scss';
import {Button,Card} from 'antd';
import { auth } from '../../firebase/firebase.utils';



const DashboardPage = ({currentUser}) => {
  console.log("this is the current user:::::::" , currentUser);
  const {displayName, email} = currentUser;
const HandleClick= () => {
    currentUser=null;
    auth.signOut();

}
    
    return(
       <div className="container">
        <div className="container dashboardPage">
         <Card  title="User DashBoard"  style={{ width: 500 }}
         headStyle={{backgroundColor: '#8236CB',color: 'white', border: 0 }}
bodyStyle={{backgroundColor: '#610094',color: 'white', border: 0 }}>
         <h1 style={{color: 'white'}}>Welcome {displayName}</h1>
         <p>You have signed in using {email} </p>
         <Button size='large' className="btn edit" onClick={HandleClick}><span style={{fontWeight: 'bold'}}>Sign Out</span> </Button>
    </Card>
    </div>
    <div className="info">
        <h1>About This Login Component:</h1>
        <p>The component allows Users To login using firebase google Authentication.
        <br />
        The data shown in The dashboard is taken from firebase auth snapshot.
        <br />The project uses ReactJs, Firebase, react-router-dom, Antd Framework(Tooltip, Buttons), react-toastify for notifications, sass, bootstrap, css.</p>
        
    </div>
    </div>
      
    )};


    export default DashboardPage;