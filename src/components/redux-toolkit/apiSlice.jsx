import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


/* =========== ENUM  =========== */
export const STATUS = Object.freeze({
    LOADING: 'loading',
    IDLE: 'idle',
    ERROR: 'error',
})

const apiSlice = createSlice({
    name: 'api',
    initialState: {
        data: [],
        status: STATUS.IDLE
    },
    extraReducers: (builder) => {
        builder

            /* =========== GET  =========== */
            .addCase(getData.pending, (state, action) => {
                state.status = STATUS.LOADING
            })
            .addCase(getData.fulfilled, (state, action) => {
                state.status = STATUS.IDLE
                state.data = action.payload
            })
            .addCase(getData.rejected, (state) => {
                state.status = STATUS.ERROR
            })

            /* =========== POST  =========== */
            .addCase(postData.pending, (state)=>{
                state.status = STATUS.LOADING
            })
            .addCase( postData.fulfilled,  (state, action)=>{
                state.data.push(action.payload)
                state.status = STATUS.IDLE
            })
            .addCase( postData.rejected,  (state)=>{
                state.status = STATUS.ERROR
            })

            /* =========== DELETE  =========== */
            .addCase(DeleteData.pending, (state)=>{
                state.status = STATUS.LOADING
            })

            .addCase(DeleteData.fulfilled,(state, action)=>{
                state.data = state.data.filter((item)=> item.id !== action.payload)
            })

            .addCase(DeleteData.rejected, (state)=>{
                state.status = STATUS.ERROR
            })


            /* =========== UPDATE  =========== */
            .addCase(updateData.pending, (state)=>{
                state.status = STATUS.LOADING
            })

            .addCase( updateData.fulfilled, (state, action)=>{
                const update = action.payload
                const index = state.data.findIndex((item)=> item.id === update.id)
                if(index !== -1){
                    state.data[index] = update;
                }
            })
            .addCase(updateData.rejected, (state)=>{
                state.status = STATUS.ERROR
            })
    }

})

export default apiSlice.reducer


/* =========== GET =========== */
export const getData = createAsyncThunk('get-data', async () => {
    const res = await fetch('https://65004eb118c34dee0cd4b001.mockapi.io/users')
    const response = res.json()
    return response
})

/* =========== POST  =========== */
export const postData = createAsyncThunk('post-data', async (postValue) => {
    const res = await fetch('https://65004eb118c34dee0cd4b001.mockapi.io/users',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(postValue)
    })
    const response = res.json()
    return response
})

/* =========== DELETE  =========== */
export const  DeleteData = createAsyncThunk( 'delete', async (id)=>{
    const res = await fetch(`https://65004eb118c34dee0cd4b001.mockapi.io/users/${id}`,{
        method:"DELETE"
    })
    const response = res.json()
    return id
})

/* =========== UPDATE  =========== */
export const updateData = createAsyncThunk( 'put', async (data)=>{
    const res = await fetch(`https://65004eb118c34dee0cd4b001.mockapi.io/users/${data.id}`, {
        method:'PUT',
        headers:{
            'Content-type': 'application/json'
        },
        body:JSON.stringify({
            firstName:data.firstName,
            lastName:data.lastName
        })
    })
    const response = res.json()
    return response
})