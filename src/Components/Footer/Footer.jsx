import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <hr />
            <footer className="footer bg-base-100 text-base-content p-1 mt-3">
                <div>
                    <Link className='font-bold text-2xl' to={'/'}>Evaly</Link>
                    <span>Evaly corporation. </span>
                    <span>Belive in you. </span>
                </div>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <Link to={'/aboutus'}>About us</Link>
                    <Link to={'/contact'}>Contact</Link>
                    <Link to={'/jobs'}>Jobs</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <Link to={'/t&u'}>Terms of use</Link>
                    <Link to={'/privacy'}>Privacy policy</Link>
                    <Link to={'/cookie'}>Cookie policy</Link>
                </nav>
            </footer>
        </>
    );
};

export default Footer;