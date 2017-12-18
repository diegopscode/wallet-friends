import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <header>
        <div className="container">
            <nav>
                <ul className="menu-list">
                    <li className="menu-item"><Link to="/">Home</Link></li>
                </ul>
            </nav>
        </div>
    </header>
)

export default Header;