import React, { useEffect, useState } from 'react'
import { singleselect } from '../../forms/formelements/formselect/formselectdata'
import Select from 'react-select';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../redux/action';
import axios from 'axios';
import Loader from '../loader/loader';
import { deleteStudentList, fetchStudentList } from '../../../redux/reducers/studentReducer';


const Student = () => {

    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const [spinner, setSpinner] = useState(false)

    
    const [deleteStudent, setDeleteStudent] = useState()
    const [updateStudent, setUpdateStudent] = useState(true)

     
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const studentListData = useSelector((state) => state.studentData)
    const studentPostRes = useSelector((state) => state.studentData.postRes)
    const studentDeleteRes = useSelector((state) => state.studentData.deleteRes)
   
    console.log(studentListData,'schoolListData')
    console.log(studentPostRes,'schoolListPostData')

    // const getStudentDetails = () => {
    //     setSpinner(true)
    //     axios.get('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Students')
    //         .then(res =>{ 
    //             setData(res.data)
    //             console.log(res.data)
    //             setSpinner(false)
    //         })
    //         .catch(err => console.log(err))
    // }

    console.log(studentListData, "Schiool")
 
    const deleteDatahandler = (data)=>{
        console.log("deleteDatahandler", data)
        dispatch(deleteStudentList(data))
        setTimeout(()=>{
            dispatch(fetchStudentList())
        },1000)
        
        
    }

    const openDelete = (id)=>{
        setDeleteStudent(id)
    }
 
    useEffect(() => {
        dispatch(fetchStudentList())
    }, [studentPostRes || studentDeleteRes ])
 
    const handleChange = value => {
        // setSearch(value);
        // filterData(value);
        console.log(value,"SSSSSS", value.length)
        if (!value || value.length === 0 ) {
            getStudentDetails()
        }
    }
    
    const filterData = value => {
        // alert(value)
        const lowerCaseValue = value.toLowerCase().trim();
        console.log(search,"dsdsdsd")
        // console.log(lowerCaseValue, "Lowerrrr" ,lowerCaseValue.length)
        // if (!lowerCaseValue || lowerCaseValue.length === 0 ) {
        //     getStudentDetails()
        // }
        // else {
            const filteredData = data.filter(item => {
                // return Object.keys(item).some(key => {
                //     return item[key].toString().toLowerCase().includes(lowerCaseValue)
                // })
                return Object.values(item).join('').toLowerCase().includes(search.toLowerCase())

            });
            setData(filteredData);
        // }
    }

    const [deleteRow, setDeleteRow] = useState()
 
    const getDeleteId =(id)=>{
        setDeleteRow(id)
    }
 
    // const deleteDatahandler = (id) =>{
    //     console.log(deleteRow, "useState id")
    //     axios.delete('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Students/'+deleteRow)
    //     .then((res)=>{
    //         getStudentDetails()
    //     })
    //     .catch(err=>console.log(err))
    //   }


    return (
        <div>
            <h4 className='pt-4 borderBottom'>Student Details</h4>

            <div className="student-flex-container pb-4 pt-2">
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
                                All  Students
                            </li>
                        </ol>
                    </div>

                </div>


            </div>

            <div className='create-stud-table'>
                <div className='box p-4'>
                    <div className='stud-head-wrap'>
                        <h4>All Students Data</h4>
                    </div>
                    <div className='stud-top-sec flex justify-between pt-4 pb-4'>


                        <div className='student-top-grid'>
                            <div className='grid grid-cols-12 sm:gap-6'>
                                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                    {/* <input type="search" onChange={(e) => handleChange(e.target.value)} value={search} className="form-control" id="input-search" placeholder="Search" /> */}
                                    <div className="flex rounded-sm search-box">
                                        <input type="search" onBlur={(e)=>handleChange(search)}  onChange={(e) =>  setSearch(e.target.value)} value={search}  id="hs-trailing-button-add-on-with-icon" name="hs-trailing-button-add-on-with-icon" className="ti-form-input rounded-none rounded-s-sm focus:z-10" />
                                        <button aria-label="button"  onClick={()=>filterData(search)} type="button" className="inline-flex search-icon flex-shrink-0 justify-center items-center rounded-e-sm border border-transparent font-semibold bg-warning text-white hover:bg-warning focus:z-10 focus:outline-none focus:ring-0 focus:ring-warning transition-all text-sm">
                                            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                

                                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                   <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
                                </div> 
                                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                   <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
                                </div> 

                            </div>
                        </div>
                        <div className="stud-create-btn">
                            <Link to={`${import.meta.env.BASE_URL}pages/student/createStudent`} className="product-image">
                                <button type="button" className="ti-btn ti-btn-warning-full  !rounded-full  ti-btn-wave">Add Students</button>
                            </Link>
                        </div>
                    </div>
                    {/* Top section end */}
                    {/* Table section start */}
                    <div className="student-table-details">

                        <div className='p-5 border rounded-sm dark:border-white/10 border-gray-200'>
                            <div className="table-responsive">
                                <table className="table whitespace-nowrap table-sm min-w-full">
                                    <thead><tr className="border-b border-defaultborder">
                                        <th scope="col" className="text-start">#</th>
                                        <th scope="col" className="text-start">Student ID</th>
                                        <th scope="col" className="text-start">Academic Year</th>
                                        <th scope="col" className="text-start">Student Name</th>
                                        {/* <th scope="col" className="text-start">Date Of Birth</th> */}
                                        <th scope="col" className="text-start">Class Admitted To</th>
                                        {/* <th scope="col" className="text-start">Aadhar Card No.</th> */}
                                        <th scope="col" className="text-start">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {/* <tr className="border-b border-defaultborder">
                                            <td>1</td>
                                            <td>STU0005</td>
                                            <td>2024-2025</td>
                                            <td>Rohit Kale</td>
                                            <td>06 Aug 2013</td>
                                            <td>Class VI, Section A</td>
                                            <td>124235325253</td>
                                          
                                            <td><div className="hstack flex gap-3 
 text-[.9375rem]">
                                                <Link aria-label="anchor" href="#" className="ti-btn ti-btn-icon
ti-btn-sm ti-btn-light"><i className="ri-edit-line"></i>
                                                </Link>
                                            </div>
                                            </td>
                                        </tr> */}
                                        {
                                            spinner ? <Loader /> :
                                            studentListData.list.map((dt, index) => {
                                                return <tr key={dt.id}>
                                                    <td>{++index}</td>
                                                    <td>{dt.id}</td>
                                                    <td>{dt.academicYear}</td>
                                                    <td>
                                                        <Link className='text-primary' to={`${import.meta.env.BASE_URL}pages/student/studentIndDetails`}>
                                                            {dt.fullName}
                                                        </Link>
                                                    </td>
                                                    {/* <td>{dt.dob}</td> */}
                                                    <td>{dt.classID}</td>
                                                    {/* <td>{dt.aadhar}</td> */}
                                                    <td><div className="hstack flex gap-3 text-[.9375rem]">
                                                    <div className="ti-dropdown hs-dropdown">
                                                    <button type="button"
                                                        className="ti-btn ti-btn-ghost-primary ti-dropdown-toggle me-2 !py-2 !shadow-none" aria-expanded="false">
                                                        <i className="ri-arrow-down-s-line align-middle inline-block"></i>
                                                    </button>
                                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                                        <li ><Link className="ti-dropdown-item" to={`${import.meta.env.BASE_URL}pages/student/editStudent/${dt.id}`}>Edit</Link></li>
                                                        <li><Link className="ti-dropdown-item " data-hs-overlay="#hs-vertically-centered-modal"  onClick={()=>openDelete(dt.id)}>Delete</Link></li>
                                                        
                                                            {/* onClick={()=>deleteDatahandler(dt.id)} */}
                                                    </ul>
                                                </div>
                                                        </div></td>
                                                </tr>
                                            })

                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* Table section end */}
                </div>
            </div>
            {/* Modal popup Start */}
            <div id="hs-vertically-centered-modal" className="hs-overlay hidden ti-modal">
                <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out min-h-[calc(100%-3.5rem)] flex items-center">
                  <div className="ti-modal-content">
                    <div className="ti-modal-header">
                      <h6 className="modal-title" id="staticBackdropLabel2">Warning
                      </h6>
                      <button type="button" className="hs-dropdown-toggle ti-modal-close-btn" data-hs-overlay="#hs-vertically-centered-modal">
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
                      <button type="button" className="hs-dropdown-toggle ti-btn yoti-btn-secondary-full" data-hs-overlay="#hs-vertically-centered-modal">
                        No
                      </button>
                      <button type='button' className="ti-btn ti-btn-primary-full" onClick={()=>deleteDatahandler(deleteStudent)} data-hs-overlay="#hs-vertically-centered-modal">
                        Yes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            {/* Modal popup End */}



        </div>
    )
}

export default Student
