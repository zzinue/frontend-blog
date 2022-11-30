import './header.css'
import nature from '../../imgs/nature.jpg'
export const Header = () => {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className='headerTitleSm'>React & Node</span>
                <span className='headerTitleLg'>Blog</span>
            </div>
            <img className='headerImg' src={nature} alt="" />
        </div>
    )
}
