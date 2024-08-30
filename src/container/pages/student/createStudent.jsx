import React, { useState } from 'react'
import { singleselect } from '../../forms/formelements/formselect/formselectdata'
import Select from 'react-select';
import { Link, useNavigate } from 'react-router-dom';
import Pageheader from '../../../components/common/pageheader/pageheader';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import media50 from "../../../assets/images/media/media-50.jpg";



const CreateStudent = () => {

    const [values, setValues] = useState({
        academicYear: '',
        class: '',
        aadhar: '',
        name: '',
        dob: ''

    })
    const [file, setFile] = useState();

    const navigate = useNavigate()

    const profileImage = (e) => {
        console.log(e.target.files[0], "Image URL");
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://66c9968d59f4350f064ce86d.mockapi.io/students', values)
            .then(res => {
                console.log(res)
                navigate(`${import.meta.env.BASE_URL}pages/student/studentDetails`)
            })
            .catch(err => console.log(err))
    }
   
    return (
        <div>
            {/* <Pageheader currentpage="Student" activepage="Student" mainpage="Create Student" /> */}
            <h4 className='pt-4 borderBottom'>Create Student</h4>

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
                                        <img src={file} className="img-fluid !rounded-full !inline-flex profile-image" />
                                    </div>
                                    <div className='right-side-upload-pic'>
                                        <p>Upload Student Photo (150px X 150px)</p>
                                        <div>
                                            <label htmlFor="file-input" className="sr-only">Choose file</label>
                                            <input type="file" onChange={profileImage} name="file-input" id="file-input" className="block w-full border border-gray-200 focus:shadow-sm dark:focus:shadow-white/10 rounded-sm text-sm focus:z-10 focus:outline-0 focus:border-gray-200 dark:focus:border-white/10 dark:border-white/10 dark:text-white/50
                                       file:border-0
                                      file:bg-light file:me-4
                                      file:py-3 file:px-4
                                      dark:file:bg-black/20 dark:file:text-white/50"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='academic-details mb-4 pt-4'>
                                <h6 className=' pb-2'>Academic Details</h6>
                                {/* <div className='grid grid-cols-12 sm:gap-6'>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Academic Year:</label>
                            <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} name='academicYear' />
                            </div>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Select Class:</label>
                                <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect}  name='class'/>
                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Select Section</label>
                                <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
                            </div>

                        </div> */}
                            </div>
                            <div className='aadharcard-details mb-4'>
                                <h6 className=' pb-2'>Student Aadhar Card Details</h6>
                                <div className='grid grid-cols-12 sm:gap-6'>
                                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                        <label className="ti-form-select rounded-sm !p-0 mb-2">Aadhar Card Number:</label>
                                        <input type="text" className="form-control" id="input-text" placeholder="Enter Aadhar Card Number" onChange={(e) => setValues({ ...values, aadhar: e.target.value })} name='aadhar' />
                                    </div>
                                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                        <label className="ti-form-select rounded-sm !p-0 mb-2">Name of Aadhar Card</label>
                                        <input type="text" className="form-control" id="input-text" placeholder="Enter Aadhar Card Number" />
                                    </div>



                                </div>
                            </div>
                            <div className='personal-details mb-4'>
                                <h6 className=' pb-2'>Personal Details</h6>
                                <div className='grid grid-cols-12 sm:gap-6'>
                                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                        <label className="ti-form-select rounded-sm !p-0 mb-2">Full Name:</label>
                                        <div className='flex rounded-sm'>
                                            {/* <Select className="place-holder" classNamePrefix='react-select' options={singleselect} /> */}
                                            <input type="text" className="form-control input-group-control" id="input-text" placeholder="Enter Full Name" onChange={(e) => setValues({ ...values, name: e.target.value })} name='name' />
                                        </div>
                                    </div>

                                    {/* <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Mobile No.</label>
                            <div className='flex rounded-sm'>
                            <Select className="place-holder" classNamePrefix='react-select' options={singleselect} />
                            <input type="text" className="form-control input-group-control" id="input-text" placeholder="Enter Full Name" />
                            </div>
                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Email:</label>
                            <input type="text" className="form-control" id="input-text" placeholder="Enter Email ID" />
                            </div> */}

                                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                        <label htmlFor="input-datetime-local" className="form-label">DOB</label>
                                        <input type="date" className="form-control" id="input-datetime-local" onChange={(e) => setValues({ ...values, dob: e.target.value })} name='dob' />
                                    </div>


                                    {/* <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Blood Group:</label>
                            <Select className="place-holder" classNamePrefix='react-select' options={singleselect} />
                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Gender:</label>
                            <Select className="place-holder" classNamePrefix='react-select' options={singleselect} />
                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Father/Guardian Name:</label>
                            <input type="text" className="form-control" id="input-text" placeholder="" />
                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Father/Guardian Mobile No.</label>
                            <div className='flex rounded-sm'>
                            <Select className="place-holder" classNamePrefix='react-select' options={singleselect} />
                            <input type="text" className="form-control input-group-control" id="input-text" placeholder="Enter Full Name" />
                            </div>
                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Mother Name:</label>
                            <input type="text" className="form-control" id="input-text" placeholder="" />
                            </div>
                            

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Emergency Mobile No.:</label>
                            <input type="text" className="form-control" id="input-text" placeholder="" />
                            </div> */}

                                </div>
                            </div>

                            {/* <div className='permanentAddr-details mb-4'>
                <h6 className=' pb-2'>Student Permanent Address Details</h6>
                <div className='grid grid-cols-12 sm:gap-6'>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Address Line 1:</label>
                            <input type="text" className="form-control" id="input-text" placeholder="Enter Door No., Street, Area..." />
                            </div>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">City</label>
                            <input type="text" className="form-control" id="input-text" placeholder="" />
                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">District</label>
                            <input type="text" className="form-control" id="input-text" placeholder="" />
                            </div>
                            
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Select State/Province</label>
                            <Select className="place-holder" classNamePrefix='react-select' options={singleselect} />
                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Pincode:</label>
                            <input type="text" className="form-control" id="input-text" placeholder="Enter Pincode" />
                            </div>
                            
                        </div>
            </div> */}

                            {/* <div className='medical-details mb-4'>
                <h6 className=' pb-2'>Student Medical Details</h6>
                <div className='grid grid-cols-12 sm:gap-6'>
                                                    
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Defects At Birth</label>
                            <Select className="place-holder" classNamePrefix='react-select' options={singleselect} />
                            </div>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Deficiencies</label>
                            <Select className="place-holder" classNamePrefix='react-select' options={singleselect} />
                            </div>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Childhood Diseases</label>
                            <Select className="place-holder" classNamePrefix='react-select' options={singleselect} />
                            </div>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Developmental delay & Disability</label>
                            <Select className="place-holder" classNamePrefix='react-select' options={singleselect} />
                            </div>

                          
                        </div>
            </div> */}

                            <div className='student-create-btn'>
                                <div className='flex justify-end'>
                                    {/* <button type="button" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave" onClick={handleSubmit} >Next</button> */}
                                    <button type="button" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave"  onClick={handleSubmit} >Save</button>
                                    <div className='backButton'>
                                        <Link to={`${import.meta.env.BASE_URL}pages/student/studentDetails`}>

                                            <button type="button" className="ti-btn ti-btn-info-full ml-15 !rounded-full ti-btn-wave">Reset</button>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    
                </div>
            </div>
            {/* Student form create end */}
        </div>
    )
}

export default CreateStudent
