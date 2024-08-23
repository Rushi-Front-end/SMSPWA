import React from 'react'
import { Link } from 'react-router-dom';
import CreateAcademicYear from './createAcademicYear';


const Settings = () => {
  return (
    <div className="grid grid-cols-12 gap-x-6">
    <div className="xl:col-span-12 col-span-12">
        <div className="grid grid-cols-12 gap-x-6">
            <div className="xxl:col-span-4 xl:col-span-12 col-span-12">

                <h4 className='pt-4 pb-4'>Settings</h4>
                

                <div className="box">

                    <div id="sessions">
                        {/*  */}
                        <div className="box-body">
                            <div className="border-b-2 border-gray-200 dark:border-white/10">
                                <nav className="-mb-0.5 flex space-x-6 rtl:space-x-reverse">
                                    <Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor  dark:text-[#8c9097] dark:text-white/50 hover:text-primary active" to="#" id="underline-item-1" data-hs-tab="#underline-1" aria-controls="underline-1">
                                    Academic Years
                                    </Link>
                                    <Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor  dark:text-[#8c9097] dark:text-white/50 hover:text-primary " to="#" id="underline-item-2" data-hs-tab="#underline-2" aria-controls="underline-2">
                                    Complaints
                                    </Link>
                                    <Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor  dark:text-[#8c9097] dark:text-white/50 hover:text-primary" to="#" id="underline-item-3" data-hs-tab="#underline-3" aria-controls="underline-3">
                                    Outpasses
                                    </Link>
                                   
                                </nav>
                            </div>

                            <div className="mt-3">
                                <div id="underline-1" role="tabpanel" aria-labelledby="underline-item-1">
                                <div className="grid grid-cols-12  gap-4">
                                        <div className="col-span-12 xl:col-span-8">
                                            <div className='p-5 border rounded-sm dark:border-white/10 border-gray-200'>
                                                <div className="table-responsive">
                                                    <table className="table whitespace-nowrap table-sm min-w-full">
                                                        <thead><tr className="border-b border-defaultborder">
                                                            <th scope="col" className="text-start">Sl No.</th>
                                                            <th scope="col" className="text-start">Name</th>
                                                            <th scope="col" className="text-start">Duration</th>
                                                            <th scope="col" className="text-start">Status</th>
                                                            <th scope="col" className="text-start">Action</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className="border-b border-defaultborder">
                                                                <td>1</td>
                                                                <td>Pratik Kale</td>
                                                                <td>01 Jun 2024 - 31 Mar 2025</td>
                                                                <td>
                                                                <span className="badge bg-success text-white">Active</span></td>
                                                                <td><div className="hstack flex gap-3 
text-[.9375rem]">
<button type="button" className="ti-btn ti-btn-outline-danger !rounded-full ti-btn-wave">Disable</button>
<button type="button" className="ti-btn ti-btn-outline-secondary !rounded-full ti-btn-wave">Edit</button>
                                                                </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>

                                                                <p>Description: 2024-25 desc</p>
                                                                </td>
                                                            </tr>
                                                           
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-12 xl:col-span-4">
                                            
                                           <CreateAcademicYear/>
                                           {/* <CreateSection/> */}
                                        </div>
                                    </div>
                                   
                                </div>
                                <div id="underline-2" className="hidden"  role="tabpanel" aria-labelledby="underline-item-2">
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
  )
}

export default Settings