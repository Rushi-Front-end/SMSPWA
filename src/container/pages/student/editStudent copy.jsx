import React, { useEffect, useState } from 'react'
import { academicYearDrop, singleselect } from '../../forms/formelements/formselect/formselectdata'

import Select from 'react-select';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Pageheader from '../../../components/common/pageheader/pageheader';
import { Controller, useForm, useController } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import {fetchStudentById, fetchStudentList, updateStudentRecord } from '../../../redux/reducers/studentReducer';
import media50 from "../../../assets/images/media/media-50.jpg";


const schema = yup.object({
    registrationNumber: yup.string().required("Please enter Register Number"),
    rollNumber: yup.string().required("Please enter Roll Number"),
    enrolmentDate: yup.string().required("Please enter Enrollment Date"),
    aadharcardNumber: yup.string().required("Please enter Adhar Card Number"),
    nameOnAadharcard: yup.string().required("Please enter Name as per Adhar card."),
    fullName: yup.string().required("Please enter Full Name"),
    dob: yup.string().required("Please enter DOB"),
    
    academicYear: yup.string().nullable().required("Please select Academic Year"),
    classID: yup.string().nullable().required("Please select Class"),
    section: yup.string().nullable().required("Please select Section"),
    bloodGroup: yup.string().nullable(),
    gender: yup.string().nullable(),
    state: yup.string().nullable()

  });



