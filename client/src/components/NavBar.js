import React, {useState, useEffect} from "react"
import {NavLink} from 'react-router-dom'
import {Link} from 'react-router-dom'


function NavBar({user, setUser, onLogout}) {

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout())
  }
  console.log(user)
  return (
    <div className='container'>
      
      <Link to="/">
        <h1 className='text'>| Welcome to Phil's Pillow Reviews |</h1>
      </Link>

      <NavLink to="/contact">
        <button className="button-26" >Contact Us</button>
      </NavLink>

      <NavLink to="/items/new">
        <button className="button-27" >Add Item</button>
      </NavLink>

      <NavLink to="/login">
        <button className="button-25" >SignIn/Up</button>
      </NavLink> 

      <NavLink to="/items">
        <button className="button-28" >See All Items</button>
      </NavLink>

      <div className="welcomeMessage">
        {user ? <h2>Welcome,  {user.username}!</h2> : null }
      </div>
      <div>
        {user ? <button className="signOutButton" onClick={handleLogout}>SignOut</button> : null }
      </div>
    </div>
  );
}

export default NavBar

// role="button" after class for buttons, only a space, no commas