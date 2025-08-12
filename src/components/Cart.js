import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../utils/cartSlice'
import ItemList from './ItemList'

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items)
  const dispatch = useDispatch()
  const handleClearCart = () => {
    dispatch(clearCart())
  }
  return (
    <div className="m-4 p-4 text-center">
      <h1 className="text-2xl font-bold">Cart page</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 rounded-lg bg-black text-white"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length ? (
          <ItemList items={cartItems} />
        ) : (
          <h1>Ohh its empty try some good today</h1>
        )}
      </div>
    </div>
  )
}

export default Cart
