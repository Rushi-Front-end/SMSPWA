import * as XLSX from 'xlsx';
import React, { useContext, useEffect, useState } from 'react';
import { prakalpName, reportType, singleselect } from '../../forms/formelements/formselect/formselectdata';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { useForm, useController, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import axios from 'axios';
import { IdContext } from '../../../components/common/context/idContext';
import ExamReport from './examReport';
import ExpenseReport from './expenseReport';
import schoolLogo from '../../../assets/images/logo/logo_small.svg'
import schoolLogoLarge from '../../../assets/images/logo/logo.svg'

import generatePDF from "react-to-pdf";

const getFormattedToday = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    return dd + '/' + mm + '/' + yyyy;
};



const options = {
    filename: "using-function.pdf",
    page: {
      margin: 20
    }
  };  
  const getTargetElement = () => document.getElementById("pdfDataFile");  
  const downloadPdf = () => generatePDF(getTargetElement, options);   

const formatDate = (date) => {
    if (!date) return '';
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};
const formatDate2 = (date) => {
    let [day, month, year] = date.split("/");

    // Convert to the format "YYYY-MM-DD"
    let formattedDate = `${year}-${month}-${day}`;
    return formattedDate
}

const schema = yup.object({
    reportType: yup.string().nullable().required("Please Enter Report Type"),
    fromDate: yup.string().nullable().required("Please Select From Date"),
    toDate: yup.string().nullable().required("Please Select To Date"),
    prakalpName: yup.string().nullable().required("Please Enter Prakalp Name"),
    schoolName: yup.string().nullable().required("Please Enter School Name"),
});

const Reports = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [startDate1, setStartDate1] = useState(new Date());
    const [schoolDataList, setSchoolDataList] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [reportName, setReportName] = useState()

    const [reportGenData, setReportGenData] = useState([])

    const [dataReport, setDataReport] = useState([]);
    const [reportHead, setReportHead] = useState()

    const formattedToday = getFormattedToday();
    // const [examReportCont, setExamReportCont] = useState([]);
    // const [expenseReportCont, setEReportCont] = useState([]);
    // const [examReportCont, setExamReportCont] = useState([]);
    // const [examReportCont, setExamReportCont] = useState([]);
    // const [examReportCont, setExamReportCont] = useState([]);
    // const [examReportCont, setExamReportCont] = useState([]);


    const { register, handleSubmit, formState, control } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });
    const { errors, isValid } = formState;

    const { field: { value: prakalpNameValue, onChange: prakalpNameOnChange, ...restprakalpNameField } } = useController({ name: 'prakalpName', control });
    const { field: { value: reportTypeValue, onChange: reportTypeOnChange, ...restreportTypeField } } = useController({ name: 'reportType', control });
    const { field: { value: schoolNameValue, onChange: schoolNameOnChange, ...restschoolNameField } } = useController({ name: 'schoolName', control });

    const schoolIdDrop = useContext(IdContext);
    console.log(schoolIdDrop.id, "UseCONTEXT");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/School');
                const schoolListOptions = response.data.map((schoolData) => ({
                    id: schoolData.id,
                    label: schoolData.schoolName,
                    value: schoolData.id
                }));
                setSchoolDataList(schoolListOptions);
            } catch (err) {
                setSchoolDataList([]);
            }
        };

        fetchData();
    }, []);

    const onReportTypeChange = (option) => {
       // alert(option.value)
       setReportName(option.value)
    }

    const onSubmit = async (formData) => {
        if (isValid) {
            try {
                const { prakalpName, schoolName, fromDate, toDate, reportType } = formData;
    
                setReportHead(formData)
                // Format dates for API request
                const formattedFromDate = formatDate(new Date(formatDate2(fromDate)));
                const formattedToDate = formatDate(new Date(formatDate2(toDate)));
                
                console.log(schoolName, "ReportSchoolName")
    
                // Determine URL based on reportType
                let url;
                switch (reportType) {
                    case 'Exam Report':
                        url = new URL('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Report/GetExamReport');
                        break;
                    case 'Expense Report':
                        url = new URL('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Report/GetExpenseReports');
                        break;
                    default:
                        url = new URL('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Report/GetHostelAttendanceReports');
                }
    
                url.searchParams.append('prakalpName', prakalpName);
                url.searchParams.append('schoolName', schoolName);
                url.searchParams.append('fromDate', formattedFromDate);
                url.searchParams.append('toDate', formattedToDate);
                

                console.log(url,"REPORTS URL")
                // Fetch report data
                const response = await axios.get(url.toString());
                setDataReport(response.data)
                
                // Handle the response data
                console.log(response.data, "Generated Report Data");

                //set the value of report generated
                setReportGenData(response.data)
    
                // Open modal to show success message
                setModalIsOpen(true);
            } catch (error) {
                console.error('Error generating report:', error);
                toast.error("Failed to generate the report. Please try again.");
            }
        } else {
            toast.error("Please fix the errors before submitting.");
        }
    };
    
