import React from 'react'
import { singleselect } from '../../forms/formelements/formselect/formselectdata'
import Select from 'react-select';
import { Link } from 'react-router-dom';

const StaffLeave = () => {
    return (
        <div>
            <h4 className='pt-4'>Staff Leave Details</h4>
            <div className="staff-leaveflex-container m-4">
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
                            Staff Leaves
                            </li>
                        </ol>
                    </div>
                    <div className="createstudent-btn">
                        <Link to={`${import.meta.env.BASE_URL}pages/leave/createLeave`}>
                            <button type="button" className="ti-btn ti-btn-secondary-full !rounded-full ti-btn-wave">+ Create Leave</button>
                        </Link>
                    </div>
                </div>


            </div>

            <div className='create-stud-table'>
                <div className='box p-4'>

                    {/* Top section end */}
                    {/* Table section start */}
                    <div className="student-table-details">
                        <div className='p-5 border rounded-sm dark:border-white/10 border-gray-200'>
                            <div className="table-responsive">
                                <table className="table whitespace-nowrap table-sm min-w-full">
                                    <thead><tr className="border-b border-defaultborder">
                                        <th scope="col" className="text-start">#</th>
                                        <th scope="col" className="text-start">Staff Name</th>
                                        <th scope="col" className="text-start">	Designation</th>
                                        <th scope="col" className="text-start">Leave Type</th>
                                        <th scope="col" className="text-start">Duration	</th>
                                        <th scope="col" className="text-start">Status</th>
                                        <th scope="col" className="text-start">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td rowSpan="2">1</td>
                                            <td>Mohan Kale</td>
                                            <td>Teacher</td>
                                            <td>Sick Leave</td>
                                            <td>02 Aug 2024 - 03 Aug 2024</td>
                                            <td>Active</td>
                                            <td rowSpan="2">
                                                button
                                                    </td>
                                                    </tr>
                                                    <tr><td colSpan="7" class="text-normal"><p>Reason: Sick Lave</p></td>
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

export default StaffLeave