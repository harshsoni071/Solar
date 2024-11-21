import { faBookmark, faChartSimple, faHouse, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <>
    <div className="flex justify-around w-full pt-[9px] bg-white border sticky bottom-0 ">
          <Link to={"/"} className="flex flex-col ">
            <FontAwesomeIcon icon={faHouse} className="text-[19px]" />
            <span className="text-[14px]">Home</span>
          </Link>

          <Link to={"invest"} className="flex flex-col ">
            <FontAwesomeIcon icon={faChartSimple} className="text-[19px]" />
            <span className="text-[14px]">Invest</span>
          </Link>

          <Link to={"purchased"} className="flex flex-col ">
            <FontAwesomeIcon icon={faBookmark} className="text-[19px]" />
            <span className="text-[14px]">Purchased</span>
          </Link>

          <Link to={""} className="flex flex-col ">
            <FontAwesomeIcon icon={faUser} className="text-[19px]" />
            <span className="text-[14px]">My</span>
          </Link>
        </div>
   </>
  )
}

export default Footer
