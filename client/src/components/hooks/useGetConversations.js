import { useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import useLogout from '../hooks/useLogout.js'

const useGetConversations = () => {
    const [loading, setLoading] = useState(false)
    const [conversations, setConversations] = useState([])
    const {logout} = useLogout()

    
    useEffect(() => {
        const getConversations = async () => {
            setLoading(true)
            axios.get("http://localhost:3001/api/user/", { withCredentials: true })
            .then((res) => {
                console.log("🚀 ~ .then ~ res:", res)
                setConversations(res.data)
            })
            .catch(async (err) => {
                const error_msg = err.response.data.error
                if (err.response.status == 401){
                    await logout()
                }
                toast.error(error_msg)
            })
            .finally(() => {
                setLoading(false)
            })
        }

        getConversations()
    }, [])

    return { loading, conversations }
}

export default useGetConversations