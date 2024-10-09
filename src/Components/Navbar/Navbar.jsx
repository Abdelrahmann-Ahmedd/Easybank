import React, { PureComponent } from 'react';
import Button from '../Button/Button';
import './Navbar.css';
import imagSrc from '../../assets/logo.svg';
class Navbar extends PureComponent {
    

    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <figure className='w-25'>
                        <img  src={imagSrc} alt="" />   
                    </figure>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse  navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav d-flex justify-content-between mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Carrier</a>
                        </li>
                    </ul>
                    <Button />
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar ;
