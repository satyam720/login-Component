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
        <div className="dashboardPage">
         <Card title="User DashBoard"  style={{ width: 500 }}>
         <h1>Welcome {displayName}</h1>
         <p>You have signed in using {email} </p>
         <Button size='large' className="btn btn-outline-dark edit " onClick={HandleClick}><span style={{fontWeight: 'bold'}}>Sign Out</span> </Button>
    </Card>
            
            
            

        </div>
    )};


    export default DashboardPage;