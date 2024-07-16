import React, { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useAuthContext } from '../../context/AuthContext'

const useLogin = () => {
    const [loading, setLoading] = useState()
    const {setAuthUser} = useAuthContext()

    const login = ({username, password}) => {
        console.log("🚀 ~ login ~ username, password:", username, password)
        if (!username || !password)
            toast.error("Please enter your username and password")
        
        setLoading(true)
        axios.post("http://localhost:3001/api/auth/logout", { username, password })
        .then((res) => {
            localStorage.setItem("chat-user", JSON.stringify(res.data))
            setAuthUser(res.data)
        })
        .catch((err) => {
            toast.error(err.response)
        })
        .finally(() => {
            setLoading(false)
        })
    }
    
    return {loading, login}
}

export default useLogin