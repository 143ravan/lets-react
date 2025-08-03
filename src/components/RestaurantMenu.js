import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState([null])
  const { id } = useParams()

  useEffect(() => {
    fetchMenuData()
  }, [])

  const fetchMenuData = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    )
    const data = await response.json()
    setResInfo(data)
  }
  if (resInfo === null) {
    return <Shimmer />
  }

  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.data?.cards[2]?.card?.card?.info || {}
  const { itemCards } =
    resInfo.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || []

  return (
    <>
      <div className="restaurant-menu">
        <h1>{name}</h1>
        <h2>Menu</h2>
        <p>
          {cuisines?.join(', ')} - {costForTwoMessage}
        </p>
        <h3>Average Rating: {avgRating}</h3>
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
