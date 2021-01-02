import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => (
   <nav className="login">
       <h2>Inventory Login</h2>
       <p>Sign in to manage your store's inventory</p>
       <button className="github" onClick={() => props.authenticate('Github')}>Log In With GitHub</button>
      {/*} <button className="twitter" onClick={() => props.authenticate('Twitter')}>Log In With Twitter</button>
       <button className="facebook" onClick={() => props.authenticate('Facebook')}>Log In With Facebook</button> */}
       <button className="yahoo" onClick={() => props.authenticate('Yahoo')}>Log In With Yahoo</button>
       <button className="google" onClick={() => props.authenticate('Google')}>Log In With Google</button>
   </nav>
);

Login.propTypes = {
    authenticate: PropTypes.func.isRequired
};

export default Login;