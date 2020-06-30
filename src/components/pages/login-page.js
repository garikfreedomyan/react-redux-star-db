import React from 'react';
import { Redirect } from 'react-router-dom';

import './login-page.css';

const LoginPage = ( {isLoggedIn, onLogin} ) => {
   if (isLoggedIn) {
      return <Redirect to="/" />
   }

   return (
      <div className="login">
         <p className="login__text">Log in to see secret page!</p>
         <button className="login__btn"
                 onClick={onLogin}>Log in</button>
      </div>
   );
}

export default LoginPage;