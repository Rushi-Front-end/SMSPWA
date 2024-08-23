import { Fragment } from 'react';
import Pageheader from '../../../components/common/pageheader/pageheader';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { singleselect } from '../../forms/formelements/formselect/formselectdata';
import CreateClass from './createClass';
import CreateSection from './createSection';
import SchoolDetailsTable from './schoolDetailsTable';
import RolesPermissionTable from './rolesPermissionTable';
import CreateRole from './createRole';
import TimeTableTabs from './timeTableTabs';
import SubjectTable from './subjectTable';
import SubjectCreateForm from './subjectCreateForm';


const SchoolsDetails = () => {
    return (
        <Fragment>


            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xxl:col-span-12 xl:col-span-12 col-span-12">

                            <h4>School Details</h4>
                            <div className="school-flex-container m-4">
                                <div className='flex flex-row items-center'>
                                    <div className='backButton'>
                                        <Link to={`${import.meta.env.BASE_URL}pages/schools/schoolsDetails`}>

                                            <button type="button" className="ti-btn ti-btn-info-full ti-btn-wave">Back</button>
                                        </Link>
                                    </div>
                                    {/* <div className="breadcrumbs self-center">
                                        <h6>Dashboard -  Schools - Ashram School Details </h6>
                                    </div> */}
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
                            <li className="text-sm">
                                    <Link className="flex items-center text-primary hover:text-primary dark:text-primary" to={`${import.meta.env.BASE_URL}pages/schools/allSchools`}>
                                        Schools
                                        <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-300 dark:text-white/10 rtl:rotate-180"
                                            width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </Link>
                                </li>

                            <li className="text-sm text-gray-500 dark:text-[#8c9097] dark:text-white/50 hover:text-primary truncate" aria-current="page">
                            Ashram School Details 
                            </li>
                        </ol>
                    </div>

                                </div>


                            </div>

                            <div className="box">

                                <div id="sessions">
                                    {/*  */}
                                    <div className="box-body">
                                        <div className="border-b-2 border-gray-200 dark:border-white/10">
                                            <nav className="-mb-0.5 flex space-x-6 rtl:space-x-reverse">
                                                <Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor  dark:text-[#8c9097] dark:text-white/50 hover:text-primary active" to="#" id="underline-item-1" data-hs-tab="#underline-1" aria-controls="underline-1">
                                                    Details
                                                </Link>
                                                <Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor  dark:text-[#8c9097] dark:text-white/50 hover:text-primary " to="#" id="underline-item-2" data-hs-tab="#underline-2" aria-controls="underline-2">
                                                    Classes
                                                </Link>
                                                <Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor  dark:text-[#8c9097] dark:text-white/50 hover:text-primary" to="#" id="underline-item-3" data-hs-tab="#underline-3" aria-controls="underline-3">
                                                    Roles & Permissions
                                                </Link>
                                                <Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor  dark:text-[#8c9097] dark:text-white/50 hover:text-primary" to="#" id="underline-item-4" data-hs-tab="#underline-4" aria-controls="underline-4">
                                                    Timetables
                                                </Link>
                                                <Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor  dark:text-[#8c9097] dark:text-white/50 hover:text-primary" to="#" id="underline-item-5" data-hs-tab="#underline-5" aria-controls="underline-5">
                                                    Subjects
                                                </Link>
                                            </nav>
                                        </div>

                                        <div className="mt-3">
                                            <div id="underline-1"  role="tabpanel" aria-labelledby="underline-item-1">
                                                <div className='flex-container'>
                                                    <div className="flex justify-end">
                                                        <Link to={`${import.meta.env.BASE_URL}pages/schools/createSchool`}>
                                                        <button type="button" className="ti-btn ti-btn-outline-secondary !rounded-full ti-btn-wave">+ Edit School</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className='school-deatils-table'>
                                                    <h6>School Details</h6>
                                                    <SchoolDetailsTable />
                                                </div>
                                               
                                            </div>
                                            <div id="underline-2" className="hidden" role="tabpanel" aria-labelledby="underline-item-2">
                                                <div className="grid grid-cols-12  gap-4">
                                                    <div className="col-span-12 xl:col-span-8">
                                                        <div className='p-5 border rounded-sm dark:border-white/10 border-gray-200'>
                                                            <div className="table-responsive">
                                                                <table className="table whitespace-nowrap table-sm min-w-full">
                                                                    <thead><tr className="border-b border-defaultborder">
                                                                        <th scope="col" className="text-start">Sl No.</th>
                                                                        <th scope="col" className="text-start">Name</th>
                                                                        <th scope="col" className="text-start">Class Teacher</th>
                                                                        <th scope="col" className="text-start">Description</th>
                                                                        <th scope="col" className="text-start">Status</th>
                                                                        <th scope="col" className="text-start">Action</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr className="border-b border-defaultborder">
                                                                            <td>1</td>
                                                                            <td>5th Class</td>
                                                                            <td>Pratik Kale</td>
                                                                            <td>Test</td>
                                                                            <td>
                                                                            <span className="badge bg-success text-white">Active</span></td>
                                                                            <td><div className="hstack flex gap-3 
 text-[.9375rem]">
    <button type="button" className="ti-btn ti-btn-outline-danger !rounded-full ti-btn-wave">Disable</button>
    <button type="button" className="ti-btn ti-btn-outline-secondary !rounded-full ti-btn-wave">Edit</button>
                                                                            </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr className="border-b border-defaultborder">
                                                                            <td></td>
                                                                            <td>5th Class</td>
                                                                            <td>Pratik Kale</td>
                                                                            <td>Test</td>
                                                                            <td>
                                                                            <span className="badge bg-success text-white">Active</span></td>
                                                                            <td><div className="hstack flex gap-3 
 text-[.9375rem]">
    <button type="button" className="ti-btn ti-btn-outline-danger !rounded-full ti-btn-wave">Disable</button>
    <button type="button" className="ti-btn ti-btn-outline-secondary !rounded-full ti-btn-wave">Edit</button>
                                                                            </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr   className="border-b border-defaultborder">
                                                                          <td colSpan="6">
                                                                            <div className='flex justify-end pt-2'>
                                                                            <button type="button" className="ti-btn ti-btn-secondary-full !rounded-full ti-btn-wave">+ Add Section</button>
                                                                            </div>
                                                                            </td>
                                                                        </tr>

                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-span-12 xl:col-span-4">
                                                        
                                                       <CreateClass />
                                                       {/* <CreateSection/> */}
                                                    </div>
                                                </div>

                                            </div>
                                            <div id="underline-3" className="hidden" role="tabpanel" aria-labelledby="underline-item-3">
                                            <div className="grid grid-cols-12  gap-4">
                                                    <div className="col-span-12 xl:col-span-8">
                                                        <RolesPermissionTable />
                                                    </div>
                                                    <div className="col-span-12 xl:col-span-4">
                                                        
                                                       <CreateRole/>
                                                       {/* <CreateSection/> */}
                                                    </div>
                                                </div>

                                            </div>
                                            <div id="underline-4" className="hidden" role="tabpanel" aria-labelledby="underline-item-4">
                                               <div className='box'>
                                               <div className="box-body">
                                                    <h6>Select Criteria</h6>
                                                    <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12 pt-4">
            {/* <label className="ti-form-select rounded-sm !p-0 ">Section Class Teacher</label> */}
            <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
        </div>
                                                </div>
                                               </div>
                                               <div className='time-tables-wrap'>
                                                    <TimeTableTabs />
                                               </div>
                                            </div>
                                            <div id="underline-5" className="hidden" role="tabpanel" aria-labelledby="underline-item-5">
                                            <div className="grid grid-cols-12  gap-4">
                                                    <div className="col-span-12 xl:col-span-8">
                                                        <SubjectTable />
                                                    </div>
                                                    <div className="col-span-12 xl:col-span-4">
                                                        
                                                       <SubjectCreateForm/>
                                                       {/* <CreateSection/> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*  */}

                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>


        </Fragment>
    );
}

export default SchoolsDetails;
