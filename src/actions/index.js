import axios from 'axios'

export const FETCH_DEBTS = 'FETCH_POSTS'
// export const FETCH_POST = 'FETCH_POST'
// export const CREATE_POST = 'CREATE_POST'
// export const DELETE_POST = 'DELETE_POST'

// const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
// const API_KEY = '?key=yuhyuuki14081993'

export function fetchDebts() {
    // const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    const request = [
        { id: 1, name: "Edson" },
        { id: 2, name: "Raphael" }
    ];

    return {
        type: FETCH_DEBTS,
        payload: request
    }
}

// export function createPost(values) {
//     const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)

//     return {
//         type: CREATE_POST,
//         payload: request
//     }
// }

// export function fetchPost(id) {
//     const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)

//     return {
//         type: FETCH_POST,
//         payload: request
//     }
// }

// export function deletePost(id, callback) {
//     const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
//     .then(response => callback())

//     return {
//         type: DELETE_POST,
//         payload: id
//     }
// }