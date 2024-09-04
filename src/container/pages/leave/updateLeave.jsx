import React, { useEffect, useState } from 'react'
import { basicselect, leaveType } from '../../forms/formelements/formselect/formselectdata'
import Select from 'react-select';
import { Link, useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { useForm, useController, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const schema = yup.object({
    staffName: yup.string().nullable().required("Please Select Staff Name"),
    leaveType: yup.string().nullable().required("Please Select Leave Type "),
    fromDate: yup.string().nullable().required("Please Select From Date "),
    toDate: yup.string().nullable().required("Please Select To Date "),
    comments: yup.string().nullable(),
});

const UpdateLeave = () => {

    // let currentDate = new Date(Date.now()).toJSON().slice(0, 10);
    // let currentDate1 = new Date(Date.now()).toJSON().slice(0, 10);
    // console.log(currentDate , "currentDate"); // "2022-06-17"
    
    const [startDate, setStartDate] = useState(new Date());
    const [startDate1, setStartDate1] = useState(new Date());
    const [data, setData] = useState();

    const params = useParams();
    console.log(params.id,'UpdateParams')

    const { register, handleSubmit, formState, control, setValue, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const dispatch = useDispatch();


    const { field: { value: staffNameValue, onChange: staffNameOnChange, ...reststaffNameField } } = useController({ name: 'staffName', control });
    const { field: { value: leaveTypeValue, onChange: leaveTypeOnChange, ...restleaveTypeField } } = useController({ name: 'leaveType', control });
    // const { field: { value: fromDateValue, onChange: fromDateOnChange, ...restfromDateField } } = useController({ name: 'fromDate', control });
    // const { field: { value: toDateValue, onChange: toDateOnChange, ...resttoDateField } } = useController({ name: 'toDate', control });

    const { errors } = formState;

    const handleChange = (dateChange) => {
        
        setValue("fromDate", dateChange, {
          shouldDirty: true
        });
        setStartDate(dateChange);
      };
    const handleChangeToDate = (dateChange) => {
        setValue("toDate", dateChange, {
          shouldDirty: true
        });
    
        setStartDate1(dateChange);
      };


      useEffect(() => {
        if (params.id) {
          axios
            .get(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/StaffLeave/GetStaffLeaveById/${params.id}`)
            .then((res) => {
              if (res.data) {
                const classData = res.data;
                console.log(classData,'classData')
                setValue('id', classData.id);
                setValue('staffName', classData.staffName);
                setValue('leaveType', classData.leaveType);
                setValue('fromDate', new Date(classData.fromDate));
                setValue('toDate', new Date(classData.toDate));
                setValue('comments', classData.comments);
                setStartDate(new Date(classData.fromDate));
                setStartDate1(new Date(classData.toDate));
              }
            })
            .catch((err) => {
              console.error('Error fetching class data:', err);
            });
        }
      }, [params.id, setValue]);


    const onSubmit = (formData) => {
       // console.log(formData, "Leave Form")
         setData({ ...formData });
        axios.put(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/StaffLeave/UpdatetStaffLeave/${params.id}`, formData)
        .then(res => {
            console.log(res, 'StaffLeave')
            navigate(`${import.meta.env.BASE_URL}pages/leave/staffLeave`)
            toast.success("Staff Data Updated Successfuly")
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
        reset({
            staffName: '',
            leaveType: '',
            comments: '',
            fromDate:new Date(),
            toDate:new Date()

        });
    }





  return (
    <div>
    <h4 className='pt-4 borderBottom'>Update Staffs</h4>
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
                            Update Leave Staff
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
                    <h4 className=''>Staff Update Leave</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid grid-cols-12 sm:gap-6 pt-4'>

                            <div className="leave-staff-div xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Select Staff/Student<span className='redText'>*</span>:</label>
                                <Select className="!p-0 place-holder" classNamePrefix='react-select' options={basicselect} value={staffNameValue ? basicselect.find(x => x.value === staffNameValue) : staffNameValue}
                                    onChange={option => staffNameOnChange(option ? option.value : option)}
                                    {...reststaffNameField} />
                                {errors.staffName && <p className='errorTxt'>{errors.staffName.message}</p>}

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
                                    render={({ field }) => (
                                        <DatePicker
                                        className="ti-form-input  focus:z-10" 
                                        selected={field.value || startDate}
                                        placeholderText="Select date"
                                        onChange={(date) => {
                                            handleChange(date);
                                            field.onChange(date);
                                        }}
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
                                    render={({ field }) => (
                                        <DatePicker
                                        className="ti-form-input  focus:z-10" 
                                        selected={field.value || startDate1}
                                        placeholderText="Select date"
                                        onChange={(date) => {
                                            handleChangeToDate(date);
                                            field.onChange(date);
                                        }}
                                        />
                                    )} />
                                    {/* <DatePicker {...register('toDate')} placeholderText="Choose date" className="ti-form-input  focus:z-10" showIcon selected={startDate1} onChange={(date) => setStartDate1(date)} /> */}

                                </div>
                                {errors.toDate && <p className='errorTxt'>{errors.toDate.message}</p>}
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
                                <button type="submit" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave">Update</button>
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

export default UpdateLeave