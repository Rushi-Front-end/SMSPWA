import React, { useState } from 'react'
import { singleselect } from '../../forms/formelements/formselect/formselectdata'
import Select from 'react-select';
import { Link } from 'react-router-dom';
import HealthMedical from './healthMedical';

const CreateHealth = () => {

    const [studMed, setStudMedical] = useState(false);
    const NextPageOpen = (e) => {
        setStudMedical(true)
    }

    return (
        <div>
            <h4 className='pt-4 borderBottom'>Create Health Document</h4>
            <div className="breadcrumbs-wrapper mb-4 pt-2">
                <div className='healthdoc-flex-container'>
                    <div className='flex flex-row mb-4 items-center'>



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
                                    <Link className="flex items-center text-primary hover:text-primary dark:text-primary" to={`${import.meta.env.BASE_URL}pages/health/healthDetails`}>
                                        Health Documents
                                        <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-black-300 dark:text-white/10 rtl:rotate-180"
                                            width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </Link>
                                </li>

                                <li className="text-sm text-gray-500 dark:text-[#8c9097] dark:text-white/50 hover:text-primary truncate" aria-current="page">
                                    Create Health Document
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            {/* Student form create Start */}
            <div className='student-form-create'>
                <div className='box p-4 ' >
                    <h4 className=' pb-2'>Health Form</h4>
                    {
                        studMed ? <div className='student-medical-details-page'>
                            <HealthMedical setStudMedical={setStudMedical} />
                        </div>
                            :
                            <div class='health-details-wrapper'>
                                <div className='academic-details mb-4'>
                                    <h6 className=' pb-2'>Student Details</h6>
                                    <div className='grid grid-cols-12 sm:gap-6'>


                                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <label className="ti-form-select rounded-sm !p-0 mb-2">Select Student*:</label>
                                            <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
                                        </div>


                                    </div>
                                </div>
                                <div className='aadharcard-details mb-4'>
                                    <h4 className='pt-2 pb-2'>Health Declaration Form</h4>
                                    <h6 className=' pb-2'>Student Medical Details</h6>
                                    <div className='grid grid-cols-12 sm:gap-6'>

                                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <label className="ti-form-select rounded-sm !p-0 mb-2">Defects At Birth</label>
                                            <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
                                        </div>

                                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <label className="ti-form-select rounded-sm !p-0 mb-2">Deficiencies</label>
                                            <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
                                        </div>

                                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <label className="ti-form-select rounded-sm !p-0 mb-2">Childhood Diseases</label>
                                            <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
                                        </div>

                                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <label className="ti-form-select rounded-sm !p-0 mb-2">Developmental delay & Disability</label>
                                            <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
                                        </div>

                                    </div>

                                    <div className='grid grid-cols-12 sm:gap-6 pt-4'>
                                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <label className="ti-form-select rounded-sm !p-0 mb-2">Height*:</label>
                                            <input type="text" className="form-control" id="input-text" placeholder="" />
                                        </div>
                                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <label className="ti-form-select rounded-sm !p-0 mb-2">Weight*</label>
                                            <input type="text" className="form-control" id="input-text" placeholder="" />
                                        </div>
                                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <label className="ti-form-select rounded-sm !p-0 mb-2">Blood Pressure*</label>
                                            <input type="text" className="form-control" id="input-text" placeholder="" />
                                        </div>
                                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <label className="ti-form-select rounded-sm !p-0 mb-2">Dental Checkup*</label>
                                            <input type="text" className="form-control" id="input-text" placeholder="" />
                                        </div>
                                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <label className="ti-form-select rounded-sm !p-0 mb-2">BMI Classification*</label>
                                            <input type="text" className="form-control" id="input-text" placeholder="" />
                                        </div>
                                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <label className="ti-form-select rounded-sm !p-0 mb-2">MCTS Number(Mother & Child Tracking)*</label>
                                            <input type="text" className="form-control" id="input-text" placeholder="" />
                                        </div>

                                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <label className="ti-form-select rounded-sm !p-0 mb-2">Acuity of Vision(Left Eye)*</label>
                                            <input type="text" className="form-control" id="input-text" placeholder="" />
                                        </div>

                                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <label className="ti-form-select rounded-sm !p-0 mb-2">Acuity of Vision(Right Eye)*</label>
                                            <input type="text" className="form-control" id="input-text" placeholder="" />
                                        </div>

                                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <label className="ti-form-select rounded-sm !p-0 mb-2">Description of Diseases/Conditions*</label>
                                            <input type="text" className="form-control" id="input-text" placeholder="" />
                                        </div>

                                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <label className="ti-form-select rounded-sm !p-0 mb-2">Suggested Solutions & Treatments*</label>
                                            <input type="text" className="form-control" id="input-text" placeholder="" />
                                        </div>

                                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <label className="ti-form-select rounded-sm !p-0 mb-2">Remarks*</label>
                                            <input type="text" className="form-control" id="input-text" placeholder="" />
                                        </div>

                                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <label htmlFor="input-datetime-local" className="form-label">Enrolment Date*</label>
                                            <input type="datetime-local" className="form-control" id="input-datetime-local" />
                                        </div>

                                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <label className="ti-form-select rounded-sm !p-0 mb-2">Date of Health Record Entry</label>
                                            <input type="text" className="form-control" id="input-text" placeholder="" />
                                        </div>

                                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <label className="ti-form-select rounded-sm !p-0 mb-2">Name of the Hospital*</label>
                                            <input type="text" className="form-control" id="input-text" placeholder="" />
                                        </div>



                                    </div>
                                </div>



                                <div className='student-create-btn'>
                                    <div className='flex justify-end'>
                                        <button type="button" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave" onClick={NextPageOpen}> Next</button>
                                        <div className='backButton'>
                                            <Link to={`${import.meta.env.BASE_URL}pages/health/healthDetails`}>

                                                <button type="button" className="ti-btn ti-btn-info-full  ml-15 !rounded-full ti-btn-wave">Back</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                // Health Deails wrapper
                    }
                </div>
            </div>
            {/* Student form create end */}
        </div>
    )
}

export default CreateHealth
