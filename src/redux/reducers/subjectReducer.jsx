import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = 'https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Subjects'

export const fetchSubjectList   = createAsyncThunk("fetchSubjectList", async()=>{
    const response = await fetch(`${BASE_URL}`)
    return response.json();
})


export const postSubjectList = createAsyncThunk('postSubjectList', async (data) => {
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

export const deleteSubjectList = createAsyncThunk('deleteSubjectList', async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method:'DELETE',
        headers:{
            "Content-Type":"application/json"
        },
    });
    return response.json()
  }
)



export const fetchSubjectById = createAsyncThunk('fetchSubjectById', async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method:'GET',
        headers:{
            "Content-Type":"application/json"
        },
    });
    return response.json()
  }
)

export const updateSubjectRecord = createAsyncThunk('updateSubjectRecord', async ({ id, data }) => {
    const response = await fetch(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Subjects/${id}`, {
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
    singleSubject: null, // Add this line to store the single subject

    isLoading:false,
    isError:false,
    postRes:null,
     deleteRes:null,
    updateRes:null
}

const  subjectSlice = createSlice ({
    name:'subjectData',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{

        //GET API
        builder.addCase(fetchSubjectList.pending,(state,action)=>{
            state.isLoading = true;
        })
    
        builder.addCase(fetchSubjectList.fulfilled,(state,action)=>{
             console.log(state, "Sliccc")
            state.isLoading = false;
            state.list = action.payload;
        })
        
        builder.addCase(fetchSubjectList.rejected,(state,action)=>{
            state.isError = true;
        })


        //Fetch by ID
    builder.addCase(fetchSubjectById.pending,(state,action)=>{
        state.isLoading = true;
    })

    builder.addCase(fetchSubjectById.fulfilled,(state,action)=>{
         console.log(action, "Sliccc")
        state.isLoading = false;
        state.singleSubject = action.payload;
    })
    
    builder.addCase(fetchSubjectById.rejected,(state,action)=>{
        state.isError = true;
    })
    
      //POST API Sec
      builder.addCase(postSubjectList.pending,(state,action)=>{
        state.isLoading = true;
    })

    builder.addCase(postSubjectList.fulfilled,(state,action)=>{
         console.log(state, "Sliccc")
        state.isLoading = false;
        state.list = action.payload;
    })
    
    builder.addCase(postSubjectList.rejected,(state,action)=>{
        state.isError = true;
    })

    //DELETE API School Data
    builder.addCase(deleteSubjectList.pending,(state,action)=>{
        state.isLoading = true;
    })

    builder.addCase(deleteSubjectList.fulfilled,(state,action)=>{
        state.isLoading = false;
        state.deleteRes = action.payload;
    })
    
    builder.addCase(deleteSubjectList.rejected,(state,action)=>{
        state.isError = true;
    })


    
    //UPDATE API School DATA
    builder.addCase(updateSubjectRecord.pending, (state, action)=>{
        state.isLoading = true
        state.isError = false;
    })
    builder.addCase(updateSubjectRecord.fulfilled, (state, action)=>{
        state.isLoading= false
        state.updateRes = action.payload;
        console.log('Uppppp', action)
        state.list = state.list.map((ele)=>{
            ele.id === action.payload.id ? action.payload : ele
        })
        //state.updateRes = action.payload;
    })
    builder.addCase(updateSubjectRecord.rejected, (state, action)=>{
        state.isError = true 
        state.isLoading = false;
        state.errorMessage = action.error.message || 'An error occurred';

    })



    
    }
    })
    
    
    export default subjectSlice.reducer