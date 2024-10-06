import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import { className, description } from '../../forms/formelements/formselect/formselectdata';
import {  useForm, useController } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { fetchClassList } from '../../../redux/reducers/classReducer';
import { useSchoolId } from '../../../components/common/context/idContext';

const schema = yup.object({
    description: yup.string().nullable().required("Please select Section Name"),
    classID: yup.string().nullable().required("Please select Class Name"),

    // classTeacher: yup.string().nullable().required("Please select Class Teacher"),
  });


const CreateSection = (props) => {

    const [data, setData] = useState();
    const [schClassList, setSchClassList] = useState([]);
    const { register, handleSubmit, formState, control, reset } = useForm({
        resolver: yupResolver(schema)
    });
    
    const { field: { value: classIDValue, onChange: classIDOnChange, ...restclassIDField } } = useController({ name: 'classID', control });
    const { field: { value: descriptionValue, onChange: sectionNameOnChange, ...restSectionNameField } } = useController({ name: 'description', control });
    // const { field: { value: classTeacherValue, onChange: classTeacherOnChange, ...restclassTeacherField } } = useController({ name: 'classTeacher', control });
   
    const { errors } = formState;

    const dispatch = useDispatch()
    const {id: schoolId} = useSchoolId();

    // const schoolIdParams = localStorage.getItem('schoolId')
    // console.log(schoolIdParams, 'schoolIdParams')


    const onSubmit = (formData) => {
        console.log(formData, "FormData")
        setData({ ...formData });
        axios.post('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Section', formData)
        .then((res)=>{
            if(res.status===201){
                axios.get(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Class/GetClassBySchoolId/${schoolId}`)
                toast.success('Section Added Successfully')
                props.classSecData()
                setTimeout(() => {
                    
                    reset({
                        description:'',
                        classID:''
                    })
                }, 2000);
            }
        })
        .catch((error)=>{
            console.log(error)
        })
        
       // navigate(`${import.meta.env.BASE_URL}pages/schools/allSchools`)
    }

    useEffect(() => {
        // const fetchUserRoles = async () => {
        //   try {
        //     const response = await axios.get('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Class');
        //     // const roleData = response.data;
        //     // console.log('schhhhh', roleData)
        //     // const roleOptions = roleData.map(role => ({id:role.id, value: role.id, label: role.className}))
        //     const classData = response.data;
        //     const classOptions = classData.map(classItem => ({
        //         id: classItem.id,
        //         value: classItem.id,
        //         label: classItem.className
        //     }));
        //     setSchClassList(classOptions)
        //   } catch (error) {
        //     console.error('Error fetching user roles:', error);
        //   }
        // };
    
        // fetchUserRoles();

        const classOptions = props.classDataSec.map(classItem => ({
            id: classItem.classId,
            value: classItem.classId,
            label: classItem.className
        }))
        
        setSchClassList(classOptions)
    }, []);


  return (
    <div className='p-5 !pt-0 rounded-sm dark:border-white/10 border-gray-200'>
    <h3>Create Section</h3>
    <hr />
    <div className='form-handling-sec pt-4'>
    <form onSubmit={handleSubmit(onSubmit)}>

    <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12 pt-4">
            <label htmlFor="input-text" className="form-label">Class Name<span className='redText'>*</span></label>
            {/* <input type="text" className="form-control" id="input-text" placeholder="Text" /> */}
            <Select className="!p-0 place-holder" classNamePrefix='react-select' options={schClassList}
            value={classIDValue ? schClassList.find(x => x.id === classIDValue) : classIDValue}
            onChange={option => classIDOnChange(option ? option.id : option)}
            {...restclassIDField}
            />
              {errors.classID && <p classID='errorTxt'>{errors.classID.message}</p>}
        </div>

        
        <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12 pt-4">
            <label htmlFor="input-text" className="form-label">Section Name<span className='redText'>*</span></label>
            {/* <input type="text" className="form-control" id="input-text" placeholder="Enter Section Name" /> */}
            <Select className="!p-0 place-holder" classNamePrefix='react-select' options={description} isClearable
                                    value={descriptionValue ? description.find(x => x.value === descriptionValue) : descriptionValue}
                                    onChange={option => sectionNameOnChange(option ? option.value : option)}
                                    {...restSectionNameField}
                                     />
                                {errors.description && <p className='errorTxt'>{errors.description.message}</p>}
        </div>
        {/* <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12 pt-4">
            <label className="ti-form-select rounded-sm !p-0 ">Section Class Teacher*</label>
            <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
        </div> */}
       
        {/* <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12 pt-4 pb-2">
            <label htmlFor="input-text" className="form-label">Description</label>
            <textarea className="form-control" {...register('description')} name='description' id="text-area" placeholder='Enter Description' rows="4" spellCheck="false"></textarea>
        </div> */}
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
