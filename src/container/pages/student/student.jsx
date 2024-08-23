import React, { useEffect, useState } from 'react'
import { singleselect } from '../../forms/formelements/formselect/formselectdata'
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../redux/action';
import axios from 'axios';


const Student = () => {

    const [data, setData] = useState([])
    const [search, setSearch] = useState('')

    const getStudentDetails = () => {
        axios.get('https://66bcb9c524da2de7ff6ba282.mockapi.io/student')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getStudentDetails()
    }, [])

    const handleChange = value => {
        setSearch(value);
        filterData(value);
    }

    const filterData = value => {
        const lowerCaseValue = value.toLowerCase().trim();
        if (!lowerCaseValue) {
            //setData(data);
            getStudentDetails()
        }
        else {
            const filteredData = data.filter(item => {
                return Object.keys(item).some(key => {
                    return item[key].toString().toLowerCase().includes(lowerCaseValue)
                })
            });
            setData(filteredData);
        }
    }


    return (
        <div>
            <h4 className='pt-4'>Student Details</h4>

            <div className="student-flex-container pb-4">
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
                                All  Students
                            </li>
                        </ol>
                    </div>

                </div>


            </div>

            <div className='create-stud-table'>
                <div className='box p-4'>
                    <div className='stud-head-wrap'>
                        <h3>All Students Data</h3>
                    </div>
                    <div className='stud-top-sec flex justify-between pt-4 pb-4'>


                        <div className='student-top-grid'>
                            <div className='grid grid-cols-12 sm:gap-6'>
                                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                    <input type="search" onChange={(e) => handleChange(e.target.value)} value={search} className="form-control" id="input-search" placeholder="Search" />

                                </div>
                                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                    <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
                                </div>

                                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                    <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
                                </div>

                            </div>
                        </div>
                        <div className="stud-create-btn">
                            <Link to={`${import.meta.env.BASE_URL}pages/student/createStudent`} className="product-image">
                                <button type="button" className="ti-btn ti-btn-warning-full ti-btn-wave">Add Students</button>
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
                                        <th scope="col" className="text-start">Student ID</th>
                                        <th scope="col" className="text-start">Academic Year</th>
                                        <th scope="col" className="text-start">Student Name</th>
                                        {/* <th scope="col" className="text-start">Date Of Birth</th> */}
                                        <th scope="col" className="text-start">Class Admitted To</th>
                                        <th scope="col" className="text-start">Aadhar Card No.</th>
                                        <th scope="col" className="text-start">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {/* <tr className="border-b border-defaultborder">
                                            <td>1</td>
                                            <td>STU0005</td>
                                            <td>2024-2025</td>
                                            <td>Rohit Kale</td>
                                            <td>06 Aug 2013</td>
                                            <td>Class VI, Section A</td>
                                            <td>124235325253</td>
                                          
                                            <td><div className="hstack flex gap-3 
 text-[.9375rem]">
                                                <Link aria-label="anchor" href="#" className="ti-btn ti-btn-icon
ti-btn-sm ti-btn-light"><i className="ri-edit-line"></i>
                                                </Link>
                                            </div>
                                            </td>
                                        </tr> */}


                                        {
                                            data.map((dt, index) => {
                                                return <tr key={dt.id}>
                                                    <td>{++index}</td>
                                                    <td>{dt.id}</td>
                                                    <td>{dt.academicyear}</td>
                                                    <td>
                                                        <Link className='text-primary'>
                                                            {dt.name}
                                                        </Link>
                                                    </td>
                                                    {/* <td>{dt.dob}</td> */}
                                                    <td>{dt.class}</td>
                                                    <td>{dt.aadhar}</td>
                                                    <td><div className="hstack flex gap-3 text-[.9375rem]"><Link aria-label="anchor" href="#" className="ti-btn ti-btn-icon ti-btn-sm ti-btn-light"><i className="ri-edit-line"></i></Link></div></td>
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

export default Student
