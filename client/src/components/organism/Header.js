import React from 'react';

const Header = ({ account }) => {
    return (
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <span className="navbar-brand">Navbar</span>
                <span className="d-flex" role="search">
                    <button className="btn btn-outline-primary" type="submit">{account}</button>
                </span>
            </div>
        </nav>
    );
}

export default Header;