const EditStudent = () => {

    const navigate = useNavigate()
    const params = useParams();

    const studentUpdData = useSelector((state) => state.studentData) // Fetch by id
    const studentUpdateRes = useSelector((state) => state.studentData.updateRes) //Post
    console.log(studentUpdData,'schollUpdateData')
    const dispatch = useDispatch()

    useEffect((id) => {
        dispatch(fetchStudentById(params.id))
      }, [dispatch, params.id])

    
      const { register, handleSubmit,  formState, control, setValue } = useForm({
        resolver: yupResolver(schema)
    });

    const { field: { value: academicYearValue, onChange: academicYearOnChange , ...restacademicYearField } } = useController({ name: 'academicYear', control });
    const { field: { value: classValue, onChange: classSelectOnChange, ...restclassSelectField } } = useController({ name: 'classID', control });
    const { field: { value: sectionValue, onChange: sectionOnChange, ...restsectionField } } = useController({ name: 'section', control });
    const { field: { value: bloodGroupValue, onChange: bloodGroupOnChange, ...bloodGroupField } } = useController({ name: 'bloodGroup', control });
    const { field: { value: genderValue, onChange: genderOnChange, ...restgenderField } } = useController({ name: 'gender', control });
    const { field: { value: stateValue, onChange: stateOnChange, ...reststateField } } = useController({ name: 'state', control });
   

   const { errors } = formState;
  
    
   useEffect(() => {
    if (params.id) {
        // Fetch individual record by ID
        dispatch(fetchStudentById(params.id)).then((response) => {
            console.log(response,"EEEEEEEEE")
            if (response.payload) {
                const studentData = response.payload;

                // Populate form with fetched data
                setValue('id',studentData.id)
                setValue('academicYear', studentData.academicYear);
                setValue('classID', studentData.classID);
                setValue('section', studentData.section);
                setValue('registrationNumber', studentData.registrationNumber);
                setValue('rollNumber', studentData.rollNumber);
                setValue('enrolmentDate', studentData.enrolmentDate);
                setValue('aadharcardNumber', studentData.aadharcardNumber);
                setValue('nameOnAadharcard', studentData.nameOnAadharcard);
                setValue('fullName', studentData.fullName);
                setValue('mobileNumber', studentData.mobileNumber);
                setValue('email', studentData.email);
                setValue('dob', studentData.dob);
                setValue('bloodGroup', studentData.bloodGroup);
                setValue('gender', studentData.gender);
                setValue('fatherName', studentData.fatherName);
                setValue('fatherMobileNumber', studentData.fatherMobileNumber);
                setValue('motherName', studentData.motherName);
                setValue('height', studentData.height);
                setValue('weight', studentData.weight);
                setValue('religion', studentData.religion);
                setValue('caste', studentData.caste);
                setValue('emergencyMobileNumber', studentData.emergencyMobileNumber);
                setValue('addressLine', studentData.addressLine);
                setValue('city', studentData.city);
                setValue('district', studentData.district);
                setValue('state', studentData.state);
                setValue('pinCode', studentData.pinCode);
                setValue('adolescentSpecificQuestionnaireInstruction', studentData.adolescentSpecificQuestionnaireInstruction);
                setValue('developmentalDelayAndDisability', studentData.developmentalDelayAndDisability);
                setValue('defectAtBirth', studentData.defectAtBirth);
                setValue('deficiencies', studentData.deficiencies);
                setValue('childhoodDiseases', studentData.childhoodDiseases);
                // Add more fields as needed
            }
        });
    }
}, [params.id, dispatch, setValue]);


const onSubmit = (formData) => {
    console.log(formData, 'UPDATEFormDATATTA')
  // setData({ ...formData });
   dispatch(updateStudentRecord({ id: params.id, data: formData }))
   setTimeout(()=>{
       dispatch(fetchStudentList())
   },500)
    navigate(`${import.meta.env.BASE_URL}pages/student/studentDetails`)
}



    return (
        <div>
            {/* <Pageheader currentpage="Student" activepage="Student" mainpage="Create Student" /> */}
            <h4 className='pt-4 borderBottom'>Update Student</h4>

            <div className="breadcrumbs-wrapper mb-4">
                <div className='createstud-flex-container'>
                    <div className='flex flex-row mb-4 items-center pt-2'>

                        {/* <div className='backButton'>
                <Link to={`${import.meta.env.BASE_URL}pages/student/studentDetails`}>

            <button type="button" className="ti-btn ti-btn-info-full ti-btn-wave">Back</button>
                </Link>
            </div>
           */}
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
                                    <Link className="flex items-center text-primary hover:text-primary dark:text-primary" to={`${import.meta.env.BASE_URL}pages/student/studentDetails`}>
                                        Student
                                        <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-black-300 dark:text-white/10 rtl:rotate-180"
                                            width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </Link>
                                </li>

                                <li className="text-sm text-gray-500 dark:text-[#8c9097] dark:text-white/50 hover:text-primary truncate" aria-current="page">
                                    Student Admit Form
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            {/* Student form create Start */}
            <div className='student-form-create'>
                <div className='box p-4 ' >
                    <h4 className=' pb-2'>Student Form</h4>
                    <div className='student-details-first-page'>
                    <div className='student-profile-uploads pt-4'>
                        <div className='student-profile-wrap flex items-center'>
                            <div className='left-side-profile-pic'>
                        <img src={media50} style={{width: "150px",height:"150px", background:'gray', marginRight:'50px' }}  className="img-fluid !rounded-full !inline-flex profileImage"  />
                            </div>
                            <div className='right-side-upload-pic'>
                                <p>Upload Student Photo (150px X 150px)</p>
                                <div>
                                <label htmlFor="file-input" className="sr-only">Choose file</label>
                                <input type="file"  name="file-input" id="file-input" className="block w-full border border-gray-200 focus:shadow-sm dark:focus:shadow-white/10 rounded-sm text-sm focus:z-10 focus:outline-0 focus:border-gray-200 dark:focus:border-white/10 dark:border-white/10 dark:text-white/50
                                       file:border-0
                                      file:bg-light file:me-4
                                      file:py-3 file:px-4
                                      dark:file:bg-black/20 dark:file:text-white/50"/>
                            </div>
                            </div>
                        </div>
                    </div>
                   
                   
                    <form onSubmit={handleSubmit(onSubmit)}>    
                            <div className='academic-details mb-4 pt-4'>
                                <h6 className=' pb-2'>Academic Details</h6>
                                 <div className='grid grid-cols-12 sm:gap-6 mb-4'>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Academic Year <span className="redText">*</span></label>
                            <Select className="!p-0 place-holder"   
                                    isClearable
                                    options={academicYearDrop}
                                    value={academicYearValue ? academicYearDrop.find(x => x.value === academicYearValue) : academicYearValue}
                                    onChange={option => academicYearOnChange(option ? option.value : option)}
                                    {...restacademicYearField}
                                    classNamePrefix='react-select'  />
                                {errors.academicYear && <p className='errorTxt'>{errors.academicYear.message}</p>}
                            
                            </div>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Select Class <span className="redText">*</span></label>
                                <Select className="!p-0 place-holder"  
                                     isClearable
                                     options={singleselect}
                                     value={classValue ? singleselect.find(x => x.value === classValue) : classValue}
                                     onChange={option => classSelectOnChange(option ? option.value : option)}
                                     {...restclassSelectField}
                                     classNamePrefix='react-select'  />
                                    {errors.classID && <p className='errorTxt'>{errors.classID.message}</p>}
                                
                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Select Section <span className="redText">*</span></label>
                            
                            <Select className="!p-0 place-holder"  
                                     isClearable
                                     options={singleselect}
                                     value={sectionValue ? singleselect.find(x => x.value === sectionValue) : sectionValue}
                                     onChange={option => sectionOnChange(option ? option.value : option)}
                                     {...restsectionField}
                                     classNamePrefix='react-select'  />
                                    {errors.section && <p className='errorTxt'>{errors.section.message}</p>}
                                
                                </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Student Registration Number <span className="redText">*</span></label>
                            <input type="text" className="form-control" id="input-text" placeholder="Enter Registration Number" {...register('registrationNumber')}  name='registrationNumber' />
                            {errors.registrationNumber && <p className='errorTxt'>{errors.registrationNumber.message}</p>}
                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Roll Number <span className="redText">*</span></label>
                            <input type="text" className="form-control" id="input-text" placeholder="Enter Roll Number" {...register('rollNumber')}  name='rollNumber' />
                            {errors.rollNumber && <p className='errorTxt'>{errors.rollNumber.message}</p>}
                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Enrollment Date <span className="redText">*</span></label>
                            <input type="date" className="form-control" id="input-datetime-local" {...register('enrolmentDate')}  name='enrolmentDate' />
                            {errors.enrolmentDate && <p className='errorTxt'>{errors.enrolmentDate.message}</p>}       
                            </div>


                            </div> 
                      
                            </div>
                            <div className='aadharcard-details mb-4'>
                                <h6 className=' pb-2'>Student Aadhar Card Details</h6>
                                <div className='grid grid-cols-12 sm:gap-6'>
                                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                        <label className="ti-form-select rounded-sm !p-0 mb-2">Aadhar Card Number <span className="redText">*</span></label>
                                        <input type="text" className="form-control" id="input-text" placeholder="Enter Aadhar Card Number"  {...register('aadharcardNumber')}  name='aadharcardNumber' />
                                        {errors.aadharcardNumber && <p className='errorTxt'>{errors.aadharcardNumber.message}</p>}       

                                    </div>
                                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                        <label className="ti-form-select rounded-sm !p-0 mb-2">Name of Aadhar Card <span className="redText">*</span></label>
                                        <input type="text" className="form-control" id="input-text" placeholder="Enter Aadhar Card Number" {...register('nameOnAadharcard')}  name='nameOnAadharcard'/>
                                        {errors.nameOnAadharcard && <p className='errorTxt'>{errors.nameOnAadharcard.message}</p>}       
                                    </div>
                                </div>
                            </div>
                            <div className='personal-details mb-4'>
                                <h6 className=' pb-2'>Personal Details</h6>
                                <div className='grid grid-cols-12 sm:gap-6'>
                                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                        <label className="ti-form-select rounded-sm !p-0 mb-2">Full Name <span className="redText">*</span> </label>
                                            {/* <Select className="place-holder" classNamePrefix='react-select' options={singleselect} /> */}
                                            <input type="text" className="form-control input-group-control" id="input-text" placeholder="Enter Full Name" {...register('fullName')} name='fullName' />
                                            {errors.fullName && <p className='errorTxt'>{errors.fullName.message}</p>} 
                                        
                                    </div>


                                 <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Mobile No. </label>
                            <div className='flex rounded-sm'>
                            {/* <Select className="place-holder" classNamePrefix='react-select' options={singleselect} /> */}
                            <input type="text" className="form-control input-group-control" id="input-text" placeholder="Enter Mobile Number" {...register('mobileNumber')} name='mobileNumber'   />
                            </div>
                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Email </label>
                            <input type="text" className="form-control" id="input-text" placeholder="Enter Email ID" {...register('email')} name='email'/>
                            </div> 

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label htmlFor="input-datetime-local" className="form-label">DOB <span className="redText">*</span></label>
                                <input type="date" className="form-control" id="input-datetime-local" {...register('dob')}  name='dob' />
                                {errors.dob && <p className='errorTxt'>{errors.dob.message}</p>} 
                            </div>



                                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Blood Group:</label>
                            <Select 
                                isClearable
                                options={singleselect}
                                value={bloodGroupValue ? singleselect.find(x => x.value === bloodGroupValue) : bloodGroupValue}
                                onChange={option => bloodGroupOnChange(option ? option.value : option)}
                                {...bloodGroupField}
                                classNamePrefix='react-select'
                            />
                            </div>


                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Gender:</label>
                            <Select 
                                 isClearable
                                 options={singleselect}
                                 value={genderValue ? singleselect.find(x => x.value === genderValue) : genderValue}
                                 onChange={option => genderOnChange(option ? option.value : option)}
                                 {...restgenderField}
                                 classNamePrefix='react-select'
                            />
                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Father/Guardian Name:</label>
                            <input type="text" className="form-control" id="input-text" placeholder="" {...register('fatherName')} name='fatherName'  />
                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Father/Guardian Mobile No.</label>
                            <div className='flex rounded-sm'>
                            {/* <Select className="place-holder" classNamePrefix='react-select' options={singleselect} /> */}
                            <input type="text" className="form-control input-group-control" id="input-text" placeholder="Enter Full Name" {...register('fatherMobileNumber')} name='fatherMobileNumber'  />
                            </div>
                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Mother Name:</label>
                            <input type="text" className="form-control" id="input-text" placeholder="" {...register('motherName')} name='motherName' />
                            </div>
 
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Height:</label>
                            <input type="text" className="form-control" id="input-text" placeholder=""  {...register('height')} name='height' />
                            </div>


                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Weight:</label>
                            <input type="text" className="form-control" id="input-text" placeholder="" {...register('weight')} name='weight'/>
                            </div>
 
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Religion:</label>
                            <input type="text" className="form-control" id="input-text" placeholder=""  {...register('religion')} name='religion'/>
                            </div>
 
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Caste:</label>
                            <input type="text" className="form-control" id="input-text" placeholder="" {...register('caste')} name='caste'/>
                            </div>                           



                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Emergency Mobile No.:</label>
                            <input type="text" className="form-control" id="input-text" placeholder=""  {...register('emergencyMobileNumber')} name='emergencyMobileNumber' />
                            </div> 

                                </div>
                            </div>

                             <div className='permanentAddr-details mb-4'>
                <h6 className=' pb-2'>Student Permanent Address Details</h6>
                <div className='grid grid-cols-12 sm:gap-6'>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Address Line 1:</label>
                            <input type="text" className="form-control" id="input-text" placeholder="Enter Door No., Street, Area..." {...register('addressLine')} name='addressLine' />
                            </div>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">City</label>
                            <input type="text" className="form-control" id="input-text" placeholder="" {...register('city')} name='city'  />
                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">District</label>
                            <input type="text" className="form-control" id="input-text" placeholder="" {...register('district')} name='district'  />
                            </div>

                             <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Select State/Province</label>
                            <Select 
                                isClearable
                                options={singleselect}
                                value={stateValue ? singleselect.find(x => x.value === stateValue) : stateValue}
                                onChange={option => stateOnChange(option ? option.value : option)}
                                {...reststateField}
                                classNamePrefix='react-select'
                            />
                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Pincode:</label>
                            <input type="text" className="form-control" id="input-text" placeholder="Enter Pincode" {...register('pinCode')} name='pinCode' />
                            </div>



                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Pincode:</label>
                            <input type="text" className="form-control" id="input-text" placeholder="Enter Pincode" {...register('adolescentSpecificQuestionnaireInstruction')} name='adolescentSpecificQuestionnaireInstruction' />
                            </div>
                            
                            
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Pincode:</label>
                            <input type="text" className="form-control" id="input-text" placeholder="Enter Pincode" {...register('developmentalDelayAndDisability')} name='developmentalDelayAndDisability' />
                            </div>
                            
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Pincode:</label>
                            <input type="text" className="form-control" id="input-text" placeholder="Enter Pincode" {...register('defectAtBirth')} name='defectAtBirth' />
                            </div>
                            
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Pincode:</label>
                            <input type="text" className="form-control" id="input-text" placeholder="Enter Pincode" {...register('deficiencies')} name='deficiencies' />
                            </div>
                            
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Pincode:</label>
                            <input type="text" className="form-control" id="input-text" placeholder="Enter Pincode" {...register('childhoodDiseases')} name='childhoodDiseases' />
                            </div>
                            
                        </div>
                            </div> 

                           

                            <div className='student-create-btn'>
                                <div className='flex justify-end'>
                                    {/* <button type="button" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave" onClick={handleSubmit} >Next</button> */}
                                    <button type="submit" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave" >Save</button>
                                    <div className='backButton'>
                                        <Link to={`${import.meta.env.BASE_URL}pages/student/studentDetails`}>

                                            <button type="button" className="ti-btn ti-btn-info-full ml-15 !rounded-full ti-btn-wave">Reset</button>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                            </form>

                
                    </div>

                </div>
            </div>
            {/* Student form create end */}
        </div>
    )
}

export default EditStudent