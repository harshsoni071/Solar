import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faChartLine, faChevronRight, faClockRotateLeft, faGear, faGift, faHandshakeAngle, faMoneyBillTransfer, faShieldHalved, faUser, faUserGroup,  } from '@fortawesome/free-solid-svg-icons'

import React from 'react'
import { Link } from 'react-router-dom'

function My() {
  return (
    <div className='px-4 pb-8' >
      <div className='justify-between flex py-4' >
        <Link to={'/ChangePassword'} >
          <FontAwesomeIcon icon={faGear} className="text-3xl text-blue-800"  />
        </Link>
        <div>
          <FontAwesomeIcon icon={faArrowRightFromBracket} className="text-3xl text-blue-800"  />
        </div>
      </div>
      <div className='justify-center flex ' >
      {/* <FontAwesomeIcon icon={faShieldHalved}  className="text-8xl text-blue-800"/> */}
      <img src='src\assets\privacy_head.png'className='h-[150px] w-[150px]' />
      </div>
      <div>
        <h3 className='text-2xl text-blue-800 font-semibold' >Profile Infomation</h3>
        <h3 className='text-sm font-light' >Find all your Profile related infomation</h3>
      </div>



      <div className='py-6 flex flex-col gap-2' >

        <Link to={"#"} className='rounded-2xl bg-blue-200 flex justify-between px-4 py-3 items-center' >
          <div className='flex items-center gap-1 w-[95%] ' >
          <FontAwesomeIcon icon={faUser} className='text-2xl text-blue-800 w-[20%] ' />
          <h2 className='text-md font-normal w-[80%] '>User Profile</h2>
          </div>
          <div className='w-[5%]' >
          <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </Link>


        <Link to={"#"} className='rounded-2xl bg-blue-200 flex justify-between px-4 py-3 items-center' >
          <div className='flex items-center gap-1 w-[95%] ' >
          <FontAwesomeIcon icon={faGift} className='text-2xl text-blue-800 w-[20%] ' />
          <h2 className='text-md font-normal w-[80%] '>Reward history</h2>
          </div>
          <div className='w-[5%]' >
          <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </Link>

        
        <Link to={"#"} className='rounded-2xl bg-blue-200 flex justify-between px-4 py-3 items-center' >
          <div className='flex items-center gap-1 w-[95%] ' >
          <FontAwesomeIcon icon={faClockRotateLeft} className='text-2xl text-blue-800 w-[20%] ' />
          <h2 className='text-md font-normal w-[80%] '>Fund History</h2>
          </div>
          <div className='w-[5%]' >
          <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </Link>


        <Link to={"#"} className='rounded-2xl bg-blue-200 flex justify-between px-4 py-3 items-center' >
          <div className='flex items-center gap-1 w-[95%] ' >
          <FontAwesomeIcon icon={faMoneyBillTransfer} className='text-2xl text-blue-800 w-[20%] ' />
          <h2 className='text-md font-normal w-[80%] '>Withdraw Fund</h2>
          </div>
          <div className='w-[5%]' >
          <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </Link>


        <Link to={"/referAndEarn"} className='rounded-2xl bg-blue-200 flex justify-between px-4 py-3 items-center' >
          <div className='flex items-center gap-1 w-[95%] ' >
          <FontAwesomeIcon icon={faUserGroup} className='text-2xl text-blue-800 w-[20%] ' />
          <h2 className='text-md font-normal w-[80%] ' >  Refer & Earn</h2>
          </div>
          <div className='w-[5%]' >
          <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </Link>


        <Link to={"#"} className='rounded-2xl bg-blue-200 flex justify-between px-4 py-3 items-center' >
          <div className='flex items-center gap-1 w-[95%] ' >
          <FontAwesomeIcon icon={faChartLine} className='text-2xl text-blue-800 w-[20%] ' />
          <h2 className='text-md font-normal w-[80%] '>Level Income</h2>
          </div>
          <div className='w-[5%]' >
          <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </Link>


        <Link to={"#"} className='rounded-2xl bg-blue-200 flex justify-between px-4 py-3 items-center' >
          <div className='flex items-center gap-1 w-[95%] ' >
          <FontAwesomeIcon icon={faClockRotateLeft} className='text-2xl text-blue-800 w-[20%] ' />
          <h2 className='text-md font-normal w-[80%] '>Withdraw History</h2>
          </div>
          <div className='w-[5%]' >
          <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </Link>
        <Link to={"/getHelp"} className='rounded-2xl bg-blue-200 flex justify-between px-4 py-3 items-center' >
          <div className='flex items-center gap-1 w-[95%] ' >
          <FontAwesomeIcon icon={faHandshakeAngle} className='text-2xl text-blue-800 w-[20%] ' />
          <h2 className='text-md font-normal w-[80%] '>Get Help</h2>
          </div>
          <div className='w-[5%]' >
          <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default My
