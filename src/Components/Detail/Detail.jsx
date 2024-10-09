import React, { PureComponent } from 'react';
import "./Detail.css";
import  "../../assets/icon-online.svg";
import  "../../assets/icon-budgeting.svg";
import  "../../assets/icon-onboarding.svg";
import  "../../assets/icon-api.svg";

class Detail extends PureComponent {
    
    render() { 
        let detail = this.props.pro;
        return (
        <div className="col-xl-3 col-lg-4 col-md-6 p-5 g-3">
            <div className='detContent'>
                <img src={detail.img} alt="detail img" />
                <h3 className='fs-4 mt-5'>{detail.title}</h3>
                <p className='fs-6 opacity-50 mt-4'>{detail.paragraph}</p>
            </div>
        </div>
        )
    }
}

export default Detail