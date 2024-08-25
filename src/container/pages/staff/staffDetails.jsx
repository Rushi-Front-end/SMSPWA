import React from 'react'
import { Link } from 'react-router-dom';
import { singleselect } from '../../forms/formelements/formselect/formselectdata'
import Select from 'react-select';

const StaffDetails = () => {
    return (
        <div>
            <h4 className='pt-4 borderBottom'>Staffs Details</h4>
            <div className="flex-staff pb-4 pt-2">
                <div className='flex justify-between'>
                    <div className="staff-flex-container">
                        <div className='flex flex-row items-center'>
                            {/* <div className='backButton'>
                                <Link to={`${import.meta.env.BASE_URL}pages/student/studentDetails`}>

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
                                All Staffs
                            </li>
                        </ol>
                    </div>

                        </div>


                    </div>
                    {/* <div className="createstudent-btn">
                        <Link to={`${import.meta.env.BASE_URL}pages/staff/createStaff`}>
                            <button type="button" className="ti-btn ti-btn-secondary-full !rounded-full ti-btn-wave">+ Create Staff</button>
                        </Link>
                    </div> */}
                </div>


            </div>

            <div className='create-stud-table'>
                <div className='box p-4'>
                <div className='stud-head-wrap'>
                        <h4>All Staff Data</h4>
                    </div>
                    <div className='stud-top-sec flex justify-between pt-4 pb-4'>


                        <div className='student-top-grid'>
                            <div className='grid grid-cols-12 sm:gap-6'>
                                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                    {/* <input type="search"  className="form-control" id="input-search" placeholder="Search" /> */}
                                    <div className="flex rounded-sm search-box">
                                        <input type="text" id="hs-trailing-button-add-on-with-icon" name="hs-trailing-button-add-on-with-icon" className="ti-form-input rounded-none rounded-s-sm focus:z-10" />
                                        <button aria-label="button" type="button" className="inline-flex search-icon flex-shrink-0 justify-center items-center rounded-e-sm border border-transparent font-semibold bg-warning text-white hover:bg-warning focus:z-10 focus:outline-none focus:ring-0 focus:ring-warning transition-all text-sm">
                                            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                            </svg>
                                        </button>
                                    </div>

                                </div>
                                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                    <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
                                </div>

                                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                    <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
                                </div>

                            </div>
                        </div>
                        <div className="stud-create-btn">
                        <Link to={`${import.meta.env.BASE_URL}pages/staff/createStaff`}>
                            <button type="button" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave">Add Staff</button>
                        </Link>
                        </div>
                    </div>
                    {/* Top section end */}
                    {/* Top section end */}
                    {/* Table section start */}
                    <div className="student-table-details">
                            <div className="table-responsive">
                                <table className="table whitespace-nowrap table-sm min-w-full">
                                    <thead><tr className="border-b border-defaultborder">
                                        <th scope="col" className="text-start">#</th>
                                        <th scope="col" className="text-start">Staff Code</th>
                                        <th scope="col" className="text-start">Staff Name</th>
                                        <th scope="col" className="text-start">Mobile No.</th>
                                        <th scope="col" className="text-start">Designation</th>
                                        <th scope="col" className="text-start">Departments</th>
                                        <th scope="col" className="text-start">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-defaultborder">
                                            <td>1</td>
                                            <td>EMP005</td>
                                            <td>
                                                <Link className='text-primary' to={`${import.meta.env.BASE_URL}pages/staff/staffList`}>
                                                    Priyanshu Kantale
                                                </Link>
                                            </td>
                                            <td>+91 6111111111</td>
                                            <td>Teacher</td>
                                            <td><span className="badge bg-primary text-white">Staff</span></td>

                                            <td>
                                            <div className="ti-dropdown hs-dropdown">
                                                    <button type="button"
                                                        className="ti-btn ti-btn-ghost-primary ti-dropdown-toggle me-2 !py-2 !shadow-none" aria-expanded="false">
                                                        <i className="ri-arrow-down-s-line align-middle inline-block"></i>
                                                    </button>
                                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                                        <li><Link className="ti-dropdown-item" to="#">Edit</Link></li>
                                                        <li><Link className="ti-dropdown-item" to="#">Delete</Link></li>

                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                                {/* <div className='pagination flex justify-end pt-4'>
                                    <nav aria-label="Page navigation" className="pagination-style-1">
                                        <ul className="ti-pagination mb-0">
                                            <li className="page-item disabled rtl:rotate-180">
                                                <Link aria-label="anchor"
                                                    className="page-link" href="#"><i className="ri-arrow-left-s-line align-middle"></i></Link>
                                            </li>
                                            <li className="page-item"><Link className="page-link" href="#">1</Link></li>
                                            <li className="page-item "><Link className="page-link active" href="#">2</Link></li>
                                            <li className="page-item"><Link aria-label="anchor"
                                                className="page-link" href="#"> <i className="bi bi-three-dots"></i></Link></li>
                                            <li className="page-item">
                                                <Link className="page-link" href="#">21</Link></li>
                                            <li className="page-item rtl:rotate-180">
                                                <Link aria-label="anchor" className="page-link" href="#">
                                                    <i className="ri-arrow-right-s-line align-middle"></i></Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div> */}
                            </div>
                    </div>
                    {/* Table section end */}
                </div>
            </div>

        </div>
    )
}

export default StaffDetails
