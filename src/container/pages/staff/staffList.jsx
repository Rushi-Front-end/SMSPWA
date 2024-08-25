import React from 'react'
import { Link } from 'react-router-dom';
import StaffCardDetails from './staffCardDetails';
import StaffRolesPermission from './staffRolesPermission';

const StaffList = () => {
    return (
        <div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xxl:col-span-4 xl:col-span-12 col-span-12">

                            <h4 className='pt-4'>Staff Details</h4>
                            <div className="staff-flex-container">
                                <div className='flex flex-row items-center'>
                                    {/* <div className='backButton'>
                                        <Link to={`${import.meta.env.BASE_URL}pages/staff/staffDetails`}>

                                            <button type="button" className="ti-btn ti-btn-info-full ti-btn-wave">Back</button>
                                        </Link>
                                    </div> */}
                                    <div className="breadcrumbs self-center">
                                        <div className="breadcrumbs !border-0 pb-4">
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
                                                    <Link className="flex items-center text-primary hover:text-primary dark:text-primary" to={`${import.meta.env.BASE_URL}pages/staff/staffDetails`}>
                                                        Staffs
                                                        <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-black-300 dark:text-white/10 rtl:rotate-180"
                                                            width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                        </svg>
                                                    </Link>
                                                </li>

                                                <li className="text-sm text-gray-500 dark:text-[#8c9097] dark:text-white/50 hover:text-primary truncate" aria-current="page">
                                                    Staff Details
                                                </li>
                                            </ol>
                                        </div>
                                    </div>

                                </div>


                            </div>

                            <div className="box">

                                <div id="sessions">
                                    {/*  */}
                                    <div className="box-body">
                                        <div className="border-b-2 border-gray-200 dark:border-white/10">
                                            <nav className="-mb-0.5 flex space-x-6 rtl:space-x-reverse">
                                                <Link className="hs-tab-active:font-semibold hs-tab-active:border-warning hs-tab-active:text-warning py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor  dark:text-[#8c9097] dark:text-white/50 hover:text-warning active" to="#" id="underline-item-1" data-hs-tab="#underline-1" aria-controls="underline-1">
                                                    Staff Details
                                                </Link>
                                                <Link className="hs-tab-active:font-semibold hs-tab-active:border-warning hs-tab-active:text-warning py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor  dark:text-[#8c9097] dark:text-white/50 hover:text-warning " to="#" id="underline-item-2" data-hs-tab="#underline-2" aria-controls="underline-2">
                                                    Assign Roles & Permission
                                                </Link>

                                            </nav>
                                        </div>

                                        <div className="mt-3">
                                            <div id="underline-1" role="tabpanel" aria-labelledby="underline-item-1">
                                                <div className='flex-container'>
                                                    <div className="flex justify-end">
                                                        <Link to={`${import.meta.env.BASE_URL}pages/staff/createStaff`}>

                                                            <button type="button" className="ti-btn ti-btn-outline-warning !rounded-full ti-btn-wave pr-2">Edit Staff</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className='school-deatils-table'>
                                                    <h6 className='pb-4'>Staff  Details</h6>
                                                    <StaffCardDetails />
                                                </div>

                                            </div>
                                            <div id="underline-2" className="hidden" role="tabpanel" aria-labelledby="underline-item-2">
                                                <div className='staffRoles-wrapper'>
                                                    <StaffRolesPermission />
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

        </div>
    )
}

export default StaffList
