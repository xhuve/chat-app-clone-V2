import React from 'react'
import { GenderCheckBox } from './GenderCheckBox'

function Login() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto '>
        <div className='w-full p-6 rounded-lg shadow-md bg-white backdrop-filter backdrop-blur-lg bg-opacity-10'>
            <h1 className='text-3xl font-semibold text-center text-black'> 
                Sign up
            </h1>

            <form>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-black'>Full Name</span>
                    </label>
                    <input type="text" name='fullname' placeholder="Enter your username" className='w-full input input-bordered h-10 '/>
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-black'>Username</span>
                    </label>
                    <input type="text" name='username' placeholder="Enter your username" className='w-full input input-bordered h-10 '/>
                </div>

                <div>
                    <label className='label'>
                        <span className='text-base label-text text-black'>Password</span>
                    </label>
                    <input type="password" name='password' placeholder='Enter your password' className='w-full input input-bordered h-10' />
                </div>

                
                <GenderCheckBox />

                <a href="#" className='text-sm hover:underline mt-2'>
                    Don't have an account?
                </a>
                <div>
                    <button className='btn btn-block btn-sm mt-2'>Sign up</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login