console.log(reportName, 'reportName')
    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <h4 className='pt-4 borderBottom'>Reports</h4>
            <div className="breadcrumbs-wrapper mb-4 pt-2">
                <div className='report-flex-container'>
                    <div className='flex flex-row'>
                        <div className="breadcrumbs !border-0">
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
            {/* Report form */}
            <div className='student-form-create'>
                <div className='box p-4'>
                    <h4 className='pb-2'>Reports List</h4>
                    <div className='report-details mb-4'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='grid grid-cols-12 sm:gap-6 pt-4'>
                                <div className="report-generate-dropdown xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                    <label className="ti-form-select rounded-sm !p-0 mb-2">Prakalpa Name<span className='redText'>*</span></label>
                                    <Select
                                        className="!p-0 place-holder"
                                        classNamePrefix='react-select'
                                        options={prakalpName}
                                        value={prakalpNameValue ? prakalpName.find(x => x.value === prakalpNameValue) : null}
                                        onChange={option => prakalpNameOnChange(option ? option.value : '')}
                                        {...restprakalpNameField}
                                    />
                                    {errors.prakalpName && <p className='errorTxt'>{errors.prakalpName.message}</p>}
                                </div>
                                <div className="report-generate-dropdown xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                    <label className="ti-form-select rounded-sm !p-0 mb-2">School Name<span className='redText'>*</span></label>
                                    <Select
                                        className="!p-0 place-holder"
                                        classNamePrefix='react-select'
                                        options={schoolDataList}
                                        value={schoolNameValue ? schoolDataList.find(x => x.label === schoolNameValue) : null}
                                        onChange={option => schoolNameOnChange(option ? option.label : '')}
                                        {...restschoolNameField}
                                    />
                                    {errors.schoolName && <p className='errorTxt'>{errors.schoolName.message}</p>}
                                </div>
                                <div className="xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
                                    <label className="ti-form-select rounded-sm !p-0 mb-2">From Date<span className='redText'>*</span></label>
                                    <div className="input-group !flex-nowrap">
                                        <div className="input-group-text text-[#8c9097] dark:text-white/50">
                                            <i className="ri-calendar-line"></i>
                                        </div>
                                        <Controller
                                            name="fromDate"
                                            control={control}
                                            render={({ field }) => (
                                                <DatePicker
                                                    {...field}
                                                    selected={startDate}
                                                    dateFormat="dd/MM/yyyy"
                                                    showMonthDropdown="true"
                                                    showYearDropdown="true"
                                                    onChange={date => {
                                                        setStartDate(date);
                                                        field.onChange(formatDate(date));
                                                    }}
                                                />
                                            )}
                                        />
                                    </div>
                                    {errors.fromDate && <p className='errorTxt'>{errors.fromDate.message}</p>}
                                </div>
                                <div className="xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
                                    <label className="ti-form-select rounded-sm !p-0 mb-2">To Date<span className='redText'>*</span></label>
                                    <div className="input-group !flex-nowrap">
                                        <div className="input-group-text text-[#8c9097] dark:text-white/50">
                                            <i className="ri-calendar-line"></i>
                                        </div>
                                        <Controller
                                            name="toDate"
                                            control={control}
                                            render={({ field }) => (
                                                <DatePicker
                                                    {...field}
                                                    selected={startDate1}
                                                    dateFormat="dd/MM/yyyy"
                                                    showMonthDropdown="true"
                                                    showYearDropdown="true"
                                                    onChange={date => {
                                                        setStartDate1(date);
                                                        field.onChange(formatDate(date));
                                                    }}
                                                />
                                            )}
                                        />
                                    </div>
                                    {errors.toDate && <p className='errorTxt'>{errors.toDate.message}</p>}
                                </div>
                                <div className="report-generate-dropdown xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                    <label className="ti-form-select rounded-sm !p-0 mb-2">Report Type<span className='redText'>*</span></label>
                                    <Select
                                        className="!p-0 place-holder"
                                        classNamePrefix='react-select'
                                        options={reportType}
                                        value={reportTypeValue ? reportType.find(x => x.value === reportTypeValue) : null}
                                        onChange={option =>{ reportTypeOnChange(option ? option.value : ''); onReportTypeChange(option)}}
                                        {...restreportTypeField}
                                    />
                                    {errors.reportType && <p className='errorTxt'>{errors.reportType.message}</p>}
                                </div>
                            </div>
                                <div className="report-button flex justify-end self-center pt-4  ml-15">
                                    <div className='report-create-btn'>
                                        <button type="submit" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave">Generate Report</button>
                                    </div>
                                </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Modal popup */}
            {modalIsOpen && (
                <div id="hs-vertically-centered-modal" className="hs-overlay reports-modal-popup ti-modal">
                    <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out min-h-[calc(100%-3.5rem)] flex items-center">
                        <div className="ti-modal-content">
                            {/* <div className="ti-modal-header">
                                <h6 className="modal-title" id="staticBackdropLabel2">Success {reportName}</h6>
                                <button type="button" className="hs-dropdown-toggle ti-modal-close-btn" onClick={closeModal}>
                                    <span className="sr-only">Close</span>
                                    <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                                    </svg>
                                </button>
                            </div> */}
                            <div className="ti-modal-body" id='pdfDataFile'>
                                <img src={schoolLogoLarge} alt='school logo' className='pb-4'/>
                            <div className='reportHead flex justify-between align-center pb-4'>
                                <div className='headLeftReport'>
                                    <p><b>Prakalp Name:</b> {reportHead.prakalpName}</p>
                                    <p><b>School Name:</b>  {reportHead.schoolName}</p>
                                    <p><b>From:</b>  {reportHead.fromDate}</p>
                                    <p><b>To:</b>  {reportHead.toDate}</p>
                                    <p><b>Report Type:</b>  {reportHead.reportType}</p>
                                    <p><b>Created By:</b>  Anup Singh</p>
                                    <p><b>Created At:</b>  {formattedToday}</p>
                                </div>                                
                            </div>
                        {reportName == 'Exam Report' && <ExamReport reportGenData={reportGenData} /> }
                        {reportName == 'Expense Report' && <ExpenseReport reportGenData={reportGenData} /> }
                            </div>
                            <div className="ti-modal-footer report-footer">
                            <div className="ti-btn-group" >
                                        <div className="hs-dropdown ti-dropdown">
                                            <button className={'ti-btn ti-btn-outline-warning ti-dropdown-toggle !rounded-full me-2'} type="button"
                                                id="dropdownMenuButton2"
                                                aria-expanded="false">
                                                Export<i
                                                    className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                            </button>
                                            <ul className="hs-dropdown-menu ti-dropdown-menu hidden"
                                                aria-labelledby="dropdownMenuButton2">
                                                <li><Link className="ti-dropdown-item" to="#">
                                                    <div id="export_1724247195639" className="dropdown-item"onClick={() => exportData(dataReport, 'xls')}>Excel (.xls)</div>
                                                </Link>
                                                </li>
                                                <li><Link className="ti-dropdown-item" to="#">
                                                    <div id="export_1724247195639" className="dropdown-item" onClick={() => exportData(dataReport, 'xlsx')}>Excel (.xlsx)</div>
                                                </Link></li>
                                                <li><Link className="ti-dropdown-item" to="#">
                                                    <div id="export_1724247195639" className="dropdown-item" onClick={() => exportData(dataReport, 'csv')}>Excel (.csv)</div>
                                                </Link></li>
                                                <li><Link className="ti-dropdown-item" to="#">
                                                    <div id="export_1724247195639" className="dropdown-item" onClick={downloadPdf}>PDF (.pdf)</div>
                                                </Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                <button type="button" className="ti-btn ti-btn-secondary-full" onClick={closeModal}>
                                    Close
                                </button>
                            </div>
                        </div>
                        
                        {/* {reportName == 'Expense Report' &&
                        <div className="ti-modal-content">
                            <div className="ti-modal-header">
                                <h6 className="modal-title" id="staticBackdropLabel2">Success {reportName}</h6>
                                <button type="button" className="hs-dropdown-toggle ti-modal-close-btn" onClick={closeModal}>
                                    <span className="sr-only">Close</span>
                                    <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                                    </svg>
                                </button>
                            </div>
                            <div className="ti-modal-body">
                                <p>Report generated {reportName}.</p>
                            </div>
                            <div className="ti-modal-footer">
                                <button type="button" className="ti-btn ti-btn-secondary-full" onClick={closeModal}>
                                    Close
                                </button>
                            </div>
                        </div>
                        }    */}


                    </div>
                </div>
            )}
        </div>
    );
}

export const exportData = (jsonData, fileType) => {
    // Convert JSON data to a worksheet
    const worksheet = XLSX.utils.json_to_sheet(jsonData);
  
    // Create a new workbook
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
  
    // Determine file extension and book type based on the fileType argument
    let fileExtension;
    let bookType;
  
    switch (fileType) {
      case 'csv':
        fileExtension = '.csv';
        bookType = 'csv';
        break;
      case 'xls':
        fileExtension = '.xls';
        bookType = 'xls';
        break;
      case 'xlsx':
        fileExtension = '.xlsx';
        bookType = 'xlsx';
        break;
      default:
        console.error('Unsupported file type');
        return;
    }
  
    // Trigger the download of the file
    XLSX.writeFile(workbook, `exported_data${fileExtension}`, { bookType });
  };

export default Reports;
