import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import { singleselect } from '../../forms/formelements/formselect/formselectdata';
import {  useForm, useController } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { postClassList } from '../../../redux/reducers/classReducer';
import { useNavigate } from 'react-router-dom';
import { fetchUserRoleById, fetchUserRoleList, postUserRoleList, updateUserRoleRecord } from '../../../redux/reducers/userRoleReducer';
import axios from 'axios';

const schema = yup.object({
    roleName: yup.string().nullable().required("Please select Role Name"),
    // classTeacher: yup.string().nullable().required("Please select Class Teacher"),
  });

const UpdateRole = (props) => {
    console.log(props,"RoleCreated")

    const userRoleDataIndId = props.dataFromChild.id

    
    const [data, setData] = useState();
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userRoleUpdIndData = useSelector((state) => state.userRoleData) // Fetch by id
     const userRoleUpdateRes = useSelector((state) => state.userRoleData.updateRes) //Post

    const { register, handleSubmit, formState, control,setValue,reset } = useForm({
        resolver: yupResolver(schema)
    });
    
    const { field: { value: roleNameValue, onChange: roleNameOnChange, ...restroleNameField } } = useController({ name: 'roleName', control });
    // const { field: { value: classTeacherValue, onChange: classTeacherOnChange, ...restclassTeacherField } } = useController({ name: 'classTeacher', control });
   
    const { errors } = formState;

    
    useEffect(() => {
        if (userRoleDataIndId) {
            // Fetch individual record by ID
            dispatch(fetchUserRoleById(userRoleDataIndId)).then((response) => {
                if (response.payload) {
                    const schoolData = response.payload;
                    console.log(schoolData,"EEEEEEEEE")

                    // Populate form with fetched data
                    setValue('id',schoolData.id)
                    setValue('roleName', schoolData.roleName);
                    setValue('description', schoolData.description);
                    // Add more fields as needed
                }
            });
        }
    }, [userRoleDataIndId,  dispatch, setValue]);



    const onSubmit = (formData) => {
       console.log(formData)
        axios.put(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/UserRoles/${userRoleDataIndId}`, formData)
            .then(res => {
                console.log(res, "AXXXXX")
                dispatch(fetchUserRoleList())
            })
            .catch(err => console.log(err))
       // Reset the form fields after submission
       reset({
           roleName: '',
           description: '',
       });
   }


  return (
    <div className='p-5 border rounded-sm dark:border-white/10 border-gray-200'>
    <h3>Update Role</h3>
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
                Update
                </button>
            </div>
        </div>
        </form>
    </div>
</div>
  )
}

export default UpdateRole
