
import {configureStore} from  '@reduxjs/toolkit';
import schoolSliceReducer from '../reducers/schoolReducer'
import classSliceReducer from '../reducers/classReducer'
import userRoleSliceReducer from '../reducers/userRoleReducer'
import subjectSliceReducer from '../reducers/subjectReducer'

const storeSchool = configureStore({
    reducer: {
        schoolData:schoolSliceReducer,
        classData:classSliceReducer,
        userRoleData:userRoleSliceReducer,
        subjectData:subjectSliceReducer,
    }
})

export default storeSchool
