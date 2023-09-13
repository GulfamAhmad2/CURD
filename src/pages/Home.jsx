import React, { useEffect } from 'react'
import Table from '../components/Table'
import { useDispatch, useSelector } from 'react-redux'
import { STATUS, getData } from '../components/redux-toolkit/apiSlice'

const Home = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getData())
    },[])
    const {data, status } = useSelector((state)=> state)
    // console.log(data)

    if(status === STATUS.LOADING){
        return (
            <>
                <h1>Loading</h1>
            </>
        )
    }
    if(status === STATUS.ERROR){
        return (
            <>
                <h1>Error</h1>
            </>
        )
    }
  return (
    <div>
        <Table data={data.data} />
    </div>
  )
}

export default Home