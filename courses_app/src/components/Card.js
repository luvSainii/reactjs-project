import React from 'react'
import { FcLikePlaceholder } from "react-icons/fc";

const Card = ({ value }) => {
  return (
    <div>
      <div>
        <img src={value.image.url} alt='img'></img>
        <div>
          <button>
            <FcLikePlaceholder />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card