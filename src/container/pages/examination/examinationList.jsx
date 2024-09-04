import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { singleselect } from '../../forms/formelements/formselect/formselectdata'
import Select from 'react-select';
import axios from 'axios';
import Loader from '../loader/loader';

const ExaminationList = () => {
    const [examData, setExamData] = useState([])
    const [spinner, setSpinner] = useState(false)
    
    // Calculate percentages
    const calculatePercentage = (part, total) => {
      if (total === 0) return 0;
      return ((part / total) * 100).toFixed(2); // Rounded to 2 decimal places
    };
  
    
    const getExamDataList = () => {
        setSpinner(true)
        axios.get(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Exam`)
            .then(res => {
                setExamData(res.data)
                
                 setSpinner(false)
            })
            .catch(err => console.log(err))
    }
    useEffect(()=>{
        getExamDataList()
    },[])

  return (
    <div>
    <h4 className='pt-4 borderBottom'>Examination</h4>
    <div className="flex-staff pb-4 pt-2">
        <div className='flex justify-between'>
            <div className="staff-flex-container">
                <div className='flex flex-row items-center'>
                    {/* <div className='backButton'>
                        <Link to={`${import.meta.env.BASE_URL}pages/student/studentDetails`}>

                            <button type="button" className="ti-btn ti-btn-info-full ti-btn-wave">Back</button>
                        </Link>
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

                    <li className="text-sm text-gray-500 dark:text-[#8c9097] dark:text-white/50 hover:text-primary truncate" aria-current="page">
                        Exam
                    </li>
                </ol>
            </div>

                </div>


            </div>
            {/* <div className="createstudent-btn">
                <Link to={`${import.meta.env.BASE_URL}pages/staff/createStaff`}>
                    <button type="button" className="ti-btn ti-btn-secondary-full !rounded-full ti-btn-wave">+ Create Staff</button>
                </Link>
            </div> */}
        </div>


    </div>

    <div className='exam-stud-table'>
        <div className='box p-4'>
        <div className='exam-head-wrap'>
                <h4>Exam Data</h4>
            </div>
            <div className='exam-top-sec flex  justify-end  pt-4 pb-4'>

                <div className="exam-create-btn ">
                <Link to={`${import.meta.env.BASE_URL}pages/examination/createExamination`}>
                    <button type="button" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave">Add Exam</button>
                </Link>
                </div>
            </div>
            {/* Top section end */}
            {/* Top section end */}
            {/* Table section start */}
            <div className="exam-table-details">
                    <div className="table-responsive">
                        <table className="table whitespace-nowrap table-sm min-w-full">
                            <thead><tr className="border-b border-defaultborder">
                                <th scope="col" className="text-start">#</th>
                                {/* <th scope="col" className="text-start">Staff Code</th> */}
                                <th scope="col" className="text-start">Exam Type</th>
                                <th scope="col" className="text-start">Name of exam</th>
                                <th scope="col" className="text-start">Date</th>
                                <th scope="col" className="text-start">Total Student</th>
                                <th scope="col" className="text-start">Passed Student</th>
                                <th scope="col" className="text-start">Failed Student</th>
                                <th scope="col" className="text-start">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                        spinner ? <Loader /> :
                                       // Array.isArray(examData?.list) && examData.list.length > 0 ? (
                                            examData.map((dt, index) => {
                                                const passedPercentage = calculatePercentage(dt.passedStudent, dt.totalAppearedStudent);
                                                const failedPercentage = calculatePercentage(dt.failedStudent, dt.totalAppearedStudent);

                              return  <tr key={index} className="border-b border-defaultborder">
                                    <td>{index + 1}</td>
                                    {/* <td>EMP005</td> */}
                                    <td>      
                                        {dt.examType}                            
                                    </td>
                                    <td>{dt.examName}</td>
                                    <td>From:{dt.fromDate.slice(0,10)}
                                        <br/> To:{dt.toDate.slice(0,10)}
                                    </td>
                                    <td>{dt.totalAppearedStudent}</td>
                                    <td>{dt.passedStudent}({passedPercentage}%)</td>
                                    <td>{dt.failedStudent}({failedPercentage}%)</td>

                                    <td>
                                    <div className="ti-dropdown hs-dropdown">
                                            <button type="button"
                                                className="ti-btn ti-btn-ghost-primary ti-dropdown-toggle me-2 !py-2 !shadow-none" aria-expanded="false">
                                                <i className="ri-arrow-down-s-line align-middle inline-block"></i>
                                            </button>
                                            <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                                <li><Link className="ti-dropdown-item" to={`${import.meta.env.BASE_URL}pages/examination/updateExamination/${dt.id}`}>Edit</Link></li>
                                                <li><Link className="ti-dropdown-item" to="#">Delete</Link></li>

                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                  })
                                // ) : (
                                        //     <tr>
                                        //         <td colSpan="6">No Data available.</td>
                                        //     </tr>
                                        // )

                                    }

                            </tbody>
                        </table>
                      
                    </div>
            </div>
            {/* Table section end */}
        </div>
    </div>

</div>
  )
}

export default ExaminationList