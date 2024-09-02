import React, { useState } from 'react'
import Select from 'react-select';
import { singleselect } from '../../forms/formelements/formselect/formselectdata';
import {  useForm, useController } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { postClassList } from '../../../redux/reducers/classReducer';
import { useNavigate } from 'react-router-dom';
import { fetchUserRoleList, postUserRoleList } from '../../../redux/reducers/userRoleReducer';

const schema = yup.object({
    roleName: yup.string().nullable().required("Please select Role Name"),
    // classTeacher: yup.string().nullable().required("Please select Class Teacher"),
  });

const CreateRole = (props) => {
     const [data, setData] = useState();
     const dispatch = useDispatch()
     const navigate = useNavigate()
 
 
     const { register, handleSubmit, formState, control,setValue,reset } = useForm({
         resolver: yupResolver(schema)
     });
     
     const { field: { value: roleNameValue, onChange: roleNameOnChange, ...restroleNameField } } = useController({ name: 'roleName', control });
     // const { field: { value: classTeacherValue, onChange: classTeacherOnChange, ...restclassTeacherField } } = useController({ name: 'classTeacher', control });
    
     const { errors } = formState;


     const onSubmit = (formData) => {
        console.log(formData)
         setData({ ...formData });
        dispatch(postUserRoleList(formData))
        setTimeout(() => {
            dispatch(fetchUserRoleList())
        }, 500);
        
        // Reset the form fields after submission
        reset({
            roleName: '',
            description: '',
        });
       // navigate(`${import.meta.env.BASE_URL}pages/schools/allSchools`)
    }


  return (
    <div className='p-5 !pt-0 rounded-sm dark:border-white/10 border-gray-200'>
    <h3>Create Role</h3>
    {/* {props.dataFromChild === true ? <h3>Update  Role</h3> : <h3>Create Role</h3>} */}

    <hr />
    <div className='form-handling-sec pt-4'>
    <form onSubmit={handleSubmit(onSubmit)}>
        
        <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12 pt-4">
            <label htmlFor="input-text" className="form-label">Role Name<span className='redText'>*</span></label>
            <input  {...register('roleName')} type="text" className="form-control" id="input-text" placeholder="Enter Role Name" />
            {errors.roleName && <p className='errorTxt'>{errors.roleName.message}</p>}

        </div>
        

        <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12 pt-4 pb-2">
            <label htmlFor="input-text" className="form-label">Description</label>
            <textarea  {...register('description')}  name='description' className="form-control" id="text-area" placeholder='Enter Description' rows="4" spellCheck="false"></textarea>
        </div>
        <hr />
        <div className='createSchool-btn pt-4'>
            <div className='flex justify-end'>
                <button type="button" onClick={()=> props.setDataFromChild(false)} className="ti-btn ti-btn-ghost-orange !rounded-full ti-btn-wave">Cancel</button>
                <button type="submit" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave">
                {/* {props.dataFromChild === true ? 'Update' : 'Create'} */} 
                Create
                </button>
            </div>
        </div>
        </form>
    </div>
</div>
  )
}

export default CreateRole
