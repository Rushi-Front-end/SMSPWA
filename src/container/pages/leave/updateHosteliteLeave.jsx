import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { Link, useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { useForm, Controller, useController } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { leaveType } from '../../forms/formelements/formselect/formselectdata';

// Validation Schema
const schema = yup.object({
    fullName: yup.string().nullable().required("Please Select Staff Name"),
    outpassType: yup.string().nullable().required("Please Select Leave Type "),
    fromDate: yup.string().nullable().required("Please Select From Date "),
    toDate: yup.string().nullable().required("Please Select To Date "),
    comments: yup.string().nullable(),
});

// Date Formatting Function
const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};
const formatDate2 = (date) => {
    let [day, month, year] = date.split("/");

    // Convert to the format "YYYY-MM-DD"
    let formattedDate = `${year}-${month}-${day}`;
    return formattedDate
}


const UpdateHosteliteLeave = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [startDate1, setStartDate1] = useState(new Date());
    const [studentNameDrop, setstudentNameDrop] = useState([]);

    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Form setup with react-hook-form
    const { register, handleSubmit, formState, control, setValue, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const { field: { value: fullNameValue, onChange: fullNameOnChange, ...restfullNameField } } = useController({ name: 'fullName', control });
    const { field: { value: outpassTypeValue, onChange: outpassTypeOnChange, ...restoutpassTypeField } } = useController({ name: 'outpassType', control });

    
    const { errors } = formState;

    // Fetch staff names
    const getStudentName = () => {
        axios.get('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Students')
            .then(res => {
                const studentOptions = res.data.map(student => ({
                    value: student.id,
                    label: student.fullName
                }));
                setstudentNameDrop(studentOptions);
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        getStudentName();
    }, []);

    useEffect(() => {
        if (params.id) {
            axios.get(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/HostelOutPass/GetHostelOutPassById/${params.id}`)
                .then((res) => {
                    if (res.data) {
                        const classData = res.data;
                        // Format dates before setting values
                        // setStartDate(new Date(classData.fromDate));
                        // setStartDate1(new Date(classData.toDate));
                        Object.keys(classData).forEach(key => {
                            setValue(key, classData[key]);
                        });
                    }
                })
                .catch((err) => {
                    console.error('Error fetching class data:', err);
                });
        }
    }, [params.id, setValue]);

    // Handle date changes
    const handleChange = (date) => {
        setStartDate(date);
        setValue("fromDate", formatDate(date), { shouldDirty: true });
    };

    const handleChangeToDate = (date) => {
        setStartDate1(date);
        setValue("toDate", formatDate(date), { shouldDirty: true });
    };

    

    // Submit form
    const onSubmit = (formData) => {
        axios.put(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/HostelOutPass/UpdatetHostelOutPass/${params.id}`, {
            ...formData,
            fromDate: formatDate(new Date(formatDate2(formData.fromDate))),
            toDate: formatDate(new Date(formatDate2(formData.toDate))),
        })
        .then(res => {
            if (res.status === 200) {
                navigate(`${import.meta.env.BASE_URL}pages/leave/hosteliteLeave`);
                axios.get('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/HostelOutPass/GetAllHostelOutPass')
                toast.success("Hostelite Data Updated Successfully");
            }
        })
        .catch(err => console.log(err));
    };

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
                                    Update Hostelite Leave
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
                            <h4 className=''>Hostelite Update Leave</h4>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='grid grid-cols-12 sm:gap-6 pt-4'>
                                    <div className="leave-staff-div xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
                                        <label className="ti-form-select rounded-sm !p-0 mb-2">Select Staff/Student<span className='redText'>*</span>:</label>
                                        <Select
                                        className="!p-0 place-holder"
                                        classNamePrefix='react-select'
                                        options={studentNameDrop}
                                        value={fullNameValue ? studentNameDrop.find(x => x.label === fullNameValue) : fullNameValue}
                                        onChange={option => fullNameOnChange(option ? option.label : option)}
                                        {...restfullNameField}
                                    />
                                        {errors.fullName && <p className='errorTxt'>{errors.fullName.message}</p>}
                                    </div>
                                    <div className="leave-staff-div xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
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
                                </div>

                                <div className='grid grid-cols-12 sm:gap-6 pt-4'>
                                    <div className="xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
                                        <label className="ti-form-select rounded-sm !p-0 mb-2">From<span className='redText'>*</span></label>
                                        <div className="input-group !flex-nowrap">
                                            <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                                            <Controller
                                                name="fromDate"
                                                control={control}
                                                defaultValue={startDate}
                                                render={({ field }) => (
                                                    <DatePicker
                                                        {...field}
                                                        className="ti-form-input focus:z-10"
                                                        selected={startDate}
                                                        dateFormat="dd/MM/yyyy"
                                                        showMonthDropdown="true"
                                                        showYearDropdown="true" 
                                                        placeholderText="Select date"
                                                        onChange={(date) => {
                                                            handleChange(date);
                                                            field.onChange(date);
                                                        }}
                                                    />
                                                )}
                                            />
                                        </div>
                                        {errors.fromDate && <p className='errorTxt'>{errors.fromDate.message}</p>}
                                    </div>

                                    <div className="xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
                                        <label className="ti-form-select rounded-sm !p-0 mb-2">To<span className='redText'>*</span></label>
                                        <div className="input-group !flex-nowrap">
                                            <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                                            <Controller
                                                name="toDate"
                                                control={control}
                                                defaultValue={startDate1}
                                                render={({ field }) => (
                                                    <DatePicker
                                                        {...field}
                                                        className="ti-form-input focus:z-10"
                                                        selected={startDate1}
                                                        placeholderText="Select date"
                                                        dateFormat="dd/MM/yyyy"
                                                        showMonthDropdown="true"
                                                        showYearDropdown="true" 
                                                        onChange={(date) => {
                                                            handleChangeToDate(date);
                                                            field.onChange(date);
                                                        }}
                                                    />
                                                )}
                                            />
                                        </div>
                                        {errors.toDate && <p className='errorTxt'>{errors.toDate.message}</p>}
                                    </div>
                                </div>
                                <div className='grid grid-cols-12 sm:gap-6 pt-4'>
                                    <div className='leave-staff-comment pb-2 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12'>
                                        <label className="ti-form-select rounded-sm !p-0 mb-2">Comments</label>
                                        <textarea {...register('comments')} name='comments' className="form-control" id="text-area" rows="5"></textarea>
                                    </div>
                                </div>
                                <hr />
                                <div className='student-create-btn pt-4'>
                                    <div className='flex justify-end'>
                                        <button type="submit" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave">Update</button>
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
                </div>
            </div>
        </div>
    );
};

export default UpdateHosteliteLeave;
