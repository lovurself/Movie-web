import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <>
            <h1>
                <Link to="/" className='logo'>MovieMoore</Link>
            </h1>
            <div>
                <Link to="/" className='link'>Home</Link>
                <Link to="/genre" className='link'>Genre</Link>
                <Link to="/ranking" className='link'>Ranking</Link>
            </div>
            <button>
                <Link to="/signIn" className='signIn' >Sign in</Link>
            </button>
        </>
    )
}

export default Navigation;