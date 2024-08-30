
import {configureStore} from  '@reduxjs/toolkit';
import schoolSliceReducer from '../reducers/schoolReducer'
import classSliceReducer from '../reducers/classReducer'

const storeSchool = configureStore({
    reducer: {
        schoolData:schoolSliceReducer,
        classData:classSliceReducer,
    }
})

export default storeSchool
