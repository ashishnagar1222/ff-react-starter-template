import React from 'react';
import logo from "../../assets/logo.png";
import facebook from '../../assets/facebook.svg';
import Twitter from '../../assets/Twitter.svg';
import Insta from '../../assets/Insta.svg';
import gplay from '../../assets/google-badge.svg';
import aplay from '../../assets/App_Store_Badge.svg';

const Footer = () => {
    return (
        <div className='container-fluid mt-5 pt-5 pb-0 mb-0 bg-light'>
            <div className='container-fluid pb-4 px-5'>
                <div className='row'>
                    <div className='col-md-3 mb-5 d-flex flex-row justify-content-evenly'>
                        <img src={logo} alt='...' height='120px' width='120px' />
                    </div>
                    <div className='col-md-2 col-sm-4 col-6 mb-sm-0 mb-5'>
                        <div>
                            <h4 className='mb-2'>Company</h4>
                            <p className='mb-1'>Who we are</p>
                            <p className='mb-1'>Blog</p>
                            <p className='mb-1'>Contact</p>
                        </div>
                    </div>
                    <div className='col-md-2 col-sm-4 col-6 mb-sm-0 mb-5'>
                        <div>
                            <h4 className='mb-2'>For You</h4>
                            <p className='mb-1'>Privacy</p>
                            <p className='mb-1'>Terms</p>
                            <p className='mb-1'>Sitemap</p>
                        </div>
                    </div>
                    <div className='col-md-2 col-sm-4 col-6 mb-sm-0 mb-5'>
                        <div style={{ width: '13px' }}>
                            <h4 className='mb-2' style={{ width: '133px' }} >Social Links</h4>
                            <div className='row mb-2 flex-nowrap justify-content-between' style={{ width: '133px' }}>
                                <div className='col-3 '>
                                    <span><a href='#'><img src={facebook} alt=''/></a></span>
                                </div>
                                <div className='col-3'>
                                    <span><a hrer='#'><img src={Twitter} alt=''/></a></span>
                                </div>
                                <div className='col-3'>
                                    <span><a href='#'><img src={Insta} alt=''/></a></span>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: '135px' }} className='mb-2'>
                            <a href='#'><img width='135' alt='...' src={gplay}></img></a>
                        </div>
                        <div>
                            <a href='#'><img width='135' alt='...' src={aplay}></img></a>
                        </div>
                    </div>
                    <div className='col-md-3 mb-5 d-flex flex-row justify-content-evenly'>
                        <img src={logo} alt='...' height='120px' width='120px' />
                    </div>
                </div>
                <hr style={{ height: '1.5px', border: 0 }} />
                <h5 className='text-center m-0'>© 2021 First Floor Digital Agency. All rights reserved.</h5>
            </div>
        </div>
    );
};

export default Footer;