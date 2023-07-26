import axios from 'axios'
import {ChangeEvent, FormEvent, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { authService } from '../services/auth.service'


function Login() {
const navigate = useNavigate()
const initialState = {email:'', password:'',}
const [formData, setFormData] = useState(initialState)   
const handleChange = (event:ChangeEvent<HTMLInputElement>)=>{
    setFormData({
        ...formData, //desestructura el formulario
        [event.target.name]: event.target.value //pilla los elemento de form y los sobreescribe con los nuevos datos
    })

}

const handleSubmit = async (event: FormEvent<HTMLFormElement>)=>{

    event.preventDefault(); //anula el refresh de la pagina, no borra el contenido del formulario 
    console.log(formData)
    // const response = await axios.post('http://127.0.0.1:3000/auth/login', formData, {headers:{'Content-Type': 'application/JSON'}}) 
    const response = await authService.login(formData)
    localStorage.setItem('token',response.data.data)
    navigate('/profile')
    setFormData(initialState)

}


  return (

    <form onSubmit={handleSubmit}>
        <input name='email' value={formData.email} onChange={handleChange} type="text" placeholder='email' />
        <input name='password' value={formData.password} onChange={handleChange} type="password" placeholder='password' />
       <button type="submit">Submit</button>
    
    </form>
  )
}

export default Login