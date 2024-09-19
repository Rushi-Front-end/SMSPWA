import React, { useContext, useEffect, useState } from 'react'
import { dietDay, mealType, singleselect } from '../../forms/formelements/formselect/formselectdata'
import Select from 'react-select';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { setHours, setMinutes } from "date-fns";
import { useForm, useController, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { IdContext, useSchoolId } from '../../../components/common/context/idContext';



const schema = yup.object({
    dayOfWeek: yup.string().nullable().required("Please Select Day"),
    mealType: yup.string().nullable().required("Please Select Meal Type "),
    // fromDate: yup.string().nullable().required("Please Select From Date "),
    // toDate: yup.string().nullable().required("Please Select To Date "),
    menuItems: yup.string().nullable().required("Please Enter Menu Items "),
    totalCalories: yup.string().nullable().required("Please Enter Calories Intake "),
    mealTime: yup.string().nullable().required("Please Enter meal Time "),

});


const CreateDiet = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
const [data, setData] = useState([]);
const [schoolIdCont, setSchoolIdCont] = useState([])
    const { register, handleSubmit, formState, control, setValue, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const navigate = useNavigate()
    // const schoolIdDrop = localStorage.getItem('schoolId');
    const {id: schoolId} = useSchoolId();

    // const schoolIdDrop = useContext(IdContext);
    // console.log(schoolIdDrop,"UseCONTEXT")

    const { field: { value: dayOfWeekValue, onChange: dayOfWeekOnChange, ...restdayOfWeekField } } = useController({ name: 'dayOfWeek', control });
    const { field: { value: mealTypeValue, onChange: mealTypeOnChange, ...restmealTypeField } } = useController({ name: 'mealType', control });
    // const { field: { value: fromDateValue, onChange: fromDateOnChange, ...restfromDateField } } = useController({ name: 'fromDate', control });
    // const { field: { value: toDateValue, onChange: toDateOnChange, ...resttoDateField } } = useController({ name: 'toDate', control });

    const { errors } = formState;


    const onSubmit = (formData) => {
        setData({...formData})
        axios.post(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/DietPlan/CreateDietPlan`, {...formData,
            "schoolId":schoolId
        })
        .then((res)=>{
            console.log(res)
            if(res.status === 200){

                navigate(`${import.meta.env.BASE_URL}pages/diet/dietList`)
                toast.success("Diet Data Created Successfuly")
            }

        })
        .catch((err) => {
            console.log(err)
        })
    }


    return (
        <div>
            <h4 className='pt-4 borderBottom'>Diet Plan</h4>
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
                                    <Link className="flex items-center text-primary hover:text-primary dark:text-primary" to={`${import.meta.env.BASE_URL}pages/diet/dietList`}>
                                        Diet Plan
                                        <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-black-300 dark:text-white/10 rtl:rotate-180"
                                            width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </Link>
                                </li>

                                <li className="text-sm text-gray-500 dark:text-[#8c9097] dark:text-white/50 hover:text-primary truncate" aria-current="page">
                                    Add Diet Plan
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            {/* Student form create Start */}
            <div className='staff-form-create'>
                <div className='box'>
                    <div className='p-4'>
                        <h4 className=''>Diet Form</h4>
                        <h6 className='pt-2'>Diet Details</h6>
                        <form onSubmit={handleSubmit(onSubmit)}>

                        <div className='dietDetails-details mb-4'>
                            <div className='grid grid-cols-12 sm:gap-6 pt-4'>
                                <div className="day-type-div pt-4 xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
                                    <label className="ti-form-select rounded-sm !p-0 mb-2">Day<span className='redText'>*</span></label>
                                    <Select className="!p-0 place-holder" classNamePrefix='react-select' options={dietDay} value={dayOfWeekValue ? dietDay.find(x => x.value === dayOfWeekValue) : dayOfWeekValue}
                                            onChange={option => dayOfWeekOnChange(option ? option.value : option)}
                                            {...restdayOfWeekField} />
                                        {errors.dayOfWeek && <p className='errorTxt'>{errors.dayOfWeek.message}</p>}
                                </div>
                                <div className="day-type-div pt-4 xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
                                    <label className="ti-form-select rounded-sm !p-0 mb-2">Type<span className='redText'>*</span></label>
                                    <Select className="!p-0 place-holder" classNamePrefix='react-select' options={mealType} value={mealTypeValue ? mealType.find(x => x.value === mealTypeValue) : mealTypeValue}
                                            onChange={option => mealTypeOnChange(option ? option.value : option)}
                                            {...restmealTypeField} />
                                        {errors.mealType && <p className='errorTxt'>{errors.mealType.message}</p>}
                                </div>
                                <div className="day-type-div pt-4 xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
                                    <label className="ti-form-select rounded-sm !p-0 mb-2">Meal Time<span className='redText'>*</span></label>
                                    <input type="text" {...register('mealTime')} name='mealTime'  className="form-control" id="input-text" placeholder="" />
                                    {errors.mealTime && <p className='errorTxt'>{errors.mealTime.message}</p>}
                                </div>
                            </div>
                            {/* <div className='grid grid-cols-12 sm:gap-6 pt-4'>
                                <div className="xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
                                    <label className="ti-form-select rounded-sm !p-0 mb-2">Time(From)<span className='redText'>*</span></label>
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
                                                        showTimeSelect
                                                        showTimeSelectOnly
                                                        timeIntervals={15}
                                                        timeCaption="Time"
                                                        dateFormat="h:mm aa"
                                                        className="ti-form-input focus:z-10"
                                                    />
                                                )}
                                            />
                                    </div>
                                </div>

                                <div className="xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
                                    <label className="ti-form-select rounded-sm !p-0 mb-2">Time(To)<span className='redText'>*</span></label>
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
                                                        showTimeSelect
                                                        showTimeSelectOnly
                                                        timeIntervals={15}
                                                        timeCaption="Time"
                                                        dateFormat="h:mm aa"
                                                        className="ti-form-input focus:z-10"
                                                    />
                                                )}
                                            />
                                    </div>
                                </div>

                            </div> */}
                            {/* End of the grid */}
                            <div className='grid grid-cols-12 sm:gap-6 pt-4'>

                                <div className='diet-messages  pb-2 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12'>
                                    <label className="ti-form-select rounded-sm !p-0 mb-2">Menu<span className='redText'>*</span></label>
                                    <textarea {...register('menuItems')} name='menuItems' className="form-control" id="text-area" rows="5"></textarea>
                                    {errors.menuItems && <p className='errorTxt'>{errors.menuItems.message}</p>}
                                </div>
                                <div className="xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
                                    <label className="ti-form-select rounded-sm !p-0 mb-2">Total Calories<span className='redText'>*</span></label>
                                    <input type="text" {...register('totalCalories')} name='totalCalories'  className="form-control" id="input-text" placeholder="" />
                                    {errors.totalCalories && <p className='errorTxt'>{errors.totalCalories.message}</p>}
                                </div>
                            </div>
                            

                            <hr />

                        </div>

                        <div className='student-create-btn pt-4'>
                            <div className='flex justify-end'>
                                <button type="submit" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave">Save</button>
                                <div className='backButton'>
                                    <Link to={`${import.meta.env.BASE_URL}pages/diet/dietList`}>

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

export default CreateDiet