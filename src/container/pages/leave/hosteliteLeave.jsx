import React from 'react'
import { singleselect } from '../../forms/formelements/formselect/formselectdata'
import Select from 'react-select';
import { Link } from 'react-router-dom';


const HosteliteLeave = () => {
    return (
        <div>
            <h4 className='pt-4'>Attendance Details</h4>
            <div className="hosteli-flex-container m-4">
                <div className='flex justify-between'>
                    <div className="hosteli-innerflex-container">
                        <div className='flex flex-row items-center'>
                            <div className='backButton'>
                                <Link to={`${import.meta.env.BASE_URL}pages/staff/staffDetails`}>

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

                                    <li className="text-sm text-gray-500 dark:text-[#8c9097] dark:text-white/50 hover:text-primary truncate" aria-current="page">
                                        Outpasses
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                </div>
            </div>

            <div className='create-stud-table'>
                <div className='box'>
                    <div className='box-body'>
                        <div className='flex justify-end'>
                            <div className="filter-hostilite">
                                <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
                            </div>
                        </div>

                        {/* Top section end */}
                        {/* Table section start */}
                        <div className="student-table-details">
                            <div className="table-responsive">
                                <table className="table whitespace-nowrap table-sm min-w-full">
                                    <thead><tr className="border-b  border-defaultborder">
                                        <th scope="col" className="text-start">#</th>
                                        <th scope="col" className="text-start">Full Name</th>
                                        <th scope="col" className="text-start"> Title</th>
                                        <th scope="col" className="text-start">Outpass Duration</th>
                                        <th scope="col" className="text-start">Bed Details</th>
                                        <th scope="col" className="text-start">Status</th>
                                        <th scope="col" className="text-start">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td rowSpan="2">1</td>
                                            <td>John Doe</td>
                                            <td>	Outpass Title</td>
                                            <td>	01 Sep 2021 - 02 Sep 2021</td>
                                            <td>A-101, Room 1</td>
                                            <td>Approved</td>
                                            <td rowSpan="2">
                                                button
                                            </td>
                                        </tr>
                                        <tr><td colSpan="7" class="text-normal"><p>Reason:  Reason for outpass</p></td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                        {/* Table section end */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HosteliteLeave