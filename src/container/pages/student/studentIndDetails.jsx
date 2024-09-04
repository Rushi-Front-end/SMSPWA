import React from 'react'
import { Link } from 'react-router-dom';
import StudentCardDetails from './studentCardDetails';

const StudentIndDetails = () => {
  return (
    <div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xxl:col-span-12 xl:col-span-12 col-span-12">

                            <h4 className='pt-4'>Student Details</h4>
                            <div className="studentind-flex-container">
                                <div className='flex flex-row items-center'>
                                    {/* <div className='backButton'>
                                        <Link to={`${import.meta.env.BASE_URL}pages/staff/staffDetails`}>

                                            <button type="button" className="ti-btn ti-btn-info-full ti-btn-wave">Back</button>
                                        </Link>
                                    </div> */}
                                    <div className="breadcrumbs self-center">
                                        <div className="breadcrumbs !border-0 pb-4">
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
                                                    Student Details
                                                </li>
                                            </ol>
                                        </div>
                                    </div>

                                </div>


                            </div>

                            <div className="box">

                                <div id="sessions">
                                    {/*  */}
                                    <div className='studentInd-deatils-table box-body'>
                                                    <h3 className='pb-4'>Student  Details</h3>
                                                    <StudentCardDetails />
                                                </div>
                                  
                                    {/*  */}

                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
  )
}

export default StudentIndDetails