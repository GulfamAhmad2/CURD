import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postData } from '../components/redux-toolkit/apiSlice'
import { useNavigate } from 'react-router-dom'

const Post = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [postValue, setPostValue] = useState({
        firstName:'',
        lastName:'',
    })
    console.log(postValue)
    const changeEvent = (e)=>{
        const {name, value } = e.target
        setPostValue({...postValue, [name]:value})
    }
    const onPost = () =>{
        dispatch(postData(postValue))
        navigate('/')
    }
  return (
    <div>
        <input type='text' name='firstName' placeholder='firstName' onChange={changeEvent} />
        <input type='text' name='lastName' placeholder='lastName' onChange={changeEvent}/>
        <button onClick={onPost} >Save</button>
    </div>
  )
}

export default Post