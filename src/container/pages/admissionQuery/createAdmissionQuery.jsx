import React from 'react'
import { singleselect } from '../../forms/formelements/formselect/formselectdata'
import Select from 'react-select';
import { Link } from 'react-router-dom';


const CreateAdmissionQuery = () => {
    return (
        <div>
            <h4 className='pt-4 borderBottom'>Create  Admission</h4>
            <div className="breadcrumbs-wrapper mb-4 pt-2">
                <div className='createAdm-flex-container'>
                    <div className='flex flex-row mb-4 items-center'>
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
                                    <Link className="flex items-center text-primary hover:text-primary dark:text-primary" to={`${import.meta.env.BASE_URL}pages/admissionQuery/admissionQueryDetails`}>
                                        Admission
                                        <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-black-300 dark:text-white/10 rtl:rotate-180"
                                            width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </Link>
                                </li>

                                <li className="text-sm text-gray-500 dark:text-[#8c9097] dark:text-white/50 hover:text-primary truncate" aria-current="page">
                                    Update Admission
                                </li>
                            </ol>
                        </div>

                    </div>
                </div>
            </div>
            {/* Student form create Start */}
            <div className='student-form-create'>
                <div className='box p-4 ' >
                    <h4 className=' pb-2'>Admission Form</h4>
                    <div className='personal-details mb-4'>
                        <h6 className=' pb-2'>Student Personal Details</h6>
                        <div className='grid grid-cols-12 sm:gap-6'>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Student Full Name*:</label>
                                <input type="text" className="form-control" id="input-text" placeholder="Enter Full Name" />
                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Student Mobile Number*</label>
                                <div className='flex rounded-sm'>
                                    <Select className="place-holder" classNamePrefix='react-select' options={singleselect} />
                                    <input type="text" className="form-control input-group-control" id="input-text" placeholder="Enter Full Name" />
                                </div>
                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Parent/Guardian Full Name:</label>
                                <input type="text" className="form-control input-group-control" id="input-text" placeholder="Enter Parent/Guardian Full Name:" />
                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Parent/Guardian Mobile No.</label>
                                <input type="text" className="form-control input-group-control" id="input-text" placeholder="Enter Parent/Guardian Mobile No." />
                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Mother’s Name:</label>
                                <input type="text" className="form-control" id="input-text" placeholder="Enter Mother’s Name" />
                            </div>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Place of Birth:</label>
                                <input type="text" className="form-control" id="input-text" placeholder="Enter Place of Birth" />
                            </div>


                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label htmlFor="input-datetime-local" className="form-label">Student Date of Birth:</label>
                                <input type="datetime-local" className="form-control" id="input-datetime-local" />
                            </div>


                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Aadhar Card Number:</label>
                                <input type="text" className="form-control" id="input-text" placeholder="Enter Aadhar Card Number" />
                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Name of Aadhar Card</label>
                                <input type="text" className="form-control" id="input-text" placeholder="Enter Aadhar Card Number" />
                            </div>


                            <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Address Line 1*:</label>
                                <input type="text" className="form-control" id="input-text" placeholder="Enter  Street, Area..." />
                            </div>
                            <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Address Line 2*:</label>
                                <input type="text" className="form-control" id="input-text" placeholder="Enter City, Taluk, District" />
                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Postal Code/Zip Code*:</label>
                                <input type="text" className="form-control" id="input-text" placeholder="Enter Postal Code/Zip Code" />
                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Select State/Province*:</label>
                                <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
                            </div>

                        </div>
                    </div>

                    <hr />
                    <div className='academic-details mb-4 pt-2'>
                        <h6 className=' pb-2'>Academic Details</h6>
                        <div className='grid grid-cols-12 sm:gap-6'>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Select Academic Year:</label>
                                <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
                            </div>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Select Class:</label>
                                <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Select Section</label>
                                <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Student Registration Number:</label>
                                <input type="text" className="form-control" id="input-text" placeholder="Enter Student Registration Number" />
                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Last Year passed exam:</label>
                                <input type="text" className="form-control" id="input-text" placeholder="Enter Last Year passed exam" />
                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Name of the school:</label>
                                <input type="text" className="form-control" id="input-text" placeholder="Enter Name of the school" />
                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">U-Dise Number:</label>
                                <input type="text" className="form-control" id="input-text" placeholder="Enter U-Dise Number" />
                            </div>

                        </div>
                    </div>

                    <hr />
                    <div className='bank-details mb-4 pt-2'>
                        <h6 className=' pb-2'>Bank Details</h6>
                        <div className='grid grid-cols-12 sm:gap-6'>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Bank Account Number:</label>
                                <input type="text" className="form-control" id="input-text" placeholder="Enter Bank Account Number" />
                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">IFSC Code:</label>
                                <input type="text" className="form-control" id="input-text" placeholder="Enter IFSC Code" />
                            </div>


                        </div>
                    </div>

                    <hr />

                    <div className='student-create-btn pt-4'>
                        <div className='flex justify-end'>
                            <button type="button" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave"> Create</button>
                            <div className='backButton'>
                            <Link to={`${import.meta.env.BASE_URL}pages/admissionQuery/admissionQueryDetails`}>

                                <button type="button" className="ti-btn ti-btn-info-full ml-15 !rounded-full  ti-btn-wave">Back</button>
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

export default CreateAdmissionQuery
