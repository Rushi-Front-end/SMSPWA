import React from 'react'
import { Link } from 'react-router-dom';


const StaffDetails = () => {
    return (
        <div>
            <h4 className='pt-4'>Staffs Details</h4>
            <div className="flex-staff m-4">
                <div className='flex justify-between'>
                    <div className="staff-flex-container">
                        <div className='flex flex-row items-center'>
                            <div className='backButton'>
                                <Link to={`${import.meta.env.BASE_URL}pages/student/studentDetails`}>

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
                                Staffs
                            </li>
                        </ol>
                    </div>

                        </div>


                    </div>
                    <div className="createstudent-btn">
                        <Link to={`${import.meta.env.BASE_URL}pages/staff/createStaff`}>
                            <button type="button" className="ti-btn ti-btn-secondary-full !rounded-full ti-btn-wave">+ Create Staff</button>
                        </Link>
                    </div>
                </div>


            </div>

            <div className='create-stud-table'>
                <div className='box p-4'>
                    <div className='m-4'>
                        <div className='flex justify-end'>
                            <button type="button" className="ti-btn ti-btn-outline-success !rounded-full ti-btn-wave">Refresh</button>
                        </div>
                    </div>
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
                                        <th scope="col" className="text-start">Date of Joining</th>
                                        <th scope="col" className="text-start">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-defaultborder">
                                            <td>1</td>
                                            <td>EMP005</td>
                                            <td>
                                                <Link to={`${import.meta.env.BASE_URL}pages/staff/staffList`}>
                                                    Priyanshu Kantale
                                                </Link>
                                            </td>
                                            <td>+91 6111111111</td>
                                            <td>Teacher</td>
                                            <td><span className="badge bg-primary text-white">Staff</span></td>
                                            <td>01 Aug 2024</td>

                                            <td>Bars</td>
                                        </tr>

                                    </tbody>
                                </table>
                                <div className='pagination flex justify-end pt-4'>
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
                                </div>
                            </div>
                    </div>
                    {/* Table section end */}
                </div>
            </div>

        </div>
    )
}

export default StaffDetails
