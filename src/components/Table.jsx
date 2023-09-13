import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { DeleteData } from './redux-toolkit/apiSlice'

const Table = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { data } = props
    console.log(data)
    const postBtn = () =>{
        navigate('/post-data')
    }
    return (
        <table>
            <caption>Crud Operation Using Redux-toolkit</caption>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Button</th>
            </tr>
            {
                data.map((items) => {
                    return (
                        <tr key={items.id} >
                            <td>{items.firstName}</td>
                            <td>{items.lastName}</td>
                            <td>
                                <button onClick={postBtn} >Post</button>
                                <button onClick={()=> navigate(`/update/${items.id}`)} >Edit</button>
                                <button onClick={() => dispatch(DeleteData(items.id))} >Del</button>
                            </td>
                        </tr>
                    )
                })
            }

        </table>
    )
}

export default Table