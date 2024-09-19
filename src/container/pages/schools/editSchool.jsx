import React, { useEffect, useState } from 'react'
import { singleselect, schoolBoard, prakalpName, schoolCategory, stateSelect } from '../../forms/formelements/formselect/formselectdata'
import Select from 'react-select';
import { Link, useParams } from 'react-router-dom';
import { Controller, useForm, useController } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import {fetchSchoolById, fetchSchoolList, updateSchoolRecord } from '../../../redux/reducers/schoolReducer';
import { useNavigate } from "react-router-dom";


const schema = yup.object({
    schoolName: yup.string().required("Please enter School Name"),
    email: yup.string().required("Please enter proper Email id"),
    schoolMobileNumber: yup.string().required("Please enter Phone Number"),
     address: yup.string().required("Please enter Address"),
    pinCode: yup.string().required("Please enter valid pinCode"),
    
    schoolBoard: yup.string().nullable().required("Please select School Board"),
    schoolCategory: yup.string().nullable().required("Please select School Category"),
    prakalpName: yup.string().nullable().required("Please select Prakalp"),
    state: yup.string().nullable().required("Please select State"),
    
  });

const EditSchool = () => {
    
    const [data, setData] = useState({
        city:'',
        district:'',
        landmark:'',
        address:'',
        phone:'',
        principalName:''
        
    });
    



    const navigate = useNavigate()
    const params = useParams();

    const schoolUpdData = useSelector((state) => state.schoolData) // Fetch by id
    const schoolUpdateRes = useSelector((state) => state.schoolData.updateRes) //Post
    console.log(schoolUpdData,'schollUpdateData')
    const dispatch = useDispatch()

    console.log(params.id, "Updateeeeee")

    useEffect((id) => {
        dispatch(fetchSchoolById(params.id))
      }, [dispatch, params.id])

    const { register, handleSubmit, formState, control, setValue } = useForm({
        resolver: yupResolver(schema)
    });
    
    const { field: { value: schoolBoardValue, onChange: schoolBoardOnChange, ...restschoolBoardField } } = useController({ name: 'schoolBoard', control });
    const { field: { value: schoolCatValue, onChange: schoolCatOnChange, ...restschoolCatField } } = useController({ name: 'schoolCategory', control });
    const { field: { value: prakalpValue, onChange: prakalpOnChange, ...restPrakalpField } } = useController({ name: 'prakalpName', control });
    const { field: { value: stateValue, onChange: stateOnChange, ...reststateField } } = useController({ name: 'state', control });
    
    const { errors } = formState;


    useEffect(() => {
        if (params.id) {
            // Fetch individual record by ID
            dispatch(fetchSchoolById(params.id)).then((response) => {
                console.log(response,"EEEEEEEEE")
                if (response.payload) {
                    const schoolData = response.payload;

                    // Populate form with fetched data
                    setValue('id',schoolData.id)
                    setValue('schoolName', schoolData.schoolName);
                    setValue('email', schoolData.email);
                    setValue('schoolMobileNumber', schoolData.schoolMobileNumber);
                    setValue('pinCode', schoolData.pinCode);
                    setValue('schoolBoard', schoolData.schoolBoard);
                    setValue('schoolCategory', schoolData.schoolCategory);
                    setValue('prakalpName', schoolData.prakalpName);
                    setValue('city', schoolData.city);
                    setValue('district', schoolData.district);
                    setValue('landmark', schoolData.landmark);
                    setValue('address', schoolData.address);
                    setValue('phone', schoolData.phone);
                    setValue('principalName', schoolData.principalName);
                    setValue('state', schoolData.state);
                    // Add more fields as needed
                }
            });
        }
    }, [params.id, dispatch, setValue]);



    
    // console.log(data,"SchoolData")
    const onSubmit = (formData) => {
         console.log(formData, 'UPDATEFormDATATTA')
       // setData({ ...formData });
        //  dispatch(updateSchoolRecord(formData))
        dispatch(updateSchoolRecord({ id: params.id, data: formData }))
        setTimeout(()=>{
            dispatch(fetchSchoolList())
        },500)
         navigate(`${import.meta.env.BASE_URL}pages/schools/allSchools`)
    }

   
    

    return (
        <div>
            <h4 className='borderBottom pt-4'> Schools</h4>
            <div className="breadcrumbs-wrapper mb-4">
                <div className='school-flex-container'>
                    <div className='flex flex-row mb-4 items-center'>

                        {/* <div className='backButton self-center '>
                            <Link to={`${import.meta.env.BASE_URL}pages/schools/allSchools`}>

                                <button type="button" className="ti-btn ti-btn-info-full ti-btn-wave">Back</button>
                            </Link>
                        </div> */}

                        <div className="breadcrumbs !border-0 ">
                            <ol className="flex items-center whitespace-nowrap min-w-0">
                                <li className="text-sm">
                                    <Link className="flex items-center text-primary hover:text-primary dark:text-primary" to={`${import.meta.env.BASE_URL}dashboard`}>
                                        Dashboard
                                        <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-black-300 dark:text-white/10 rtl:rotate-180"
                                            width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </Link>
                                </li>
                                <li className="text-sm">
                                    <Link className="flex items-center text-primary hover:text-primary dark:text-primary" to={`${import.meta.env.BASE_URL}pages/schools/allSchools`} >
                                        Schools
                                        <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-black-300 dark:text-white/10 rtl:rotate-180"
                                            width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </Link>
                                </li>

                                <li className="text-sm text-gray-500 dark:text-[#8c9097] dark:text-white/50 hover:text-primary truncate" aria-current="page">
                                    Update School
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            {/* Student form create Start */}
            <div className='student-form-create'>
                <div className='box p-4 ' >
                    {/* {updateSchool ?  <h4 className='pt-2 pb-2'>Update School Form</h4> : 
                    <h4 className='pt-2 pb-2'>School Form</h4>
} */}
                    <h4 className='pt-2 pb-2'>Update School Form</h4> 
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='academic-details mb-4'>
                        {/* <h6 className=' pb-2'>Academic Details</h6> */}
                        <div className='grid grid-cols-12 sm:gap-6'>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">School Name 1<span className='redText'>*</span>:</label>
                                <input type="text" {...register('schoolName')}  className="form-control" id="input-text" placeholder="Enter School Name"  />
                                {errors.schoolName && <p className='errorTxt'>{errors.schoolName.message}</p>}
                            </div>
                           
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">School Board<span className='redText'>*</span>:</label>
                                <Select className="!p-0 place-holder" 
                                    isClearable
                                    options={schoolBoard}
                                    value={schoolBoardValue ? schoolBoard.find(x => x.value === schoolBoardValue) : schoolBoardValue}
                                    onChange={option => schoolBoardOnChange(option ? option.value : option)}
                                    {...restschoolBoardField}
                                    classNamePrefix='react-select'  />
                                {errors.schoolBoard && <p className='errorTxt'>{errors.schoolBoard.message}</p>}
                            </div>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">School Email<span className='redText'>*</span>:</label>
                                <input type="email" {...register('email')} className="form-control" id="input-text" placeholder="Enter Email id" />
                                {errors.email && <p className='errorTxt'>{errors.email.message}</p>}
                            </div>
                           <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">School Category<span className='redText'>*</span>:</label>
                                <Select className="!p-0 place-holder" 
                                    isClearable
                                    options={schoolCategory}
                                    value={schoolCatValue ? schoolCategory.find(x => x.value === schoolCatValue) : schoolCatValue}
                                    onChange={option => schoolCatOnChange(option ? option.value : option)}
                                    {...restschoolCatField}
                                    classNamePrefix='react-select'  />
                                {errors.schoolCategory && <p className='errorTxt'>{errors.schoolCategory.message}</p>}
                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Prakalpa<span className='redText'>*</span>:</label>
                                <Select className="!p-0 place-holder" 
                                    isClearable
                                    options={prakalpName}
                                    value={prakalpValue ? prakalpName.find(x => x.value === prakalpValue) : prakalpValue}
                                    onChange={option => prakalpOnChange(option ? option.value : option)}
                                    {...restPrakalpField}
                                    classNamePrefix='react-select'  />
                                {errors.prakalpName && <p className='errorTxt'>{errors.prakalpName.message}</p>}
                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">School Phone/Mobile No.<span className='redText'>*</span></label>
                                    <input type="text" maxLength={10} {...register('schoolMobileNumber')}  className="form-control input-group-control" id="input-text" placeholder="Enter Mobile No." />
                                    {errors.schoolMobileNumber && <p className='errorTxt'>{errors.schoolMobileNumber.message}</p>}
                            </div>

                           
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2"> Principal Name</label>
                                    <input type="text"  {...register('principalName')}  className="form-control input-group-control" id="input-text" name="principalName" placeholder="Enter Principal Name" />
                            </div>

                        </div>
                    </div>
                    <div className='aadharcard-details mb-4'>
                        <h6 className=' pb-2'>Address Details</h6>
                        <div className='grid grid-cols-12 sm:gap-6'>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Address Line 1*:</label>
                                <input type="text" {...register('address')} className="form-control" id="input-text" placeholder="Enter Building Name, Street Name" />
                                {errors.address && <p className='errorTxt'>{errors.address.message}</p>}
                            </div>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Address Line 2:</label>
                                <input type="text"  {...register('address')}  name='address' className="form-control" id="input-text" placeholder="Enter Address Line 2 (Optional)" />
                            </div>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">City:</label>
                                <input type="text"  {...register('city')} name='city' className="form-control" id="input-text" placeholder="Enter City/Taluk Name" />
                            </div>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">District:</label>
                                <input type="text"  {...register('district')} name='district' className="form-control" id="input-text" placeholder="Enter District" />
                            </div>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Landmark:</label>
                                <input type="text"  {...register('landmark')} name='landmark' className="form-control" id="input-text" placeholder="Enter Landmark" />
                            </div>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Postal Code/Zip Code<span className='redText'>*</span>:</label>
                                <input type="text" {...register('pinCode')} className="form-control" id="input-text" placeholder="Enter Postal Code/Zip Code" />
                                {errors.pinCode && <p className='errorTxt'>{errors.pinCode.message}</p>}

                            </div>

                         
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Select State/Province<span className='redText'>*</span>:</label>
                                <Select className="!p-0 place-holder" 
                                    isClearable
                                    options={stateSelect}
                                    value={stateValue ? stateSelect.find(x => x.value === stateValue) : stateValue}
                                    onChange={option => stateOnChange(option ? option.value : option)}
                                    {...reststateField}
                                    classNamePrefix='react-select'  />
                                {errors.state && <p className='errorTxt'>{errors.state.message}</p>}
                            </div>
                        </div>
                    </div>

                    <div className='student-create-btn'>
                        <div className='flex justify-end'>
                            <button type="submit" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave" >Save</button>
                            <Link to={`${import.meta.env.BASE_URL}pages/schools/allSchools`}>

                                <button type="button" className="ti-btn ti-btn-info-full ml-15 !rounded-full ti-btn-wave">Cancel</button>
                            </Link>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
            {/* Student form create end */}
        </div>
    )
}

export default EditSchool
