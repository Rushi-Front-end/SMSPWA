import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import { Link, useLocation } from 'react-router-dom';
import HealthMedical from './healthMedical';
import axios from 'axios';
import DatePicker from 'react-datepicker';

import { useForm, useController, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import EditHealthMedical from './editHealthMedical';

const formatDate = (date) => {
    if (!date) return '';
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};
const schema = yup.object({
    studentID: yup.string().nullable().required("Please Select student Name"),
    height: yup.string().nullable().required("Please Enter Height "),
    weight: yup.string().nullable().required("Please Enter Weight "),
    bloodPressure: yup.string().nullable().required("Please Enter Blood Pressure "),
    dentalCheckup: yup.string().nullable().required("Please Enter Dental Checkup "),
    bmiClassification: yup.string().nullable().required("Please Enter BMI Classfification "),
    mctsNumber: yup.string().nullable().required("Please Enter MCTS Number "),
    acuityOfVisionLeftEye: yup.string().nullable().required("Please Enter Acuity Of Vision Left Eye "),
    acuityOfVisionRightEye: yup.string().nullable().required("Please Enter Acuity Of Vision Right Eye "),
    descriptionOfDiseases: yup.string().nullable().required("Please Enter Description Of Diseases "),
    suggestedSolutionsAndTreatments: yup.string().nullable().required("Please Enter suggested Solutions And Treatments "),
    remark: yup.string().nullable().required("Please Enter Remarks "),
    createdAt: yup.string().nullable().required("Please Enter Enrolment Date "),
    // suggestedSolutionsAndTreatments: yup.string().nullable().required("Please Enter suggested Solutions And Treatments "),
    healthCheckupDate: yup.string().nullable().required("Please Enter Health Checkup Date"),
    nameOfDoctor: yup.string().nullable().required("Please Enter Name of  the Doctor "),
    nameOfHospital: yup.string().nullable().required("Please Enter Name of  the Hospital "),
    //invoice: yup.string().nullable().required("Please Upload Invoice File "),

}).required();


const EditHealth = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [startDate1, setStartDate1] = useState(new Date());
    const [data, setData] = useState(null);
    const { register, handleSubmit, formState, control, setValue, reset } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange' // Optional: ensures validation runs on each change
    });

    const [studMed, setStudMedical] = useState(false);
    const [studNameDrop, setStudNameDrop] = useState([]);
    
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const id = queryParams.get('id'); // '12345'
    const date = queryParams.get('date'); // '09-11-2023'

    const { errors, isValid } = formState;

    const { field: { value: studentNameValue, onChange: studentNameOnChange, ...reststudentNameField } } = useController({ name: 'studentID', control });
    const { field: { value: height, onChange: heightOnChange, ...restHeightField } } = useController({ name: 'height', control });
    const { field: { value: weight, onChange: weightOnChange, ...restWeightField } } = useController({ name: 'weight', control });
    const { field: { value: bloodPressure, onChange: bloodPressureOnChange, ...restBloodPressureField } } = useController({ name: 'bloodPressure', control });
    const { field: { value: dentalCheckup, onChange: dentalCheckupOnChange, ...restDentalCheckupField } } = useController({ name: 'dentalCheckup', control });
    const { field: { value: bmiClassification, onChange: bmiClassificationOnChange, ...restBmiClassificationField } } = useController({ name: 'bmiClassification', control });
    const { field: { value: mctsNumber, onChange: mctsNumberOnChange, ...restMctsNumberField } } = useController({ name: 'mctsNumber', control });
    const { field: { value: acuityOfVisionLeftEye, onChange: acuityOfVisionLeftEyeOnChange, ...restAcuityOfVisionLeftEyeField } } = useController({ name: 'acuityOfVisionLeftEye', control });
    const { field: { value: acuityOfVisionRightEye, onChange: acuityOfVisionRightEyeOnChange, ...restAcuityOfVisionRightEyeField } } = useController({ name: 'acuityOfVisionRightEye', control });
    const { field: { value: descriptionOfDiseases, onChange: descriptionOfDiseasesOnChange, ...restDescriptionOfDiseasesField } } = useController({ name: 'descriptionOfDiseases', control });
    const { field: { value: suggestedSolutionsAndTreatments, onChange: suggestedSolutionsAndTreatmentsOnChange, ...restSuggestedSolutionsAndTreatmentsField } } = useController({ name: 'suggestedSolutionsAndTreatments', control });
    const { field: { value: remark, onChange: remarkOnChange, ...restRemarkField } } = useController({ name: 'remark', control });
    const { field: { value: createdAt, onChange: createdAtOnChange } } = useController({ name: 'createdAt', control });
    const { field: { value: healthCheckupDate, onChange: healthCheckupDateOnChange } } = useController({ name: 'healthCheckupDate', control });
    const { field: { value: nameOfDoctor, onChange: nameOfDoctorOnChange, ...restNameOfDoctorField } } = useController({ name: 'nameOfDoctor', control });
    const { field: { value: nameOfHospital, onChange: nameOfHospitalOnChange, ...restNameOfHospitalField } } = useController({ name: 'nameOfHospital', control});

    const getHealthDataById = async (id, date) => {
      try {
        const studentRes = await axios.get(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/StudentHealthCheckup/GetStudentHealthCheckupById?studentId=${id}&healthCheckupDate=${date}`)
        const studentData = studentRes.data

        setData(studentData)

        studentNameOnChange(studentData.studentID)
        heightOnChange(studentData.height)
        weightOnChange(studentData.weight)
        bloodPressureOnChange(studentData.bloodPressure)
        dentalCheckupOnChange(studentData.dentalCheckup)
        bmiClassificationOnChange(studentData.bmiClassification)
        mctsNumberOnChange(studentData.mctsNumber)
        acuityOfVisionLeftEyeOnChange(studentData.acuityOfVisionLeftEye)
        acuityOfVisionRightEyeOnChange(studentData.acuityOfVisionRightEye)
        descriptionOfDiseasesOnChange(studentData.descriptionOfDiseases)
        suggestedSolutionsAndTreatmentsOnChange(studentData.suggestedSolutionsAndTreatments)
        remarkOnChange(studentData.remark)
        createdAtOnChange(studentData.createdAt)
        healthCheckupDateOnChange(studentData.healthCheckupDate)
        nameOfDoctorOnChange(studentData.nameOfDoctor)
        nameOfHospitalOnChange(studentData.nameOfHospital)

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    useEffect(() => {
        if(id && date)  getHealthDataById(id, date)
    }, [id, date])


    const NextPageOpen = (e) => {
       
    }
    const onSubmit = (formData) => {
        if(isValid){
            setData(prev => ({...prev, ...formData}))


            setStudMedical(true)
        }
    }
    const getStudNameDrop = async () => {
        await axios.get('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Students')
            .then(res => {
                const studDropOptions = res.data.map(staff => ({
                    value: staff.id,
                    label: staff.fullName
                }));
                setStudNameDrop(studDropOptions);
            })
            .catch(err => console.log(err));
      }
      useEffect(()=>{
        if(data)
        getStudNameDrop()
      },[data])

    return (
        <div>
            <h4 className='pt-4 borderBottom'>Create Health Document</h4>
            <div className="breadcrumbs-wrapper mb-4 pt-2">
                <div className='healthdoc-flex-container'>
                    <div className='flex flex-row mb-4 items-center'>



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
                                    <Link className="flex items-center text-primary hover:text-primary dark:text-primary" to={`${import.meta.env.BASE_URL}pages/health/healthDetails`}>
                                        Health Documents
                                        <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-black-300 dark:text-white/10 rtl:rotate-180"
                                            width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </Link>
                                </li>

                                <li className="text-sm text-gray-500 dark:text-[#8c9097] dark:text-white/50 hover:text-primary truncate" aria-current="page">
                                    Update Health Document
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            {/* Student form create Start */}
            <div className='student-form-create'>
                <div className='box p-4 ' >
                    <h4 className=' pb-2'>Health Form</h4>
                    {
                        studMed ? <div className='student-medical-details-page'>
                            <EditHealthMedical data={data} setStudMedical={setStudMedical} />
                        </div>
                            :
                            <div className='health-details-wrapper'>
                                <div className='academic-details mb-4'>
                                    <h6 className=' pb-2'>Student Details</h6>
                                </div>
                                <form  onSubmit={handleSubmit(onSubmit)}>
                                    <div className='grid grid-cols-12 sm:gap-6'>


                                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <label className="ti-form-select rounded-sm !p-0 mb-2">Select Student<span className='redText'>*</span>:</label>
                                            {/* <Select className="!p-0 place-holder" classNamePrefix='react-select' options={studNameDrop} /> */}
                                            <Select className="!p-0 place-holder" classNamePrefix='react-select' options={studNameDrop} value={studentNameValue ? studNameDrop.find(x => x.value === studentNameValue) : studentNameValue}
                                            onChange={option => {studentNameOnChange(option ? option.value : option)}}
                                            {...reststudentNameField} />
                                        {errors.studentName && <p className='errorTxt'>{errors.studentName.message}</p>}
                                        </div>


                                    </div>
                                <div className='aadharcard-details mb-4'>
                                    <h4 className='pt-2 pb-2'>Health Declaration Form</h4>
                                  

                                    <div className='grid grid-cols-12 sm:gap-6 pt-4'>
                                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <label className="ti-form-select rounded-sm !p-0 mb-2">Height<span className='redText'>*</span>:</label>
                                            <input type="text" {...register('height')} name='height' className="form-control" id="input-text" placeholder="" value={height} onChange={heightOnChange} {...restHeightField} />
                                            {errors.height && <p className='errorTxt'>{errors.height.message}</p>}
                                        </div>
                                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <label className="ti-form-select rounded-sm !p-0 mb-2">Weight<span className='redText'>*</span></label>
                                            <input type="text"  {...register('weight')} name='weight' className="form-control" id="input-text" placeholder="" value={weight} onChange={weightOnChange} {...restWeightField} />
                                            {errors.weight && <p className='errorTxt'>{errors.weight.message}</p>}

                                        </div>
                                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <label className="ti-form-select rounded-sm !p-0 mb-2">Blood Pressure<span className='redText'>*</span></label>
                                            <input type="text"  {...register('bloodPressure')} name='bloodPressure' className="form-control" id="input-text" placeholder="" value={bloodPressure} onChange={bloodPressureOnChange} {...restBloodPressureField} />
                                            {errors.bloodPressure && <p className='errorTxt'>{errors.bloodPressure.message}</p>}

                                        </div>
                                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <label className="ti-form-select rounded-sm !p-0 mb-2">Dental Checkup<span className='redText'>*</span></label>
                                            <input type="text" {...register('dentalCheckup')} name='dentalCheckup' className="form-control" id="input-text" placeholder="" value={dentalCheckup} onChange={dentalCheckupOnChange} {...restDentalCheckupField} />
                                            {errors.dentalCheckup && <p className='errorTxt'>{errors.dentalCheckup.message}</p>}

                                        </div>
                                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <label className="ti-form-select rounded-sm !p-0 mb-2">BMI Classification<span className='redText'>*</span></label>
                                            <input type="text" {...register('bmiClassification')} name='bmiClassification' className="form-control" id="input-text" placeholder="" value={bmiClassification} onChange={bmiClassificationOnChange} {...restBmiClassificationField} />
                                            {errors.bmiClassification && <p className='errorTxt'>{errors.bmiClassification.message}</p>}

                                        </div>
                                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <label className="ti-form-select rounded-sm !p-0 mb-2">MCTS Number(Mother & Child Tracking)<span className='redText'>*</span></label>
                                            <input type="text"  {...register('mctsNumber')} name='mctsNumber' className="form-control" id="input-text" placeholder="" value={mctsNumber} onChange={mctsNumberOnChange} {...restMctsNumberField} />
                                            {errors.mctsNumber && <p className='errorTxt'>{errors.mctsNumber.message}</p>}
                                        </div>

                                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <label className="ti-form-select rounded-sm !p-0 mb-2">Acuity of Vision(Left Eye)<span className='redText'>*</span></label>
                                            <input type="text"  {...register('acuityOfVisionLeftEye')} name='acuityOfVisionLeftEye'  className="form-control" id="input-text" placeholder="" value={acuityOfVisionLeftEye} onChange={acuityOfVisionLeftEyeOnChange} {...restAcuityOfVisionLeftEyeField} />
                                            {errors.acuityOfVisionLeftEye && <p className='errorTxt'>{errors.acuityOfVisionLeftEye.message}</p>}

                                        </div>

                                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <label className="ti-form-select rounded-sm !p-0 mb-2">Acuity of Vision(Right Eye)<span className='redText'>*</span></label>
                                            <input type="text" {...register('acuityOfVisionRightEye')} name='acuityOfVisionRightEye' className="form-control" id="input-text" placeholder="" value={acuityOfVisionRightEye} onChange={acuityOfVisionRightEyeOnChange} {...restAcuityOfVisionRightEyeField} />
                                            {errors.acuityOfVisionRightEye && <p className='errorTxt'>{errors.acuityOfVisionRightEye.message}</p>}
                                        </div>

                                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <label className="ti-form-select rounded-sm !p-0 mb-2">Description of Diseases/Conditions<span className='redText'>*</span></label>
                                            <input type="text" {...register('descriptionOfDiseases')} name='descriptionOfDiseases' className="form-control" id="input-text" placeholder="" value={descriptionOfDiseases} onChange={descriptionOfDiseasesOnChange} {...restDescriptionOfDiseasesField} />
                                            {errors.descriptionOfDiseases && <p className='errorTxt'>{errors.descriptionOfDiseases.message}</p>}
                                        </div>

                                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <label className="ti-form-select rounded-sm !p-0 mb-2">Suggested Solutions & Treatments<span className='redText'>*</span></label>
                                            <input type="text" {...register('suggestedSolutionsAndTreatments')} name='suggestedSolutionsAndTreatments' className="form-control" id="input-text" placeholder="" value={suggestedSolutionsAndTreatments} onChange={suggestedSolutionsAndTreatmentsOnChange} {...restSuggestedSolutionsAndTreatmentsField} />
                                            {errors.suggestedSolutionsAndTreatments && <p className='errorTxt'>{errors.suggestedSolutionsAndTreatments.message}</p>}
                                        </div>

                                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <label className="ti-form-select rounded-sm !p-0 mb-2">Remarks<span className='redText'>*</span></label>
                                            <input type="text" {...register('remark')} name='remark' className="form-control" id="input-text" placeholder="" value={remark} onChange={remarkOnChange} {...restRemarkField} />
                                            {errors.remark && <p className='errorTxt'>{errors.remark.message}</p>}
                                        </div>

                                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <label htmlFor="input-date" className="form-label">Enrolment Date<span className='redText'>*</span></label>
                                            <div className="input-group !flex-nowrap">
                                            <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                                            <Controller
                                                name="createdAt"
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
                                        </div>

                                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <label className="ti-form-select rounded-sm !p-0 mb-2">Date of Health Record Entry</label>
                                            {/* <input {...register('healthCheckupDate')} name='healthCheckupDate' type="text" className="form-control" id="input-text" placeholder="" /> */}
                                            <div className="input-group !flex-nowrap">
                                            <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                                            <Controller
                                                name="healthCheckupDate"
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
                                            {errors.healthCheckupDate && <p className='errorTxt'>{errors.healthCheckupDate.message}</p>}

                                        </div>

                                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <label className="ti-form-select rounded-sm !p-0 mb-2">Name of the Doctor<span className='redText'>*</span></label>
                                            <input type="text" {...register('nameOfDoctor')} name='nameOfDoctor' className="form-control" id="input-text" placeholder="" value={nameOfDoctor} onChange={nameOfDoctorOnChange} {...restNameOfDoctorField} />
                                            {errors.nameOfDoctor && <p className='errorTxt'>{errors.nameOfDoctor.message}</p>}
                                        </div>
                                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <label className="ti-form-select rounded-sm !p-0 mb-2">Name of the Hospital<span className='redText'>*</span></label>
                                            <input type="text" {...register('nameOfHospital')} name='nameOfHospital' className="form-control" id="input-text" placeholder="" value={nameOfHospital} onChange={nameOfHospitalOnChange} {...restNameOfHospitalField} />
                                            {errors.nameOfHospital && <p className='errorTxt'>{errors.nameOfHospital.message}</p>}
                                        </div>



                                    </div>
                                </div>



                                <div className='student-create-btn'>
                                    <div className='flex justify-end'>
                                        <button type="submit" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave" onClick={NextPageOpen}> Next</button>
                                        <div className='backButton'>
                                            <Link to={`${import.meta.env.BASE_URL}pages/health/healthDetails`}>

                                                <button type="button" className="ti-btn ti-btn-info-full  ml-15 !rounded-full ti-btn-wave">Back</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                </form>
                            </div>
                                // Health Deails wrapper
                    }
                </div>
            </div>
            {/* Student form create end */}
        </div>
    )
}

export default EditHealth
