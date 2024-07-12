import { useState } from 'react'

const useSignup = async () => {
    const [loading, setLoading] = useState(false)

    const signup = async ({ data }) => {
        const success = handleInputErrors(data)
        if(!success) return;
    }

    setLoading(true)
    try {
        const res = await fetch("http://localhost:5000/api/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })

        const data = await res.json()
    } catch (error) {
        toast.error(error.message)
    } finally {
        setLoading(false)
    }
    return { loading, signup }
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