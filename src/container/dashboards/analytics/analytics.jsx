import { Fragment, useEffect, useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Fullacalendar from '../../../container/fullacalendar/fullacalendar';
import { Chartjsbar, ChartjsbarExpense, Chartjsdonut, Chartjsline } from './analyticsdata';
import axios from 'axios';



const Analytics = () => {

    const [data, setData] = useState([])
    const [spinner, setSpinner] = useState(false)
    
    const getDashboardDetails = () => {
        setSpinner(true)
        axios.get(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/DashBoard/GetDashboardDetailsCount/4`)
            .then(res =>{ 
                setData(res.data)
                setSpinner(false)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getDashboardDetails()
    }, [])



    

    return (
        <Fragment>
            {/* <Pageheader currentpage="Dashboard" activepage="Dashboard" mainpage="Dashboard" /> */}
            <h4 className='borderBottom pt-4'>Dashboard</h4>
            <div className="breadcrumbs !border-0 pt-2">
                <ol className="flex items-center whitespace-nowrap min-w-0">
                    <li className="text-sm text-black-500 dark:text-[#8c9097] dark:text-white/50 hover:text-primary truncate" aria-current="page">
                        Home
                    </li>
                </ol>
            </div>
            <div className="grid grid-cols-12 gap-x-6 pt-4">
                <div className="xl:col-span-12 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xl:col-span-3 lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12">
                            <div className="box">
                                <div className="box-body">
                                    <div className="flex flex-wrap items-center justify-between">
                                        <div>
                                            <h6 className="font-semibold mb-3 text-[1rem]">Total Students</h6>
                                            <span className="text-[1.5625rem] font-semibold">{data.totalStudent}</span>
                                            <span className="block text-success text-[0.75rem]">Students</span>
                                        </div>
                                        <div id="analytics-users">
                                            <span className="avatar avatar-md bg-secondary text-white">
                                                <i className="ri-user-3-line"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-3 lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12">
                            <div className="box">
                                <div className="box-body">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h6 className="font-semibold mb-3 text-[1rem]">Total Staffs</h6>
                                            <span className="text-[1.5625rem] font-semibold">{data.totalStaff}</span>
                                            <span className="block text-success text-[0.75rem]">Staffs</span>
                                        </div>
                                        <div>
                                            <span className="avatar avatar-md bg-secondary text-white">
                                                <i className="ri-user-3-line"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-3 lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12">
                            <div className="box">
                                <div className="box-body">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h6 className="font-semibold mb-3 text-[1rem]">Total Expenses</h6>
                                            <span className="text-[1.5625rem] font-semibold">{data.totalExpenses}</span>
                                            <span className="block text-success text-[0.75rem]">Expenses</span>
                                        </div>
                                        <div>
                                            <span className="avatar avatar-md bg-secondary text-white">
                                                <i className="ri-user-3-line"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-3 lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12">
                            <div className="box">
                                <div className="box-body">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h6 className="font-semibold mb-3 text-[1rem]">Total Sick Students</h6>
                                            <span className="text-[1.5625rem] font-semibold">{data.totalSickStudent}</span>
                                            <span className="block text-success text-[0.75rem]">Sick Students</span>
                                        </div>
                                        <div>
                                            <span className="avatar avatar-md bg-secondary text-white">
                                                <i className="ri-user-3-line"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className="grid grid-cols-12 gap-x-6 ">
                <div className="xl:col-span-12 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xxl:col-span-3 xl:col-span-3 col-span-12">
                            <div className="box dashHeight">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Students
                                    </div>
                                   
                                </div>
                                <div className="box-body !my-2 !py-6 !px-2">
                                    <div id="sessions">
                                        <Chartjsdonut  />
                                    </div>
                                </div>
                                {/* <div className="box-footer !p-0">
                                    <div className="grid grid-cols-12 justify-center">
                                        <div className="col-span-6 pe-0 text-center">
                                            <div className="sm:p-4  p-2 ">
                                                <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem]">Present</span>
                                                <span className="block text-[1rem] font-semibold">44%</span>
                                            </div>
                                        </div>
                                        <div className="col-span-6 px-0 text-center">
                                            <div className="sm:p-4 p-2">
                                                <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem]">Absent</span>
                                                <span className="block text-[1rem] font-semibold">55%</span>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="xxl:col-span-3 xl:col-span-3 col-span-12">
                            <div className="box dashHeight">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Staff
                                    </div>
                                    
                                </div>
                                <div className="box-body !my-2 !py-6 !px-2">
                                    <div id="sessions">
                                        <Chartjsdonut />
                                    </div>
                                </div>
                                {/* <div className="box-footer !p-0">
                                    <div className="grid grid-cols-12 justify-center">
                                        <div className="col-span-6 pe-0 text-center">
                                            <div className="sm:p-4  p-2 ">
                                                <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem]">Present</span>
                                                <span className="block text-[1rem] font-semibold">44%</span>
                                            </div>
                                        </div>
                                        <div className="col-span-6 px-0 text-center">
                                            <div className="sm:p-4 p-2">
                                                <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem]">Absent</span>
                                                <span className="block text-[1rem] font-semibold">55%</span>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
                            <div className="box dashHeight">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Sickness
                                    </div>
                                    
                                </div>
                                <div className="box-body !my-2 !py-6 !px-2">
                                    <div id="sessions">
                                        {/* <Simpledonut/> */}
                                        <Chartjsbar />
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
                            <div className="box dashHeight">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Exam Result
                                    </div>
                                   
                                </div>
                                <div className="box-body !my-2 !py-6 !px-2">
                                    <div id="sessions">
                                        <Chartjsline />
                                    </div>
                                </div>
                              
                            </div>
                        </div>

                        <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
                            <div className="box dashHeight">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Expenses
                                    </div>
                                   
                                </div>
                                <div className="box-body !my-2 !py-6 !px-2">
                                    <div id="sessions">
                                        <ChartjsbarExpense />
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                        
                    </div>
                    <div >
                        <Fullacalendar />
                       </div>  
                </div>

            </div>
        </Fragment>
    );
}

export default Analytics;
