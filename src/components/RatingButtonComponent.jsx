import React from 'react'

const RatingButtonComponent = ({number, onClickHandler}) => {
  return (
    <li onClick={onClickHandler} className="select-none py-4 px-6 rounded-full bg-ratingCustomBlue hover:bg-ratingOrange hover:text-ratingVeryDarkBlue hover:cursor-pointer">{number}</li>
  )
}

export default RatingButtonComponent
