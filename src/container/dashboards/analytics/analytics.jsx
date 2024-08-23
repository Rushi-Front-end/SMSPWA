import  {  Fragment } from 'react';
import Pageheader from '../../../components/common/pageheader/pageheader';
import { Link } from 'react-router-dom';
import { AudienceReport, Bouncerate, Clicks, Impressions, Sessionbydevice, Sessionduration, TopCountries, Totalusers, Visitorsbychannel, Visitorsbycountries } from './analyticsdata';
import media84 from "../../../assets/images/media/media-84.png";
import { Simpledonut } from '../../charts/apexcharts/piechart/piechartdata';
import { Linechartwithlabels } from '../../charts/apexcharts/linechart/linedata';



const Analytics = () => {
  return(
  <Fragment>
   <Pageheader currentpage="Dashboard" activepage="Dashboard" mainpage="Dashboard" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xl:col-span-3 lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12">
                            <div className="box">
                                <div className="box-body">
                                    <div className="flex flex-wrap items-center justify-between">
                                        <div>
                                            <h6 className="font-semibold mb-3 text-[1rem]">Total Students</h6>
                                            <span className="text-[1.5625rem] font-semibold">12</span>
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
                                            <span className="text-[1.5625rem] font-semibold">6</span>
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
                                                <span className="text-[1.5625rem] font-semibold">5</span>
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
                                                <span className="text-[1.5625rem] font-semibold">6</span>
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
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xxl:col-span-4 xl:col-span-4 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Staff Attendance Stats Statistics
                                    </div>
                                    <div>
                                        <button type="button" className="ti-btn ti-btn-primary 1 !text-[0.85rem] !m-0 !font-medium">View All</button>
                                    </div>
                                </div>
                                <div className="box-body !my-2 !py-6 !px-2">
                                    <div id="sessions">
                                    <Simpledonut/>
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
                        <div className="xxl:col-span-4 xl:col-span-4 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                    Student Attendance Stats Statistics
                                    </div>
                                    <div>
                                        <button type="button" className="ti-btn ti-btn-primary 1 !text-[0.85rem] !m-0 !font-medium">View All</button>
                                    </div>
                                </div>
                                <div className="box-body !my-2 !py-6 !px-2">
                                    <div id="sessions">
                                     <Simpledonut />
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
                        <div className="xxl:col-span-4 xl:col-span-4 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Expense Attendance Stats Statistics
                                    </div>
                                    <div>
                                        <button type="button" className="ti-btn ti-btn-primary 1 !text-[0.85rem] !m-0 !font-medium">View All</button>
                                    </div>
                                </div>
                                <div className="box-body !my-2 !py-6 !px-2">
                                    <div id="sessions">
                                        <Simpledonut/>
                                    </div>
                                </div>
                                {/* <div className="box-footer !p-0">
                                    <div className="grid grid-cols-12 justify-center">
                                        <div className="col-span-3 pe-0 text-center">
                                            <div className="sm:p-4  p-2 ">
                                                <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem]">Vegitables</span>
                                                <span className="block text-[1rem] font-semibold">20%</span>
                                            </div>
                                        </div>
                                        <div className="col-span-3 px-0 text-center">
                                            <div className="sm:p-4 p-2">
                                                <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem]">Fruits</span>
                                                <span className="block text-[1rem] font-semibold">30%</span>
                                            </div>
                                        </div>
                                        <div className="col-span-3 px-0 text-center">
                                            <div className="sm:p-4 p-2 ">
                                                <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem]">Meat</span>
                                                <span className="block text-[1rem] font-semibold">40%</span>
                                            </div>
                                        </div>
                                        <div className="col-span-3 px-0 text-center">
                                            <div className="sm:p-4 p-2">
                                                <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem]">Others</span>
                                                <span className="block text-[1rem] font-semibold">10%</span>
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div> */}
                            </div>
                        </div> 
                    </div>
                </div>
               
            </div>

            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xxl:col-span-4 xl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                       Student Attendance Stats Statistics
                                    </div>
                                    <div>
                                        <button type="button" className="ti-btn ti-btn-primary 1 !text-[0.85rem] !m-0 !font-medium">View All</button>
                                    </div>
                                </div>
                                <div className="box-body !my-2 !py-6 !px-2">
                                    <div id="sessions">
                                    <Linechartwithlabels/>
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
                        
                    </div>
                </div>
               
            </div>
  </Fragment>
);}

export default Analytics;
