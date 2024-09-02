import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = 'https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/UserRoles'

export const fetchUserRoleList   = createAsyncThunk("fetchUserRoleList", async()=>{
    const response = await fetch(`${BASE_URL}`)
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

export const deleteUserRoleList = createAsyncThunk('deleteUserRoleList', async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method:'DELETE',
        headers:{
            "Content-Type":"application/json"
        },
    });
    return response.json()
  }
)

export const fetchUserRoleById = createAsyncThunk('fetchUserRoleById', async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method:'GET',
        headers:{
            "Content-Type":"application/json"
        },
    });
    return response.json()
  }
)

export const updateUserRoleRecord = createAsyncThunk('updateUserRoleRecord', async ({ id, data }) => {
    const response = await fetch(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/UserRoles/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data) // Send the updated data
        
    });


    const result = await response.json(); // Get the response as JSON
    return result; // Return the updated school data
});


const initialState = {
    list: [],
    singleUserRole: null, // Add this line to store the single subject

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


        
        //Fetch by ID
    builder.addCase(fetchUserRoleById.pending,(state,action)=>{
        state.isLoading = true;
    })

    builder.addCase(fetchUserRoleById.fulfilled,(state,action)=>{
         console.log(action, "Sliccc")
        state.isLoading = false;
        state.singleUserRole = action.payload;
    })
    
    builder.addCase(fetchUserRoleById.rejected,(state,action)=>{
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


     //DELETE API School Data
     builder.addCase(deleteUserRoleList.pending,(state,action)=>{
        state.isLoading = true;
    })

    builder.addCase(deleteUserRoleList.fulfilled,(state,action)=>{
        state.isLoading = false;
        state.deleteRes = action.payload;
    })
    
    builder.addCase(deleteUserRoleList.rejected,(state,action)=>{
        state.isError = true;
    })
    

    
    
    //UPDATE API School DATA
    builder.addCase(updateUserRoleRecord.pending, (state, action)=>{
        state.isLoading = true
        state.isError = false;
    })
    builder.addCase(updateUserRoleRecord.fulfilled, (state, action)=>{
        state.isLoading= false
        state.updateRes = action.payload;
        console.log('Uppppp', action)
        state.list = state.list.map((ele)=>{
            ele.id === action.payload.id ? action.payload : ele
        })
        //state.updateRes = action.payload;
    })
    builder.addCase(updateUserRoleRecord.rejected, (state, action)=>{
        state.isError = true 
        state.isLoading = false;
        state.errorMessage = action.error.message || 'An error occurred';

    })
    
    }
    })
    
    
    export default userRoleSlice.reducer