import React from 'react'
import { singleselect } from '../../forms/formelements/formselect/formselectdata'
import Select from 'react-select';
import { Link, useNavigate } from 'react-router-dom';
import Pageheader from '../../../components/common/pageheader/pageheader';

const CreateComplaint = () => {
  return (
    <div>
        <h4 className='pt-4 borderBottom'>Create Complaints Request</h4>
    <div className="breadcrumbs mb-4 pt-2">
         <div className='complaint-createflex-container'>
             <div className='flex flex-row mb-4 items-center'>
                 
                
                 
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
                                <Link className="flex items-center text-primary hover:text-primary dark:text-primary" to={`${import.meta.env.BASE_URL}pages/extraFeatures/complaints`}>
                                Complaints
                                    <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-black-300 dark:text-white/10 rtl:rotate-180"
                                        width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </Link>
                            </li>

                            <li className="text-sm text-gray-500 dark:text-[#8c9097] dark:text-white/50 hover:text-primary truncate" aria-current="page">
                            Create
                            </li>
                        </ol>
                    </div>
             </div>
         </div>
    </div>
    {/* Student form create Start */}
    <div className='complaint-form-create'>
     <div className='box p-4 ' >
         
         <div className='compalintcreate-details mb-4'>
         <h4 className=' pb-2'>Create Complaints</h4>
             {/* <h6 className=' pb-2'>Select</h6> */}
             <div className='grid grid-cols-12 sm:gap-6'>
                 <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
                     <label className="ti-form-select rounded-sm !p-0 mb-2">Select Subject</label>
                     <Select className="place-holder" classNamePrefix='react-select' options={singleselect} />
                 </div>
                 <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
                     <label className="ti-form-select rounded-sm !p-0 mb-2">Document Type</label>
                     <Select className="place-holder" classNamePrefix='react-select' options={singleselect} />
                 </div>

                 <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
                     <label className="ti-form-select rounded-sm !p-0 mb-2">Attach Document</label>
                     <input type="file" className="form-control" id="input-file" />
                 </div>
                 <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
                     <label className="ti-form-select rounded-sm !p-0 mb-2">Document No.</label>
                     <input type="text" className="form-control" id="input-text" />
                 </div>

                 <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
                     <label className="ti-form-select rounded-sm !p-0 mb-2">Expiry Date</label>
                     <input type="date" className="form-control" id="input-date" />
                 </div>
                 {/* <hr className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12" />
                 <div className='complaint-save-btn xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12'>
             <div className='flex justify-end'>
             <button type="button" className="ti-btn ti-btn-secondary-full !rounded-full ti-btn-wave" >Save</button>
             </div>
         </div> */}
                 <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12 ">
                     <label className="ti-form-select rounded-sm !p-0 mb-2">Comment</label>
                     <textarea className="form-control" rows={5} />
                 </div>
             </div>
         </div>
            {/* <hr /> */}

         <div className='complaint-create-btn'>
             <div className='flex justify-end'>
             <button type="button" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave" >Create</button>
             <div className='backButton'>                
                     <Link to={`${import.meta.env.BASE_URL}pages/extraFeatures/complaints`} className="product-image">
                         <button type="button" className="ti-btn ti-btn-info-full ml-15 !rounded-full ti-btn-wave">Back</button>
                     </Link>
                 </div>
             </div>
         </div>
     </div>
    </div>
    {/* Student form create end */}
 </div>
  )
}

export default CreateComplaint