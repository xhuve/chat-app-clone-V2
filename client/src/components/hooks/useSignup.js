import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

const useSignup = () => {
    const [loading, setLoading] = useState(false)

    const signup = async (data) => {
        const success = handleInputErrors(data)
        if(!success) return;
        
        setLoading(true)
        const {fullname, username, password, confirmPassword, gender} = data
        axios.post("http://localhost:3001/api/auth/signup", {fullname, username, password, confirmPassword, gender})
        .then((res) => {
            console.log("🚀 ~ signup ~ body:", res)
        })
        .catch((error) => {
            console.log(error)
            toast.error(error.message)
        })
        .finally(() => {
            setLoading(false)
        })

    }
    return [ loading, signup ]
}

export default useSignup


const handleInputErrors = (data) => {
    if(!data.fullname || !data.username || !data.password || !data.confirmPassword || !data.gender) {
        toast.error('Please fill in all fields')
        return false;
    }

    if(data.password !== data.confirmPassword) {
        toast.error('Passwords do not match')
        return false;
    }

    if(data.password.length < 6) {
        toast.error('Password must be at least 6 characters')
        return false;    
    }

    return true
}