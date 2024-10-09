import Button  from '../Button/Button';
import React, { PureComponent } from 'react';
import "./Footer.css";
import imgSrc from "../../assets/logo.svg";
class Footer extends PureComponent {
    

    render() {
        return (
            <footer className='w-100 mt-5 p-2'>
                <div className='container '>
                    <div className="leftSide d-flex">
                        <figure className='d-flex flex-column justify-content-around'>
                            <img src={imgSrc} alt="logo" />
                            <figcaption>
                                <i className="fa-brands fa-xl fa-square-facebook"></i>
                                <i className="fa-brands fa-xl fa-youtube"></i>
                                <i className="fa-brands fa-xl fa-twitter"></i>
                                <i className="fa-brands fa-xl fa-pinterest"></i>
                                <i className="fa-brands fa-xl fa-instagram"></i>
                            </figcaption>
                        </figure>
                        <ul className='list-unstyled m-auto d-flex flex-column flex-wrap justify-content-center '>
                            <li><a className='text-decoration-none ' href="#">About Us</a></li>
                            <li><a className='text-decoration-none ' href="#">Contact</a></li>
                            <li><a className='text-decoration-none ' href="#">Blog</a></li>
                            <li><a className='text-decoration-none ' href="#">Careers</a></li>
                            <li><a className='text-decoration-none ' href="#">Support</a></li>
                            <li><a className='text-decoration-none ' href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="rightSide d-flex flex-column justify-content-center">
                        <Button/>
                        <h6 className='fs-6 opacity-25 mt-3 text-white'>@ Easybank. All Rights Reserved</h6>
                    </div>
                </div>
            </footer>  
        )
    }
}

export default Footer