import React from 'react'
import style from './style'
import Img6 from '../images/helmet.png'

const AccessoriesBox = ()=>{
    return(
        <div style={style.AccessoriesBox} className="text-center mb-5 col-lg-3 col-md-3 col-sm-10 col-10 d-block offset">
            <div style={style.Accessories} className="Accessories">
                <img style={{width:"100%",height:"100%"}} src={Img6} alt=""></img>
            </div>
            <p className="mt-1">Price: $120</p>
            <h4 className="font-width-bold mb-2">Aerion Carbon Helmet</h4>
        </div>
    )
}

export default AccessoriesBox;





