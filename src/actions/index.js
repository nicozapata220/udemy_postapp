import axios from 'axios'

const ROOT_URL = "http://reduxblog.herokuapp.com/api" 
const API_KEY = '?key=nicozapata'

export const FETCH_POSTS = "FETCH_POSTS"

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
    console.log(request)
    return {
        type: FETCH_POSTS,
        payload: request
    }
}