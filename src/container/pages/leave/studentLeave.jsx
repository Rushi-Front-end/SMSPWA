import React, { useEffect, useState } from 'react'
import { singleselect } from '../../forms/formelements/formselect/formselectdata'
import Select from 'react-select';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from '../loader/loader';
import { toast } from 'react-toastify';


const StudentLeave = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const [spinner, setSpinner] = useState(false)
    const [deleteLeav, setDeleteLeav] = useState()

    const [searchFilter, setSearchFilter] = useState(null);
    const [classFilter, setClassFilter] = useState(null);
    const [classOptions, setClassOptions] = useState([]);

    const [statusMap, setStatusMap] = useState({}); // Store status for each leave
    const [healthStudName, setHealthStudName] = useState([]);
    const [healthClassName, setHealthClassName] = useState([]);

    useEffect(() => {
        const fetchStudentAndClass = async () => {
            try {
              const studentLeavesRes = await axios.get('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/StudentLeave/GetAllStudentLeave')
              const studentLeavesData = studentLeavesRes.data
              
              const studentRes = await axios.get('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Students');
              const studentData = studentRes.data;
  
              const classRes = await axios.get('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Class')
              const classNameData = classRes.data
  
              const studentClassIDs = studentLeavesData.map(attendance => {
                  const student = studentData.find(student => student.id === attendance.studentID);
                  return student ? student.classID : null;
              }).filter(Boolean); // Remove null values
              
              // Filter classData based on the classID from students
              const filteredClassData = classNameData
                  .filter(classDataItem => studentClassIDs.includes(classDataItem.id))
                  .map(classDataItem => ({
                      id: classDataItem.id,
                      value: classDataItem.id,
                      label: classDataItem.className
                  }));
              
              setClassOptions(filteredClassData);
              
  
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          fetchStudentAndClass();
    }, []);

    const getStudentList = () => {
        setSpinner(true)
        axios.get('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/StudentLeave/GetAllStudentLeave')
            .then(res => {
                setData(res.data)
                setSpinner(false)
                const initialStatusMap = res.data.reduce((acc, leave) => { //leave will return single value
                    acc[leave.id] = leave.status; // Assuming each leave has an id and status
                    return acc;
                }, {});
                setStatusMap(initialStatusMap);
            })
            .catch(err => console.log(err))
        }
        const handleStatusChange = (id, newStatus) => {
            // Update the status locally
            setStatusMap(prevStatusMap => ({
            ...prevStatusMap,
            [id]: newStatus
        }));
         // Optionally, update the status on the server
        //  axios.post(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/StaffLeave/UpdateStatus`, { id, status: newStatus })
        //  .then(res => {
        //      if (res.status === 200) {
        //          // Optionally handle successful status update
        //      }
        //  })
        //  .catch(err => console.log(err));
    }

    const deleteStudentLeave = (id) => {
        setDeleteLeav(id)
    }

    const deleteDatahandler = (data) => {
         console.log(data, "DeleeLeave")
         axios.delete(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/StudentLeave/DeleteStudentLeave/${data}`)
         .then((res)=>{
            if(res.status === 200){
                getStudentList()
                toast.success('Staff Delete Data Successfully')
            }
         }) 

    }

   
    useEffect(() => {
        getStudentList()
    }, [])

    const handleFilter = async () => {
        let params = [];
    
        if (searchFilter) {
            params.push(`Name=${encodeURIComponent(searchFilter)}`);
        }
    
        if (classFilter) {
            params.push(`ClassId=${classFilter.value}`);
        }
    
        if (params.length === 0) {
            toast.error("Choose a Filter");
            return;
        }
    
        const queryString = params.join("&");
        const url = `https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/StudentLeave/GetStudentLeaveByFilter?${queryString}`;
    
        try {
            const result = await axios.get(url);
            const filterData = result.data;
    
            if (!filterData?.length) {
                toast.error("No data found");
            }
    
            setData(filterData);
        } catch (error) {
            toast.error("An error occurred while fetching data");
            console.error("Error fetching data:", error);
        }
    }
    const getStudentName = async () => {
        try {
            const studentsRes = await axios.get('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Students');
            const studentsData = studentsRes.data;
            const classRes = await axios.get('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Class')
            const classNameData = classRes.data
            // Assuming studentsData is an array of students
            setHealthStudName(studentsData);
            setHealthClassName(classNameData)
            const classIDs = [...new Set(studentsData.map(student => student.classID))];
            console.log(studentsData, "StudentNAMein helath", classRes);
        } catch (error) {
            console.error('Error fetching user roles:', error);
        }
    }
    useEffect(() => {
        getStudentName();
    }, []);



  return (
    <div>
    <h4 className='pt-4 borderBottom'>Student Leave </h4>
    <div className="student-leaveflex-container pb-4 pt-2">
        <div className='flex justify-between'>

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
                    Student Leaves
                    </li>
                </ol>
            </div>
            
        </div>


    </div>

    <div className='create-stud-table'>
        <div className='box p-4'>
        <div className='stud-head-wrap'>
                <h4>Student Leave List</h4>
            </div>
            <div className='stud-top-sec flex justify-between pt-4 pb-4'>


                <div className='student-top-grid'>
                    <div className='grid grid-cols-12 sm:gap-6'>
                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                             {/* <input type="search" className="form-control" id="input-search" placeholder="Search" /> */}
                             <div className="flex rounded-sm search-box">
                                        <input type="search" placeholder='Search'  id="hs-trailing-button-add-on-with-icon" name="hs-trailing-button-add-on-with-icon" className="ti-form-input rounded-none rounded-s-sm focus:z-10" value={searchFilter} onChange={(e) => setSearchFilter(e.target.value)} />
                                        <button aria-label="button"   type="button" className="inline-flex search-icon flex-shrink-0 justify-center items-center rounded-e-sm border border-transparent font-semibold bg-warning text-white hover:bg-warning focus:z-10 focus:outline-none focus:ring-0 focus:ring-warning transition-all text-sm">
                                            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                            </svg>
                                        </button>
                                    </div>

                        </div>
                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <Select placeholder='Select Class' className="!p-0 place-holder" classNamePrefix='react-select' value={classFilter} options={classOptions} onChange={(option) => setClassFilter(option)} />
                        </div>
                        <div className="xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12 leaveFilter-common-btn">
                            
                                <button type="button" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave" onClick={handleFilter}>Filter</button>
                                </div>


                    </div>
                </div>
                <div className="createstudent-btn">
                <Link to={`${import.meta.env.BASE_URL}pages/leave/createStudentLeave`}>
                    <button type="button" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave">Create Leave</button>
                </Link>
            </div>
            </div>
            {/* Top section end */}
            {/* Top section end */}
            {/* Table section start */}
            <div className="student-table-details">
                <div className='p-5 border rounded-sm dark:border-white/10 border-gray-200'>
                    <div className="table-responsive">
                        <table className="table whitespace-nowrap table-sm min-w-full">
                            <thead>
                                
                                
                                <tr className="border-b border-defaultborder">
                                <th scope="col" className="text-start">#</th>
                                <th scope="col" className="text-start">Roll Number</th>
                                <th scope="col" className="text-start">Student Name</th>
                                <th scope="col" className="text-start">	Class</th>
                                <th scope="col" className="text-start">Leave Type</th>
                                <th scope="col" className="text-start">Duration	</th>
                                <th scope="col" className="text-start">Status	</th>
                                <th scope="col" className="text-start">Action</th>
                            </tr>
                            </thead>
                            {
                                        spinner ? <Loader /> :
                                            data.map((dt, index) => {
                        return    <tbody key={index}>
                                <tr>
                                    <td rowSpan="2">{index + 1}</td>
                                       <td>{Array.isArray(healthStudName) && healthStudName.filter(staff => staff.id === dt.id)[0]?.rollNumber || 'Unknown'}</td>
                                    <td>
                                       <Link className='text-primary'> {dt.fullName} </Link></td>
                                       <td>{Array.isArray(healthClassName) && healthClassName.filter(staff => staff.id === dt.studentID)[0]?.className || 'Unknown'}- {Array.isArray(healthStudName) && healthStudName.filter(staff => staff.id === dt.id)[0]?.section || 'Unknown'}</td>
                                    <td>{dt.leaveType}</td>
                                                        <td>{`${dt.fromDate} - ${dt.toDate}`}</td>
                                                        <td>  <span className={`badge ${statusMap[dt.id] === 'Approved' ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'}`}>
                                                                {statusMap[dt.id] || 'Rejected'}
                                                            </span></td>

                                    <td rowSpan="2">
                                    <div className="ti-dropdown hs-dropdown">
                                    <button type="button"
                                        className="ti-btn ti-btn-ghost-primary ti-dropdown-toggle me-2 !py-2 !shadow-none" aria-expanded="false">
                                        <i className="ri-arrow-down-s-line align-middle inline-block"></i>
                                    </button>
                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                    <li><Link className="ti-dropdown-item" to="#"onClick={() => handleStatusChange(dt.id, 'Approved')} >Approve</Link></li>
                                     <li><Link className="ti-dropdown-item" to="#" onClick={() => handleStatusChange(dt.id, 'Rejected')}>Reject</Link></li>
                                      <li><Link className="ti-dropdown-item" to={`${import.meta.env.BASE_URL}pages/leave/updateStudentLeave/${dt.id}`}>Edit</Link></li>
                                      <li><Link className="ti-dropdown-item" to="#" data-hs-overlay={`#hs-vertically-centered-modal${dt.id}`} onClick={()=>deleteStudentLeave(dt.id)}>Cancel</Link></li>
                                    </ul>
                                </div>
                                            </td>
                                            </tr>
                                            <tr><td colSpan="6" className="text-normal"><p>Reason: {dt.comment}</p></td>
                                            </tr>
                                    </tbody>
                                       })
                                    }
                        </table>
                    </div>
                </div>
            </div>
            {/* Table section end */}
            {/* Modal popup Start */}
 <div id={`hs-vertically-centered-modal${deleteLeav}`} className="hs-overlay hidden ti-modal">
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
                      <button type="button" className="hs-dropdown-toggle ti-btn ti-btn-primary-full" data-hs-overlay={`#hs-vertically-centered-modal${deleteLeav}`} onClick={()=>deleteDatahandler(deleteLeav)}>
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
    </div>

</div>
  )
}

export default StudentLeave