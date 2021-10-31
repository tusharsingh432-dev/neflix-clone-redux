import React ,{useEffect} from 'react'
import './App.css';
import HomeScreen from './screens/HomeScreen'
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from 'react-router-dom'
import Login from './screens/Login';
import { auth } from './firebase';
import {logout,login, selectUser} from './features/userSlice';
import {useDispatch, useSelector } from 'react-redux';
import ProfileScreen from './screens/ProfileScreen'

function App() {
  const user = useSelector(selectUser);
  
  const dispatch = useDispatch();
  try{
    
    useEffect(()=>{
      const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
      if(userAuth)
      {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        })
      );
      }else{
        dispatch(logout());
      }
    });
    return unsubscribe;
  },[dispatch])

  }
  catch(error)
  {
    console.log(error)
  }
  
  return (
    <div className="app">
      <Router>
        {!user ? (
            <Login/>
        ):(
          <Switch>
            <Route path="/profile">
              <ProfileScreen />
            </Route>
            <Route exact path='/'>
              <HomeScreen />
            </Route>
          </Switch> 
        )}
      </Router>
    </div>
  );
}

export default App;
