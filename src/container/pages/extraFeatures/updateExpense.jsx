import React, { useContext, useEffect, useState } from 'react'
import { category } from '../../forms/formelements/formselect/formselectdata'
import Select from 'react-select';
import { Link, useParams } from 'react-router-dom';
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
    category: yup.string().nullable().required("Please Select Category"),
    date: yup.string().nullable().required("Please Select Expense Date "),
    amount: yup.string().nullable().required("Please Enter Amount "),
    invoiceNumber: yup.string().nullable().required("Please Enter Invoice Number "),
    note: yup.string().nullable(),
    message: yup.string().nullable(),
    //invoice: yup.string().nullable().required("Please Upload Invoice File "),

});


const UpdateExpense = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [data, setData] = useState([]);
    const { register, handleSubmit, formState, control, setValue, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const navigate = useNavigate()
    const params = useParams()
    console.log(params.id, "UpdateExam")
    const [otherField, setOtherField] = useState(false)

    const schoolIdDrop = useContext(IdContext);
    console.log(schoolIdDrop.id,"UseCONTEXT")

    const { errors } = formState;

    const { field: { value: categoryValue, onChange: categoryOnChange, ...restcategoryField } } = useController({ name: 'category', control });
    // const { field: { value: dateValue, onChange: dateOnChange, ...restdateField } } = useController({ name: 'date', control });
    // const { field: { value: amountValue, onChange: amountOnChange, ...restamountField } } = useController({ name: 'amount', control });
    // const { field: { value: invoiceNumberValue, onChange: invoiceNumberOnChange, ...restinvoiceNumberField } } = useController({ name: 'invoiceNumber', control });
    // const { field: { value: noteValue, onChange: noteOnChange, ...restnoteField } } = useController({ name: 'note', control });
    // const { field: { value: messageValue, onChange: messageOnChange, ...restmessageField } } = useController({ name: 'message', control });
    // const { field: { value: invoiceValue, onChange: invoiceOnChange, ...restinvoiceField } } = useController({ name: 'invoice', control });


    useEffect((id)=>{
        axios.get(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Expenses/GetExpensesById/${params.id}`)
    },[params.id])

    useEffect(() => {
        if (params.id) {
          axios
            .get(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Expenses/GetExpensesById/${params.id}`)
            .then((res) => {
              if (res.data) {
                const classData = res.data;
                console.log(classData,'classData')
                Object.keys(classData).forEach(key => {
                    setValue(key, classData[key]);
                });
                // setValue('id', classData.id);
                // setValue('staffName', classData.staffName);
                // setValue('leaveType', classData.leaveType);
                // setValue('fromDate', new Date(classData.fromDate));
                // setValue('toDate', new Date(classData.toDate));
                // setValue('comments', classData.comments);
                // setStartDate(new Date(classData.fromDate));
                // setStartDate1(new Date(classData.toDate));
              }
            })
            .catch((err) => {
              console.error('Error fetching class data:', err);
            });
        }
      }, [params.id, setValue]);

      const handleCategoryChange = (option) => {
        if (option && option.value === 'Other') { // Adjust 'Other' to match the actual value for the other option
            setOtherField(true);
        } else {
            setOtherField(false);
        }
    };

    const onSubmit = (formData) => {
        setData({...formData})
        console.log(formData, "ExpensesFormData")
        axios.put(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Expenses/UpdatetExpenses/${params.id}`, {
            ...formData,
            schoolId:4,
            // fromDate: formatDate(startDate), // Ensure format is correct
            // toDate: formatDate(endDate),
            // createdBy:4
        })
        .then((res)=>{
            console.log(res)
            if(res.status === 200){
                axios.get(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Expenses/GetAllExpenses`)
                navigate(`${import.meta.env.BASE_URL}pages/extraFeatures/expenseManagement`)
                toast.success("Expenses Data Created Successfuly")
            }

        })
        .catch((err) => {
            console.log(err)
        })
    }




    return (
        <div>
            <h4 className="pt-4 borderBottom">Update Expense Request</h4>
            <div className="breadcrumbs-wrapper mb-4 pt-2">
                <div className='expenseflex-container'>
                    <div className='flex flex-row  items-center'>

                       

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
                                    <Link className="flex items-center text-primary hover:text-primary dark:text-primary" to={`${import.meta.env.BASE_URL}pages/extraFeatures/expenseManagement`}>
                                        Expenses
                                        <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-black-300 dark:text-white/10 rtl:rotate-180"
                                            width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </Link>
                                </li>

                                <li className="text-sm text-gray-500 dark:text-[#8c9097] dark:text-white/50 hover:text-primary truncate" aria-current="page">
                                 Update Expenses
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            {/* Student form create Start */}
            <div className='staff-form-create'>
                <div className='box'>
                    <div className='box-body '>
                        <div className='staffleave-details mb-4'>
                            <h4>Add Expense</h4>
                            <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='grid grid-cols-12 sm:gap-6 pt-4'>
                          
                            <div className="leave-staff-div  xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2"> Category<span className='redText'>*</span>:</label>
                                <Select className="!p-0 place-holder" classNamePrefix='react-select' options={category} value={categoryValue ? category.find(x => x.value === categoryValue) : categoryValue}
                                            onChange={option => {categoryOnChange(option ? option.value : option); handleCategoryChange(option)}}
                                            {...restcategoryField} />
                                        {errors.category && <p className='errorTxt'>{errors.category.message}</p>}
                            </div>
                            {otherField && (
                                        <div className="xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
                                            <label className="ti-form-select rounded-sm !p-0 mb-2">Other:</label>
                                            <input type="text" {...register('message')} name='message' className="form-control" id="input-text" placeholder="" />
                                        </div>
                                    )}
                            <div className="leave-staff-div  xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Amount<span className='redText'>*</span>:</label>
                                <div className="flex rounded-sm">
                                    <span className="px-4 inline-flex items-center min-w-fit rounded-s-sm border-e-0 border-gray-200 bg-light text-sm text-gray-500 dark:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">RS.</span>
                                    <input type="text"  {...register('amount')} name='amount' className="py-2 px-3 ti-form-input rounded-none rounded-e-sm focus:z-10 !border-s-0" placeholder="Enter Amount" />
                                </div>
                                {errors.amount && <p className='errorTxt'>{errors.amount.message}</p>}

                            </div>
                            <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 col-span-12">
            <label htmlFor="input-text" className="form-label">Invoice Number<span className='redText'>*</span></label>
            <input type="text" {...register('invoiceNumber')} name='invoiceNumber' className="form-control" id="input-text" placeholder="Enter Invoice Number" />
            {errors.invoiceNumber && <p className='errorTxt'>{errors.invoiceNumber.message}</p>}

        </div>
                                <div className="xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
                                    <label className="ti-form-select rounded-sm !p-0 mb-2">Expense Date<span className='redText'>*</span></label>
                                    <div className="input-group !flex-nowrap">
                                        <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                                        <Controller
                                                name="date"
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


                                <div className='right-side-upload- xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 col-span-12'>
                                <label htmlFor="input-text" className="form-label">Invoice<span className='redText'>*</span></label>
                                <div>
                                <label htmlFor="file-input" className="sr-only">Choose file</label>
                                <input name='invoice' type="file" id="file-input" className="block w-full border border-gray-200 focus:shadow-sm dark:focus:shadow-white/10 rounded-sm text-sm focus:z-10 focus:outline-0 focus:border-gray-200 dark:focus:border-white/10 dark:border-white/10 dark:text-white/50
                                       file:border-0
                                      file:bg-light file:me-4
                                      file:py-3 file:px-4
                                      dark:file:bg-black/20 dark:file:text-white/50"/>
                            </div>
            {/* {errors.invoice && <p className='errorTxt'>{errors.invoice.message}</p>} */}

                            </div>



                            <div className='leave-staff-comment pt-4 pb-2 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12'>
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Comments</label>
                                <textarea {...register('note')} name='note' className="form-control" id="text-area" rows="5"></textarea>
                            </div>
                            </div>
                            {/* End of the grid */}


                        <div className='student-create-btn pt-4'>
                            <div className='flex justify-end'>
                                <button type="submit" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave">Update</button>
                                <div className='backButton'>
                            <Link to={`${import.meta.env.BASE_URL}pages/extraFeatures/expenseManagement`}>

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

export default UpdateExpense