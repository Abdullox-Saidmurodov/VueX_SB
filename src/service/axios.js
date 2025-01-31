import { getItem } from '@/helpers/persistaneStorage'
import axios from 'axios'

// axios.defaults.baseURL = 'http://localhost:3000/api'
axios.defaults.baseURL = 'http://192.168.99.100:3000/api'

axios.interceptors.request.use(config => {
    // console.log(config)
    const token = getItem('token')
    const authorization = token ? `Token ${token}` : ''
    config.headers.Authorization = authorization
    // console.log(authorization)
    return config
})

export default axios