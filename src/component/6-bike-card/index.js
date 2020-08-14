import React from 'react'
import Img3 from '../images/bike3.png'
import style from './style'

const Chosebike = ()=>{
   return(
       <div style={style.ChoseBike} className="col-lg-3 col-md-3 col-sm-12 col-12 d-block chose-bike">
           <div className="Card-heading" style={style.CardHeading}>
               <p className="text-center pt-3">2018-MANUAL-PETROL-250 CC</p>
           </div>
               <div style={style.CardImg} className="Card-img">
                   <img style={{height:"100%",width:"100%"}} src={Img3}></img>
               </div>
               <div style={style.CardDetail}>
                    <h5 className="ml-3 mt-2">Gloriori GSX 250 R <b className="ml-5 mt-1 font-width-bold">$2549</b></h5>
                    <p className="6600rpm mt-2 ml-3">6600rpm</p>
               </div>
           </div>
   )
}

export default Chosebike