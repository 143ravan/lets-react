import { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex()
  }

  return (
    <div className="w-6/12 bg-gray-50 m-auto my-4 p-4 shadow">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data?.title} ({data?.itemCards?.length})
        </span>
        <span>⬇️</span>
      </div>
      {showItems && <ItemList items={data?.itemCards} />}
    </div>
  )
}

export default RestaurantCategory
