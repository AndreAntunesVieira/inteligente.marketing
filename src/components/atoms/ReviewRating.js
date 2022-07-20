const ReviewRating = ({ rating = 5 }) => {
  const stars = new Array(5).fill('flaticon-star-1').fill('flaticon-star', rating)
  return (
    <div className="review-rating ico-15 yellow-color">
      {stars.map(icon => (
        <span className={icon} />
      ))}
    </div>
  )
}

export default ReviewRating
