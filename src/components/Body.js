import RestaurantCard from './RestaurantCard'
import { RES_LIST } from '../utils/mockData'
import { useState } from 'react'

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(RES_LIST)
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-button"
          onClick={() => {
            const listOfRest = restaurantList.filter(
              (res) => res.info.avgRating > 4.2
            )
            setRestaurantList(listOfRest)
            console.log(listOfRest)
          }}
        >
          Top rated restaurants{' '}
        </button>
      </div>
      <div className="restaurant-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  )
}

export default Body
