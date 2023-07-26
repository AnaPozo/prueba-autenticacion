import axios from 'axios'
import React, { useEffect, useState } from 'react'


function Profile() {
    const [profile, setProfile] = useState({
        _id: "",
    name: "",
    last_name: "",
    email: "",
    password: "",
    wallet_balance: 0,
    created_courses: [],
    chat_notifications_sent: [],
    chat_notifications_recieved: [],
    profile: "",
    bought_courses: [],
    __v: 0
    })

    useEffect( () =>{
        function getData(){
          const token =  localStorage.getItem("token")
          return axios.get('http://localhost:3000/users/profile', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }) 
        } 
    getData().then (response=>{ 
        console.log(response.data) 
        setProfile(response.data)
    }

    )
       
    },[])


  return (
    <div>
        <h1>Hola soy {profile.name}</h1>
        <p>{profile.email}</p>
    </div>
  )
}

export default Profile