import React, { useContext, useEffect, useState } from 'react'
import './header.css'
import 'animate.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { GoSearch } from "react-icons/go";
import { FaTimes } from 'react-icons/fa'
import { CiMenuFries } from 'react-icons/ci'
import { LanguageContext } from '../../contexts/language';
import { localization } from '../../localization/localization';

const Header = () => {
  let { language, setLanguage } = useContext(LanguageContext);
  const navigate = useNavigate();
  const [click, setClick] = useState(false)
  const handleClick = () => {
    setClick(!click)
  }

    const languageChange = () => {
      setLanguage(language === 'en' ? 'ar' : 'en');
  };
  
  const pageDirection= language =='en' ?"ltr" : "rtl"

  const items = <>
    <ul className='list-unstyled mt-4 fs-4'>
      <NavLink className={({ isActive }) => (isActive) ? 'acctive text-decoration-none' : 'fs-5 text-decoration-none CustomText'} onClick={handleClick} to="/"><li className='mx-2 my-2'>{language == 'en' ? localization.home.en : localization.home.ar}</li></NavLink>
      <NavLink className={({ isActive }) => (isActive) ? 'acctive text-decoration-none' : 'fs-5 text-decoration-none CustomText'} onClick={handleClick} to="about"><li className='mx-2 my-2'>{language == 'en' ? localization.about.en : localization.about.ar}</li></NavLink>
      <NavLink className={({ isActive }) => (isActive) ? 'acctive text-decoration-none' : 'fs-5 text-decoration-none CustomText'} onClick={handleClick} to="contact"><li className='mx-2 my-2'>{language == 'en' ? localization.contact.en : localization.contact.ar}</li></NavLink>
      <NavLink className={({ isActive }) => (isActive) ? 'acctive text-decoration-none' : 'fs-5 text-decoration-none CustomText'} onClick={handleClick} to="login"><li className='mx-2 my-2'>{language == 'en' ? localization.login.en : localization.login.ar}</li></NavLink>
      <NavLink className={({ isActive }) => (isActive) ? 'acctive text-decoration-none' : 'fs-5 text-decoration-none CustomText'} onClick={handleClick} to="register"><li className='mx-2 my-2'>{language == 'en' ? localization.register.en : localization.register.ar}</li></NavLink>
    </ul>
  </>

  return (
    <div className='container-fluid d-flex align-items-center justify-content-around bg-CustomDark bg-glass fixed-top'>
      <div>
        <Link to="/" className='d-flex justify-content-start align-items-center text-dark text-decoration-none'>
          <img src="/logo2.png" alt="Logo" className='img-fluid img-thumbnail rounded-circle' />
          <h3 className='mt-3 ms-1 fs-3 d-none fs-4 d-md-none d-lg-block'>Bon Appétit</h3>
        </Link>
      </div>
      <div className="d-flex">
        <input type="text" className="form-control me-1" placeholder="Search for Meals"
          onChange={(e) => {
            console.log(e.target.value)
          }}
        />
        <button className="btn btn-glass" type="submit" id="button-addon2"><GoSearch /></button>
      </div>
      <div className="d-flex">
        <ul className='list-unstyled mt-4 d-none d-md-flex d-lg-flex'>
          <NavLink className={({ isActive }) => (isActive) ? 'acctive text-decoration-none' : 'fs-5 text-decoration-none CustomText'} to="/"><li className='mx-2'>{language == 'en' ? localization.home.en : localization.home.ar}</li></NavLink>
          <NavLink className={({ isActive }) => (isActive) ? 'acctive text-decoration-none' : 'fs-5 text-decoration-none CustomText'} to="about"><li className='mx-2'>{language == 'en' ? localization.about.en : localization.about.ar}</li></NavLink>
          <NavLink className={({ isActive }) => (isActive) ? 'acctive text-decoration-none' : 'fs-5 text-decoration-none CustomText'} to="contact"><li className='mx-2'>{language == 'en' ? localization.contact.en : localization.contact.ar}</li></NavLink>
          <NavLink className={({ isActive }) => (isActive) ? 'acctive text-decoration-none' : 'fs-5 text-decoration-none CustomText'} to="login"><li className='mx-2'>{language == 'en' ? localization.login.en : localization.login.ar}</li></NavLink>
          <NavLink className={({ isActive }) => (isActive) ? 'acctive text-decoration-none' : 'fs-5 text-decoration-none CustomText'} to="register"><li className='mx-2'>{language == 'en' ? localization.register.en : localization.register.ar}</li></NavLink>
        </ul>
        <form>
          {/* <input type="checkbox"
            label={`Language${'\u00A0'} (${language === 'en' ? 'English' : 'Arabic'})`}
            checked={language == 'ar'}
            onChange={languageChange}
          /> */}
        </form>
        <div className={`position-absolute top-100 start-50 ${click ? 'd-md-none' : ''}`}>
          <div className='container-fluid'>{click && items}</div>
        </div>
        <button className='btn btn-dark d-block fs-4 d-md-none d-lg-none'
          style={{ width: '40px', height: '35px', padding: '0' }}
          onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </div>
  )
}

export default Header
