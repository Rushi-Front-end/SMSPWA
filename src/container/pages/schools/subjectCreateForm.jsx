import React from 'react'
import Select from 'react-select';
import { singleselect } from '../../forms/formelements/formselect/formselectdata';
const SubjectCreateForm = (props) => {
  return (
    <div className='p-5 border rounded-sm dark:border-white/10 border-gray-200'>
    {/* <h3>Create Subject</h3> */}
    {props.dataFromChildSubject === true ? <h3>Update Subject</h3> : <h3>Create Subject</h3>}
    <hr />
    <div className='form-handling-sec pt-4'>
        
        <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12 pt-4">
            <label htmlFor="input-text" className="form-label">Subject*</label>
            <input type="text" className="form-control" id="input-text" placeholder="Enter Subject" />
        </div>
        
        <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12 pt-4">
            <label htmlFor="input-text" className="form-label">Subject Code*</label>
            {/* <input type="text" className="form-control" id="input-text" placeholder="Enter Subject Code" /> */}
            <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />

        </div>
        <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12 pt-4">
            <label htmlFor="input-text" className="form-label">Subject Type*</label>
            {/* <input type="text" className="form-control" id="input-text" placeholder="Enter Subject Code" /> */}
            <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />

        </div>

            {/* <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12 pt-4 pb-2">
                <label htmlFor="input-text" className="form-label">Description</label>
                <textarea className="form-control" id="text-area" placeholder='Enter Description' rows="4" spellCheck="false"></textarea>
            </div> */}
        <hr />
        <div className='createSchool-btn pt-4'>
            <div className='flex justify-end'>
                <button type="button" onClick={()=>props.setDataFromChildSubject(false)} className="ti-btn ti-btn-ghost-orange !rounded-full ti-btn-wave">Cancel</button>
                <button type="button" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave">
                {props.dataFromChildSubject === true ? 'Update' : 'Create'}
                </button>
            </div>
        </div>
    </div>
</div>
  )
}

export default SubjectCreateForm
