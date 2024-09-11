import React, { useContext, useState } from 'react'
import { prakalpName, singleselect } from '../../forms/formelements/formselect/formselectdata'
import Select from 'react-select';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { useForm, useController, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { IdContext } from '../../../components/common/context/idContext';

const formatDate = (date) => {
    if (!date) return '';
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};
const schema = yup.object({
    
    examName: yup.string().nullable().required("Please Enter Exam Name"),
    fromDate: yup.string().nullable().required("Please Select From Date "),
    toDate: yup.string().nullable().required("Please Select To Date "),
    prakalpName: yup.string().nullable().required("Please Enter Prakalp Name "),
    schoolName: yup.string().nullable().required("Please Enter Invoice Number "),
});

const Reports = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [startDate1, setStartDate1] = useState(new Date());
    const [data, setData] = useState([]);
    const { register, handleSubmit, formState, control, setValue, reset } = useForm({
        resolver: yupResolver(schema)
    });
    const { errors } = formState;

    const schoolIdDrop = useContext(IdContext);
    console.log(schoolIdDrop.id,"UseCONTEXT")


    const { field: { value: prakalpNameValue, onChange: prakalpNameOnChange, ...restprakalpNameField } } = useController({ name: 'prakalpName', control });
    const { field: { value: examNameValue, onChange: examNameOnChange, ...restexamNameField } } = useController({ name: 'examName', control });
    const { field: { value: schoolNameValue, onChange: schoolNameOnChange, ...restschoolNameField } } = useController({ name: 'schoolName', control });

    const onSubmit = (formData) => {
        console.log(fromData, "Reports Data")
    }

    return (
        <div>
            <h4 className='pt-4 borderBottom'>Reports</h4>
            <div className="breadcrumbs-wrapper mb-4 pt-2">
                <div className='report-flex-container'>
                    <div className='flex flex-row '>
                        
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

                            <li className="text-sm text-gray-500 dark:text-[#8c9097] dark:text-white/50 hover:text-primary truncate" aria-current="page">
                                Reports
                            </li>
                        </ol>
                    </div>
                    </div>
                </div>
            </div>
            {/* Student form create Start */}
            <div className='student-form-create'>
                <div className='box p-4 ' >
                    <h4 className=' pb-2'> Reports List</h4>
                    <div className='report-details mb-4'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid grid-cols-12 sm:gap-6 pt-4'>
                            <div className="report-generate-dropdown xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Prakalpa Name<span className='redText'>*</span></label>
                                <Select className="!p-0 place-holder" classNamePrefix='react-select' options={prakalpName} value={prakalpNameValue ? prakalpName.find(x => x.value === prakalpNameValue) : prakalpNameValue}
                                            onChange={option => {prakalpNameOnChange(option ? option.value : option); }}
                                            {...restprakalpNameField} />
                                        {errors.prakalpName && <p className='errorTxt'>{errors.prakalpName.message}</p>}
                            </div>
                            <div className="report-generate-dropdown xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">School Name<span className='redText'>*</span></label>
                                <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} value={examNameValue ? singleselect.find(x => x.value === examNameValue) : examNameValue}
                                            onChange={option => {examNameOnChange(option ? option.value : option); }}
                                            {...restexamNameField} />
                                        {errors.examName && <p className='errorTxt'>{errors.examName.message}</p>}
                            </div>

                            <div className="xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
                                    <label className="ti-form-select rounded-sm !p-0 mb-2">Expense Date<span className='redText'>*</span></label>
                                    <div className="input-group !flex-nowrap">
                                        <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                                        <Controller
                                                name="from"
                                                control={control}
                                                render={({ field }) => (
                                                    <DatePicker
                                                        {...field}
                                                        selected={startDate}
                                                        dateFormat="dd/MM/yyyy"
                                                        showMonthDropdown="true"
                                                        showYearDropdown="true" 

                                                        onChange={(date) => {
                                                            setStartDate(date);
                                                            field.onChange(formatDate(date));
                                                        }}
                                                        
                                                    />
                                                )}
                                            />
                                    </div>
            {/* {errors.date && <p className='errorTxt'>{errors.date.message}</p>} */}

                                </div>
                            <div className="xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
                                    <label className="ti-form-select rounded-sm !p-0 mb-2">Expense Date<span className='redText'>*</span></label>
                                    <div className="input-group !flex-nowrap">
                                        <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                                        <Controller
                                                name="to"
                                                control={control}
                                                render={({ field }) => (
                                                    <DatePicker
                                                        {...field}
                                                        selected={startDate1}
                                                        dateFormat="dd/MM/yyyy"
                                                        showMonthDropdown="true"
                                                        showYearDropdown="true" 

                                                        onChange={(date) => {
                                                            setStartDate1(date);
                                                            field.onChange(formatDate(date));
                                                        }}
                                                        
                                                    />
                                                )}
                                            />
                                    </div>
            {/* {errors.date && <p className='errorTxt'>{errors.date.message}</p>} */}

                                </div>


                            <div className="report-generate-dropdown xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Report Type<span className='redText'>*</span></label>
                                <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} value={schoolNameValue ? singleselect.find(x => x.value === schoolNameValue) : schoolNameValue}
                                            onChange={option => {schoolNameOnChange(option ? option.value : option); }}
                                            {...restschoolNameField} />
                                        {errors.schoolName && <p className='errorTxt'>{errors.examName.message}</p>}
                            </div>
                            <div className="report-button self-center ml-15 ">
                                <div className='report-create-btn'>
                                    <button type="submit" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave">Generate Report</button>
                                </div>
                            </div>



                        </div>
                        </form>
                    </div>






                </div>
            </div>
            {/* Student form create end */}
        </div>
    )
}

export default Reports