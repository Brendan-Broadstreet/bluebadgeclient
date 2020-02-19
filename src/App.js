import React, { useState, useEffect } from 'react';
import Sitebar from './component/home/Navbar';
import Auth from './component/auth/Auth';
import ListIndex from './component/Lists/ListIndex';

function App() {
  const [sessionToken, setSessionToken] = useState(undefined);
  
  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'))
    };
  }, [])
  
  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    
  }

  const clearToken=()=>{
    localStorage.clear();
    setSessionToken('');
  }

  const protectedViews=()=>{
    return(sessionToken === localStorage.getItem('token') ? <ListIndex token={sessionToken}/> : <Auth updateToken={updateToken}/>)
  }
  return (
    <div >
      <Sitebar clickLogout={clearToken} token={sessionToken}/>
      {protectedViews()}
    </div>
  );
}


export default App;