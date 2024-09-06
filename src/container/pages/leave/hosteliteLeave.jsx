import React from 'react'
import { singleselect } from '../../forms/formelements/formselect/formselectdata'
import Select from 'react-select';
import { Link } from 'react-router-dom';


const HosteliteLeave = () => {
    return (
        <div>
            <h4 className='pt-4 borderBottom'>Hostelite Outpasses</h4>
            <div className="hosteli-flex-container pb-4 pt-2">
                <div className='flex justify-between'>
                    <div className="hosteli-innerflex-container">
                        <div className='flex flex-row items-center'>
                            {/* <div className='backButton'>
                                <Link to={`${import.meta.env.BASE_URL}pages/staff/staffDetails`}>

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
                    <div className='p-4'>

                        <div className='stud-head-wrap'>
                            <h4>Hostelite Outpasses List</h4>
                        </div>
                        <div className='stud-top-sec flex justify-between pt-4 pb-4'>


                            <div className='student-top-grid'>
                                <div className='grid grid-cols-12 sm:gap-6'>
                                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                        {/* <input type="search" className="form-control" id="input-search" placeholder="Search" /> */}
                                        <div className="flex rounded-sm search-box">
                                            <input type="search" placeholder='Search' id="hs-trailing-button-add-on-with-icon" name="hs-trailing-button-add-on-with-icon" className="ti-form-input rounded-none rounded-s-sm focus:z-10" />
                                            <button aria-label="button" type="button" className="inline-flex search-icon flex-shrink-0 justify-center items-center rounded-e-sm border border-transparent font-semibold bg-warning text-white hover:bg-warning focus:z-10 focus:outline-none focus:ring-0 focus:ring-warning transition-all text-sm">
                                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                                </svg>
                                            </button>
                                        </div>

                                    </div>
                                  
                                </div>
                            </div>
                            <div className="createstudent-btn">
                                <Link to={`${import.meta.env.BASE_URL}pages/leave/hosteliteCreateLeave`}>
                                    <button type="button" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave">Create Leave</button>
                                </Link>
                            </div>
                        </div>
                        {/* Top section end */}
                        {/* Table section start */}
                        <div className="student-table-details">
                            <div className="table-responsive">
                                <table className="table whitespace-nowrap table-sm min-w-full">
                                    <thead><tr className="border-b  border-defaultborder">
                                        <th scope="col" className="text-start">#</th>
                                        <th scope="col" className="text-start"> Name</th>
                                        <th scope="col" className="text-start">Bed Details</th>
                                        <th scope="col" className="text-start"> Leave Type</th>
                                        <th scope="col" className="text-start">Class</th>
                                        <th scope="col" className="text-start">Outpass Duration</th>
                                        <th scope="col" className="text-start">Status</th>
                                        <th scope="col" className="text-start">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td rowSpan="2">1</td>
                                            <td><Link className='text-primary'>John Doe</Link></td>
                                            <td>A-101, Room 1</td>
                                            <td>	Sick Leave</td>
                                            <td>Class I, Section A</td>
                                            <td>	01 Sep 2021 - 02 Sep 2021</td>
                                            <td><span className="badge bg-danger/10 text-danger">Rejected</span></td>

                                            <td rowSpan="2">
                                                <div className="ti-dropdown hs-dropdown">
                                                    <button type="button"
                                                        className="ti-btn ti-btn-ghost-primary ti-dropdown-toggle me-2 !py-2 !shadow-none" aria-expanded="false">
                                                        <i className="ri-arrow-down-s-line align-middle inline-block"></i>
                                                    </button>
                                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                                    <li><Link className="ti-dropdown-item" to="#">Approve</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#">Reject</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#">Edit</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#">Cancel</Link></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr><td colSpan="7" className="text-normal"><p>Reason:  Reason for outpass</p></td>
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