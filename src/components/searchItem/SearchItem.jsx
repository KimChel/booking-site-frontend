import React from 'react'
import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className='searchItem'>
      <img src="https://t-cf.bstatic.com/xdata/images/hotel/square200/277369557.webp?k=4da6252dfd56a329c25aa5e0241a990d93e9dbe785099e762aa50029e7e05269&o=&s=1" alt=""
      className='siImg' 
      />
      <div className="siDesc">
        <h1 className="siTitle">Big Bed</h1>
        <span className="siDistance">600m from putsa</span>
        <span className="siTaxiOp">No taxi :(</span>
        <span className="siSubtitle">Studio hot, sorry kid</span>
        <span className="siFeatures">Entire studio • no bathroom • no bed</span>
        <span className="siCancelOp">300€ fee for cancellation</span>
        <span className="siCancelOpSubtitle">Don't cancel</span>
      </div>
      
      <div className="siDetails">
        <div className="siDetRat">
          <div className="skata">
            <span>Wonderful</span>
            <label>1,445 reviews</label>
          </div>
          <button className='siDetailsButton'>9.2</button>  
        </div>
        <div className="siDetPrice">
          <span>122€</span>
          <label>Does not include taxes idoit</label>
          <button>Check Availability</button>

        </div>
      </div>
    </div>
    
    
    
  )
}

export default SearchItem