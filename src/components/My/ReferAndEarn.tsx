import React from 'react'
import InnerPageHeading from '../Common/InnerPageHeading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

function ReferAndEarn() {
  return (
    <div>
      <InnerPageHeading title={"Refer & Earn"} />
      <div className='justify-center w-full flex pt-[5vh]' >
        <img src='src\assets\referAndEarn.png' className='w-[250px] h-[250px]' />
      </div>
      <h4 className='text-center text-blue-500 text-xl font-bold' >Invite your Friends and get <br/> Earn Reward</h4>
      <h6 className='text-center font-normal text-sm px-4 my-4' >Shere the code below or ask them to enter it during they signup. Earn when your friend sign up on our app</h6>
      <div className='border-2 border-blue-500 w-[80%] mx-auto flex p-2' >
      <input type="text" className='w-full bg-transparent ' />
      <FontAwesomeIcon icon={faCopy} className='text-2xl text-blue-500' />
      </div>
      <div className='flex justify-center py-5' >
      <button className='py-1 px-4 rounded-lg bg-blue-700 text-white '  >Invite Friend</button>
      </div>
    </div>
  )
}

export default ReferAndEarn