import React, { PureComponent } from 'react';
import Article from '../Article/Article';
import './Articles.css'
import imgSrc1 from '../../assets/image-currency.jpg';
import imgSrc2 from '../../assets/image-restaurant.jpg';
import imgSrc3 from '../../assets/image-plane.jpg';
import imgSrc4 from '../../assets/image-confetti.jpg';


class Articles extends PureComponent {
    
    state = [
            {img: imgSrc1 , by:"By Claire Robinson", title:"Recice money in any currency with no fees" , paragraph:"The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single..."},
            {img: imgSrc2 , by:"By Wilson Hutton",  title:"Treat yourself without worrying about money" , paragraph:"Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you..."},
            {img: imgSrc3 , by:"By Wilson Hutton", title:"Take yourself Easybank card whenever you go" , paragraph:"We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you..."},
            {img: imgSrc4 , by:"By Claire Robinson" , title:"Our invite-only Beta accounts are now live!" , paragraph:"After a lot of hard work by the whole team. We're excited to launch our closed beta. It's easy to request an invite througj the site..."},
        ]

    render() {
        return (
            <div className='container mt-5 p-5 articles'>
                <h2 className='mb-5'>Last Articles</h2>
                <div className="row">
                    {this.state.map((article)=>{return <Article art = {article} />})}
                </div>
            </div>
        )
    }
}

export default Articles