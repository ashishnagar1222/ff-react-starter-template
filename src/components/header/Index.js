import React from 'react';
import logo from "../../assets/logo.png";

const Header = () => {
    return (
        <div className='bg-light'>
            <div className='d-none d-md-block p-2'>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex'>
                        <div className='px-5'>
                            <img src={logo} alt='...' height='80px' width='80px' />
                        </div>
                        <div className='px-3 pt-2' ><h1>FirstFloor</h1></div>
                    </div>
                </div>
            </div>
            {/*********************************************************************************************************/}
            {/******************************************* Mobile + Tab View *******************************************/}
            <div className=' d-block d-md-none d-flex p-2'>
                <img src={logo} alt='...' height='60px' width='60px' />
                <h1 className='px-5 mx-5'>FirstFloor</h1>
            </div>
        </div>
    );
};

export default Header;