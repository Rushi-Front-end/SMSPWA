import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { singleselect } from '../../forms/formelements/formselect/formselectdata'
import Select from 'react-select';
import DatePicker from 'react-datepicker';

const HostelAttendance = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div>
            <h4 className='pt-4'> Attendance Details</h4>
            <div className="hostel-flex-container m-4">
                <div className='flex justify-between'>
                    <div className="hostel-innerflex-container">
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
                                        Attendance
                                    </li>
                                </ol>
                            </div>
                        </div>


                    </div>
                    {/*  */}
                </div>


            </div>

            <div className='create-stud-table'>
                <div className='box p-4'>
                    <div className='box-wrapper'>
                        <div className='grid grid-cols-12 sm:gap-6'>
                            <div className="xl:col-span-5 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label htmlFor="input-datetime-local" className="form-label">Attendance Date*</label>
                                {/* <input type="datetime-local" className="form-control" id="input-datetime-local" /> */}
                                <div className="input-group !flex-nowrap">
                                    <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                                    <DatePicker placeholderText="Choose date" className="ti-form-input  focus:z-10" showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
                                </div>
                            </div>




                        </div>
                    </div>
                    {/* Top section end */}
                    {/* Table section start */}
                    <div className="student-table-details pt-4">
                        <div className="table-responsive">
                            <table className="table whitespace-nowrap table-sm min-w-full">
                                <thead><tr className="border-b  border-defaultborder">
                                    <th scope="col" className="text-start">Sl No</th>
                                    <th scope="col" className="text-start">	Student Code</th>
                                    <th scope="col" className="text-start"> Name</th>
                                    <th scope="col" className="text-start">	Mobile</th>
                                    <th scope="col" className="text-start">Class & Section Details</th>
                                    <th scope="col" className="text-start">Status</th>
                                    <th scope="col" className="text-start">Created At</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-defaultborder">
                                        <td>1</td>
                                        <td>STU001</td>
                                        <td>
                                            Student 1
                                        </td>
                                        <td>9876543210</td>
                                        <td>	Class 1, Section A</td>
                                        <td>
                                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                                <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
                                            </div>
                                        </td>
                                        <td>01 January 2021 03:30 pm</td>

                                    </tr>

                                </tbody>
                            </table>

                        </div>
                    </div>
                    {/* Table section end */}
                </div>
            </div>

        </div>
    )
}

export default HostelAttendance
