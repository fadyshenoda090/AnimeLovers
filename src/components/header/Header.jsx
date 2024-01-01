import React from 'react'
import './header.css'
import 'animate.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
      <div className='container-fluid d-flex align-items-center justify-content-between bg-CustomDark'>
        <div>
          <Link to="/" className='d-flex justify-content-start align-items-center text-dark text-decoration-none'>
            <img src="/logo2.png" alt="Logo" className='img-fluid img-thumbnail rounded-circle' />
            <h3 className='mt-3 ms-1 fs-3'>Bon Appétit</h3>
          </Link>
        </div>
        <div>
          <ul className='list-unstyled mt-4 d-flex justify-content-end align-items-center d-none fs-4 d-md-flex d-sm-flex'>
            <NavLink className={({ isActive }) => (isActive) ? 'acctive text-decoration-none' : 'fs-5 text-decoration-none CustomText'} to="/"><li className='m-1'>Home</li></NavLink>
            <NavLink className={({ isActive }) => (isActive) ? 'acctive text-decoration-none' : 'fs-5 text-decoration-none CustomText'} to="about"><li className='m-1'>About</li></NavLink>
            <NavLink className={({ isActive }) => (isActive) ? 'acctive text-decoration-none' : 'fs-5 text-decoration-none CustomText'} to="contact"><li className='m-1'>Contact</li></NavLink>
            <NavLink className={({ isActive }) => (isActive) ? 'acctive text-decoration-none' : 'fs-5 text-decoration-none CustomText'} to="login"><li className='m-1'>Login</li></NavLink>
            <NavLink className={({ isActive }) => (isActive) ? 'acctive text-decoration-none' : 'fs-5 text-decoration-none CustomText'} to="register"><li className='m-1'>Sign Up</li></NavLink>
          </ul>
        </div>
      </div>
  )
}

export default Header
