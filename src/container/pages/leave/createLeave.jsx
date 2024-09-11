import React, { useEffect, useState } from 'react'
import { basicselect, leaveType } from '../../forms/formelements/formselect/formselectdata'
import Select from 'react-select';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { useForm, useController, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';


const schema = yup.object({
    fullName: yup.string().nullable().required("Please Select Staff Name"),
    leaveType: yup.string().nullable().required("Please Select Leave Type "),
    fromDate: yup.string().nullable().required("Please Select From Date "),
    toDate: yup.string().nullable().required("Please Select To Date "),
    comments: yup.string().nullable(),
});

const formatDate = (date) => {
    if (!date) return '';
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

const CreateLeave = () => {

    // let currentDate = new Date(Date.now()).toJSON().slice(0, 10);
    // let currentDate1 = new Date(Date.now()).toJSON().slice(0, 10);
    // console.log(currentDate , "currentDate"); // "2022-06-17"
    
    const [startDate, setStartDate] = useState(new Date());
    const [startDate1, setStartDate1] = useState(new Date());
const [staffId, setStaffID] = useState(null);
const [staffNameDrop, setStaffNameDrop] = useState([]);
    const { register, handleSubmit, formState, control, setValue, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const { field: { value: fullNameValue, onChange: fullNameOnChange, ...restfullNameField } } = useController({ name: 'fullName', control });
    const { field: { value: leaveTypeValue, onChange: leaveTypeOnChange, ...restleaveTypeField } } = useController({ name: 'leaveType', control });
    // const { field: { value: fromDateValue, onChange: fromDateOnChange, ...restfromDateField } } = useController({ name: 'fromDate', control });
    // const { field: { value: toDateValue, onChange: toDateOnChange, ...resttoDateField } } = useController({ name: 'toDate', control });

    const { errors } = formState;

    const handleChange = (dateChange) => {
        
        setStartDate(dateChange);
        setValue("fromDate", formatDate(dateChange), { shouldDirty: true });
      };
    const handleChangeToDate = (dateChange) => {
        setStartDate1(dateChange);
        setValue("toDate", formatDate(dateChange), { shouldDirty: true });
      };

      const getStaffName = () => {
        axios.get('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Staff')
            .then(res => {
                console.log(res, 'classDATA')
                const staffOptions = res.data.map(staff => ({
                    value: staff.id,
                    label: staff.fullName
                }));
                setStaffNameDrop(staffOptions);
            })
            .catch(err => console.log(err));
      }
      useEffect(()=>{
        getStaffName()
      },[])


    const onSubmit = (formData) => {
       // console.log(formData, "Leave Form")
        // setData({ ...formData });
        // dispatch(postSubjectList(formData))
        axios.post('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/StaffLeave/CreateStaffLeave', {
            ...formData,
            staffId:staffId,
          //  fromDate: formatDate(startDate), // Ensure format is correct
           // toDate: formatDate(startDate1)
        })
        .then(res => {
            console.log(res, 'StaffLeave')
            if(res.status === 200){
                axios.get('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/StaffLeave/GetAllStaffLeave')
                navigate(`${import.meta.env.BASE_URL}pages/leave/staffLeave`)
                toast.success('Staff leave created successfully')
            }
        })
        .catch(err => console.log(err))
        // setTimeout(() => {
        //     toast.success("Subject Created Successfuly",{
        //         position: "top-right",
        //         autoClose: 3000,
        //     })
        //     dispatch(fetchSubjectList())
        // }, 500);

        // Reset the form fields after submission
        // reset({
        //     subjectName: '',
        //     subjectCode: '',
        //     subjectType: '',
        // });
    }

    const staffchange = (e) =>{
        console.log(e, "STADDDD")
        setStaffID(e.value);
    }


    return (
        <div>
            <h4 className='pt-4 borderBottom'>Create Staffs</h4>
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
                                    <Link className="flex items-center text-primary hover:text-primary dark:text-primary" to={`${import.meta.env.BASE_URL}pages/leave/staffLeave`}>
                                        Staff Leave
                                        <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-black-300 dark:text-white/10 rtl:rotate-180"
                                            width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </Link>
                                </li>

                                <li className="text-sm text-gray-500 dark:text-[#8c9097] dark:text-white/50 hover:text-primary truncate" aria-current="page">
                                    Add Leave Staff
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
                        <div className='staffleave-details mb-4'>
                            <h4 className=''>Staff Add Leave</h4>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='grid grid-cols-12 sm:gap-6 pt-4'>

                                    <div className="leave-staff-div xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
                                        <label className="ti-form-select rounded-sm !p-0 mb-2">Select Staff/Student<span className='redText'>*</span>:</label>
                                        <Select className="!p-0 place-holder" classNamePrefix='react-select' options={staffNameDrop} value={fullNameValue ? staffNameDrop.find(x => x.label === fullNameValue) : fullNameValue}
                                            onChange={option =>{ fullNameOnChange(option ? option.label : option); staffchange(option) }}
                                            {...restfullNameField} />
                                        {errors.fullName && <p className='errorTxt'>{errors.fullName.message}</p>}

                                    </div>
                                    <div className="leave-staff-div xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
                                        <label className="ti-form-select rounded-sm !p-0 mb-2">Select Leave Type<span className='redText'>*</span></label>
                                        <Select className="!p-0 place-holder" classNamePrefix='react-select' options={leaveType} value={leaveTypeValue ? leaveType.find(x => x.value === leaveTypeValue) : leaveTypeValue}
                                            onChange={option => leaveTypeOnChange(option ? option.value : option)}
                                            {...restleaveTypeField} />
                                        {errors.leaveType && <p className='errorTxt'>{errors.leaveType.message}</p>}

                                    </div>
                                </div>

                                <div className='grid grid-cols-12 sm:gap-6 pt-4'>
                                    <div className="xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
                                        <label className="ti-form-select rounded-sm !p-0 mb-2">From<span className='redText'>*</span></label>
                                        <div className="input-group !flex-nowrap">
                                            <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                                            <Controller name="fromDate"
                                            control={control}
                                            {...register('fromDate')}
                                            defaultValue={startDate}
                                            render={() => (
                                                <DatePicker
                                                className="ti-form-input  focus:z-10" 
                                                selected={startDate}
                                                dateFormat="dd/MM/yyyy" 
                                                showMonthDropdown="true"
                                                showYearDropdown="true" 
                                                placeholderText="Select date"
                                                onChange={handleChange}
                                                />
                                            )} />
                                            {/* <DatePicker {...register('fromDate')} placeholderText="Choose date" className="ti-form-input  focus:z-10" showIcon selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                                        </div>
                                        {/* {errors.fromDate && <p className='errorTxt'>{errors.fromDate.message}</p>} */}
                                    </div>

                                    <div className="xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
                                        <label className="ti-form-select rounded-sm !p-0 mb-2">To<span className='redText'>*</span></label>
                                        <div className="input-group !flex-nowrap">
                                            <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                                            <Controller name="toDate"
                                            control={control}
                                            {...register('toDate')}
                                            defaultValue={startDate1}
                                            render={() => (
                                                <DatePicker
                                                className="ti-form-input  focus:z-10" 
                                                selected={startDate1}
                                                dateFormat="dd/MM/yyyy"  
                                                showMonthDropdown="true"
                                                showYearDropdown="true" 
                                                placeholderText="Select date"
                                                onChange={handleChangeToDate}
                                                />
                                            )} />
                                            {/* <DatePicker {...register('toDate')} placeholderText="Choose date" className="ti-form-input  focus:z-10" showIcon selected={startDate1} onChange={(date) => setStartDate1(date)} /> */}

                                        </div>
                                        {/* {errors.toDate && <p className='errorTxt'>{errors.toDate.message}</p>} */}
                                    </div>

                                </div>
                                {/* End of the grid */}
                                <div className='grid grid-cols-12 sm:gap-6 pt-4'>

                                    <div className='leave-staff-comment  pb-2 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12'>
                                        <label className="ti-form-select rounded-sm !p-0 mb-2">Comments</label>
                                        <textarea {...register('comments')} name='comments' className="form-control" id="text-area" rows="5"></textarea>
                                    </div>
                                </div>

                                <hr />
                                <div className='student-create-btn pt-4'>
                                    <div className='flex justify-end'>
                                        <button type="submit" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave">Save</button>
                                        <div className='backButton'>
                                            <Link to={`${import.meta.env.BASE_URL}pages/leave/staffLeave`}>

                                                <button type="button" className="ti-btn ti-btn-info-full ml-15 !rounded-full ti-btn-wave">Back</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* Student form create end */}
            </div>
        </div>
    )
}

export default CreateLeave