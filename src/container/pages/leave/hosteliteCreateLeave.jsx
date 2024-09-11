import React, { useEffect, useState } from 'react';
import { leaveType } from '../../forms/formelements/formselect/formselectdata';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { useForm, useController, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';


const schema = yup.object({
    studentName: yup.string().nullable().required("Please Select Student Name"),
    outpassType: yup.string().nullable().required("Please Select Outpass Type "),
    fromDate: yup.string().nullable().required("Please Select From Date "),
    toDate: yup.string().nullable().required("Please Select To Date "),
    comment: yup.string().nullable(),
});

const formatDate = (date) => {
    if (!date) return '';
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};


const HosteliteCreateLeave = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [startDate1, setStartDate1] = useState(new Date());
    const [studentNameDrop, setStudentNameDrop] = useState([]);
    const [studentLeaveId, setStudentLeaveId] = useState(null)
    const { register, handleSubmit, formState: { errors }, control, setValue } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            fromDate: new Date(),
            toDate: new Date(),
            studentName: '',
            outpassType: '',
            comment: ''
        }
    });

    const navigate = useNavigate();

    const { field: { value: studentNameValue, onChange: studentNameOnChange, ...reststudentNameField } } = useController({ name: 'studentName', control });
    const { field: { value: outpassTypeValue, onChange: outpassTypeOnChange, ...restoutpassTypeField } } = useController({ name: 'outpassType', control });

    
    const handleChange = (dateChange) => {
        setStartDate(dateChange);
        setValue("fromDate", formatDate(dateChange), { shouldDirty: true });
    };

    const handleChangeToDate = (dateChange) => {
        setStartDate1(dateChange);
        setValue("toDate", formatDate(dateChange), { shouldDirty: true });
    };

    const getStudentName = () => {
        axios.get('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Students')
            .then(res => {
                const outpassOptions = res.data.map(outpass => ({
                    value: outpass.id,
                    label: outpass.fullName
                }));
                setStudentNameDrop(outpassOptions);
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        getStudentName();
    }, []);

    const onSubmit = (formData) => {
        console.log('Submitting form data:', formData);
        axios.post('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/HostelOutPass/CreateHostelOutPass', {
            ...formData,
            studentId: studentLeaveId,
            fromDate: formatDate(startDate),
            toDate: formatDate(startDate1),
        })
        .then(res => {
            if (res.status === 200) {
                navigate(`${import.meta.env.BASE_URL}pages/leave/hosteliteLeave`);
                toast.success('Hostelite leave created successfully');
            }
        })
        .catch(err => {
            console.error('Error creating leave:', err);
            toast.error('Failed to create leave');
        });
    };


    const studentChange = (e) => {
        setStudentLeaveId(e.value)
    }


  return (
    <div>
            <h4 className='pt-4 borderBottom'>Create Hostelite</h4>
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
                                    <Link className="flex items-center text-primary hover:text-primary dark:text-primary" to={`${import.meta.env.BASE_URL}pages/leave/hosteliteLeave`}>
                                        Hostelite Outpasses
                                        <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-black-300 dark:text-white/10 rtl:rotate-180"
                                            width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </Link>
                                </li>

                                <li className="text-sm text-gray-500 dark:text-[#8c9097] dark:text-white/50 hover:text-primary truncate" aria-current="page">
                                 Add Hostelite Leave
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
            <h4 className=''>Hostelite Add Leave</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='staffleave-details mb-4'>

                            <div className="leave-staff-div pt-4">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Select Staff/Student<span className='redText'>*</span>:</label>
                                    <Select
                                        className="!p-0 place-holder"
                                        classNamePrefix='react-select'
                                        options={studentNameDrop}
                                        value={studentNameValue ? studentNameDrop.find(x => x.label === studentNameValue) : null}
                                        onChange={option => {studentNameOnChange(option ? option.label : null); studentChange(option)}}
                                        {...reststudentNameField}
                                    />
                                    {errors.studentName && <p className='errorTxt'>{errors.studentName.message}</p>}
                            </div>
                            <div className="leave-staff-div pt-4">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Select Leave Type<span className='redText'>*</span></label>
                                    <Select
                                        className="!p-0 place-holder"
                                        classNamePrefix='react-select'
                                        options={leaveType}
                                        value={outpassTypeValue ? leaveType.find(x => x.value === outpassTypeValue) : null}
                                        onChange={option => outpassTypeOnChange(option ? option.value : null)}
                                        {...restoutpassTypeField}
                                    />
                                    {errors.outpassType && <p className='errorTxt'>{errors.outpassType.message}</p>}
                            </div>

                            <div className='grid grid-cols-12 sm:gap-6 pt-4'>
                                <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                    <label className="ti-form-select rounded-sm !p-0 mb-2">From*</label>
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
                                    </div>
                                </div>

                                <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                    <label className="ti-form-select rounded-sm !p-0 mb-2">To*</label>
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
                                    </div>
                                </div>

                            </div>
                            {/* End of the grid */}

                            <div className='leave-staff-comment pt-4 pb-2'>
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Comments*</label>
                                <textarea {...register('comments')} name='comments' className="form-control" id="text-area" rows="5"></textarea>
                            </div>

                            <hr />

                        </div>

                        <div className='student-create-btn pt-4'>
                            <div className='flex justify-end'>
                                <button type="submit" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave">Save</button>
                                <div className='backButton'>
                            <Link to={`${import.meta.env.BASE_URL}pages/leave/hosteliteLeave`}>

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

export default HosteliteCreateLeave