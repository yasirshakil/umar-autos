import React from 'react'
import { Link } from "react-router-dom"
import style from './style'
 
 const Footer = ()=>{
    return(
        <div>
            <div style={style.MainFooter} className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div style={style.FooterBoxes} className="col-lg-3 col-md-3 col-sm-12 col-12 d-block pl-5 mt-3 mb-3 pt-3">
                            <h3 style={style.FooterLogo}>UMERAUTOS</h3>
                            <p style={{color:"gray"}}>
                               <b className="font-width-bold"> UMAR AUTOS</b> the most largest bike store in the world can serve you largest quality of motorcycle also you can sell here your motorcycle
                            </p>
                        </div>
                        <div style={style.FooterBoxes} className="col-lg-3 col-md-3 col-sm-12 col-12 d-block pl-5 mt-3 mb-3 pt-3">
                            <h2 className="mb-2" style={{color:"white"}}>QUICK LINK</h2>
                            <Link style={style.QuickLinks} className="Quick-Links">Home</Link><br/><br/>
                            <Link style={style.QuickLinks} className="Quick-Links">About</Link><br/><br/>
                            <Link style={style.QuickLinks} className="Quick-Links">Shop</Link><br/><br/>
                            <Link style={style.QuickLinks} className="Quick-Links">Contect</Link><br/><br/>
                        </div>
                        <div style={style.FooterBoxes} className="col-lg-3 col-md-3 col-sm-12 col-12 d-block pl-5 mt-3 mb-3 pt-3">
                            <h2 className="mb-2" style={{color:"white"}}>LATEST TWEET</h2>
                            <p style={{color:"gray"}} className="stor-Detail"><b style={{color:"gray"}} className="font-width-bold mr-1 Stor-1"> @Babar,</b>the most largest bike store in the wold can serve you 10 min ago</p>
                            <p style={{color:"gray"}} className="stor-Detail"><b style={{color:"gray"}} className="font-width-bold mr-1 Stor-1"> @Ahmed,</b>the most largest bike store in the wold can serve you 10 min ago</p>
                        </div>
                        <div style={style.FooterBoxes} className="col-lg-3 col-md-3 col-sm-12 col-12 d-block pl-5 mt-3 mb-3 pt-3">
                            <h2 className="mb-2" style={{color:"white"}}>LATEST TWEET</h2>
                            <h5 style={{color:"white"}}>Address</h5>
                            <h5 style={{color:"gray"}}>Akber road saddar Karachi</h5>
                        </div>
                    </div>
                </div>
            </div> 
            <div style={style.FooterEnd} className="container-fluid">
                <div style={style.End} className="container">
                    <h5 style={{color:"gray"}}>
                        ©Copyright, 2020 All Rights Reserved by <b className="Footer-end-tag">Umer Autos</b>
                    </h5>
                </div>
            </div> 
        </div>
    )
}

export default Footer
