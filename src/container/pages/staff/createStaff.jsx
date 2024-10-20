import React, {  useContext, useEffect, useState } from 'react'
import { assignedSubject, department, enableLogin, genderSelect, roleID, shift, singleselect, stateSelect } from '../../forms/formelements/formselect/formselectdata'
import Select from 'react-select';
import media50 from "../../../assets/images/media/media-50.jpg";

import { Link, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import Pageheader from '../../../components/common/pageheader/pageheader';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Controller, useForm, useController } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { IdContext, useSchoolId } from '../../../components/common/context/idContext';
import { toast } from 'react-toastify';
import { useLoginName } from '../../../components/common/context/userRoleContext';


const schema = yup.object({
    whatsappNumber: yup.string().required("Please enter Whatsapp Name"),
    fullName: yup.string().required("Please enter Full Name"),
    dob: yup.string().required("Please enter Date of birth"),
    mobileNumber: yup.string().required("Please enter mobile number"),
    emailID: yup.string(),
    dateOfJoining: yup.string().required("Please enter date Of joining"),
    alternateMobileNumber: yup.string(),
    address: yup.string().required("Please enter address Line"),
    city: yup.string(),
    district: yup.string(),
    password: yup.string(),
    
    roleID: yup.string().nullable().required("Please select Role"),
    enableLogin: yup.string().nullable(),
    assignedSubject: yup.string().nullable().required("Please select Subject"),
    department: yup.string().nullable().required("Please select department"),
    shift: yup.string().required("Please select Shift"),
    gender: yup.string().nullable().required("Please select Gender"),
    state: yup.string().nullable().required("Please select State")

  });

   // Date Formatting Function
   const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};


