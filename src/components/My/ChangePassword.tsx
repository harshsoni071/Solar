import React from 'react'
import InnerPageHeading from '../Common/InnerPageHeading'

function ChangePassword() {
  return (
    <div>
      <InnerPageHeading title={"Change Password"} />
      <div className='px-4 py-4' >
        <h4 className='font-bold text-lg'>Password Information</h4>
        <h6 className='font-normal text-sm' >Find all your Password realated Information</h6>

        <form className='my-10' >
          <div className='flex flex-col mt-3' >
            <label className='font-semibold px-2 mb-1' >Old Password</label>
            <input type="password" name="oldpassword" placeholder="Enter Old Password" className='py-2 border-2 border-black rounded-lg px-3' />
          </div>
          <div className='flex flex-col mt-3' >
            <label className='font-semibold px-2 mb-1' >New Password</label>
            <input type="password" name="newpassword" placeholder="Enter New Password" className='py-2 border-2 border-black rounded-lg px-3' />
          </div>
          <div className='flex flex-col mt-3' >
            <label className='font-semibold px-2 mb-1' >Confirm Password</label>
            <input type="password" name="confirmpassword" placeholder="Enter Confirm Password" className='py-2 border-2 border-black rounded-lg px-3' />
          </div>
          <div className='flex justify-center mt-8' >
            <button className='bg-black text-white py-3 px-12 rounded-2xl'>Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ChangePassword