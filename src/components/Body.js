import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import RestaurantCard, { withPromotedLabel } from './RestaurantCard'
import Shimmer from './Shimmer'
import useOnlineStatus from '../utils/useOnlineStatus'

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([])
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([])
  const [searchText, setSearchText] = useState('')

  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await fetch(
      'https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api'
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

  const onlineStatus = useOnlineStatus()
  if (onlineStatus === false) {
    return <h1>offline: take some rest</h1>
  }
  return filteredRestaurantList.length ? (
    <div className="body">
      <div className="flex gap-2">
        <div className="flex gap-2 p-4">
          <input
            id="searchText"
            type="text"
            placeholder="Search for restaurants"
            className="border-solid border-black border-1 rounded-lg"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-100 rounded-lg"
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
        <div className="p-4">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
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
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurantList.map((restaurant) => (
          <Link
            to={`/restaurant/${restaurant.info.id}`}
            key={restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <PromotedRestaurantCard
                key={restaurant.info.id}
                resData={restaurant}
              />
            ) : (
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <Shimmer />
  )
}

export default Body
