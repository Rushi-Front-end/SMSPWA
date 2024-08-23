import React from 'react'
import { singleselect } from '../../forms/formelements/formselect/formselectdata'
import Select from 'react-select';
import { Link } from 'react-router-dom';

const CreateSchool = () => {
    return (
        <div>
            <h4 className='pt-4'>Create School</h4>
            <div className="breadcrumbs-wrapper mb-4">
                <div className='school-flex-container'>
                    <div className='flex flex-row mb-4 items-center'>

                        <div className='backButton self-center '>
                            <Link to={`${import.meta.env.BASE_URL}pages/schools/allSchools`}>

                                <button type="button" className="ti-btn ti-btn-info-full ti-btn-wave">Back</button>
                            </Link>
                        </div>

                        <div className="breadcrumbs !border-0 ">
                            <ol className="flex items-center whitespace-nowrap min-w-0">
                                <li className="text-sm">
                                    <Link className="flex items-center text-primary hover:text-primary dark:text-primary" to={`${import.meta.env.BASE_URL}dashboard`}>
                                        Dashboard
                                        <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-300 dark:text-white/10 rtl:rotate-180"
                                            width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </Link>
                                </li>
                                <li className="text-sm">
                                    <Link className="flex items-center text-primary hover:text-primary dark:text-primary" to={`${import.meta.env.BASE_URL}pages/schools/allSchools`}>
                                        Schools
                                        <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-300 dark:text-white/10 rtl:rotate-180"
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
                    <h4 className='pt-2 pb-2'>School Form</h4>
                    <div className='academic-details mb-4'>
                        {/* <h6 className=' pb-2'>Academic Details</h6> */}
                        <div className='grid grid-cols-12 sm:gap-6'>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">School Name*:</label>
                                <input type="text" className="form-control" id="input-text" placeholder="Enter School Name" />
                            </div>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">School Code*:</label>
                                <input type="text" className="form-control" id="input-text" placeholder="Enter School Code" />
                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">School Board*:</label>
                                <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
                            </div>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">School Category*:</label>
                                <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">School Phone/Mobile No.*</label>
                                <div className='flex rounded-sm'>
                                    <Select className="place-holder" classNamePrefix='react-select' options={singleselect} />
                                    <input type="text" className="form-control input-group-control" id="input-text" placeholder="Enter Mobile No." />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='aadharcard-details mb-4'>
                        <h6 className=' pb-2'>Address Details</h6>
                        <div className='grid grid-cols-12 sm:gap-6'>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Address Line 1*:</label>
                                <input type="text" className="form-control" id="input-text" placeholder="Enter Building Name, Street Name" />
                            </div>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Address Line 2:</label>
                                <input type="text" className="form-control" id="input-text" placeholder="Enter Address Line 2 (Optional)" />
                            </div>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">City:</label>
                                <input type="text" className="form-control" id="input-text" placeholder="Enter City/Taluk Name" />
                            </div>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">District:</label>
                                <input type="text" className="form-control" id="input-text" placeholder="Enter District" />
                            </div>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Landmark:</label>
                                <input type="text" className="form-control" id="input-text" placeholder="Enter Landmark" />
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



                    <div className='student-create-btn'>
                        <div className='flex justify-end'>
                            <button type="button" className="ti-btn ti-btn-secondary-full !rounded-full ti-btn-wave">+ Save</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Student form create end */}
        </div>
    )
}

export default CreateSchool
