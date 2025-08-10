import { useState } from 'react'
import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import RestaurantCategory from './RestautantCategory'

const RestaurantMenu = () => {
  const { id } = useParams()
  const resInfo = useRestaurantMenu(id)
  const [showIndex, setShowIndex] = useState(0)

  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.data?.cards[2]?.card?.card?.info || {}
  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || []

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => c.card?.card['@type']?.includes('ItemCategory')
    )

  return (
    <>
      <div className="text-center p-4">
        <h1 className="font-bold my-4 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines?.join(', ')} -{costForTwoMessage}
        </p>
        {categories?.map((category, index) => (
          <RestaurantCategory
            data={category?.card?.card}
            key={index}
            showItems={index === showIndex}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </>
  )
}

export default RestaurantMenu
