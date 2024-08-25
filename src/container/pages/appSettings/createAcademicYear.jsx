import React, { useState } from 'react'
import DatePicker from 'react-datepicker';


const CreateAcademicYear = () => {
    const [startDate, setStartDate] = useState(new Date());

  return (
    <div className='p-5 border rounded-sm dark:border-white/10 border-gray-200'>
    <h4>Create Academic Year</h4>
    <hr />
    <div className='form-handling-sec pt-4'>
        <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
            <label className="ti-form-select rounded-sm !p-0 ">Start Date*</label>
            <div className="input-group !flex-nowrap">
                        <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                        <DatePicker placeholderText="Choose date" className="ti-form-input  focus:z-10" showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
        </div>
        <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12 pt-4">
            <label htmlFor="input-text" className="form-label">End Date*</label>
            <div className="input-group !flex-nowrap">
                        <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                        <DatePicker placeholderText="Choose date" className="ti-form-input  focus:z-10" showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
        </div>
        

        <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12 pt-4 pb-2">
            <label htmlFor="input-text" className="form-label">Description</label>
            <textarea className="form-control" id="text-area" placeholder='Enter Description' rows="4" spellCheck="false"></textarea>
        </div>
        <hr />
        <div className='createSchool-btn pt-4'>
            <div className='flex justify-end'>
                {/* <button type="button" className="ti-btn ti-btn-ghost-orange !rounded-full ti-btn-wave">Cancel</button> */}
                <button type="button" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave">Create</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default CreateAcademicYear