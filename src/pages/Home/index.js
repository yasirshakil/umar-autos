import React,{useState} from 'react';
import style from './style'
import Img from './images/s1.png'
import Img2 from './images/s2.png'
import Img3  from './images/bike3.png'
import Img4 from './images/bikeb.jpg'
import Img7 from './images/slider1.jpg'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import Chosebike from '../../component/6-bike-card';
import Data, {SaleBike,AccessoriesBox,BlogPost} from '../../Arry'
import AccessoriesBoxs from '../../component/AccessoriesBox'


const  Home =() => {


  return(
        <div>
            <Header/>
            <div className="container-fluid">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img style={{width:"100%"}} src={Img}></img>
                        </div>
                        <div className="carousel-item">
                            <img style={{width:"100%"}} src={Img2}></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container heading-Box">
                <h1 className=" Bike text-center" style={style.Bike}>
                    MOTORCYCLE
                </h1>
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
                        <img className="animated-bike" src={Img3}></img>
                    </div>
                </div>
            </div>
            <div className="container-fluid sale-your-bike">
                <div style={style.SaleYourBike} className="container sale-bike-bg">
                    <div style={style.Rowbox1} className="row">
                        {
                            SaleBike.map(()=>{
                                return(
                                    <div style={style.SaleBox} className="sale-box col-lg-3 col-md-3 col-sm-10 col-10 d-block offset">
                                        <img style={{width:"100%",height:"100%"}} src={Img4} className="Sale-bike"></img>
                                        <div className="img-color"></div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className=" container-fluid sec2-Chose-Bike mt-5">
                <div className="container">
                    <div style={style.Rowbox1} className="row">
                        <div className="col-lg-8 col-md-8 com-sm-12 col-12 d-block text-center pt-3 m-auto">
                            <h1>Chose Your Bike</h1>
                            <p className="mt-3">
                                UMAR AUTOS is the largest store where you can sell and purchase New and Used Bikes
                            </p>
                            <button style={style.BtnNew} className="btn-new">NEW BIKES</button>
                            <button style={style.BtnUsed} className="btn-used">USED BIKES</button>
                        </div>
                    </div>
                </div>
                <div className="container mt-5 pl-5 pr-5">
                     <div style={style.Rowbox1} className="row">
                    {
                            Data.map(()=>{
                                return(
                                    <Chosebike/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5">
                <div className="container">
                    <div className="row">
                        <div className=" text-center col-lg-10 col-md-10 col-sm-10 col-10 d-block offset m-auto">
                            <h2 className="font-width-bold mt-5">ACCESSORIES</h2>
                            <p><b className="font-width-bold mr-2">UMAR AUTOS</b>
                                the most largest bike store in the world can serve you largest quality of motorcycle also you can sell here your motorcycle
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div style={style.Rowbox1} className="row">
                        {
                            AccessoriesBox.map(()=>{
                                return(
                                    <AccessoriesBoxs/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="container-fluid Blog-Post mt-5">
                <div className="container">
                    <div style={style.Rowbox1} className="row">
                        <div className="col-lg-10 col-md-10 col-sm-10 col-10 d-block text-center">
                            <h1 className="font-width-bold">
                                BLOG POST
                            </h1>
                            <p><b className="font-width-bold mr-2">UMAR AUTOS</b>
                                is the largest store where you can sell and purchase New and Used Bikes
                            </p>
                        </div>
                    </div>
                </div>
                <div style={style.BlogPost} className="container mt-5">
                    <div style={style.Rowbox1} className="row">
                        {
                            BlogPost.map(()=>{
                                return(
                                    <div style={style.BlogBox} className="Blog-box col-lg-3 col-md-3 col-sm-12 col-12 d-block mb-5">
                                        <img style={{width:"100%",height:"100%"}} src={Img7}></img>
                                        <div className="Blog-headng mb-4 text-center">
                                            <h5 className="m-auto mt-4 font-width-bold">
                                                Sports Motorbike for play in desert
                                            </h5>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>  
            <Footer/>
        </div>
    )
    
}


export default Home;