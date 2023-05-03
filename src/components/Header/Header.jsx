import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
const Header = () => {
    return (
        // <nav>
        //     <Link to = "/">Home</Link>
        //     <Link to = "/login">Login</Link>
        //     <Link to = "/register">Register</Link>
        //     <Link to = "/">Home</Link>
        // </nav>

        <div>

            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
                <nav>
                    <Link className='btn btn-ghost' to="/">Home</Link>
                    <Link className='btn btn-ghost' to="/login">Login</Link>
                    <Link className='btn btn-ghost' to="/register">Register</Link>
                    
                </nav>
            </div>
        </div>
    );
};

export default Header;