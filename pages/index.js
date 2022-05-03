import { FooterBanner, HeroBanner, Product } from '../components'

import React from 'react'
import { client } from '../lib/client'

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Hot Product</h2>
        <p>Best Seller Product</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData.length && bannerData[0]} />
    </>
  )
}

export const getServerSideProps = async () => {
  // * fetchProduct
  const fetchProduct = '*[_type == "product"]'
  const products = await client.fetch(fetchProduct)

  // * fetchBanner
  const fetchBanner = '*[_type == "banner"]'
  const bannerData = await client.fetch(fetchBanner)

  return {
    props: { products, bannerData },
  }
}

export default Home
