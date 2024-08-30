import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = 'https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Class'
export const fetchClassList   = createAsyncThunk("fetchClassList", async()=>{
    const response = await fetch(`${BASE_URL}`)
    return response.json();
})


export const postClassList = createAsyncThunk('postClassList', async (data) => {
    const response = await fetch(`${BASE_URL}`, {
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    });
    return response.json()


}
)


const initialState = {
    list: [],
    isLoading:false,
    isError:false,
    postRes:null,
     deleteRes:null,
    updateRes:null
}

const  classSlice = createSlice ({
    name:'classData',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{

        //GET API
        builder.addCase(fetchClassList.pending,(state,action)=>{
            state.isLoading = true;
        })
    
        builder.addCase(fetchClassList.fulfilled,(state,action)=>{
             console.log(state, "Sliccc")
            state.isLoading = false;
            state.list = action.payload;
        })
        
        builder.addCase(fetchClassList.rejected,(state,action)=>{
            state.isError = true;
        })
    
      //POST API Sec
      builder.addCase(postClassList.pending,(state,action)=>{
        state.isLoading = true;
    })

    builder.addCase(postClassList.fulfilled,(state,action)=>{
         console.log(state, "Sliccc")
        state.isLoading = false;
        state.list = action.payload;
    })
    
    builder.addCase(postClassList.rejected,(state,action)=>{
        state.isError = true;
    })

    
    
    }
    })
    
    
    export default classSlice.reducer