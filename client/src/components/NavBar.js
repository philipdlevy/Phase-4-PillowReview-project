import React, {useState, useEffect} from "react"
import {NavLink} from 'react-router-dom'
import {Link} from 'react-router-dom'


function NavBar({user, setUser, onLogout}) {

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout())
  }

  return (
    <div className='container'>
      <div className="homeLink">
        <Link to="/">
          <div>
            <h1 className='text'>| Welcome to Phil's Pillow Reviews |</h1>
          </div>
        </Link>
      </div>
      <div className="navButtons">
        

        <NavLink to="/items">
          <button className="button-28" >See All Items</button>
        </NavLink> 

        <NavLink to="/items/new">
          <button className="button-27" >Add Item</button>
        </NavLink> 

        <NavLink to="/contact">
          <button className="button-26" >Contact Us</button>
        </NavLink>

        {/* If there's a user, show signout button, if no user, show login/signup. link is to go to front page when signing out */}
        {user ? 
        <Link to="/">
          <button className="button-29" onClick={handleLogout}>SignOut</button>
        </Link>
        : <NavLink to="/login">
            <button className="button-25" >SignIn/Up</button>
        </NavLink>}
      </div>

      {/* <div className="welcomeMessage">
        {user ? <h2>Welcome,  {user.username}!</h2> : null }
      </div> */}
    </div>
  );
}

export default NavBar

