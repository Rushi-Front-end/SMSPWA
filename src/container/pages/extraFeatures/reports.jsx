import React from 'react'
import { singleselect } from '../../forms/formelements/formselect/formselectdata'
import Select from 'react-select';
import { Link } from 'react-router-dom';

const Reports = () => {
    return (
        <div>
            <h4 className='pt-4'>Reports</h4>
            <div className="breadcrumbs-wrapper mb-4">
                <div className='report-flex-container'>
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
                                Reports
                            </li>
                        </ol>
                    </div>
                    </div>
                </div>
            </div>
            {/* Student form create Start */}
            <div className='student-form-create'>
                <div className='box p-4 ' >
                    <h4 className='pt-2 pb-2'>Generate Reports</h4>
                    <div className='report-details mb-4'>
                        <div className='flex'>
                            <div className="report-generate-dropdown">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Select Report</label>
                                <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
                            </div>
                            <div className="report-button self-center ">
                                <div className='report-create-btn'>
                                    <button type="button" className="ti-btn ti-btn-secondary-full !rounded-full ti-btn-wave">Generate Report</button>
                                </div>
                            </div>



                        </div>
                    </div>






                </div>
            </div>
            {/* Student form create end */}
        </div>
    )
}

export default Reports