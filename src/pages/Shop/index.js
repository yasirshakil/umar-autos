import React from 'react';
import style from './style';
import Img3 from '../Home/images/bike3.png'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import Data, {ShopUsedBike,ShopNewBike,ShopAccessories} from '../../Arry'
import Chosebike from '../../component/6-bike-card'
import AccessoriesBoxs from '../../component/AccessoriesBox'



const Shop = ()=> {
    return (
        <div>
           <Header/>
            <section className="banner">
                <div className="banner-bg">
                    <h1 style={style.bannertxt} className="text-center"> Shop </h1>
                </div>
            </section>
            <section className="shop-body"> 
                <div className="container">
                    <div className="row">
                    <div className="section-title mb-50 text-center">
                        <ul className="nav nav-pills mb-80 justify-content-center" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link nav-tabs active" data-toggle="pill" href="#home">NEW BIKES</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-tabs" data-toggle="pill" href="#menu1">USED BIKES</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-tabs" data-toggle="pill" href="#menu2">ACCESSORIES</a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div id="home" class="container tab-pane active"><br />
                                <div class="container">
                                    <div style={style.RowBox1} class="row">
                                        {
                                            ShopNewBike.map(()=>{
                                                return(
                                                    <Chosebike/>
                                                )
                                            })
                                        }
                                    </div>
                                    <div class="row">
                                        
                                    </div>
                                </div>          
                            </div>
                            <div id="menu1" class="container tab-pane fade"><br />
                                <div class="container">
                                    <div style={style.RowBox1} class="row">
                                        {
                                            ShopUsedBike.map(()=>{
                                                return(
                                                    <Chosebike/>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div id="menu2" class="container tab-pane fade"><br />
                                <div class="container">
                                    <div style={style.RowBox1} class="row">
                                        {
                                            ShopAccessories.map(()=>{
                                                return(
                                                    <AccessoriesBoxs/>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        <Footer/>
    </div>
    ) 
}
export default Shop;
