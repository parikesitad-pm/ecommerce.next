import { AiOutlineShopping } from 'react-icons/ai'
import Link from 'next/link'
import React from 'react'

// import { Cart } from './'

// import { useStateContext } from '../context/StateContext'

const Navbar = () => {
  // const { showCart, setShowCart, totalQuantities } = useStateContext()

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Hijrah Komputer Store</Link>
      </p>

      <button
        type="button"
        className="cart-icon"
        // onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">2</span>
      </button>

      {/* {showCart && <Cart />} */}
    </div>
  )
}

export default Navbar
