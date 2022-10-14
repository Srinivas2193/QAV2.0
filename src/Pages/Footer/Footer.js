import React from 'react';
import "./Footer.css";

export default function Footer()
{

    return(
        <>
        <div className="bg-black footerStyle" style={{width:"100%", height:"40px"}}>
            <p className='gap-10 py-2 text-center text-white'> &copy; Quality Analysis 2022  &nbsp;<a className='hover:text-orange-700' href='https://www.facebook.com/'><i className="bi bi-facebook"></i></a>  &nbsp; <a className='hover:text-orange-700' href='https://www.instagram.com/'><i className="bi bi-instagram"></i></a>  &nbsp; <a className='hover:text-orange-700' href='https://twitter.com/?lang=en-in'><i className="bi bi-twitter"></i></a>  &nbsp; <a className='hover:text-orange-700' href='https://in.linkedin.com/'><i className="bi bi-linkedin"></i></a> </p>
        </div>
        </>
    )
}