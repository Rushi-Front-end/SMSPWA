import React, { useState } from 'react'
import { singleselect } from '../../forms/formelements/formselect/formselectdata'
import Select from 'react-select';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';

const Complaints = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
    <h4 className='pt-4 borderBottom'>Complaints </h4>
    <div className="complaint-flex-container pb-4 pt-2">
        <div className='flex justify-between items-center'>
        <div className='flex flex-row items-center'>
                            {/* <div className='backButton'>
                                <Link to={`${import.meta.env.BASE_URL}pages/extraFeatures/visitor`}>

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
                                        Complaints
                                    </li>
                                </ol>
                            </div>

                        </div>
            {/* <div className="complaint-right-side flex">
            <div className='visitor-search'>
                   <input type="text" className="form-control" id="input-text" placeholder="Enter Search Text" />
               </div>
                <Link to={`${import.meta.env.BASE_URL}pages/extraFeatures/createComplaints`} className="product-image">
                    <button type="button" className="ti-btn ti-btn-warning-full  !rounded-full ti-btn-wave">Create </button>
                </Link>
            </div> */}
        </div>


    </div>

    <div className='create-stud-table'>
        <div className='box p-4'>
        <div className='expenses-wrapper'>
                <h4>Complaints List</h4>
                <div className='expenses-top-wrapper flex justify-between pt-4'>
                
                    <div className='left-expense-date'>
                 <div className='expense-datepicker'>
                 <div className="input-group !flex-nowrap">
                        <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                        <DatePicker placeholderText="Choose date" className="ti-form-input  focus:z-10" dateFormat="dd/MM/yyyy"
                                                        showMonthDropdown="true"
                                                        showYearDropdown="true"  showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                 </div>
                 </div>
                 <div className='expense-export-create-sec flex'>
                

                <div className='export-button'>
                <div className="ti-btn-list">
                                <div className="ti-btn-group" >
                                    <div className="hs-dropdown ti-dropdown">
                                        <button className={'ti-btn ti-btn-outline-warning ti-dropdown-toggle !rounded-full me-2'} type="button"
                                            id="dropdownMenuButton2"
                                            aria-expanded="false">
                                            Export<i
                                                className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                        </button>
                                        <ul className="hs-dropdown-menu ti-dropdown-menu hidden"
                                            aria-labelledby="dropdownMenuButton2">
                                            <li><Link className="ti-dropdown-item" to="#">
                                            <div id="export_1724247195639" className="dropdown-item">Excel (.xls)</div>
                                            </Link>
                                            </li>
                                            <li><Link className="ti-dropdown-item" to="#">
                                            <div id="export_1724247195639" className="dropdown-item">Excel (.xlsx)</div>
                                                </Link></li>
                                            <li><Link className="ti-dropdown-item" to="#">
                                            <div id="export_1724247195639" className="dropdown-item">Excel (.csv)</div>
                                                </Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                </div>
                <div className="createstudent-btn">
                <Link to={`${import.meta.env.BASE_URL}pages/extraFeatures/createComplaints`} className="product-image">
                    <button type="button" className="ti-btn ti-btn-warning-full  !rounded-full ti-btn-wave">Create Complaints</button>
                </Link>
            </div>
            </div>

                </div>
            </div>
            
            {/* Table section end */}
            <div className="student-table-details pt-4">
                <div className='p-5 border rounded-sm dark:border-white/10 border-gray-200 '>
                    <div className="table-responsive">
                    <table className="table   whitespace-nowrap table-sm min-w-full">
                            <thead><tr className="border-b border-defaultborder">
                                <th scope="col" className="text-start">#</th>
                                <th scope="col" className="text-start">Name	</th>
                                <th scope="col" className="text-start">Type	</th>
                                <th scope="col" className="text-start">Category</th>
                                <th scope="col" className="text-start"> Date</th>
                                <th scope="col" className="text-start">Created By	</th>
                                <th scope="col" className="text-start">Document</th>
                                <th scope="col" className="text-start">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                                        <tr>
                                            <td rowSpan="2">1</td>
                                            <td>Daniel 	Grant</td>
                                            <td>	Staff</td>
                                            <td>Teacher</td>
                                            <td>02 Aug 2024</td>
                                            <td>
							                   Robert Dsouza
                                            </td>
                                            <td>
                                                <Link className='text-primary'>View</Link>
                                            </td>
                                            <td rowSpan="2">
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
                                                    <tr><td colSpan="8" className="text-normal"><p>Remarks: Dispresecting other teachers</p></td>
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

export default Complaints