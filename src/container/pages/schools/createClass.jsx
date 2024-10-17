import React, { useState } from 'react'
import Select from 'react-select';
import { className } from '../../forms/formelements/formselect/formselectdata';
import {  useForm, useController } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { fetchClassList, postClassList } from '../../../redux/reducers/classReducer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSchoolId } from '../../../components/common/context/idContext';
import { toast } from 'react-toastify';



const schema = yup.object({
    className: yup.string().nullable().required("Please select Class Name"),
    // classTeacher: yup.string().nullable().required("Please select Class Teacher"),
  });



const CreateClass = ({classSecData}) => {

    const [data, setData] = useState();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const schoolId = localStorage.getItem('schoolId')
    const {id: schoolId} = useSchoolId();



    const { register, handleSubmit, formState, control,setValue, reset } = useForm({
        resolver: yupResolver(schema)
    });
    
    const { field: { value: classNameValue, onChange: classNameOnChange, ...restclassNameField } } = useController({ name: 'className', control });
    // const { field: { value: classTeacherValue, onChange: classTeacherOnChange, ...restclassTeacherField } } = useController({ name: 'classTeacher', control });
   
    const { errors } = formState;

    const classPostRes = useSelector((state) => state.classData.postRes)
    console.log(data,'classPostRes')
    // const schoolIdParams = localStorage.getItem('schoolId')
    // console.log(schoolIdParams, 'schoolIdParams')
    
    const onSubmit = async (formData) => {
        // setData({ ...formData });
        //dispatch(postClassList(formData))
        await axios.post('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Class/create', {
            ...formData,
            schoolId:schoolId,
            description: "A"
        })
        .then(async (res) => {
            toast.success('Classes Added Successfully')
            await classSecData();
        })
        .catch(err => toast.error(err.message))
       // navigate(`${import.meta.env.BASE_URL}pages/schools/allSchools`)
    //    reset({
    //     className: '',
    //     description: '',
    // });
    }



    // console.log(data, "Create Class")

  return (
    <div className='p-5 !pt-0 rounded-sm dark:border-white/10 border-gray-200'>
        <h3>Create Class</h3>
    {/* {props.updateClass === true ? <h3>Update Class</h3> : <h3>Create Class</h3>} */}
    <hr />
    <div className='form-handling-sec pt-4'>
    <form onSubmit={handleSubmit(onSubmit)}>

        {/* <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
            <label className="ti-form-select rounded-sm !p-0 ">Default Single Choices Select</label>
            <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
        </div> */}
        <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12 pt-4">
            <label htmlFor="input-text" className="form-label">Class Name<span className='redText'>*</span></label>
            {/* <input type="text" className="form-control" id="input-text" placeholder="Text" /> */}
            <Select className="!p-0 place-holder" classNamePrefix='react-select' options={className}
            value={classNameValue ? className.find(x => x.value === classNameValue) : classNameValue}
            onChange={option => classNameOnChange(option ? option.value : option)}
            {...restclassNameField}
            />
              {errors.className && <p className='errorTxt'>{errors.className.message}</p>}
        </div>
        {/* <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12 pt-4">
            <label className="ti-form-select rounded-sm !p-0 ">Class  Teacher*</label>
            <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect}
             value={classTeacherValue ? singleselect.find(x => x.value === classTeacherValue) : classTeacherValue}
             onChange={option => classTeacherOnChange(option ? option.value : option)}
             {...restclassTeacherField}
             
            />
              {errors.classTeacher && <p className='errorTxt'>{errors.classTeacher.message}</p>}

        </div> */}

        {/* <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12 pt-4 pb-2">
            <label htmlFor="input-text" className="form-label">Description</label>
            <textarea  {...register('description')} className="form-control" id="text-area" placeholder='Enter Description' rows="4" spellCheck="false" name='description' ></textarea>
        </div> */}
        <hr />
        <div className='createSchool-btn pt-4'>
            <div className='flex justify-end'>
                {/* <button type="button" className="ti-btn ti-btn-ghost-orange !rounded-full ti-btn-wave">Cancel</button> */}
                <button type="button" className="ti-btn ti-btn-ghost-orange !rounded-full ti-btn-wave" >Cancel</button>
                <button type="submit" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave">
                {/* {props.updateClass === true ? 'Update' : 'Create'} */}
                Create
                </button>
            </div>
        </div>
        </form>
    </div>
</div>
  )
}

export default CreateClass
