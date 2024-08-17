
import { Axios } from 'axios';

export default function axios() {
    const axios = Axios.create({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
        headers:{
            "X-REQUESTED-WITH":"XMLHTTpRequest"
        },
        withCredentials:true
    })
}