const CreateStaff = () => {

    const [data, setData] = useState({})
    const [file, setFile] = useState();
    const [staffRole, setStaffRole] = useState()

    const navigate = useNavigate()
    const [startDate, setStartDate] = useState(new Date());
    const [startDate1, setStartDate1] = useState(new Date());
    const [staffEnableLogin, setStaffEnableLogin] = useState(false);

    const [subjectOptions, setSubjectOptions] = useState([])
    const {id:schoolId} = useSchoolId()


    
    useEffect(() => {
        const fetchClass = async () => {
            try {
                const response = await axios.get("https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Subjects");
                const options = response.data.map(subject => ({
                    id:subject.id,
                    value: subject.subjectName,
                    label: subject.subjectName,
                }));
                setSubjectOptions(options);
            } catch (err) {
                setSubjectOptions([]);
            }
        };
        
        fetchClass();
    }, [schoolId]);
    
    console.log(subjectOptions,"RSPO")


    const profileImage = (e) => {
        console.log(e.target.files[0].name, "Image URL");
        //setFile(URL.createObjectURL(e.target.files[0]));
        if (e.target.files.length > 0) {
            setFile(e.target.files[0]); // Store the actual file object
        }
    }

    const { register, handleSubmit,  formState, control, setValue, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const schoolIdDrop = useContext(IdContext);
    console.log(schoolIdDrop.id,"UseCONTEXT")
    const handleChange = (dateChange) => {
        
        setValue("dob", formatDate(dateChange), {
          shouldDirty: true
        });
        setStartDate(dateChange);
      };
    const handleChangeToDate = (dateChange) => {
        setValue("dateOfJoining", formatDate(dateChange), {
          shouldDirty: true
        });
    
        setStartDate1(dateChange);
      };
    const { errors } = formState;

    const [roleList, setRoleList] = useState([]);
    const {userRoleName: userRoleNameLogin} = useLoginName();
    // console.log(userRoleNameLogin,'userRoleNameLogin')
    useEffect(() => {
        const fetchUserRoles = async () => {
          try {
            const response = await axios.get('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/UserRoles');
            const roleData = response.data;
            const userRole  = userRoleNameLogin
            const roleOptions = roleData
            .filter(role => {
                const isAdminOrPrincipal = userRole === 'Admin' || userRole === 'Principal';
                const shouldExclude = role.roleName === 'Admin' || role.roleName === 'SuperAdmin';
                return !(isAdminOrPrincipal && shouldExclude);
              })
            .map(role => ({id:role.id, value: role.id, label: role.roleName}))
            setRoleList(roleOptions)
          } catch (error) {
            console.error('Error fetching user roles:', error);
          }
        };
    
        fetchUserRoles();
    }, []);


    const { field: { value: roleIDValue, onChange: roleIDOnChange , ...restroleIDField } } = useController({ name: 'roleID', control });
    const { field: { value: enableLoginValue, onChange: enableLoginOnChange , ...restenableLoginSelectField } } = useController({ name: 'enableLogin', control });
    const { field: { value: assignedSubjectValue, onChange: assignedSubjectOnChange, ...restassignedSubjectField } } = useController({ name: 'assignedSubject', control });
    const { field: { value: departmentValue, onChange: departmentOnChange, ...restdepartmentField } } = useController({ name: 'department', control });
    const { field: { value: shiftValue, onChange: shiftOnChange, ...restshiftField } } = useController({ name: 'shift', control });
    const { field: { value: genderValue, onChange: genderOnChange, ...restgenderField } } = useController({ name: 'gender', control });
    const { field: { value: stateValue, onChange: stateOnChange, ...reststateField } } = useController({ name: 'state', control });
   
    const onSubmit = async (formData) => {
        try {
            const formDataToSend = new FormData();
    
            // Append each field to the FormData object
            for (const key in formData) {
                formDataToSend.append(key, formData[key]);
            }
    
            // If there's an image file, append it
            if (file) { // Assuming imageFile is your state for the uploaded image
                formDataToSend.append('ProfileImage', file);
            }
    
            // Append additional fields as necessary
            //const enableLogin = formData.enableLogin === "Yes";
           // formDataToSend.append('enableLogin', enableLogin); // Append as a boolean
            formDataToSend.append('roleID', staffRole.value);
            formDataToSend.append('schoolId', schoolIdDrop.id);
            
            const response = await axios.post('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Staff', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data' // Important for file uploads
                }
            });
    
            console.log(response, "Staff Response");
            if (response.status === 200) {
                navigate(`${import.meta.env.BASE_URL}pages/staff/staffDetails`);
                toast.success('Staff Created Successfully');
            }
        } catch (err) {
            console.error(err);
            toast.error('Failed to create staff');
        }
    };
    const roleChange = (option) => {
        console.log(option,"RoleChange")
        setStaffRole(option)
    }
    const enableLoginChange = (e)=>{
        console.log("enableLogin",e.target.checked)
        setStaffEnableLogin(e.target.checked)
    }


  return (
    <div>
       <h4 className='pt-4 borderBottom'>Create Staffs</h4>
       <div className="breadcrumbs-wrapper mb-4 pt-2">
        <div className='create-flex-container'>
            <div className='flex flex-row mb-4 items-center'>
                
            {/* <div className='backButton'>
                <Link to={`${import.meta.env.BASE_URL}pages/staff/staffDetails`}>

            <button type="button" className="ti-btn ti-btn-info-full ti-btn-wave">Back</button>
                </Link>
            </div> */}
            {/* <div className='breadCrumbs p-4'>
                <p>Dashboard -  Staff - Create Staff</p>
            </div> */}

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
                                <Link className="flex items-center text-primary hover:text-primary dark:text-primary" to={`${import.meta.env.BASE_URL}pages/staff/staffDetails`}>
                                    Staffs
                                    <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-black-300 dark:text-white/10 rtl:rotate-180"
                                        width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </Link>
                            </li>

                            <li className="text-sm text-gray-500 dark:text-[#8c9097] dark:text-white/50 hover:text-primary truncate" aria-current="page">
                                Create Staff
                            </li>
                        </ol>
                    </div>
            </div>
        </div>
       </div>
       {/* Student form create Start */}
       <div className='staff-form-create'>
        <div className='box p-4 ' >
        <h4 className=' pb-2'>Employee 1</h4>
                    <div className='staff-profile-uploads pt-4'>
                        <div className='staff-profile-wrap flex items-center'>
                            <div className='left-side-profile-pic'>
                            {
                                file &&
                                <img src={URL.createObjectURL(file)} className="img-fluid !rounded-full profile-image !inline-flex"  />
                                ? file &&
                                <img src={URL.createObjectURL(file)} className="img-fluid !rounded-full profile-image !inline-flex"  />
                                :
                                <img src={media50} className="img-fluid !rounded-full profile-image !inline-flex"  />
                            }
                            </div>
                            <div className='right-side-upload-pic'>
                                <p>Upload Staff Photo (150px X 150px)</p>
                                <div>
                                <label htmlFor="file-input" className="sr-only">Choose file</label>
                                <input type="file" name="file-input" id="file-input" className="block w-full border border-gray-200 focus:shadow-sm dark:focus:shadow-white/10 rounded-sm text-sm focus:z-10 focus:outline-0 focus:border-gray-200 dark:focus:border-white/10 dark:border-white/10 dark:text-white/50
                                       file:border-0
                                      file:bg-light file:me-4
                                      file:py-3 file:px-4
                                      dark:file:bg-black/20 dark:file:text-white/50" onChange={profileImage}/>
                            </div>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>           
            <h4 className='pt-4 pb-2'>Employment Details</h4>
            <div className='employment-details mb-4'>
                {/* <h6 className=' pb-2'>Academic Details</h6> */}
                <div className='grid grid-cols-12 sm:gap-6'>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Role<span className="redText">*</span></label>
                            <Select className="!p-0 place-holder"   
                                    isClearable
                                    options={roleList}
                                    value={staffRole}
                                    onChange={(option) => {roleIDOnChange(option.id), roleChange(option)}}
                                    {...restroleIDField}
                                    classNamePrefix='react-select'  />
                                {errors.roleID && <p className='errorTxt'>{errors.roleID.message}</p>}
                            </div>

                        </div>
            </div>
            <div className='aadharcard-details mb-4'>
                <h6 className=' pb-2'>Personal Details</h6>
                <div className='grid grid-cols-12 sm:gap-6'>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Full Name<span className="redText">*</span>:</label>
                            <input type="text"  {...register('fullName')}  name='fullName'  className="form-control"  placeholder="Enter Staff Full Name" />
                            {errors.fullName && <p className='errorTxt'>{errors.fullName.message}</p>}
                            </div>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Mobile No<span className="redText">*</span>.</label>
                            <div className="number-wrap">
                    {/* <span className="px-4 inline-flex items-center min-w-fit rounded-s-sm border-e-0 border-gray-200 bg-light text-sm text-gray-500 dark:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">+91</span> */}
                    <input type="text" {...register('mobileNumber')}  name='mobileNumber' className="form-control" placeholder="Enter Your Mobile Number" />
                  </div>
                            {errors.mobileNumber && <p className='errorTxt'>{errors.mobileNumber.message}</p>}
                            </div>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Whatsapp No<span className="redText">*</span>.</label>
                            <div className="number-wrap">
                    {/* <span className="px-4 inline-flex items-center min-w-fit rounded-s-sm border-e-0 border-gray-200 bg-light text-sm text-gray-500 dark:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">+91</span> */}
                    <input type="text" {...register('whatsappNumber')}  name='whatsappNumber' className="form-control" placeholder="Enter Your Whatsapp Number" />
                    {errors.whatsappNumber && <p className='errorTxt'>{errors.whatsappNumber.message}</p>}
                  </div>
                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Email:</label>
                            <input type="text" {...register('emailID')}  name='emailID' className="form-control"  placeholder="Enter Email ID" />
                            {/* {errors.emailID && <p className='errorTxt'>{errors.emailID.message}</p>} */}

                            </div>
   
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Gender<span className="redText">*</span>:</label>
                            <Select className="!p-0 place-holder"   
                                    isClearable
                                    options={genderSelect}
                                    value={genderValue ? genderSelect.find(x => x.value === genderValue) : genderValue}
                                    onChange={option => genderOnChange(option ? option.value : option)}
                                    {...restgenderField}
                                    classNamePrefix='react-select'  />
                                {errors.gender && <p className='errorTxt'>{errors.gender.message}</p>}
                            </div>
                            
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label htmlFor="input-datetime-local" className="form-label">DOB<span className="redText">*</span></label>
                            <div className="input-group !flex-nowrap">
                                            <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                                            <Controller
                                                name="dob"
                                                control={control}
                                                render={({ field }) => (
                                                    <DatePicker
                                                        {...field}
                                                        selected={startDate}
                                                dateFormat="dd/MM/yyyy"  
                                                showMonthDropdown="true"
                                                showYearDropdown="true" 
                                                onChange={handleChange}
                                                        
                                                    />
                                                )}
                                            />
                                            {/* <Controller name="dob"
                                            control={control}
                                            {...register('dob')}
                                            render={() => (
                                                <DatePicker
                                                className="ti-form-input  focus:z-10" 
                                                dateFormat="dd/MM/yyyy"  

                                                selected={startDate}
                                                placeholderText="Select date"
                                                onChange={handleChange}
                                                />
                                            )} /> */}
                                        </div>
                                {/* <input type="date" className="form-control" id="input-datetime-local" {...register('dob')}  name='dob' /> */}
                                {errors.dob && <p className='errorTxt'>{errors.dob.message}</p>} 
                            </div>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label htmlFor="input-datetime-local" className="form-label">Date of Joining<span className="redText">*</span></label>
                            <div className="input-group !flex-nowrap">
                                            <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>

                                            <Controller
                                                name="dateOfJoining"
                                                control={control}
                                                render={({ field }) => (
                                                    <DatePicker
                                                        {...field}
                                                        selected={startDate1}
                                                dateFormat="dd/MM/yyyy"  
                                                showMonthDropdown="true"
                                                showYearDropdown="true" 
                                                onChange={handleChangeToDate}
                                                    />
                                                )}
                                            />
                                            {/* <Controller name="dateOfJoining"
                                            control={control}
                                            {...register('dateOfJoining')}
                                           
                                            render={() => (
                                                <DatePicker
                                                dateFormat="dd/MM/yyyy"  
                                                className="ti-form-input  focus:z-10" 
                                                selected={startDate1}
                                                placeholderText="Select date"
                                                onChange={handleChangeToDate}
                                                />
                                            )} /> */}

                                        </div>
                            {/* <input type="date" className="form-control" id="input-datetime-local" {...register('enrolmentDate')}  name='enrolmentDate' /> */}
                            {errors.dateOfJoining && <p className='errorTxt'>{errors.dateOfJoining.message}</p>}    
                            </div>
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Alternate Mobile No.:</label>
                            <input type="text" {...register('alternateMobileNumber')}  name='alternateMobileNumber'  className="form-control"  placeholder="Enter Alternate Mobile Number" />
                            {/* {errors.alternateMobileNumber && <p className='errorTxt'>{errors.alternateMobileNumber.message}</p>} */}

                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Address Line<span className="redText">*</span>:</label>
                            <input type="text" {...register('address')}  name='address'  className="form-control"  placeholder="Enter Door No., Street, Area..." />
                            {errors.address && <p className='errorTxt'>{errors.address.message}</p>}

                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">City</label>
                            <input type="text" {...register('city')}  name='city' className="form-control"  placeholder="" />
                            </div>

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">District</label>
                            <input type="text" {...register('district')}  name='district' className="form-control"  placeholder="" />
                            </div>
                            
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Select State/Province<span className="redText">*</span></label>
                             <Select className="!p-0 place-holder"   
                                    isClearable
                                    options={stateSelect}
                                    value={stateValue ? stateSelect.find(x => x.value === stateValue) : stateValue}
                                    onChange={option => stateOnChange(option ? option.value : option)}
                                    {...reststateField}
                                    classNamePrefix='react-select'  />
                                {errors.stateValue && <p className='errorTxt'>{errors.stateValue.message}</p>}
                            </div>


                        </div>
            </div>
            
         
            <div className='academic-details mb-4'>
                <h6 className=' pb-2'>Academic Details</h6>
                <div className='grid grid-cols-12 sm:gap-6'>
                                                    
                            <div className="xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Assign Subjects<span className="redText">*</span></label>
                            <Select className="!p-0 place-holder"   
                                    isClearable
                                    options={subjectOptions}
                                    value={assignedSubjectValue ? subjectOptions.find(x => x.value === assignedSubjectValue) : assignedSubjectValue}
                                    onChange={option => assignedSubjectOnChange(option ? option.value : option)}
                                    {...restassignedSubjectField}
                                    classNamePrefix='react-select'  />
                                {errors.assignedSubject && <p className='errorTxt'>{errors.assignedSubject.message}</p>}
                                    
                            </div>
                            <div className="xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Departments<span className="redText">*</span></label>
                            <Select className="!p-0 place-holder"   
                                    isClearable
                                    options={department}
                                    value={departmentValue ? department.find(x => x.value === departmentValue) : departmentValue}
                                    onChange={option => departmentOnChange(option ? option.value : option)}
                                    {...restdepartmentField}
                                    classNamePrefix='react-select'  />
                            {errors.department && <p className='errorTxt'>{errors.department.message}</p>}

                            </div>
                            <div className="xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Shifts <span className="redText">*</span></label>
                            <Select className="!p-0 place-holder"   
                                    isClearable
                                    options={shift}
                                    value={shiftValue ? shift.find(x => x.value === shiftValue) : shiftValue}
                                    onChange={option => shiftOnChange(option ? option.value : option)}
                                    {...restshiftField}
                                    classNamePrefix='react-select'  />
                                {errors.shift && <p className='errorTxt'>{errors.shift.message}</p>}

                            </div>
                            

                          
                        </div>
            </div>


         
            <div className='system-login-details mb-4'>
                <h6 className=' pb-2'>System Login</h6>
                <div className='grid grid-cols-12 sm:gap-6'>
                                                    
                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Enable Login</label>
                            <Select className="!p-0 place-holder"   
                                    isClearable
                                    options={enableLogin}
                                    value={enableLoginValue !== null ? enableLogin.find(x => x.value === enableLoginValue) : null}
                                    onChange={option => enableLoginOnChange(option ? option.value : null)}
                                    {...restenableLoginSelectField}
                                    classNamePrefix='react-select'  />
                            </div>
                              {/* <div className='staff-answer-row pt-2 xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12'>
                        <div className="form-check">
                            <input className="form-check-input"  onChange={enableLoginChange}  type="checkbox" id="flexCheckDefault20" />
                            <label className="form-check-label" htmlFor="flexCheckDefault20">
                            Enable Login
                            </label>
                        </div>
                       </div> */}

                            <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Password</label>
                            <input type="password" {...register('password')} name='password'  className="form-control"  placeholder="" />
                            </div>
                            {/* <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Confirm Password</label>
                            <input type="text" className="form-control" id="input-text" placeholder="" />
                            </div> */}
                            

                          
                        </div>
            </div>

            

            <div className='student-create-btn'>
                <div className='flex justify-end'>
                <button type="submit" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave"> Create</button>
                <div className='backButton'>
                <Link to={`${import.meta.env.BASE_URL}pages/staff/staffDetails`}>

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
  )
}

export default CreateStaff
