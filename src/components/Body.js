import { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer'

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([])
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    )
    const data = await response.json()
    setRestaurantList(
      data?.data?.cards[1].card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    )
    setFilteredRestaurantList(
      data?.data?.cards[1].card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    )
  }
  return filteredRestaurantList.length ? (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for restaurants"
            className="search-input"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-button"
            onClick={() => {
              const listOfRest = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              )
              setFilteredRestaurantList(listOfRest)
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-button"
          onClick={() => {
            const listOfRest = restaurantList.filter(
              (res) => res.info.avgRating > 4.2
            )
            setFilteredRestaurantList(listOfRest)
          }}
        >
          Top rated restaurants{' '}
        </button>
      </div>
      <div className="restaurant-container">
        {filteredRestaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  ) : (
    <Shimmer />
  )
}

export default Body
