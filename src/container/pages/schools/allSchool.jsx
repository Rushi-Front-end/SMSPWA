import React, { useEffect, useState } from 'react'
import { singleselect } from '../../forms/formelements/formselect/formselectdata'
import Select from 'react-select';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from '../loader/loader';





const AllSchool = () => {
    const [data, setData] = useState([])
    const [spinner, setSpinner] = useState(false)

    const getSchoolsDetails = () => {
        setSpinner(true)
        axios.get('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/School', {
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*",
              
            }
        })
            .then(res =>{ setData(res.data)
                setSpinner(false)
            })
            .catch(err => console.log(err))
    }
    console.log(data, "Schiool")
 
    useEffect(() => {
        getSchoolsDetails()
    }, [])
    return (
        <div>
            <h4 className='borderBottom pt-4'>Schools </h4>
            <div className="school-flex-container pb-4 pt-2">
                <div className='flex justify-between'>
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
                                Schools
                            </li>
                        </ol>
                    </div>

                </div>


            </div>

            <div className='create-stud-table'>
                <div className='box p-4'>
                    <div className='pb-4 '>
                        <div className='school-head-wrap'>
                            <h4>All Schools Data</h4>
                        </div>
                        <div className="createstudent-btn flex justify-end w-100">
                            <Link to={`${import.meta.env.BASE_URL}pages/schools/createSchool`}>
                                <button type="button" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave">Add School</button>
                            </Link>
                        </div>
                    </div>
                    {/* Top section end */}
                    {/* Table section start */}
                    <div className="student-table-details">
                        <div className='p-5 border rounded-sm dark:border-white/10 border-gray-200'>
                            <div className="table-responsive">
                                <table className="table whitespace-nowrap table-sm min-w-full">
                                    <thead><tr className="border-b border-defaultborder">
                                        <th scope="col" className="text-start">#</th>
                                        <th scope="col" className="text-start">Name</th>
                                        <th scope="col" className="text-start">Email</th>
                                        <th scope="col" className="text-start">Mobile No.	</th>
                                        <th scope="col" className="text-start">Address</th>
                                        <th scope="col" className="text-start">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {/* <tr className="border-b border-defaultborder">
                                            <td>1</td>
                                            <td>
                                                <Link className='text-primary' to={`${import.meta.env.BASE_URL}pages/schools/schoolsDetails`}>Ekalavya Ashram School</Link>
                                            </td>
                                            <td>abc@gmail.com</td>
                                            <td>+91 7777788888</td>
                                            <td>Waigaon, Samudrapur, Wardha, Amaravati, Maharashtra, India</td>

                                            <td><div className="hstack flex gap-3 
 text-[.9375rem]">
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
                                            </div>
                                            </td>
                                        </tr> */}
 {
                                            spinner ? <Loader /> :
                                            data.map((dt, index) => {
                                                return <tr key={dt.id}>
                                                    <td>{++index}</td>
                                                    {/* <td>{dt.id}</td> */}
                                                    <td>
                                                        <Link className='text-primary' to={`${import.meta.env.BASE_URL}pages/schools/schoolsDetails`}>
                                                            {dt.schoolName}
                                                        </Link>
                                                    </td>
                                                    <td>{dt.email}</td>
                                                    <td>{dt.schoolMobileNum}</td>
                                                    <td>{dt.city}</td>
                                                    <td><div className="hstack flex gap-3 text-[.9375rem]">
                                                    <div className="ti-dropdown hs-dropdown">
                                                    <button type="button"
                                                        className="ti-btn ti-btn-ghost-primary ti-dropdown-toggle me-2 !py-2 !shadow-none" aria-expanded="false">
                                                        <i className="ri-arrow-down-s-line align-middle inline-block"></i>
                                                    </button>
                                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                                        <li ><Link className="ti-dropdown-item" to={`${import.meta.env.BASE_URL}pages/schools/createSchool`}>Edit</Link></li>
                                                        <li><Link className="ti-dropdown-item" onClick={()=>deleteDatahandler(dt.id)}

>Delete</Link></li>

                                                    </ul>
                                                </div>
                                                        </div></td>
                                                </tr>
                                            })

                                        }
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

export default AllSchool
