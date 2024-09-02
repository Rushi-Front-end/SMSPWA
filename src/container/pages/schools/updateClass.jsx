import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import { classDropDown } from '../../forms/formelements/formselect/formselectdata';
import {  useForm, useController } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { fetchClassList, fetchClassListById, postClassList } from '../../../redux/reducers/classReducer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const schema = yup.object({
    className: yup.string().nullable().required("Please select Class Name"),
    description: yup.string().nullable(),
  });



const UpdateClass = (props) => {
    console.log('updateClass',props)
   const updateClassBoolean = props.updateClass.value
    const updateClassID = props.updateClass.id

    const [data, setData] = useState();
    const[classEditData, setClassEditData]=useState();
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const { register, handleSubmit, formState, control,setValue } = useForm({
        resolver: yupResolver(schema)
    });
    
    const { field: { value: classNameValue, onChange: classNameOnChange, ...restclassNameField } } = useController({ name: 'className', control });
    // const { field: { value: classTeacherValue, onChange: classTeacherOnChange, ...restclassTeacherField } } = useController({ name: 'classTeacher', control });
   
    const { errors } = formState;

    // const classPostRes = useSelector((state) => state.classData.postRes)
    // const classIndGetData = useSelector((state) => state.classData.singleClass)
    // console.log(classIndGetData,'classPostRes')

useEffect(() => {
    if (updateClassID) {
      axios
        .get(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Class/${updateClassID}`)
        .then((res) => {
          if (res.data) {
            const classData = res.data;
            console.log(classData,'classData')
            setValue('id', classData.id);
            setValue('className', classData.className);
            setValue('description', classData.description);
          }
        })
        .catch((err) => {
          console.error('Error fetching class data:', err);
        });
    }
  }, [updateClassID, setValue]);
    const onSubmit = (formData) => {
        // setData({ ...formData });
        // //dispatch(postClassList(formData))
        // axios.post('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Class/create', formData)
        // .then(res => {
        //     console.log(res)
        //   dispatch(fetchClassList())
        // })
        // .catch(err => console.log(err))
       // navigate(`${import.meta.env.BASE_URL}pages/schools/allSchools`)
    }



    // console.log(data, "Create Class")

  return (
    <div className='p-5 !pt-0 rounded-sm dark:border-white/10 border-gray-200'>
         <h3>Update Class</h3>
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
            <Select className="!p-0 place-holder" classNamePrefix='react-select' options={classDropDown}
            value={classNameValue ? classDropDown.find(x => x.value === classNameValue) : classNameValue}
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

        <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12 pt-4 pb-2">
            <label htmlFor="input-text" className="form-label">Description</label>
            <textarea  {...register('description')} className="form-control" id="text-area" placeholder='Enter Description' rows="4" spellCheck="false" name='description' ></textarea>
        </div>
        <hr />
        <div className='createSchool-btn pt-4'>
            <div className='flex justify-end'>
                {/* <button type="button" className="ti-btn ti-btn-ghost-orange !rounded-full ti-btn-wave">Cancel</button> */}
                <button type="button" className="ti-btn ti-btn-ghost-orange !rounded-full ti-btn-wave" onClick={()=> props.updateClassChild(false)}>Cancel</button>
                <button type="submit" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave">
                    Update
                </button>
            </div>
        </div>
        </form>
    </div>
</div>
  )
}

export default UpdateClass
