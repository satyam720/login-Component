import {useState, useEffect} from 'react';
import './App.css';
import { auth } from './firebase/firebase.utils';
import LoginPage from './pages/loginPage/loginPage';
import DashboardPage from './pages/dashboardPage/dashboardPage';
import {Switch, Route} from 'react-router-dom';
function App() {
  const [currentUser,setUser] = useState(null);
 

  useEffect(() => {
   let unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setUser(user);
      console.log(user);
    });

    return () => {
      unsubscribeFromAuth ();
    }
  },[currentUser]);

 
  return (
    <div className="App">
    
     <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route exact path="/dashboard" render={()=> currentUser ? (<DashboardPage currentUser={currentUser} />) : (<LoginPage />)} />
      </Switch>
    </div>
  );
}

export default App;
