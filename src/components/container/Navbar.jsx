import React from 'react';
import '../index.css'
import {ReactComponent as ReactLogo} from '../../imgs/logo-white.svg';
import { NavLink } from 'react-router-dom';

const Navbar =  () => {
    return(
        <>
        <div className='nav-bg'>
            <div className='row'>
                <div className='col-12 mx-auto'>
                    <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/"><ReactLogo /><span className='brand'> | Developers</span></NavLink>
                    <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Why Marvel
                                </NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><NavLink className="dropdown-item" to="#">Action</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="#">Another action</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="#">Something else here</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/features">Enterprise</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/pricing">Pricing</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/sign-in">Sign In</NavLink>
                            </li>
                            <li className="nav-btn">
                                <button className='btn btn-nav'>
                                    <NavLink className="light-btn" to="sign-up">Sign up free</NavLink>
                                </button>
                            </li>
                        </ul>
                    </div>
                    </div>
                    </nav>
                </div>
            </div>
        </div>
        </>
    )
}
export default Navbar;