import React, { useState } from 'react'
import flatoffer from '../../assets/festive/flatoffer.png'
import girls from '../../assets/festive/girls.png'
import offer from '../../assets/gifss/offer.gif'
import giva from '../../assets/festive/giva.png'
import indu from '../../assets/festive/indu.png'
import best from '../../assets/festive/best.png'
import deals from '../../assets/festive/deals.png'
import shop from '../../assets/festive/shop.png'
import moreoffer from '../../assets/festive/moreoffer.png'
import Card from '../Cards/Card.jsx'
import './Header.css'
import pcard from '../../assets/purple-cards/pcard.js'
import wcard from '../../assets/transparent/cw.js';
import ycard from '../../assets/yellow-cards/yc.js'
import '../Cards/Card.css'
import {Link} from 'react-router-dom'


const Header = ({c}) => {

    const[index,setIndex]=useState(0);
    return (
        

        <div className="header">
            <div className="header-main">
                <div className="offer1">
                    <img src={flatoffer} alt="offer1" />
                </div>
                <div className="main-img">
                    <img src={girls} alt="" />
                </div>
                <div className="giva-indo">
                    <img src={indu} alt="" />
                    <img src={giva} alt="" />
                </div>
                <div className="flip">
                    <img src={offer} alt="" />
                </div>
            </div>
            <div className="heading-purple">
                <div className="best-style">
                    <img src={best} alt="" />
                </div>
                <Card c={pcard}/>
            </div>
            <div className="heading-white">
                <div className="best-style">
                    <img src={deals} alt="" />
                </div>
                <Card c={wcard}/>
            </div>
            <div className="heading-yellow">
                <div className="best-style">
                    <img src={shop} alt="" />
                </div>
                <div className="card-list ytrace">
                   {
                    ycard.map((card,index)=>{
                       return(
                        <div className="card y" key={index}>
                            <Link to={'/genz'}>
                             <img src={card.image} alt="yellow" />
                            </Link>
                           
                        </div>
                       )
                    })
                   } 
                </div>
                
            </div>
            <div className="more-offers">
                <img src={moreoffer} alt="" />
            </div>

        </div>
    )
}

export default Header