import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Description from '../Components/Description/Description';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  console.log(all_product);
  const {productId} = useParams();
  console.log(productId);
  const product = all_product.find((e) => e.id === Number(productId))
  console.log("MATCHED PRODUCT:", product);
  if (!product) {
    return <div>Loading or Product Not Found</div>;
  }
  return (
    <div>
      <Breadcrum product = {product}/>
      <ProductDisplay product = {product}/>
      <Description/>
      <RelatedProducts/>
    </div>
  )
}

export default Product