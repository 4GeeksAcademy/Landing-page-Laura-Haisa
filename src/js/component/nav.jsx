import React from 'react';

export const Navbar = () => {
    return(
        <nav className="navbar bg-body-tertiary" style={{backgroundColor:'rgb(72,72,72)'}}>
            <div className="container-fluid">
                <a className="navbar-brand" style={{color:'white'}}>Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                        <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                        <a className="nav-link active text-white" aria-current="page" href="#">About</a>
                        <a className="nav-link active text-white" aria-current="page" href="#">Services</a>
                        <a className="nav-link active text-white" aria-current="page" href="#">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

