import React, { useContext } from 'react';
import './footer.css';
import { FaFacebook, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { localization } from '../../localization/localization';
import { LanguageContext } from '../../contexts/language';

const Footer = () => {
  const { language } = useContext(LanguageContext);
  return (
    <footer className='container-fluid bg-glass mt-5'>
      <div className='container-fluid d-flex flex-md-row flex-column justify-content-md-around justify-content-center align-items-md-center align-items-center justify-content-around'>
        <div className='d-flex  flex-column justify-content-center align-items-center'>
          <Link className='li acctive2 text-black' to="/about"><h2>{language == "en" ? localization.footer.aboutAnimeLovers.en : localization.footer.aboutAnimeLovers.ar}</h2></Link>
          <Link className='li acctive2 text-black' to="#"><h2 className='mt-2'>{language == "en" ? localization.footer.ourServices.en : localization.footer.ourServices.ar}</h2></Link>
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center mx-2 mt-3'>
          <h3>{language == "en" ? localization.footer.joinUs.en : localization.footer.joinUs.ar}</h3>
          <div className='flex  flex-column'>
            <ul className='list-unstyled d-flex mt-3'>
              <li className='me-2 fs-3'>
                <a href='#' className='text-primary'><FaFacebook className='icons' /></a>
              </li>
              <li className='mx-2 fs-3'>
                <a href='#' className='text-primary'><FaXTwitter className='icons' /></a>
              </li>
              <li className='mx-2 fs-3'>
                <a href='#' className='insta'><FaInstagram className='icons' /></a>
              </li>
              <li className='mx-2 fs-2'>
                <a href='#' className='text-danger'><FaYoutube className='icons' /></a>
              </li>
            </ul>
          </div>
        </div>
        <div className='d-flex p-2'>
          <form onSubmit={(e) => { e.preventDefault(); }} className={language === "ar" ? 'text-end' : ''}>
            <h3>{language === "en" ? localization.footer.getInTouch.en : localization.footer.getInTouch.ar}</h3>
            <hr className='my-2'/>
            <div className="mb-1 d-flex container-fluid" dir={language === 'ar' ? 'rtl' : 'ltr'}>
              <label htmlFor="email" className={`${language === 'ar' ? 'text-end mt-2 w-50' : 'me-2 mt-2'}`}>
                {language === "en" ? localization.footer.email.en : localization.footer.email.ar}:
              </label>
              <input type="email" className="form-control" id="email" placeholder={language === "en" ? localization.footer.placeHolder.en : localization.footer.placeHolder.ar} />
            </div>
                <hr className='mb-2' />
            <div className="mb-1">
                <textarea 
                className={`form-control ${language === 'ar' ? 'text-end' : ''}`} 
                id="message" 
                rows="3"
                placeholder={language === "en" ? localization.footer.message.en : localization.footer.message.ar}
                ></textarea>
            </div>
            <hr className='mb-2' />
            <button type="submit" className="btn btn-glass">
              {language === "en" ? localization.footer.send.en : localization.footer.send.ar}
            </button>
          </form>
        </div>
      </div>
      <div className="container-fluid">
        <p className='text-center fs-4'>
          {language == "en" ? localization.footer.copyRights.en : localization.footer.copyRights.ar} &copy;2023
        </p>
      </div>
    </footer>
  )
}

export default Footer
