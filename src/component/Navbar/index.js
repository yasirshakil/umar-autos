import React from 'react'
import style from './style'
import { Link } from "react-router-dom"
import Img3 from '../images/bike3.png'


function Component(){

    return(
        <div>
             <section className="header mt-10">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="logo">
                                <h1>UMER<span style={style.orange}>AUTOS</span></h1>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mt-10 header-contact">
                               <p>WANT TO TALK WITH US <span style={style.orange}>+923343015140</span></p> 
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="header-contact">
                                <p> You Can Send Email At <a class="link-mail" href="mailto:#">m.yasirshakil@gmail.com</a> </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                        
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/about">About Us</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/shop">Shop</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/contact">Contact</Link>
                                </li>
                            </ul>
                            <form class="form-inline my-2 my-lg-0" style={style.search}>
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-search my-2 my-sm-0" type="submit"> Search </button>
                            </form>
                            </div>
                        </nav>
                    </div>
                </div>
            </section>
        </div>
    )

}




export default Component;