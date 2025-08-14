import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'
import constants from '../utils/constants'
const { CDN_URL } = constants

const ItemList = (items) => {
  const dispatch = useDispatch()

  const handleAddItem = (item) => {
    dispatch(addItem(item))
  }

  return (
    <div className="py-4  text-left">
      {items?.items?.map((item) => (
        <div
          data-testid="foodItems"
          className="p-4 border-b-1 border-gray-200"
          key={item.card.info.id}
        >
          <div className="flex justify-between">
            <div className="w-9/12">
              <div>
                <span className="py-4 text-lg">{item.card.info.name}</span>
                <span>- ₹{item.card.info.price / 100}</span>
              </div>
              <div className="my-2 text-sm">{item.card.info.description}</div>
            </div>
            <div className="w-3/12 p-1 ">
              <div className="absolute">
                <button
                  className="p-2 mx-14 my-28 bg-white shadow-lg text-amber-500 rounded-lg"
                  onClick={() => {
                    handleAddItem(item)
                  }}
                >
                  Add +
                </button>
              </div>
              <img
                className="rounded-lg"
                src={CDN_URL + item.card.info.imageId}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ItemList
