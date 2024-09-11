import React, { useEffect, useState } from 'react'
import { singleselect } from '../../forms/formelements/formselect/formselectdata'
import Select from 'react-select';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from '../loader/loader';
import { toast } from 'react-toastify';

import DatePicker from 'react-datepicker';

const StudentAttendance = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [startDate3, setStartDate3] = useState(new Date());
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const [spinner, setSpinner] = useState(false)

    const [classFilter, setClassFilter] = useState(null);
    const [classOptions, setClassOptions] = useState([]);

    useEffect(() => {
        const fetchStudentAndClass = async () => {
          try {
            const studentAttendanceRes = await axios.get('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/StudentAttendance')
            const studentAttendanceData = studentAttendanceRes.data
            
            const studentRes = await axios.get('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Students');
            const studentData = studentRes.data;

            const classRes = await axios.get('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Class')
            const classNameData = classRes.data

            const studentClassIDs = studentAttendanceData.map(attendance => {
                const student = studentData.find(student => student.id === attendance.studentID);
                return student ? student.classID : null;
            }).filter(Boolean); // Remove null values
            
            // Filter classData based on the classID from students
            const filteredClassData = classNameData
                .filter(classDataItem => studentClassIDs.includes(classDataItem.id))
                .map(classDataItem => ({
                    id: classDataItem.id,
                    value: classDataItem.id,
                    label: classDataItem.className
                }));
            
            setData(studentAttendanceData)
            setClassOptions(filteredClassData);
            

          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchStudentAndClass();
    }, []);

    return (
        <div>
            <h4 className='pt-4 borderBottom'>Student Attendance </h4>
            <div className="studentatt-flex-container pb-4 pt-2">
                <div className='flex justify-between'>
                    <div className="flex-container-wrapper">
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
                                        Student Attendance
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
                    <h4>Student Attendance List</h4>
                    <div className='common-attend-filter-list pt-4'>
                        <div className='grid grid-cols-12 sm:gap-6 '>
                            <div className="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                {/* <label htmlFor="input-datetime-local" className="form-label">Attendance Date*</label> */}
                                {/* <input type="datetime-local" className="form-control" id="input-datetime-local" /> */}
                                <div className="input-group !flex-nowrap">
                                    <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                                    <DatePicker placeholderText="Choose date" className="ti-form-input  focus:z-10" showIcon dateFormat="dd/MM/yyyy"
                                                        showMonthDropdown="true"
                                                        showYearDropdown="true"  selected={startDate} onChange={(date) => setStartDate(date)} />
                                </div>
                            </div>

                            <div className="xl:col-span-2 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                {/* <label className="form-label">Department</label> */}
                                <Select className="!p-0 place-holder" classNamePrefix='react-select' value={classFilter} options={classOptions} onChange={(option) => setClassFilter(option)} />
                            </div>

                            <div className="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
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
                            <div className="xl:col-span-2 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <button type="button" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave">Filter</button>
                            </div>
                            <div className="xl:col-span-2 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <button type="button" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave">Mark All Present</button>
                            </div>
                        </div>
                    </div>
                    {/* Top section end */}
                    {/* Table section start */}
                    <div className="student-table-details pt-4">
                        <div className="table-responsive">
                            <table className="table whitespace-nowrap table-bordered table-sm min-w-full">
                                <thead><tr className="border-b  border-defaultborder">
                                    <th scope="col" className="text-start">#</th>
                                    {/* <th scope="col" className="text-start">Student ID</th> */}
                                    <th scope="col" className="text-start"> Name</th>
                                    <th scope="col" className="text-start">Mobile No.</th>
                                    <th scope="col" className="text-start">Class</th>
                                    <th scope="col" className="text-start">In Time</th>
                                    <th scope="col" className="text-start">Out Time</th>
                                    <th scope="col" className="text-start">Status</th>
                                    <th scope="col" className="text-start">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                        spinner ? <Loader /> :
                                            data.map((dt, index) => {
                                               return <tr className="border-b border-defaultborder" key={index}>
                                                    <td>1</td>
                                                    {/* <td>EMP001</td> */}
                                                    <td>
                                                        {dt.studentID}
                                                    </td>
                                                    <td>91 7777777777</td>
                                                    <td>Teacher</td>

                                                    <td className='xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-12 col-span-12'>
                                                        <div className="timePicker-wrapper">
                                                            <input type="time" value={dt.inTime} className="timePicker" id="startTime" name="startTime" />
                                                        </div>
                                                    </td>
                                                    <td className='xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-12 col-span-12'>
                                                        <div className="timePicker-wrapper">
                                                            <input type="time" value={dt.outTime} className="timePicker" id="endTime" name="endTime" />
                                                        </div>
                                                    </td>
                                                    <td><span className="badge bg-danger/10 text-danger">Absent</span></td>
                                                    <td>
                                                        {/* <div className='save-btn'>
                                                <button type="button" className="ti-btn ti-btn-secondary-full ti-btn-wave">Save</button>
                                            </div> */}
                                                        <div className="ti-dropdown hs-dropdown">
                                                            <button type="button"
                                                                className="ti-btn ti-btn-ghost-primary ti-dropdown-toggle me-2 !py-2 !shadow-none" aria-expanded="false">
                                                                <i className="ri-arrow-down-s-line align-middle inline-block"></i>
                                                            </button>
                                                            <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                                                <li><Link className="ti-dropdown-item" to="#">Save</Link></li>
                                                                <li><Link className="ti-dropdown-item" to="#">Edit</Link></li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                            })
                                    }
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

export default StudentAttendance