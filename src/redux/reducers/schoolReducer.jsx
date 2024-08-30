import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = 'https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/School'

export const fetchSchoolList   = createAsyncThunk("fetchSchoolList", async()=>{
    const response = await fetch(`${BASE_URL}`)
    return response.json();
})

export const postSchoolList = createAsyncThunk('postSchoolList', async (data) => {
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
export const deleteSchoolList = createAsyncThunk('deleteSchoolList', async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method:'DELETE',
        headers:{
            "Content-Type":"application/json"
        },
    });
    return response.json()
  }
)
export const fetchSchoolById = createAsyncThunk('fetchSchoolById', async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method:'GET',
        headers:{
            "Content-Type":"application/json"
        },
    });
    return response.json()
  }
)

export const updateSchoolRecord = createAsyncThunk('updateSchoolRecord', async (data) => {
    const response = await fetch(`${BASE_URL}/${data.id}`, {
        method:'PUT',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    });
    return response.json()
    // try {
    //     const result = await response.json();
    //     return result;
    //   } catch (error) {
    //     console.log(error)
    //   }
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


 const  schoolSlice = createSlice ({
name:'schoolData',
initialState,
reducers:{},
extraReducers:(builder)=>{
    builder.addCase(fetchSchoolList.pending,(state,action)=>{
        state.isLoading = true;
    })

    builder.addCase(fetchSchoolList.fulfilled,(state,action)=>{
         console.log(state, "Sliccc")
        state.isLoading = false;
        state.list = action.payload;
    })
    
    builder.addCase(fetchSchoolList.rejected,(state,action)=>{
        state.isError = true;
    })

    //Fetch by ID
    builder.addCase(fetchSchoolById.pending,(state,action)=>{
        state.isLoading = true;
    })

    builder.addCase(fetchSchoolById.fulfilled,(state,action)=>{
         console.log(state, "Sliccc")
        state.isLoading = false;
        state.list = action.payload;
    })
    
    builder.addCase(fetchSchoolById.rejected,(state,action)=>{
        state.isError = true;
    })

    //POST API School Data
    builder.addCase(postSchoolList.pending,(state,action)=>{
        state.isLoading = true;
    })

    builder.addCase(postSchoolList.fulfilled,(state,action)=>{
        state.isLoading = false;
        state.postRes = action.payload;
    })
    
    builder.addCase(postSchoolList.rejected,(state,action)=>{
        state.isError = action.payload.message;
    })

    //DELETE API School Data
    builder.addCase(deleteSchoolList.pending,(state,action)=>{
        state.isLoading = true;
    })

    builder.addCase(deleteSchoolList.fulfilled,(state,action)=>{
        state.isLoading = false;
        state.deleteRes = action.payload;
    })
    
    builder.addCase(deleteSchoolList.rejected,(state,action)=>{
        state.isError = true;
    })
    

    //UPDATE API School DATA
    builder.addCase(updateSchoolRecord.pending, (state, action)=>{
        state.isLoading = true
        state.isError = false;
    })
    builder.addCase(updateSchoolRecord.fulfilled, (state, action)=>{
        state.isLoading= false
        state.updateRes = action.payload;
        console.log('Uppppp', action)
        state.list = state.list.map((ele)=>{
            ele.id === action.payload.id ? action.payload : ele
        })
        //state.updateRes = action.payload;
    })
    builder.addCase(updateSchoolRecord.rejected, (state, action)=>{
        state.isError = true 
        state.isLoading = false;
        state.errorMessage = action.error.message || 'An error occurred';

    })


}
})


export default schoolSlice.reducer