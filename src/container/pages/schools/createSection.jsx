import React, { useState } from 'react'
import Select from 'react-select';
import { singleselect } from '../../forms/formelements/formselect/formselectdata';
import {  useForm, useController } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const schema = yup.object({
    sectionClassTeacher: yup.string().nullable().required("Please select Section Name"),
    // classTeacher: yup.string().nullable().required("Please select Class Teacher"),
  });


const CreateSection = (props) => {

    const [data, setData] = useState();

    const { register, handleSubmit, formState, control } = useForm({
        resolver: yupResolver(schema)
    });
    
    const { field: { value: sectionClassTeacherValue, onChange: sectionNameOnChange, ...restSectionNameField } } = useController({ name: 'sectionClassTeacher', control });
    // const { field: { value: classTeacherValue, onChange: classTeacherOnChange, ...restclassTeacherField } } = useController({ name: 'classTeacher', control });
   
    const { errors } = formState;
    const onSubmit = (formData) => {
        setData({ ...formData });
       // navigate(`${import.meta.env.BASE_URL}pages/schools/allSchools`)
    }

  return (
    <div className='p-5 !pt-0 rounded-sm dark:border-white/10 border-gray-200'>
    <h3>Create Section</h3>
    <hr />
    <div className='form-handling-sec pt-4'>
    <form onSubmit={handleSubmit(onSubmit)}>
        
        <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12 pt-4">
            <label htmlFor="input-text" className="form-label">Section Name<span className='redText'>*</span></label>
            {/* <input type="text" className="form-control" id="input-text" placeholder="Enter Section Name" /> */}
            <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} isClearable
                                    value={sectionClassTeacherValue ? singleselect.find(x => x.value === sectionClassTeacherValue) : sectionClassTeacherValue}
                                    onChange={option => sectionNameOnChange(option ? option.value : option)}
                                    {...restSectionNameField}
                                     />
                                {errors.sectionClassTeacher && <p className='errorTxt'>{errors.sectionClassTeacher.message}</p>}
        </div>
        {/* <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12 pt-4">
            <label className="ti-form-select rounded-sm !p-0 ">Section Class Teacher*</label>
            <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
        </div> */}

        <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12 pt-4 pb-2">
            <label htmlFor="input-text" className="form-label">Description</label>
            <textarea className="form-control" {...register('description')} name='description' id="text-area" placeholder='Enter Description' rows="4" spellCheck="false"></textarea>
        </div>
        <hr />
        <div className='createSchool-btn pt-4'>
            <div className='flex justify-end'>
                <button type="button" className="ti-btn ti-btn-ghost-orange !rounded-full ti-btn-wave" onClick={()=> props.setAddSec(false)}>Cancel</button>
                <button type="submit" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave">Create</button>
            </div>
        </div>
        </form>
    </div>
</div>
  )
}

export default CreateSection
