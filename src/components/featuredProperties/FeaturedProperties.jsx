import featuredProperties from "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/198898575.jpg?k=610f0bfd6f658ee673a1d2d36d4596299675325a3a2af586b01a8a80195722de&o=&hp=1" alt="" className="fpImg" />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Athens</span>
        <span className="fpPric">Starting from 120€</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
        </div>
        <div className="fpItem">
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/5b/2f/f0/central-athens-hotel.jpg?w=900&h=-1&s=1" alt="" className="fpImg" />
        <span className="fpName">Roof Garden</span>
        <span className="fpCity">Athens</span>
        <span className="fpPric">Starting from 95€</span>
        <div className="fpRating">
          <button>9.1</button>
          <span>Excellent</span>
        </div>
        </div>
        <div className="fpItem">
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/17/92/1e/ae/park-hotel.jpg" alt="" className="fpImg" />
        <span className="fpName">Luxury Springs</span>
        <span className="fpCity">Nafplio</span>
        <span className="fpPric">Starting from 75€</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Excellent</span>
        </div>
        </div>
        <div className="fpItem">

        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/198898575.jpg?k=610f0bfd6f658ee673a1d2d36d4596299675325a3a2af586b01a8a80195722de&o=&hp=1" alt="" className="fpImg" />
        <span className="fpName">Hotel Marathia</span>
        <span className="fpCity">Arta</span>
        <span className="fpPric">Starting from 45€</span>
        <div className="fpRating">
          <button>8.7</button>
          <span>Excellent</span>
        </div>
        </div>

    </div>
  )
}

export default FeaturedProperties