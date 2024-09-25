import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../loader/loader';
import { toast } from 'react-toastify';

const HealthDetails = () => {
    const [data, setData] = useState([]);
    const [spinner, setSpinner] = useState(false);
    const [healthStudName, setHealthStudName] = useState([]);
    const [healthClassName, setHealthClassName] = useState([]);

    const {healthID} = useParams();

    const getHealthList = () => {
        setSpinner(true);
        axios
            .get('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/StudentHealthCheckup/GetAllStudentHealthCheckup')
            .then((res) => {
                console.log(res, "GTHEALTH SL")
                setData(res.data);
                setSpinner(false);
                // const initialStatusMap = res.data.reduce((acc, leave) => {
                //   acc[leave.id] = leave.status;
                //   return acc;
                // }, {});
                // setStatusMap(initialStatusMap);
            })
            .catch((err) => {
                console.log(err);
                setSpinner(false);
            });
    };
    const getStudentName = async () => {
        try {
            const roleRes = await axios.get('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Students');
            const roleData = roleRes.data;
            const classRes = await axios.get('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Class')
            const classNameData = classRes.data
            // Assuming roleData is an array of students
            setHealthStudName(roleData);
            setHealthClassName(classNameData)
            console.log(roleData, "StudentNAMein helath", classRes);
        } catch (error) {
            console.error('Error fetching user roles:', error);
        }
    }
    useEffect(() => {
        getHealthList();
        getStudentName();
        
    }, []);

    const handleDocUrl = async() => {
        // let params = []
        // const id = {healthID}
        // const healthCheckupDate = data.healthCheckupDate
        // // const queryString = params.join("&");
        // const url = `https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/StudentHealthCheckup/GetStudentHealthCheckupById?id=${healthID}&healthCheckupDate=${data.healthCheckupDate}`;
       
    }

    return (
        <div>
            <h4 className='textUpperCase pt-4 borderBottom'>Health</h4>
            <div className="health-flex-container pb-4 pt-2">
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

                            <li className="text-sm text-black-500 dark:text-[#8c9097] dark:text-white/50 hover:text-primary truncate" aria-current="page">
                                Health Document
                            </li>
                        </ol>
                    </div>

                </div>


            </div>

            <div className='create-stud-table'>
                <div className='box p-4'>
                    <div className="createstudent-btn flex justify-between w-100">
                        <h4>Health Document Details</h4>
                        <Link to={`${import.meta.env.BASE_URL}pages/health/createHealth`}>
                            <button type="button" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave"> Create Health Document</button>
                        </Link>
                    </div>
                    {/* Top section end */}
                    {/* Table section start */}
                    <div className="student-table-details pt-4">
                        <div className='p-5 border rounded-sm dark:border-white/10 border-gray-200'>
                            <div className="table-responsive">
                                <table className="table whitespace-nowrap table-sm min-w-full">
                                    <thead><tr className="border-b border-defaultborder">
                                        <th scope="col" className="text-start">Sl No.</th>
                                        <th scope="col" className="text-start">	Document Date</th>
                                        <th scope="col" className="text-start">Student Name</th>
                                        <th scope="col" className="text-start">	Section & Class Name	</th>
                                        <th scope="col" className="text-start">	Created At</th>
                                        <th scope="col" className="text-start">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {spinner ? (
                                            <Loader />
                                        ) : (
                                            data.length > 0 ? (
                                                data.map((dt, index) => {
                                                    return (
                                                        <tr className="border-b border-defaultborder" key={index}>
                                                            <td>{index + 1}</td>
                                                            <td>{dt.healthCheckupDate} </td>
                                                            <td>{Array.isArray(healthStudName) && healthStudName.filter(staff => staff.id === dt.studentID)[0]?.fullName || 'Unknown'}</td> {/* Display student name */}

                                                            <td>{Array.isArray(healthClassName) && healthClassName.filter(staff => staff.id === healthStudName.filter(staff => staff.id === dt.studentID)[0]?.classID)[0]?.className || 'Unknown'}- {Array.isArray(healthStudName) && healthStudName.filter(staff => staff.id === dt.studentID)[0]?.section || 'Unknown'}</td>
                                                            <td>{dt.createdAt}</td>
                                                            <td>
                                                                <Link to={`${import.meta.env.BASE_URL}pages/health/viewHealthDocument/?id=${dt.studentID}&date=${dt.healthCheckupDate}`}>
                                                                    <button onClick={handleDocUrl} type="button" className="ti-btn ti-btn-outline-warning !rounded-full ti-btn-wave">View</button>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            ) : (
                                                <tr>
                                                    <td colSpan="6">
                                                        <h3 className='text-center'>
                                                            No Data available.
                                                        </h3>
                                                    </td>
                                                </tr>
                                            )

                                        )}
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

export default HealthDetails
