import React, { useEffect, useState } from 'react'
import { singleselect } from '../../forms/formelements/formselect/formselectdata'
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../redux/action';
import axios from 'axios';


const Student = () => {

    const [data, setData] = useState([])

        useEffect(()=>{
            axios.get('https://66bcb9c524da2de7ff6ba282.mockapi.io/student')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
        },[])
        
        


    return (
        <div>
            <h4>Student Details</h4>
            <div className="flex-container m-4">
                <div className='flex justify-between'>
                    <div className="">
                        {/* <h6>Dashboard - Students</h6> */}
                        <p className="mb-1 font-semibold">Dashboard - Students</p>
                    </div>
                    <div className="">
                        <Link to={`${import.meta.env.BASE_URL}pages/student/createStudent`} className="product-image">
                            <button type="button" className="ti-btn ti-btn-secondary-full ti-btn-wave">Create Students</button>
                        </Link>
                    </div>
                </div>


            </div>

            <div className='create-stud-table'>
                <div className='box p-4'>
                    <div className='m-4'>
                        <div className='grid grid-cols-12 sm:gap-6'>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <input type="text" className="form-control" id="input-text" placeholder="Text" />
                            </div>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
                            </div>

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
                                        <th scope="col" className="text-start">Date Of Birth</th>
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
                                            data.map((dt, index)=>{
                                            return <tr key={dt.id}>
                                                <td>{++index}</td>
                                                <td>{dt.id}</td>
                                                <td>{dt.academicyear}</td>
                                                <td>{dt.name}</td>
                                                <td>{dt.dob}</td>
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
