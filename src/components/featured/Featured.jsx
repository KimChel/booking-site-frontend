import React from 'react'
import "./featured.css";
import arta from "C:/Users/kimon/Desktop/react tries/reactos/src/pictures/arta.png"
import athina from "C:/Users/kimon/Desktop/react tries/reactos/src/pictures/athens.png"
import chania from "C:/Users/kimon/Desktop/react tries/reactos/src/pictures/chania.png"
import nafplio from "C:/Users/kimon/Desktop/react tries/reactos/src/pictures/nafplio.png"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src={arta} alt=""  className='featuredImg'/>
            <div className="featuredTitles">
                <h1>Arta</h1>
                <h2>18 Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src={athina} alt="" className='featuredImg'/>
            <div className="featuredTitles">
                <h1>Athens</h1>
                <h2>76 Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src={chania} alt="" className='featuredImg'/>
            <div className="featuredTitles">
                <h1>Chania</h1>
                <h2>42 Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src={nafplio} alt="" className='featuredImg'/>
            <div className="featuredTitles">
                <h1>Nafplio</h1>
                <h2>30 Properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured