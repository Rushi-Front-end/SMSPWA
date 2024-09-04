import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const BASE_URL = 'https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Class'
export const fetchClassList   = createAsyncThunk("fetchClassList", async()=>{
    const response = await fetch(`${BASE_URL}`)
    return response.json();
})


export const postClassList = createAsyncThunk('postClassList', async (data) => {
    const response = await fetch(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Class/create`, {
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    });
    if (!response.ok) throw new Error(`Error: ${response.status}`);

    return response.json()


}
)


export const fetchClassListById = createAsyncThunk('fetchClassListById', async (id) => {
    const response = await fetch(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Class/${id}`, {
        method:'GET',
        headers:{
            "Content-Type":"application/json"
        },
    });
    if (!response.ok) throw new Error(`Error: ${response.status}`);

    return response.json()
  }
)


export const deleteClassList = createAsyncThunk('deleteClassList', async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method:'DELETE',
        headers:{
            "Content-Type":"application/json"
        },
    });
console.log(response,"DDDDDDD")
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    return response.json()
  }
)


const initialState = {
    list: [],
    singleClass:null,
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


        //Fetch by ID
    builder.addCase(fetchClassListById.pending,(state,action)=>{
        state.isLoading = true;
    })

    builder.addCase(fetchClassListById.fulfilled,(state,action)=>{
         console.log(state, "Sliccc")
        state.isLoading = false;
        state.singleClass = action.payload;
    })
    
    builder.addCase(fetchClassListById.rejected,(state,action)=>{
        state.isError = true;
        toast.error(`Error: ${action.error.message}`); // Error notification

    })

    
      //POST API Sec
      builder.addCase(postClassList.pending,(state,action)=>{
        state.isLoading = true;
    })

    builder.addCase(postClassList.fulfilled,(state,action)=>{
         console.log(state, "Sliccc")
        state.isLoading = false;
        state.list = action.payload;
        toast.success("Class created successfully!"); // Success notification

    })
    
    builder.addCase(postClassList.rejected,(state,action)=>{
        state.isError = true;
        toast.error(`Error: ${action.error.message}`); // Error notification

    })

    
    //DELETE API School Data
    builder.addCase(deleteClassList.pending,(state,action)=>{
        state.isLoading = true;
    })

    builder.addCase(deleteClassList.fulfilled,(state,action)=>{
        state.isLoading = false;
        state.deleteRes = action.payload;
        state.list = state.list.filter(item => item.id !== action.payload);
        toast.success("Class deleted successfully!"); // Success notification
    })
    
    builder.addCase(deleteClassList.rejected,(state,action)=>{
        state.isError = true;
        toast.error(`Error: ${action.error.message}`); // Error notification
    })
    
    
    }
    })
    
    
    export default classSlice.reducer