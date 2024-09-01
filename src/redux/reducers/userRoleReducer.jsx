import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = 'https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/UserRoles'

export const fetchUserRoleList   = createAsyncThunk("fetchUserRoleList", async()=>{
    const response = await fetch(`${BASE_URL}`, {
        method:'GET',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    console.log('getUserRole RE',response )
    return response.json();
})


export const postUserRoleList = createAsyncThunk('postUserRoleList', async (data) => {
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

const  userRoleSlice = createSlice ({
    name:'userRoleData',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{

        //GET API
        builder.addCase(fetchUserRoleList.pending,(state,action)=>{
            state.isLoading = true;
        })
    
        builder.addCase(fetchUserRoleList.fulfilled,(state,action)=>{
             console.log(state, "Sliccc")
            state.isLoading = false;
            state.list = action.payload;
        })
        
        builder.addCase(fetchUserRoleList.rejected,(state,action)=>{
            state.isError = true;
        })
    
      //POST API Sec
      builder.addCase(postUserRoleList.pending,(state,action)=>{
        state.isLoading = true;
    })

    builder.addCase(postUserRoleList.fulfilled,(state,action)=>{
         console.log(state, "Sliccc")
        state.isLoading = false;
        state.list = action.payload;
    })
    
    builder.addCase(postUserRoleList.rejected,(state,action)=>{
        state.isError = true;
    })

    
    
    }
    })
    
    
    export default userRoleSlice.reducer