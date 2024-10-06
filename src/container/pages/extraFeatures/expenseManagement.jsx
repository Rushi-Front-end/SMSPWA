import * as XLSX from 'xlsx';
import React, { useEffect, useState } from 'react'
import { category, singleselect } from '../../forms/formelements/formselect/formselectdata'
import Select from 'react-select';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import Loader from '../loader/loader';
import { toast } from 'react-toastify';
import { useSchoolId } from '../../../components/common/context/idContext';

const ExpenseManagement = () => {
    const [data, setData] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [startDate1, setStartDate1] = useState(new Date());
    const [spinner, setSpinner] = useState(false);
    const [deleteLeav, setDeleteLeav] = useState();
    const [categoryFilter, setCategoryFilter] = useState(null)
    const [categoryOptions, setCategoryOptions] = useState([])
    const {id: schoolId} = useSchoolId();

    const getExpenseList = () => {
        setSpinner(true);
        axios
            .get(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Expenses/GetExpensesByFilter?SchoolId=${schoolId}`)
            .then((res) => {
                console.log(res, "GTSATFF SL")
                setData(res.data);

                const categoryOptionsList = res.data.map(el => ({
                    id: el.id,
                    value: el.id,
                    label: el.category
                }))

                setCategoryOptions(categoryOptionsList)
                
                setSpinner(false);
                // const initialStatusMap = res.data.reduce((acc, leave) => {
                //   acc[leave.id] = leave.status;
                //   return acc;
                // }, {});
                // setStatusMap(initialStatusMap);
            })
            .catch((err) => {
                console.log(err);
                setSpinner(false);
            });
    };

    const deleteStaffLeave = (id) => {
        setDeleteLeav(id);
    };

    const deleteDatahandler = (data) => {
        axios
            .delete(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Expenses/DeleteExpenses/${data}`)
            .then((res) => {
                if (res.status === 200) {
                    toast.success('Expenses Delete Data Successfully');
                    getExpenseList();
                }
            })
            .catch((err) => console.log(err));
    };


    useEffect(() => {
        getExpenseList();
    }, [schoolId]);

    const formatDate = (inputDate) => {
        const date = new Date(inputDate);

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        const formattedDate = `${day}/${month}/${year}`;
        
        return formattedDate
    }

    const handleFilter = async () => {
        const startDateFilter = formatDate(new Date(startDate));
        const endDateFilter = formatDate(new Date(startDate1))

        let params = [];
    
        if (startDateFilter) {
            params.push(`FromDate=${encodeURIComponent(startDateFilter)}`);
        }
    
        if (endDateFilter) {
            params.push(`ToDate=${encodeURIComponent(endDateFilter)}`);
        }
    
        if (categoryFilter) {
            params.push(`Category=${encodeURIComponent(categoryFilter.label)}`);
        }
    
        if (params.length === 0) {
            toast.error("Choose a Filter");
            return;
        }
    
        const queryString = params.join("&");
        const url = `https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Expenses/GetExpensesByFilter?${queryString}`;
    
        try {
            const result = await axios.get(url);
            const filteredData = result.data;
    
            if (!filteredData?.length) {
                toast.error("No data found");
            }

            setData(filteredData);
        } catch (error) {
            toast.error("An error occurred while fetching data");
            console.error("Error fetching data:", error);
        }
    }

    return (
        <div>
            <h4 className='pt-4 borderBottom'>Expense</h4>
            <div className="expenseflex-container pb-4 pt-2">
                <div className='flex justify-between items-center'>
                    <div className="exp-innerflex-container">
                        <div className='flex flex-row '>
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

                                    <li className="text-sm text-gray-500 dark:text-[#8c9097] dark:text-white/50 hover:text-primary truncate" aria-current="page">
                                        Expenses
                                    </li>
                                </ol>
                            </div>

                        </div>


                    </div>
                    {/* <div className="createstudent-btn">
                <Link to={`${import.meta.env.BASE_URL}pages/extrafeatures/createExpense`}>
                    <button type="button" className="ti-btn ti-btn-secondary-full !rounded-full ti-btn-wave">Create Expense</button>
                </Link>
            </div> */}
                </div>


            </div>

            <div className='create-stud-table'>
                <div className='box p-4'>
                    <div className='expenses-wrapper'>
                        <div className='flex justify-between'>
                        <h4>Expense List</h4>
                        <div className='expense-export-create-sec flex  justify-end'>


                            <div className='export-button'>
                                <div className="ti-btn-list">
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
                                                    <div id="export_1724247195639" className="dropdown-item"onClick={() => exportData(data, 'xls')}>Excel (.xls)</div>
                                                </Link>
                                                </li>
                                                <li><Link className="ti-dropdown-item" to="#">
                                                    <div id="export_1724247195639" className="dropdown-item" onClick={() => exportData(data, 'xlsx')}>Excel (.xlsx)</div>
                                                </Link></li>
                                                <li><Link className="ti-dropdown-item" to="#">
                                                    <div id="export_1724247195639" className="dropdown-item" onClick={() => exportData(data, 'csv')}>Excel (.csv)</div>
                                                </Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="createstudent-btn">
                                <Link to={`${import.meta.env.BASE_URL}pages/extrafeatures/createExpense`}>
                                    <button type="button" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave">Create Expense</button>
                                </Link>
                            </div>
                        </div>
                        </div>
                        <div className='expenses-top-wrapper flex justify-between pt-4'>

                            <div className='flex left-expense-date align-center'>
                                <div className='expense-datepicker'>
                                    <label className="ti-form-select rounded-sm !p-0 mb-2"> From:</label>
                                    <div className="input-group !flex-nowrap">
                                        <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                                        <DatePicker placeholderText="Choose date" className="ti-form-input  focus:z-10" dateFormat="dd/MM/yyyy"
                                            showMonthDropdown="true"
                                            showYearDropdown="true" showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
                                    </div>
                                </div>
                                <div className='expense-datepicker'>
                                    <label className="ti-form-select rounded-sm !p-0 mb-2"> To:</label>
                                    <div className="input-group !flex-nowrap">

                                        <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                                        <DatePicker placeholderText="Choose date" className="ti-form-input  focus:z-10"
                                            showMonthDropdown="true"
                                            showYearDropdown="true" showIcon selected={startDate1} onChange={(date) => setStartDate1(date)} dateFormat="dd/MM/yyyy" />
                                    </div>
                                </div>
                                {/* <div className="expense-category-div  xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
                                    <label className="ti-form-select rounded-sm !p-0 mb-2"> Category:</label>

                                    <Select className="!p-0 place-holder" classNamePrefix='react-select' value={categoryFilter} options={categoryOptions} onChange={(option) => setCategoryFilter(option)} />
                                </div> */}
                                <div className="expenseFilter-btn xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">

                                    <button type="button" className="ti-btn ti-btn-warning-full filterbutton !rounded-full ti-btn-wave" onClick={handleFilter}>Filter</button>
                                </div>

                            </div>

                        </div>

                    </div>
                    {/* Top section end */}
                    {/* Table section start */}
                    <div className="student-table-details pt-4">
                        <div className="table-responsive">
                            <table className="table   whitespace-nowrap table-sm min-w-full">
                                <thead><tr className="border-b border-defaultborder">
                                    <th scope="col" className="text-start">#</th>
                                    {/* <th scope="col" className="text-start">Title	</th> */}
                                    <th scope="col" className="text-start">Category</th>
                                    <th scope="col" className="text-start"> Date</th>
                                    <th scope="col" className="text-start">Amount	</th>
                                    <th scope="col" className="text-start">Created By	</th>
                                    <th scope="col" className="text-start">Invoice</th>
                                    <th scope="col" className="text-start">Action</th>
                                </tr>
                                </thead>

                                {spinner ? (
                                    <Loader />
                                ) : (
                                    data.length > 0 ? (
                                        data.map((dt, index) => {
                                            return (
                                                <tbody key={index}>

                                                    <tr>
                                                        <td rowSpan="2">{index + 1}</td>
                                                        {/* <td>Uniform	</td> */}
                                                        <td>	{dt.category}</td>
                                                        <td>{dt.date}</td>
                                                        <td>{dt.amount}</td>
                                                        <td>
                                                            {dt.submittedAt}
                                                        </td>
                                                        <td>{dt.invoiceNumber}</td>
                                                        {/* <td>
                                                            <Link className='text-primary hs-dropdown-toggle ti-btn ' data-hs-overlay="#hs-vertically-centered-modal">View</Link>
                                                        </td> */}
                                                        <td rowSpan="2">
                                                            <div className="ti-dropdown hs-dropdown">
                                                                <button type="button"
                                                                    className="ti-btn ti-btn-ghost-primary ti-dropdown-toggle me-2 !py-2 !shadow-none" aria-expanded="false">
                                                                    <i className="ri-arrow-down-s-line align-middle inline-block"></i>
                                                                </button>
                                                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                                                    {/* <li><Link className="ti-dropdown-item" to="#">Approve</Link></li>
                                                                    <li><Link className="ti-dropdown-item" to="#">Reject</Link></li> */}
                                                                    <li><Link className="ti-dropdown-item" to={`${import.meta.env.BASE_URL}pages/extraFeatures/updateExpense/${dt.id}`}>Edit</Link></li>
                                                                    <li>
                                                                        <Link
                                                                            className="ti-dropdown-item"
                                                                            to="#"
                                                                            data-hs-overlay={`#hs-vertically-centered-modal${dt.id}`}
                                                                            onClick={() => deleteStaffLeave(dt.id)}
                                                                        >
                                                                            Cancel
                                                                        </Link>
                                                                    </li>

                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr><td colSpan="7" className="text-normal"><p>Remarks: {dt.note}</p></td>
                                                    </tr>
                                                </tbody>
                                            )
                                        })
                                    ) : (
                                        <tr>
                                            <td colSpan="6">
                                                <h3 className='text-center'>
                                                    No Data available.
                                                </h3>
                                            </td>
                                        </tr>
                                    )

                                )}
                            </table>

                        </div>
                    </div>
                    {/* Table section end */}
                </div>
            </div>


            <div id="hs-vertically-centered-modal" className="hs-overlay hidden ti-modal">
                <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out min-h-[calc(100%-3.5rem)] flex items-center">
                    <div className="ti-modal-content">
                        <div className="ti-modal-header">
                            <h6 className="modal-title" id="staticBackdropLabel2">View Document
                            </h6>
                            <button type="button" className="hs-dropdown-toggle ti-modal-close-btn" data-hs-overlay="#hs-vertically-centered-modal">
                                <span className="sr-only">Close</span>
                                <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                                </svg>
                            </button>
                        </div>
                        <div className="ti-modal-body">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Libero
                                ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
                                nisi
                                ipsa maiores fugiat deleniti quis reiciendis veritatis.</p>
                        </div>
                        <div className="ti-modal-footer">
                            <button type="button" className="hs-dropdown-toggle ti-btn ti-btn-secondary-full" data-hs-overlay="#hs-vertically-centered-modal">
                                Close
                            </button>
                            <Link className="ti-btn ti-btn-primary-full" to="#">
                                Save changes
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal popup Start */}
            <div id={`hs-vertically-centered-modal${deleteLeav}`} className="hs-overlay hidden ti-modal">
                {/* Modal content here */}
                <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out min-h-[calc(100%-3.5rem)] flex justify-center items-center">
                    <div className="ti-modal-content">
                        <div className="ti-modal-header">
                            <h6 className="modal-title" id="staticBackdropLabel2">Warning
                            </h6>
                            <button type="button" className="hs-dropdown-toggle ti-modal-close-btn" data-hs-overlay={`#hs-vertically-centered-modal${deleteLeav}`}>
                                <span className="sr-only">Close</span>
                                <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                                </svg>
                            </button>
                        </div>
                        <div className="ti-modal-body">
                            <p>Sure you want to delete this record? </p>
                        </div>
                        <div className="ti-modal-footer">
                            <button type="button" className="hs-dropdown-toggle ti-btn yoti-btn-secondary-full" data-hs-overlay={`#hs-vertically-centered-modal${deleteLeav}`}>
                                No
                            </button>
                            <button type="button" className="hs-dropdown-toggle ti-btn ti-btn-primary-full" data-hs-overlay={`#hs-vertically-centered-modal${deleteLeav}`} onClick={() => deleteDatahandler(deleteLeav)}>
                                Yes
                            </button>
                            {/* <Link className="ti-btn ti-btn-primary-full" to="#" 
                      >
                        Yes
                      </Link> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal popup End */}

        </div>
    )
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


export default ExpenseManagement