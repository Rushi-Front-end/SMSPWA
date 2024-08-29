import React from 'react'
import { singleselect } from '../../forms/formelements/formselect/formselectdata'
import Select from 'react-select';
import { Link } from 'react-router-dom';
import media50 from "../../../assets/images/media/media-50.jpg";



const CreateStaff = () => {
  return (
    <div>
       <h4 className='pt-4 borderBottom'>Create Staffs</h4>
       <div className="breadcrumbs-wrapper mb-4 pt-2">
        <div className='create-flex-container'>
            <div className='flex flex-row mb-4 items-center'>
                
            {/* <div className='backButton'>
                <Link to={`${import.meta.env.BASE_URL}pages/staff/staffDetails`}>

            <button type="button" className="ti-btn ti-btn-info-full ti-btn-wave">Back</button>
                </Link>
            </div> */}
            {/* <div className='breadCrumbs p-4'>
                <p>Dashboard -  Staff - Create Staff</p>
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
                                <Link className="flex items-center text-primary hover:text-primary dark:text-primary" to={`${import.meta.env.BASE_URL}pages/staff/staffDetails`}>
                                    Staffs
                                    <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-black-300 dark:text-white/10 rtl:rotate-180"
                                        width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </Link>
                            </li>

                            <li className="text-sm text-gray-500 dark:text-[#8c9097] dark:text-white/50 hover:text-primary truncate" aria-current="page">
                                Create Staff
                            </li>
                        </ol>
                    </div>
            </div>
        </div>
       </div>
       {/* Student form create Start */}
       <div className='staff-form-create'>
        <div className='box p-4 ' >
        <h4 className=' pb-2'>Employee 1</h4>
                    <div className='staff-profile-uploads pt-4'>
                        <div className='staff-profile-wrap flex items-center'>
                            <div className='left-side-profile-pic'>
                            <img src={media50} className="img-fluid !rounded-full profile-image !inline-flex"  />
                            </div>
                            <div className='right-side-upload-pic'>
                                <p>Upload Staff Photo (150px X 150px)</p>
                                <div>
                                <label htmlFor="file-input" className="sr-only">Choose file</label>
                                <input type="file" name="file-input" id="file-input" className="block w-full border border-gray-200 focus:shadow-sm dark:focus:shadow-white/10 rounded-sm text-sm focus:z-10 focus:outline-0 focus:border-gray-200 dark:focus:border-white/10 dark:border-white/10 dark:text-white/50
                                       file:border-0
                                      file:bg-light file:me-4
                                      file:py-3 file:px-4
                                      dark:file:bg-black/20 dark:file:text-white/50"/>
                            </div>
                            </div>
                        </div>
                    </div>
            <h4 className='pt-4 pb-2'>Employment Details</h4>
            <div className='employment-details mb-4'>
                {/* <h6 className=' pb-2'>Academic Details</h6> */}
                <div className='grid grid-cols-12 sm:gap-6'>
                {/* <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Staff ID*:</label>
                            <input type="text" className="form-control" id="input-text" placeholder="Enter Staff ID" />
                            </div> */}
                            {/* <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Assign Roles*:</label>
                            <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
                            </div>
                            */}

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Role*</label>
                                <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
                            </div>

                        </div>
            </div>
            <div className='aadharcard-details mb-4'>
                <h6 className=' pb-2'>Personal Details</h6>
                <div className='grid grid-cols-12 sm:gap-6'>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Full Name*:</label>
                            <input type="text" className="form-control" id="input-text" placeholder="Enter Staff Full Name" />
                            </div>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Mobile No*.</label>
                            <div className="flex rounded-sm">
                    <span className="px-4 inline-flex items-center min-w-fit rounded-s-sm border-e-0 border-gray-200 bg-light text-sm text-gray-500 dark:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">+91</span>
                    <input type="text" className="py-2 px-3 ti-form-input rounded-none rounded-e-sm focus:z-10 !border-s-0" placeholder="Enter Your Mobile Number" />
                  </div>
                            </div>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Whatsapp No*.</label>
                            <div className="flex rounded-sm">
                    <span className="px-4 inline-flex items-center min-w-fit rounded-s-sm border-e-0 border-gray-200 bg-light text-sm text-gray-500 dark:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">+91</span>
                    <input type="text" className="py-2 px-3 ti-form-input rounded-none rounded-e-sm focus:z-10 !border-s-0" placeholder="Enter Your Whatsapp Number" />
                  </div>
                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Email:</label>
                            <input type="text" className="form-control" id="input-text" placeholder="Enter Email ID" />
                            </div>
   
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Gender:</label>
                            <Select className="place-holder" classNamePrefix='react-select' options={singleselect} />
                            </div>
                            
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label htmlFor="input-datetime-local" className="form-label">DOB</label>
                                <input type="datetime-local" className="form-control" id="input-datetime-local" />
                            </div>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label htmlFor="input-datetime-local" className="form-label">Date of Joining*</label>
                                <input type="datetime-local" className="form-control" id="input-datetime-local" />
                            </div>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Alternate Mobile No.:</label>
                            <input type="text" className="form-control" id="input-text" placeholder="Enter Alternate Mobile Number" />
                            </div>

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


                        </div>
            </div>
            
         
            <div className='academic-details mb-4'>
                <h6 className=' pb-2'>Academic Details</h6>
                <div className='grid grid-cols-12 sm:gap-6'>
                                                    
                            <div className="xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Assign Subjects</label>
                            <Select className="place-holder" classNamePrefix='react-select' options={singleselect} />
                            </div>
                            <div className="xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Departments*</label>
                            <Select className="place-holder" classNamePrefix='react-select' options={singleselect} />
                            </div>
                            <div className="xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Shifts</label>
                            <Select className="place-holder" classNamePrefix='react-select' options={singleselect} />
                            </div>
                            

                          
                        </div>
            </div>


         
            <div className='system-login-details mb-4'>
                <h6 className=' pb-2'>System Login</h6>
                <div className='grid grid-cols-12 sm:gap-6'>
                                                    
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Enable Login</label>
                            <Select className="place-holder" classNamePrefix='react-select' options={singleselect} />
                            </div>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Password</label>
                            <input type="text" className="form-control" id="input-text" placeholder="" />
                            </div>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Confirm Password</label>
                            <input type="text" className="form-control" id="input-text" placeholder="" />
                            </div>
                            

                          
                        </div>
            </div>

            

            <div className='student-create-btn'>
                <div className='flex justify-end'>
                <button type="button" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave"> Create</button>
                <div className='backButton'>
                <Link to={`${import.meta.env.BASE_URL}pages/staff/staffDetails`}>

            <button type="button" className="ti-btn ti-btn-info-full ml-15 !rounded-full ti-btn-wave">Back</button>
                </Link>
            </div>
                </div>
            </div>
        </div>
       </div>
       {/* Student form create end */}
    </div>
  )
}

export default CreateStaff
