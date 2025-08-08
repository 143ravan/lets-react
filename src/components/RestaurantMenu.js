import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../utils/useRestaurantMenu'

const RestaurantMenu = () => {
  const { id } = useParams()
  const resInfo = useRestaurantMenu(id)

  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.data?.cards[2]?.card?.card?.info || {}
  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || []

  return (
    <>
      <div className="restaurant-menu">
        <h1>{name}</h1>
        <h2>Menu</h2>
        <p>
          {cuisines?.join(', ')} - {costForTwoMessage}
        </p>
        <h4>Average Rating: {avgRating}</h4>
        {/* This is a placeholder for menu items, you can replace it with actual data */}
        <ul>
          {itemCards?.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - ₹{item.card.info.price / 100 || 'N/A'}
            </li>
          ))}
        </ul>
      </div>
      <div className="menu-items">{/* Menu items will be rendered here */}</div>
    </>
  )
}

export default RestaurantMenu
