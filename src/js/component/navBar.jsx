import React from "react";


 const NavBar = ()=>{

    return (<nav class="navbar navbar-expand-lg bg-body-tertiary  bg-secondary">
            <div class="container-fluid">
                <a class="navbar-brand navheader" href="#">Start Boostrap</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse navderecha justify-content-end navheader" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
                    <a class="nav-link" href="#">About</a>
                    <a class="nav-link" href="#">Services</a>
                    <a class="nav-link " href="#">Contact</a>
                </div>
                </div>
            </div>
            </nav>
)
}
export default NavBar;
