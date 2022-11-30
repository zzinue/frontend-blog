import './sidebar.css'
import dogperson from '../../imgs/dogperson.jpg'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
export const Sidebar = () => {
    const [cats, setCats] = useState([])
    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get('/categories')
            setCats(res.data)
        }
        getCats()
    }, [])

    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src={dogperson} alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className="link">
                            <li className='sidebarListItem'>{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-pinterest"></i>
                    <i className="sidebarIcon fa-brands fa-instagram"></i>
                </div>

            </div>
        </div>
    )
}
