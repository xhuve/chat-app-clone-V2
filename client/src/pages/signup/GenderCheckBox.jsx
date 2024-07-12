import React from 'react'

const GenderCheckBox = ({ getGender }) => {
    return (
      <div className='flex mt-1'>
          <div className='form-control'>
              <label className='label gap-2 cursor-pointer'>
                  <span className='label-text'>Male</span>
                  <input onChange={getGender} name='gender' value={"male"} type="radio" className='radio border-slate-900 bg-white' />
              </label>
          </div>
  
          <div className='form-control'>
              <label className='label gap-2'>
                  <span className='label-text'>Female</span>
                  <input onChange={getGender} name='gender' value={"female"} type="radio" className='radio border-slate-900 bg-white' />
              </label>
          </div>
      </div>
    )
  }

export default GenderCheckBox