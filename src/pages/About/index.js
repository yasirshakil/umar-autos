import React from 'react';
import style from './style'
import { Link } from "react-router-dom"
import Img from './images/bike3.png'
import Img1 from './images/yasirs.jpg'
import Header from '../../component/Header'
import Footer from '../../component/Footer'





const  About = ()=>{

    const TeamMembers = [1,2,3]
  
  return(
        <div>
            <Header/>
            <div style={style.MainAboutBox} className="container-fluid">
                <div className="container">
                    <div style={style.RowBox1} className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-block text-center">
                            <h1 style={style.AboutText}>About Us</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container Detail-box">
                <div className="row">
                    <div className=" D-box-1 col-lg-6 col-md-6 col-sm-12 col-12 d-block pl-2 pt-3">
                        <h1 style={style.DetailBox}> <b style={style.Logo}> UMER AUTOS </b> 
                             WORLD MOST <br/>LARGEST MOTORCYCLE STORE
                        </h1>
                        <p className="pt-5">
                            UMER AUTOS the most largest bike store in the wold can serve you latest
                            qulity of motorcycle also you can sell here your motorcycle it quo minus
                            iduod maxie placeat facere possimus, omnis voluptas assumenda est,
                            omnis dolor llendus. Temporibus autem quibusdam
                        </p>
                        <h3>HAVE ANY QUESTION?</h3>
                        <div className="d-flex">
                            <div style={style.CallBtn} className="mt-2 call-btn"></div>
                            <div style={style.ContectNum} className="mt-2 pt-1 Contect-Num text-center">
                                +92 3343015140
                            </div>
                        </div>
                    </div>
                    <div className=" D-box-2 col-lg-6 col-md-6 col-sm-12 col-12 d-block pt-5">
                        <img className="animated-bike" src={Img}></img>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5">
                <div className="container">
                    <div style={style.RowBox2} className="row">
                        <div className="col-lg-10 col-md-10 col-sm-10 col-10 d-block text-center m-auto">
                            <h1 className="font-width-bold">
                                Team Member
                            </h1>
                            <p><b className="font-width-bold mr-2">UMAR AUTOS</b>
                                the most largest bike store in the world can serve you largest quality of motorcycle also you can sell here your motorcycle
                            </p>
                        </div>
                    </div>
                </div>
                <div style={style.BlogPost} className="container">
                    <div style={style.RowBox1} className="row">
                        {TeamMembers.map(()=>{
                        return(
                        <div style={style.BlogBox} className="Blog-box col-lg-3 col-md-3 col-sm-12 col-12 d-block">
                            <img style={{width:"100%",height:"100%"}} src={Img1}></img>
                            <div className="Blog-headng mb-4 text-center"></div>
                        </div>)})}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
    
}

export default About;