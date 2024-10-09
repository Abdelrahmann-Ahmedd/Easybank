import React, { PureComponent } from 'react'
import "./About.css";
import Detail from '../Detail/Detail';
import imgSrc1 from '../../assets/icon-online.svg'; 
import imgSrc2 from '../../assets/icon-budgeting.svg';
import imgSrc3 from '../../assets/icon-onboarding.svg';
import imgSrc4 from '../../assets/icon-api.svg';

class About extends PureComponent {
    
    render() {
        let allDetails =  [
            {img: imgSrc1 , title:"Online Banking" , paragraph:"Our modren web and mobile applications allow you to keep track of your finances wherever you are in the world."},
            {img: imgSrc2 , title:"Simple Budheting" , paragraph:"See exactly where your money goes each month. Receive notifications when you're close to hitiing your limits."},
            {img: imgSrc3 , title:"Fast Onboarding" , paragraph:"We don't do branches. Open your account in minutes online and start taking control of your finances right away."},
            {img: imgSrc4 , title:"Open API" , paragraph:"Manage your savings, investments, pension, and much more form one account. Tracking your money has never been easier."},
        ]
        return (
            <div className="about bg-light p-5">
                <div className='container mt-5 p-5'>
                    <h2>Why choose Easybank?</h2>
                    <p className=' aboutp pe-4 mt-4 opacity-50'>We leverge Open Banking to turn your bank account into your financial hub.Control your finances like never before.</p>
                    <div className="row mt-5">
                        {allDetails.map((detail) =>{ return <Detail pro ={detail} />})}
                    </div>
                </div>
            </div>
        )
    }
}

export default About