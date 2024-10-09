import React, { PureComponent } from 'react'
import Navbar from './../Navbar/Navbar';
import Button  from '../Button/Button';
import './Header.css';
import imgSrc1 from '../../assets/bg-intro-desktop.svg';
import imgSrc2 from '../../assets/image-mockups.png';

class Header extends PureComponent {
    
    render() {
        return (
            <header className='vh-100'> 
                <div className='headerContent d-flex'>
                    <div className='p-5 m-auto'>
                        <h1>Next generation degital banking</h1>
                        <p className='opacity-50'>
                            Take your financail life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, 
                            and much more.
                        </p>
                        <div className='mybutton'>
                            <Button />
                        </div>
                    </div>
                    <figure>
                        <img className='mobile' src={imgSrc2} alt="mobiles image" />
                    </figure>
                </div>
            </header>
        )
    }
}

export default Header