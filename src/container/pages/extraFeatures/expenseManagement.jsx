import React, { useState } from 'react'
import { singleselect } from '../../forms/formelements/formselect/formselectdata'
import Select from 'react-select';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';

const ExpenseManagement = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
    <h4 className='pt-4'>Staffs Details</h4>
    <div className="expenseflex-container pb-4">
        <div className='flex justify-between items-center'>
            <div className="exp-innerflex-container">
                <div className='flex flex-row '>
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
                            Expenses
                            </li>
                        </ol>
                    </div>

                </div>


            </div>
            <div className="createstudent-btn">
                <Link to={`${import.meta.env.BASE_URL}pages/extrafeatures/createExpense`}>
                    <button type="button" className="ti-btn ti-btn-secondary-full !rounded-full ti-btn-wave">Create Expense</button>
                </Link>
            </div>
        </div>


    </div>

    <div className='create-stud-table'>
        <div className='box p-4'>
            <div className='m-4'>
                <div className='flex justify-end'>
                <div className="expense-count-select">
                    <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
                 </div>
                 <div className='expense-datepicker'>
                 <div className="input-group !flex-nowrap">
                        <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                        <DatePicker placeholderText="Choose date" className="ti-form-input  focus:z-10" showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                 </div>
                 <div className='referesh-button'>
                    <button type="button" className="ti-btn ti-btn-outline-success !rounded-full ti-btn-wave">Refresh</button>
                 </div>

                <div className='export-button'>
                <div className="ti-btn-list">
                                <div className="ti-btn-group" >
                                    <div className="hs-dropdown ti-dropdown">
                                        <button className={'ti-btn ti-btn-outline-success ti-dropdown-toggle !rounded-full me-2'} type="button"
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

                </div>
            </div>
            {/* Top section end */}
            {/* Table section start */}
            <div className="student-table-details">
                    <div className="table-responsive">
                        <table className="table whitespace-nowrap table-sm min-w-full">
                            <thead><tr className="border-b border-defaultborder">
                                <th scope="col" className="text-start">#</th>
                                <th scope="col" className="text-start">Title	</th>
                                <th scope="col" className="text-start">#Ref No.</th>
                                <th scope="col" className="text-start">Expense Date</th>
                                <th scope="col" className="text-start">Amount	</th>
                                <th scope="col" className="text-start">Status</th>
                                <th scope="col" className="text-start">Created By	</th>
                                <th scope="col" className="text-start">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                                        <tr>
                                            <td rowSpan="2">1</td>
                                            <td>Uniform	</td>
                                            <td>	EXP17225324123</td>
                                            <td>01 Aug 2024</td>
                                            <td>INR 10000.00</td>
                                            <td>Active</td>
                                            <td>
							                    Demo Account SMS
                                                <br /><small>01 August 2024 10:43 pm</small>
                                            </td>
                                            <td rowSpan="2">
                                                <div className='flex expenses-button'>
                                               <Link  to={`${import.meta.env.BASE_URL}pages/extrafeatures/createExpense`}>
                                                <button type="button" className="ti-btn ti-btn-outline-secondary !rounded-full ti-btn-wave">View/Edit</button>
                                               </Link>
                                                <button type="button" className="ti-btn ti-btn-outline-danger !rounded-full ti-btn-wave">Delete</button>
                                                </div>
                                                    </td>
                                                    </tr>
                                                    <tr><td colSpan="7" className="text-normal"><p>Remarks: 5th Class Student</p></td>
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

export default ExpenseManagement