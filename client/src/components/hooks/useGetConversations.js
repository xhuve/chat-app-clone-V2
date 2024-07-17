import { useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

const useGetConversations = () => {
    const [loading, setLoading] = useState(false)
    const [conversations, setConversations] = useState([])

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true)
            axios.get("http://localhost:3001/api/user/", { withCredentials: true })
            .then((res) => {
                setConversations(res.data)
            })
            .catch((err) => {
                toast.error(err.response)
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