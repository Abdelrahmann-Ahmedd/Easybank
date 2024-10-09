/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { PureComponent } from 'react';
import './Article.css';
class Article extends PureComponent {

    render() {
        let articles = this.props.art;
        return (
            <div className="col-xl-3 col-lg-4 col-md-6 g-5">
                <div className="colContent">
                    <img src={articles.img} alt="articles Image" />
                    <h6 className='ps-3 pe-3 fs-6 opacity-25'>{articles.by}</h6>
                    <h3 className='ps-3 pe-3 fs-4'>{articles.title}</h3>
                    <p className=' ps-3 pe-3 fs-6 opacity-50'>{articles.paragraph}</p>
                </div>
            </div>
        )
    }
}

export default Article