import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import { singleselect, subjectCode, subjectType } from '../../forms/formelements/formselect/formselectdata';
import {  useForm, useController } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchSubjectById, fetchSubjectList, updateSubjectRecord } from '../../../redux/reducers/subjectReducer';


const schema = yup.object({
    subjectName: yup.string().nullable().required("Please Enter Subject Name"),
    // subjectCode: yup.string().nullable().required("Please Enter Subject Code"),
    subjectType: yup.string().nullable().required("Please select Subject Type"),
  });
const SubjectUpdateForm = (props) => {
    console.log(props, 'SubjectUpdateForm')
    const subjectIndId = props.dataFromChildSubject.id

    const [data, setData] = useState();
    const { register, handleSubmit, formState, control,setValue, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const dispatch = useDispatch();
    const subjectUpdIndData = useSelector((state) => state.subjectData) // Fetch by id
    const subjectUpdateRes = useSelector((state) => state.subjectData.updateRes) //Post


    const { field: { value: subjectNameValue, onChange: subjectNameOnChange, ...restsubjectNameField } } = useController({ name: 'subjectName', control });
    // const { field: { value: subjectCodeValue, onChange: subjectCodeOnChange, ...restsubjectCodeField } } = useController({ name: 'subjectCode', control });
    const { field: { value: subjectTypeValue, onChange: subjectTypeOnChange, ...restsubjectTypeField } } = useController({ name: 'subjectType', control });

    const { errors } = formState;

    useEffect(() => {
        if (subjectIndId) {
            // Fetch individual record by ID
            dispatch(fetchSubjectById(subjectIndId)).then((response) => {
                if (response.payload) {
                    const schoolData = response.payload;
                    console.log(schoolData,"EEEEEEEEE")

                    // Populate form with fetched data
                    setValue('id',schoolData.id)
                    setValue('subjectName', schoolData.subjectName);
                    setValue('subjectCode', schoolData.subjectCode);
                    setValue('subjectType', schoolData.subjectType);
                    // Add more fields as needed
                }
            });
        }
    }, [subjectIndId,  dispatch, setValue]);



    const onSubmit = (formData) => {
        setData({ ...formData });
         dispatch(updateSubjectRecord({ id: subjectIndId, data: formData }))
        setTimeout(() => {
            dispatch(fetchSubjectList())
        }, 500);
        // Reset the form fields after submission
        reset({
            subjectName: '',
            subjectCode: '',
            subjectType: '',
        });
    }
  return (
    <div className='p-5 !pt-0 rounded-sm dark:border-white/10 border-gray-200'>
    <h3>Update Subject</h3>
    <hr />
    <div className='form-handling-sec pt-4'>
        
    <form onSubmit={handleSubmit(onSubmit)}>
        
        <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12 pt-4">
            <label htmlFor="input-text" className="form-label">Subject<span className='redText'>*</span></label>
            <input type="text" {...register('subjectName')}  className="form-control" id="input-text" placeholder="Enter School Name" />
            {errors.subjectName && <p className='errorTxt'>{errors.subjectName.message}</p>}
        </div>
        
        {/* <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12 pt-4">
            <label htmlFor="input-text" className="form-label">Subject Code<span className='redText'>*</span></label>
            <Select className="!p-0 place-holder" classNamePrefix='react-select' options={subjectCode}
            value={subjectCodeValue ? subjectCode.find(x => x.value === subjectCodeValue) : subjectCodeValue}
            onChange={option => subjectCodeOnChange(option ? option.value : option)}
            {...restsubjectCodeField}
            />
              {errors.subjectCode && <p className='errorTxt'>{errors.subjectCode.message}</p>}

        </div> */}
        <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12 pt-4">
            <label htmlFor="input-text" className="form-label">Subject Type<span className='redText'>*</span></label>
            {/* <input type="text" className="form-control" id="input-text" placeholder="Enter Subject Code" /> */}
            <Select className="!p-0 place-holder" classNamePrefix='react-select' options={subjectType}
            value={subjectTypeValue ? subjectType.find(x => x.value === subjectTypeValue) : subjectTypeValue}
            onChange={option => subjectTypeOnChange(option ? option.value : option)}
            {...restsubjectTypeField}
            />
              {errors.subjectType && <p className='errorTxt'>{errors.subjectType.message}</p>}

        </div>

            {/* <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12 pt-4 pb-2">
                <label htmlFor="input-text" className="form-label">Description</label>
                <textarea className="form-control" id="text-area" placeholder='Enter Description' rows="4" spellCheck="false"></textarea>
            </div> */}
        <div className='createSchool-btn pt-4'>
            <div className='flex justify-end'>
                <button type="button" onClick={()=>props.setDataFromChildSubject(false)} className="ti-btn ti-btn-ghost-orange !rounded-full ti-btn-wave">Cancel</button>
                <button type="submit" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave">
                {/* {props.dataFromChildSubject === true ? 'Update' : 'Create'} */}
                Update
                </button>
            </div>
        </div>
        </form>
        

      
    </div>
</div>
  )
}

export default SubjectUpdateForm
