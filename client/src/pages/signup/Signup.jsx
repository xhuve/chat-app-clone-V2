import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import useSignup from '../../components/hooks/useSignup.js'
import { useEffect } from 'react'

function Signup() {
    const [formData, setFormData] = useState({})
    const [ loading, signup ] = useSignup()

    const onFormChange = (event) => {
        setFormData(prevData => ({...prevData, [event.target.name]: event.target.value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(formData)
    }
    

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto '>
            <div className='w-full p-6 rounded-lg shadow-md bg-white backdrop-filter backdrop-blur-lg bg-opacity-10'>
                <h1 className='text-3xl font-semibold text-center text-black'> 
                    Sign up
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-black'>Full Name</span>
                        </label>
                        <input onChange={onFormChange} type="text" name='fullname' placeholder="Enter your username" className='w-full input input-bordered h-10 '/>
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-black'>Username</span>
                        </label>
                        <input onChange={onFormChange} type="text" name='username' placeholder="Enter your username" className='w-full input input-bordered h-10 '/>
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text text-black'>Password</span>
                        </label>
                        <input onChange={onFormChange} type="password" name='password' placeholder='Enter your password' className='w-full input input-bordered h-10' />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text text-black'>Confirm password</span>
                        </label>
                        <input onChange={onFormChange} type="password" name='confirmPassword' placeholder='Confirm your password' className='w-full input input-bordered h-10' />
                    </div>

                    
                    <GenderCheckBox getGender={ onFormChange }/>

                    <Link to="/login" className='text-sm hover:underline mt-2'>
                        Already have an account?
                    </Link>
                    <div>
                        <button className='btn btn-block btn-sm mt-2'>Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup