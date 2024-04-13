import {apiURL} from './env.js'
import axios from 'axios'

const apiCall = axios.create({
    baseURL: apiURL
})

export default apiCall