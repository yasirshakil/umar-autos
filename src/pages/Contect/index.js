import React from 'react';
import style from './style'
import { Link } from "react-router-dom"
import Map from './map'
import Navbar from '../../component/Navbar'
import Footer from '../../component/Footer'








function Contact(){

  
  return(
        <div>
            <Navbar/>
            <div style={style.MainAboutBox} className="container-fluid">
                <div className="container">
                    <div style={style.RowBox1} className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-block text-center">
                            <h1 style={style.AboutText}>Contact</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div style={style.MapBox} className="container">
                    <Map/>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row mb-5">
                        <div style={style.Information} className="col-lg-5 col-md-5 col-sm-12 col-12 d-block m-auto">
                            <h5 className="mb-4"><span className="Information-Contect">INFOR</span>MATION</h5>
                            <div style={style.ContactBox}>
                                <div className="pl-2 pt-3">
                                    <h3 className="mb-2">Address:</h3>
                                    <p className="mb-2">Akber road Saddar Karachi</p>
                                    <h3 className="mb-2">Phone:</h3>
                                    <p className="mb-2">923343015140</p>
                                    <h3 className="mb-2">Email:</h3>
                                    <p className="mb-2"><Link>info@umarautos.com</Link></p>
                                    <h3 className="mb-2">Website:</h3>
                                    <p className="mb-2"><Link>https://umarautos.com</Link></p>
                                </div>
                            </div>
                        </div>
                        <div style={style.Form} className="col-lg-6 col-md-6 col-sm-12 col-12 d-block  pl-5">
                            <h5 className="mb-4"><span className="Information-Contect">GET IN</span> TOUCH</h5>
                            <input className="mr-4 mb-4 pl-2" style={style.Name} type="text" placeholder="Name"></input>
                            <input className="pl-2" style={style.Email} type="text" placeholder="Email"></input> 
                            <div className="mb-4"><input className="pl-2" style={style.Subject} type="text" placeholder="Subject"></input></div>
                            <div><textarea className="pl-2" style={style.Text} placeholder="Massage"></textarea></div>
                            <button className="mt-4" style={style.SendBtn}>Send Massage</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
    
}

export default Contact;