import axios from "axios"

export const authService = {login(user: any){
    return axios.post('http://127.0.0.1:3000/auth/login', 
    user, {headers:{'Content-Type': 'application/JSON'}})
}}