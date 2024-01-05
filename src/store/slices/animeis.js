import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosConfig/axios";


export  const AnimiesAction = createAsyncThunk("getAnimies", async () => {
    try {
        const res = await axiosInstance.get("/watch/episodes/popular");
        return res.data;
    } catch (error) {
        throw error;
    }
});



const animeSlice = createSlice({
    name: "animes",
    initialState: {
        animies: [],
        loading: false,
        error: false
    },
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(AnimiesAction.fulfilled, (state,action)=>{
            state.animies=action.payload
        }),
        builder.addCase(AnimiesAction.pending, (state,action)=>{
            state.loading=true
        }),
        builder.addCase(AnimiesAction.rejected, (state,action)=>{
            state.loading=false
            state.error=true
        })
    }
})

export default animeSlice.reducer