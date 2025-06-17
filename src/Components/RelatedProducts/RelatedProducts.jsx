import React from 'react'
import '../RelatedProducts/RelatedProducts.css'
import data_product from '../Assests/data'
import Item from '../Item/Item'
const RelatedProducts = () => {
  return (
    <div className="relatedproducts">
        <h1>Realted Products</h1>
        <hr />
        <div className="relatedproducts-item">
            {data_product.map((item,i)=>{
                return <Item key={i} image={item.image} id ={item.id} name={item.name} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default RelatedProducts