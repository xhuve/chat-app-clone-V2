import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../components/hooks/useLogin'

function Login() {
    const [formData, setFormData] = useState({})
    const {loading, login} = useLogin()

    const onFormChange = (event) => {
        setFormData(prevData => ({...prevData, [event.target.name]: event.target.value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(formData)
    }


    return (
        <div className='flex flex-col items-center justify-center min-w-80 lg:min-w-96 mx-auto '>
            <div className='w-full p-6 rounded-lg shadow-md bg-white backdrop-filter backdrop-blur-lg bg-opacity-10'>
                <h1 className='text-3xl font-semibold text-center text-black'> 
                    Login
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-black'>Username</span>
                        </label>
                        <input onChange={onFormChange} type="text" name="username" placeholder="Enter your username" className='w-full input input-bordered h-10 '/>
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text text-black'>Password</span>
                        </label>
                        <input onChange={onFormChange} type="password" name='password' placeholder='Enter your password' className='w-full input input-bordered h-10' />
                    </div>
                    <Link to="/signup" className='text-sm hover:underline'>
                        Don't have an account?
                    </Link>
                    <div>
                        <button className='btn btn-block btn-sm mt-2'>
                            {loading ? 
                            <span className='loading loading-spinner'></span>
                            : "Login"
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login