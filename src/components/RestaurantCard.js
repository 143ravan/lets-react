import constants from '../utils/constants'
const { CDN_URL } = constants
const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, sla } = resData.info
  return (
    <div className="p-4 mx-2 w-[250px] bg-pink-100 rounded-lg hover:bg-pink-200">
      <img
        className="rounded-md"
        src={`${CDN_URL}${resData.info.cloudinaryImageId}`}
        alt="restaurant-logo"
      />
      <div className="font-bold py-2 text-lg">{name}</div>
      <div className="resto-details">{cuisines.join(', ')}</div>
      <div className="resto-details">{avgRating}</div>
      <div className="resto-details">{sla.deliveryTime} mins</div>
    </div>
  )
}

export default RestaurantCard
