import React, { PureComponent } from 'react'
import "./Button.css";

class Button extends PureComponent {

    render() {
        return (
            <div className='mbt w-25 text-center'>
                <button className=' btn btn-lg text-white rounded-5'>Requst Invite</button>
            </div>
        )
    }
}

export default Button