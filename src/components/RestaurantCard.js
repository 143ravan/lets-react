import constants from '../utils/constants'
const { CDN_URL } = constants
const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, sla } = resData.info
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        src={`${CDN_URL}${resData.info.cloudinaryImageId}`}
        alt="restaurant-logo"
      />
      <div className="resto-name">{name}</div>
      <div className="resto-details">{cuisines.join(', ')}</div>
      <div className="resto-details">{avgRating}</div>
      <div className="resto-details">{sla.deliveryTime} mins</div>
    </div>
  )
}

export default RestaurantCard
