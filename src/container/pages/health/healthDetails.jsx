import React from 'react'
import { Link } from 'react-router-dom';
const HealthDetails = () => {
    return (
        <div>
            <h4 className='textUpperCase pt-4'>Health Document Details</h4>
            <div className="health-flex-container m-4">
                <div className='flex justify-between'>
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

                            <li className="text-sm text-gray-500 dark:text-[#8c9097] dark:text-white/50 hover:text-primary truncate" aria-current="page">
                                Health Document
                            </li>
                        </ol>
                    </div>

                </div>


            </div>

            <div className='create-stud-table'>
                <div className='box p-4'>
                    <div className='m-4 '>
                        <div className="createstudent-btn flex justify-end w-100">
                            <Link to={`${import.meta.env.BASE_URL}pages/health/createHealth`}>
                                <button type="button" className="ti-btn ti-btn-secondary-full !rounded-full ti-btn-wave">+ Create Health Document</button>
                            </Link>
                        </div>
                    </div>
                    {/* Top section end */}
                    {/* Table section start */}
                    <div className="student-table-details">
                        <div className='p-5 border rounded-sm dark:border-white/10 border-gray-200'>
                            <div className="table-responsive">
                                <table className="table whitespace-nowrap table-sm min-w-full">
                                    <thead><tr className="border-b border-defaultborder">
                                        <th scope="col" className="text-start">Sl No.</th>
                                        <th scope="col" className="text-start">	Document Date</th>
                                        <th scope="col" className="text-start">Student Name</th>
                                        <th scope="col" className="text-start">	Section & Class Name	</th>
                                        <th scope="col" className="text-start">Age</th>
                                        <th scope="col" className="text-start">	Created At</th>
                                        <th scope="col" className="text-start">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-defaultborder">
                                            <td>1</td>
                                            <td> 15 Jul 2024 </td>
                                            <td>Rahul Patil </td>
                                            <td>Class A - Section A</td>
                                            <td>13 Oct 2011</td>
                                            <td>01 August 2024 11:03 pm</td>
                                            <td>
                                                <Link to={`${import.meta.env.BASE_URL}pages/health/viewHealthDocument`}>
                                                    <button type="button" className="ti-btn ti-btn-outline-secondary !rounded-full ti-btn-wave">View</button>
                                                </Link>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* Table section end */}
                </div>
            </div>

        </div>
    )
}

export default HealthDetails
