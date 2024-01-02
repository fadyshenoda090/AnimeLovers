import React, { useContext, useEffect, useState } from 'react'
import './header.css'
import 'animate.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { GoSearch } from "react-icons/go";
import { FaTimes } from 'react-icons/fa'
import { CiMenuFries } from 'react-icons/ci'
import { LanguageContext } from '../../contexts/language';
import { localization } from '../../localization/localization';
import { useSelector } from 'react-redux';

const Header = () => {
  let { language, setLanguage } = useContext(LanguageContext);
  const navigate = useNavigate();
  const [click, setClick] = useState(false)
  const counter = useSelector((state) => state.counter.counter)

  const handleClick = () => {
    setClick(!click)
  }

  const languageChange = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };
  const goLogIn = () => {
    navigate('/login');
  }
  const goLogOut = () => {
    setIsLogin(false);
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    navigate('/login');
  }
  const goRegister = () => {
    navigate('/register');
  }

  const items = <>
    <ul className='list-unstyled mt-4 fs-4'>
      <NavLink className={({ isActive }) => (isActive) ? 'acctive' : 'fs-5 CustomText'} onClick={handleClick} to="/"><li className='mx-2 my-2'>{language == 'en' ? localization.home.en : localization.home.ar}</li></NavLink>
      <NavLink className={({ isActive }) => (isActive) ? 'acctive' : 'fs-5 CustomText'} onClick={handleClick} to="about"><li className='mx-2 my-2'>{language == 'en' ? localization.about.en : localization.about.ar}</li></NavLink>
      <NavLink className={({ isActive }) => (isActive) ? 'acctive' : 'fs-5 CustomText'} onClick={handleClick} to="favorites"><li className='mx-2 my-2'>{language == 'en' ? localization.favorites.en : localization.favorites.ar}</li></NavLink>
      <NavLink className={({ isActive }) => (isActive) ? 'acctive' : 'fs-5 CustomText'} onClick={handleClick} to="login"><li className='mx-2 my-2'>{language == 'en' ? localization.login.en : localization.login.ar}</li></NavLink>
      <NavLink className={({ isActive }) => (isActive) ? 'acctive' : 'fs-5 CustomText'} onClick={handleClick} to="register"><li className='mx-2 my-2'>{language == 'en' ? localization.register.en : localization.register.ar}</li></NavLink>
    </ul>
  </>

  return (
    <div className='container-fluid d-flex align-items-center justify-content-around bg-glass'>
      <div>
        <Link to="/" className='d-flex align-items-center text-dark'>
          <img src="/logo.png" alt="Logo"/>
          <h3 className='mt-3 ms-1 fs-3 d-none fs-4 d-md-none d-lg-block'>Anime Lovers</h3>
        </Link>
      </div>
      <div className="d-flex">
        <input type="search" className={`form-control me-1 ${language == 'en' ? 'text-start' : 'text-end'}`} placeholder={language == 'en' ? localization.search.en : localization.search.ar}
          onChange={(e) => {
            console.log(e.target.value)
          }}
        />
        <button className="btn btn-glass" type="submit" id="button-addon2"><GoSearch /></button>
      </div>
      <div className="d-flex align-items-center">
        <ul className='list-unstyled mt-4 d-none d-md-flex d-lg-flex'>
          <NavLink className={({ isActive }) => (isActive) ? 'acctive' : 'fs-5 CustomText'} to="/"><li className='li mx-2'>{language == 'en' ? localization.home.en : localization.home.ar}</li></NavLink>
          <NavLink className={({ isActive }) => (isActive) ? 'acctive' : 'fs-5 CustomText'} to="about"><li className='li mx-2'>{language == 'en' ? localization.about.en : localization.about.ar}</li></NavLink>
          <NavLink className={({ isActive }) => (isActive) ? 'acctive' : 'fs-5 CustomText'} to="favorites" dir={language == 'en' ? 'ltr' : 'rtl'}><li className='li mx-2'>{language == 'en' ? localization.favorites.en : localization.favorites.ar} <span className='badge bg-badge'>{counter}</span></li></NavLink>
          <NavLink className={({ isActive }) => (isActive) ? 'acctive' : 'fs-5 CustomText'} to="login"><li className='li mx-2'>{language == 'en' ? localization.login.en : localization.login.ar}</li></NavLink>
          <NavLink className={({ isActive }) => (isActive) ? 'acctive' : 'fs-5 CustomText'} to="register"><li className='li mx-2'>{language == 'en' ? localization.register.en : localization.register.ar}</li></NavLink>
        </ul>
        <div className='form-check form-switch mt-lg-2 mt-sm-0'>
          <input className="form-check-input"
            type="checkbox"
            id="languageToggler"
            onChange={languageChange} />
          <label className="form-check-label" htmlFor="languageToggler">
            {`Lang${'\u00A0'}(${language === 'en' ? 'En' : 'Ar'})`}
          </label>
        </div>
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
