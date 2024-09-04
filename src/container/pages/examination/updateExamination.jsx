import React, { useState } from 'react'
import { singleselect } from '../../forms/formelements/formselect/formselectdata'
import Select from 'react-select';
import { Link, useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { setHours, setMinutes } from "date-fns";
import { useForm, useController, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';



const schema = yup.object({
    examName: yup.string().nullable().required("Please Select Exam Name"),
    examType: yup.string().nullable().required("Please Enter Exam Type "),
    fromDate: yup.string().nullable().required("Please Select From Date "),
    toDate: yup.string().nullable().required("Please Select To Date "),
    totalAppearedStudent: yup.string().nullable().required("Please Enter Total Student Appearance "),
    passedStudent: yup.string().nullable().required("Please Enter Passed Students "),
    failedStudent: yup.string().nullable().required("Please Enter Failed Students "),

});


const UpdateExamination = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
const [data, setData] = useState([]);
    const { register, handleSubmit, formState, control, setValue, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const navigate = useNavigate()
    const params = useParams()
    console.log(params, "UpdateExam")

    const { field: { value: examTypeValue, onChange: examTypeOnChange, ...restexamTypeField } } = useController({ name: 'examType', control });
    // const { field: { value: mealTypeValue, onChange: mealTypeOnChange, ...restmealTypeField } } = useController({ name: 'mealType', control });

    const { errors } = formState;

    const onSubmit = (formData) => {
        // setData({...formData})
        // axios.post(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Exam`, formData)
        // .then((res)=>{
        //     console.log(res)
        //     if(res.status === 200){
        //         navigate(`${import.meta.env.BASE_URL}pages/examination/examinationList`)
        //         toast.success("Diet Data Created Successfuly")
        //     }

        // })
        // .catch((err) => {
        //     console.log(err)
        // })
    }



  return (
    <div>
    <h4 className='pt-4 borderBottom'>Examination</h4>
    <div className="breadcrumbs-wrapper mb-4 pt-2">
        <div className='staff-createflex-container'>
            <div className='flex flex-row items-center'>

                

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
                            <Link className="flex items-center text-primary hover:text-primary dark:text-primary" to={`${import.meta.env.BASE_URL}pages/examination/examinationList`}>
                                Exam
                                <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-black-300 dark:text-white/10 rtl:rotate-180"
                                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </Link>
                        </li>

                        <li className="text-sm text-gray-500 dark:text-[#8c9097] dark:text-white/50 hover:text-primary truncate" aria-current="page">
                            Update Exam
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    {/* Student form create Start */}
    <div className='exam-form-create'>
        <div className='box'>
            <div className='p-4'>
                    <h4 className=''>Update Exam</h4>
                    <h6 className='pt-4'>Exam Details</h6>
                    <form onSubmit={handleSubmit(onSubmit)}>

                <div className='examleave-details mb-4'>
                    <div className='grid grid-cols-12 sm:gap-6 pt-4'>
                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                        <label className="ti-form-select rounded-sm !p-0 mb-2">Exam Type<span className='redText'>*</span></label>
                        <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} value={examTypeValue ? singleselect.find(x => x.value === examTypeValue) : examTypeValue}
                                            onChange={option => examTypeOnChange(option ? option.value : option)}
                                            {...restexamTypeField} />
                                        {errors.examType && <p className='errorTxt'>{errors.examType.message}</p>}
                    </div>
                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Exam Name<span className='redText'>*</span>:</label>
                            <input type="text" {...register('examName')} name='examName' className="form-control" id="input-text" placeholder="" />
                            {errors.examName && <p className='errorTxt'>{errors.examName.message}</p>}
                            </div>
                    </div>
                    <div className='grid grid-cols-12 sm:gap-6 pt-4'>
                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">From Date<span className='redText'>*</span></label>
                            <div className="input-group !flex-nowrap">
                                <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                                <Controller
                                                name="fromDate"
                                                control={control}
                                                render={({ field }) => (
                                                    <DatePicker
                                                        {...field}
                                                        selected={startDate}
                                                        onChange={(date) => {
                                                            setStartDate(date);
                                                            field.onChange(date);
                                                        }}
                                                        
                                                    />
                                                )}
                                            />
                                {/* <DatePicker placeholderText="Choose date" className="ti-form-input  focus:z-10" showIcon selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                            </div>
                        </div>

                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">To Date<span className='redText'>*</span></label>
                            <div className="input-group !flex-nowrap">
                                <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                                <Controller
                                                name="toDate"
                                                control={control}
                                                render={({ field }) => (
                                                    <DatePicker
                                                        {...field}
                                                        selected={endDate}
                                                        onChange={(date) => {
                                                            setEndDate(date);
                                                            field.onChange(date);
                                                        }}
                                                    />
                                                )}
                                            />
                                {/* <DatePicker placeholderText="Choose date" className="ti-form-input  focus:z-10" showIcon selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                            </div>
                        </div>

                    </div>
                    {/* End of the grid */}

                    <div className='grid grid-cols-12 sm:gap-6 pt-4'>
                    
                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Total Student<span className='redText'>*</span></label>
                            <input type="text" {...register('totalAppearedStudent')} name='totalAppearedStudent' className="form-control" id="input-text" placeholder="" />
                            {errors.totalAppearedStudent && <p className='errorTxt'>{errors.totalAppearedStudent.message}</p>}

                            </div>
                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Passed Student<span className='redText'>*</span></label>
                            <input type="text" {...register('passedStudent')} name='passedStudent' className="form-control" id="input-text" placeholder="" />
                            {errors.passedStudent && <p className='errorTxt'>{errors.passedStudent.message}</p>}

                            </div>
                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Failed Student<span className='redText'>*</span></label>
                            <input type="text" {...register('failedStudent')} name='failedStudent' className="form-control" id="input-text" placeholder="" />
                            {errors.failedStudent && <p className='errorTxt'>{errors.failedStudent.message}</p>}

                            </div>
                    </div>


                </div>

                <div className='exam-create-btn pt-4'>
                    <div className='flex justify-end'>
                        <button type="submit" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave">Save</button>
                        <div className='backButton'>
                    <Link to={`${import.meta.env.BASE_URL}pages/examination/examinationList`}>

                        <button type="button" className="ti-btn ti-btn-info-full ml-15 !rounded-full ti-btn-wave">Back</button>
                    </Link>
                </div>
                    </div>
                </div>
                </form>
            </div>
        </div>
        {/* Student form create end */}
    </div>
</div>
  )
}

export default UpdateExamination