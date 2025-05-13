import React from 'react'
import Button from './button'
const Header = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary ">
      <div className="container ">
        <a className="navbar-brand ">Stock</a>
        <div>
        <Button text="Login" class="btn-outline-primary" />
        &nbsp; 
        <Button text="Sign In" class="btn-outline-success"/>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Header
