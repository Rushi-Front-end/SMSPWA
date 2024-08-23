import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import { singleselect } from '../../forms/formelements/formselect/formselectdata'
import Select from 'react-select';

const TimeInnerTable = () => {
    const [startDate4, setStartDate4] = useState(new Date());
  return (
    <div>
          <div className="table-responsive pt-2">
                <table className="table whitespace-nowrap table-sm min-w-full">
                    <thead><tr className="border-b border-defaultborder">
                        <th scope="col" className="text-start">Sl No.</th>
                        <th scope="col" className="text-start">Type</th>
                        <th scope="col" className="text-start">	Subject</th>
                        <th scope="col" className="text-start">Teacher</th>
                        <th scope="col" className="text-start">Start Time</th>
                        <th scope="col" className="text-start">End Time</th>
                        <th scope="col" className="text-start">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-defaultborder">
                            <td>1</td>
                            <td>
                                <div>
                                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                         <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
                         </div>
                                </div>
                            </td>
                            <td>
                                <div>
                                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                         <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
                         </div>
                                </div>
                            </td>
                            <td>
                                <div>
                                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                         <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
                         </div>
                                </div>
                            </td>
                            <td>
                                <div>
                                <div className="form-group">
                                <div className="input-group !flex-nowrap">
                                    <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-time-line"></i> </div>
                                    <DatePicker className="ti-form-input  focus:z-10" selected={startDate4} onChange={(date) => setStartDate4(date)} showTimeSelect showTimeSelectOnly timeIntervals={15} timeCaption="Time" dateFormat="h:mm aa" />
                                </div>
                            </div>
                                </div>
                            </td>
                            
                            <td>
                                <div>
                                <div className="form-group">
                                <div className="input-group !flex-nowrap">
                                    <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-time-line"></i> </div>
                                    <DatePicker className="ti-form-input  focus:z-10" selected={startDate4} onChange={(date) => setStartDate4(date)} showTimeSelect showTimeSelectOnly timeIntervals={15} timeCaption="Time" dateFormat="h:mm aa" />
                                </div>
                            </div>
                                </div>
                            </td>
                            
                            <td>
                                <div className='action-button-delete'>
                                Delete
                                </div>
                            </td>

                        </tr>

                    </tbody>
                </table>
            </div>
            <div className='time-button-group time-flex-container pt-4 pb-4'>
                <div className='flex justify-between'>
                    <div className='save-btn'>
                    <button type="button" className="ti-btn ti-btn-success-full !rounded-full ti-btn-wave">Save</button>
                    </div>
                    <div className='addNew-btn'>
                    <button type="button" className="ti-btn ti-btn-secondary-full !rounded-full ti-btn-wave">Add New</button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default TimeInnerTable
