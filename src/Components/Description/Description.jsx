import React from 'react'
import '../Description/Description.css'
const Description = () => {
  return (
    <div className="descriptionbox">
        <div className="description-navigator">
            <div className="description-nav-box">
                Description
            </div>
            <div className="description-nav-box fade">
                Reviews
            </div>
            {/* <div className="description-navbox">
                Features
            </div>
            <div className="description-navbox">
                Details
            </div> */}
        </div>
        <div className="description-content">
            <p>Discover a seamless shopping experience with our wide range of high-quality products, from everyday essentials to exclusive collections. At Shopper, we’re committed to delivering value, variety, and convenience right to your doorstep. Whether you're searching for the latest fashion, electronics, home décor, or groceries, we have everything you need – all at competitive prices and with fast, reliable delivery. Shop smart, shop easy!</p>
            <p>We believe in more than just selling products — we aim to create a customer-first experience. With secure payment options, easy returns, 24/7 customer support, and personalized recommendations, shopping at [Your Brand Name] is not only easy but enjoyable. Our commitment to quality and customer satisfaction makes us one of the most trusted names in online retail.</p>
        </div>
    </div>
  )
}

export default Description