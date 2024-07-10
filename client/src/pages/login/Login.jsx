import React from 'react'

function Login() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto '>
        <div className='w-full p-6 rounded-lg shadow-md bg-white backdrop-filter backdrop-blur-lg bg-opacity-10'>
            <h1 className='text-3xl font-semibold text-center text-black'> 
                Login
            </h1>

            <form>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-black'>Username</span>
                    </label>
                    <input type="text" placeholder="Enter your username" className='w-full input input-bordered h-10 '/>
                </div>

                <div>
                    <label className='label'>
                        <span className='text-base label-text text-black'>Password</span>
                    </label>
                    <input type="password" placeholder='Enter your password' className='w-full input input-bordered h-10' />
                </div>
                <a href="#" className='text-sm hover:underline'>
                    Don't have an account?
                </a>
                <div>
                    <button className='btn btn-block btn-sm mt-2'>Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login