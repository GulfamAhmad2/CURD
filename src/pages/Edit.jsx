import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateData } from '../components/redux-toolkit/apiSlice'

const Edit = () => {
    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [editValue, setEditValue] = useState({
        id:params.id,
        firstName:'',
        lastName:'',
    })
    console.log(params)
    const changeEvent = (e) =>{
        const {name, value} = e.target
        setEditValue({...editValue, [name]: value})
    }
    const onUpdate = () =>{
        dispatch(updateData(editValue))
        navigate('/')
    }
  return (
    <div>
        <input type='text' name='firstName' onChange={changeEvent} />
        <input type='text' name='lastName' onChange={changeEvent} />
        <button onClick={onUpdate} >Update</button>
    </div>
  )
}

export default Edit