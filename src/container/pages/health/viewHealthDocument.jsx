import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AdmissionStudentBasicDetails from '../admissionQuery/admissionStudentBasicDetails';
import HealthAcademicDetails from './healthAcademicDetails';
import HealthDocumentDetails from './healthDocumentDetails';
import axios from 'axios';
import Loader from '../loader/loader';
import { toast } from 'react-toastify';

const ViewHealthDocument = () => {

    const [data, setData] = useState([])
    const [spinner, setSpinner] = useState(false)

    // const getStaffList = () => {
    //     setSpinner(true)
    //     try {
    //     axios.get('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Staff')
    //         .then(res => {
    //             console.log("VIEWDOC", res.data)
    //             setData(res.data)
    //             setSpinner(false)
    //         })
    //     }
    //     catch (error) {
    //         console.error('Error fetching user roles:', error);
    //       }
    // }

    // useEffect(() => {
    //     getStaffList()
    // }, [])



    return (
        <div className="viewdoc-wrapper pt-4">
                        <div className="viewdoc-inner-wrapper">

                            <h4 className='borderBottom'>View Health Document Details</h4>
                            <div className="view-flex-container pb-4 pt-2">
                                <div className='flex flex-row items-center'>
                                    


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
                                                    Health Document                                    <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-black-300 dark:text-white/10 rtl:rotate-180"
                                                        width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                                                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                    </svg>
                                                </Link>
                                            </li>

                                            <li className="text-sm text-gray-500 dark:text-[#8c9097] dark:text-white/50 hover:text-primary truncate" aria-current="page">
                                                View Health Document Details
                                            </li>
                                        </ol>
                                    </div>

                                </div>


                            </div>

                            <div className="box p-4">

                                <div className="healthview-doc-wrapper">
                                    <h5>Health Document Details</h5>
                                    <AdmissionStudentBasicDetails />
                                    <HealthAcademicDetails />
                                    <HealthDocumentDetails />
                                </div>
                                <div className='backButton pt-4 flex justify-end'>
                                        <Link to={`${import.meta.env.BASE_URL}pages/health/healthDetails`}>

                                            <button type="button" className="ti-btn ti-btn-info-full ti-btn-wave !rounded-full">Back</button>
                                        </Link>
                                    </div>
                            </div>
                        </div>


        </div>
    )
}

export default ViewHealthDocument
