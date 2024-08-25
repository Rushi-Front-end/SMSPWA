import React, { useState } from 'react'
import { singleselect } from '../../forms/formelements/formselect/formselectdata'
import Select from 'react-select';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';

const CreateExpense = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div>
            <h4 className="pt-4 borderBottom">Create Expense Request</h4>
            <div className="breadcrumbs-wrapper mb-4 pt-2">
                <div className='expenseflex-container'>
                    <div className='flex flex-row  items-center'>

                       

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
                                <li className="text-sm">
                                    <Link className="flex items-center text-primary hover:text-primary dark:text-primary" to={`${import.meta.env.BASE_URL}pages/extraFeatures/expenseManagement`}>
                                        Expenses
                                        <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-black-300 dark:text-white/10 rtl:rotate-180"
                                            width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </Link>
                                </li>

                                <li className="text-sm text-gray-500 dark:text-[#8c9097] dark:text-white/50 hover:text-primary truncate" aria-current="page">
                                 Add Expenses
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            {/* Student form create Start */}
            <div className='staff-form-create'>
                <div className='box'>
                    <div className='box-body '>
                        <div className='staffleave-details mb-4'>
                            <h4>Add Expense</h4>

                            <div className='grid grid-cols-12 sm:gap-6 pt-4'>
                            <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 col-span-12">
            <label htmlFor="input-text" className="form-label">Title*</label>
            <input type="text" className="form-control" id="input-text" placeholder="Enter Role Name" />
        </div>
                            <div className="leave-staff-div  xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2"> Category*:</label>
                                <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
                            </div>
                            <div className="leave-staff-div  xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Amount:*</label>
                                <div className="flex rounded-sm">
                                    <span className="px-4 inline-flex items-center min-w-fit rounded-s-sm border-e-0 border-gray-200 bg-light text-sm text-gray-500 dark:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">RS.</span>
                                    <input type="text" className="py-2 px-3 ti-form-input rounded-none rounded-e-sm focus:z-10 !border-s-0" />
                                </div>
                            </div>
                            <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 col-span-12">
            <label htmlFor="input-text" className="form-label">Invoice Number*</label>
            <input type="text" className="form-control" id="input-text" placeholder="Enter Role Name" />
        </div>
                                <div className="xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
                                    <label className="ti-form-select rounded-sm !p-0 mb-2">Expense Date:*</label>
                                    <div className="input-group !flex-nowrap">
                                        <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                                        <DatePicker placeholderText="Choose date" className="ti-form-input  focus:z-10" showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
                                    </div>
                                </div>


                                <div className='right-side-upload- xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 col-span-12'>
                                <label htmlFor="input-text" className="form-label">Invoice*</label>
                                <div>
                                <label htmlFor="file-input" className="sr-only">Choose file</label>
                                <input type="file" name="file-input" id="file-input" className="block w-full border border-gray-200 focus:shadow-sm dark:focus:shadow-white/10 rounded-sm text-sm focus:z-10 focus:outline-0 focus:border-gray-200 dark:focus:border-white/10 dark:border-white/10 dark:text-white/50
                                       file:border-0
                                      file:bg-light file:me-4
                                      file:py-3 file:px-4
                                      dark:file:bg-black/20 dark:file:text-white/50"/>
                            </div>
                            </div>



                            <div className='leave-staff-comment pt-4 pb-2 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12'>
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Comments*</label>
                                <textarea className="form-control" id="text-area" rows="5"></textarea>
                            </div>
                            </div>
                            {/* End of the grid */}


                        </div>

                        <div className='student-create-btn pt-4'>
                            <div className='flex justify-end'>
                                <button type="button" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave">Create</button>
                                <div className='backButton'>
                            <Link to={`${import.meta.env.BASE_URL}pages/extraFeatures/expenseManagement`}>

                                <button type="button" className="ti-btn ti-btn-info-full ml-15 !rounded-full ti-btn-wave">Back</button>
                            </Link>
                        </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Student form create end */}
            </div>
        </div>
    )
}

export default CreateExpense