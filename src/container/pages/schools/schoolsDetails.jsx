import { Fragment, useEffect, useState } from 'react';
import Pageheader from '../../../components/common/pageheader/pageheader';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Select from 'react-select';
import { singleselect } from '../../forms/formelements/formselect/formselectdata';
import CreateClass from './createClass';
import CreateSection from './createSection';
import SchoolDetailsTable from './schoolDetailsTable';
import RolesPermissionTable from './rolesPermissionTable';
import CreateRole from './createRole';
import TimeTableTabs from './timeTableTabs';
import SubjectTable from './subjectTable';
import SubjectCreateForm from './subjectCreateForm';
import { fetchSchoolById } from '../../../redux/reducers/schoolReducer';
import { useDispatch, useSelector } from 'react-redux';
import { deleteClassList, fetchClassList } from '../../../redux/reducers/classReducer';
import SubjectUpdateForm from './subjectUpdateForm';
import UpdateRole from './updateRole';
import UpdateClass from './updateClass';
import Loader from '../loader/loader';


const SchoolsDetails = () => {
    const [updateClass, setUpdateClass] = useState(false);
    const [addSec, setAddSec] = useState(false);
    const [updateSchool, setUpdateSchool] = useState(true)
    const [deleteData, setDeleteData] = useState()
    const [spinner, setSpinner] = useState(false)



    const [classId, setClassId]= useState()

    

    const [dataFromChild, setDataFromChild] = useState("");
    const [dataFromChildSubject, setDataFromChildSubject] = useState("");
    const updateId = dataFromChildSubject.id
    const updateRoleId = dataFromChild.id

    console.log(dataFromChild,'dataFromChildSubject')
    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const schoolIndData = useSelector((state) => state.schoolData)
    const classIndData = useSelector((state) => state.classData)
    const subjectDeleteRes = useSelector((state) => state.classData.deleteRes)

    const isLoading = useSelector((state) => state.subjectData.isLoading);


    console.log(classIndData, 'classIndData')

   

    
    const handleDataFromChild = (data) => {
        setDataFromChild(data);
    }
    const handleSubDataFromChild = (subData) => {
        setDataFromChildSubject(subData);
    }
    
    //   console.log(dataFromChild, "dataFromChild", dataFromChildSubject)
    console.log(updateClass, 'HJHJHJH')
    const updateForm = (id) => {
        setAddSec(false);
        setUpdateClass({value:true, id: id});
    }

        const openDelete = (id)=>{
            console.log(id,"ClassDELEELID");
        setDeleteData(id)
    }
    
    const addSection = (id) => {
        setAddSec(true)
        
        setClassId(id)
    }
    console.log(classId,'classID')
    
    useEffect((id) => {
        dispatch(fetchSchoolById(params.id))
    }, [])
    
    ///Class useEffect
    useEffect(() => {
        
        dispatch(fetchClassList())
        
    }, [])


    const deleteDatahandler = (data)=>{
        console.log("deleteDatahandler", data)
        dispatch(deleteClassList(data))
        setTimeout(()=>{
            dispatch(fetchClassList())
        },500)
    }
    
    //navgaite and localstorage to edit
    //   const navigateToEdit = (id) =>{
        //     localStorage.setItem('updateSchool', JSON.stringify(updateSchool))
        //     navigate(`${import.meta.env.BASE_URL}pages/schools/editSchool/${params.id}`)
        // }
        
        
        return (
        <Fragment>


            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xxl:col-span-12 xl:col-span-12 col-span-12">

                            <h4 className='borderBottom pt-4'>Schools</h4>
                            <div className="school-flex-container pb-4 pt-2">
                                <div className='flex flex-row items-center'>
                                    {/* <div className='backButton'>
                                        <Link to={`${import.meta.env.BASE_URL}pages/schools/schoolsDetails`}>

                                            <button type="button" className="ti-btn ti-btn-info-full ti-btn-wave">Back</button>
                                        </Link>
                                    </div> */}
                                    {/* <div className="breadcrumbs self-center">
                                        <h6>Dashboard -  Schools - Ashram School Details </h6>
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
                                                <Link className="flex items-center text-primary hover:text-primary dark:text-primary" to={`${import.meta.env.BASE_URL}pages/schools/allSchools`}>
                                                    Schools
                                                    <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-black-300 dark:text-white/10 rtl:rotate-180"
                                                        width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                                                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                    </svg>
                                                </Link>
                                            </li>

                                            <li className="text-sm text-gray-500 dark:text-[#8c9097] dark:text-white/50 hover:text-primary truncate" aria-current="page">
                                                School Details
                                            </li>
                                        </ol>
                                    </div>

                                </div>


                            </div>

                            <div className='school-individual-details'>
                                <div className='box'>
                                    <div className='p-4'>
                                        <div className='flex justify-between school-detail-listing'>
                                            <h4>{schoolIndData.list.schoolName}</h4>
                                            <div className="school-edit-button">
                                                <Link to={`${import.meta.env.BASE_URL}pages/schools/editSchool/${params.id}`}>
                                                    <button type="button" className="ti-btn ti-btn-outline-warning !rounded-full ti-btn-wave"  >Edit School</button>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className='school-deatils-table pt-4'>
                                            <SchoolDetailsTable schoolIndData={schoolIndData} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box">

                                <div id="sessions">
                                    {/*  */}
                                    <div className="box-body">
                                        <div className="border-b-2 border-gray-200 dark:border-white/10">
                                            <nav className="-mb-0.5 flex space-x-6 rtl:space-x-reverse">
                                                {/* <Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor  dark:text-[#8c9097] dark:text-white/50 hover:text-primary " to="#" id="underline-item-1" data-hs-tab="#underline-1" aria-controls="underline-1">
                                                    Details
                                                </Link> */}
                                                <Link className="hs-tab-active:font-semibold hs-tab-active:border-warning hs-tab-active:text-warning py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor  dark:text-[#8c9097] dark:text-white/50 hover:text-warning active" to="#" id="underline-item-2" data-hs-tab="#underline-2" aria-controls="underline-2">
                                                    Classes
                                                </Link>
                                                <Link className="hs-tab-active:font-semibold hs-tab-active:border-warning hs-tab-active:text-warning py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor  dark:text-[#8c9097] dark:text-white/50 hover:text-warning" to="#" id="underline-item-3" data-hs-tab="#underline-3" aria-controls="underline-3">
                                                    Roles & Permissions
                                                </Link>
                                                {/* <Link className="hs-tab-active:font-semibold hs-tab-active:border-warning hs-tab-active:text-warning py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor  dark:text-[#8c9097] dark:text-white/50 hover:text-warning" to="#" id="underline-item-4" data-hs-tab="#underline-4" aria-controls="underline-4">
                                                    Timetables
                                                </Link> */}
                                                <Link className="hs-tab-active:font-semibold hs-tab-active:border-warning hs-tab-active:text-warning py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor  dark:text-[#8c9097] dark:text-white/50 hover:text-warning" to="#" id="underline-item-5" data-hs-tab="#underline-5" aria-controls="underline-5">
                                                    Subjects
                                                </Link>
                                            </nav>
                                        </div>

                                        <div className="mt-3">
                                            {/* <div id="underline-1" role="tabpanel" aria-labelledby="underline-item-1">


                                            </div> */}
                                            <div id="underline-2" role="tabpanel" aria-labelledby="underline-item-2">
                                                <div className="grid grid-cols-12  gap-4">
                                                    <div className="col-span-12 xl:col-span-8">
                                                    <div className='classes-add-secbtn'>
                                                       <button type="button" onClick={() => addSection(classId)} className="ti-btn ti-btn-outline-warning !rounded-full ti-btn-wave"> Add Section</button>
                                                    </div>
                                                        {
                                                             isLoading || spinner ? (<Loader />) :
                                                             Array.isArray(classIndData?.list) && classIndData.list.length > 0 ? (

                                                                classIndData.list.map((dt, index) => {
                                                                    return <div className='classes-sec-wrap pb-4' key={index} id={dt.id} >
                                                                       
                                                                        <div className='classes-top-head flex justify-between'>
                                                                            <h4>{dt.className}</h4>
                                                                            {/* <div className='classes-add-secbtn'>
                                                                                <button type="button" onClick={() => addSection(dt.id)} className="ti-btn ti-btn-outline-warning !rounded-full ti-btn-wave"> Add Section</button>
                                                                            </div> */}
                                                                        </div>
    
                                                                        <div className='p-5 border rounded-sm dark:border-white/10 border-gray-200'>
                                                                            <div className="table-responsive">
                                                                                <table className="table whitespace-nowrap table-sm min-w-full">
                                                                                    <thead><tr className="border-b border-defaultborder">
                                                                                        <th scope="col" className="text-start">#</th>
                                                                                        <th scope="col" className="text-start">Section</th>
                                                                                        {/* <th scope="col" className="text-start">Class Teacher</th> */}
                                                                                        <th scope="col" className="text-start">Description</th>
                                                                                        {/* <th scope="col" className="text-start">Status</th> */}
                                                                                        <th scope="col" className="text-start">Action</th>
                                                                                    </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                        <tr className="border-b border-defaultborder" key={index} id={dt.id}>
                                                                                            <td>{index + 1}</td>
                                                                                            <td>{dt.className}</td>
                                                                                            <td>{dt.description}</td>
                                                                                            <td>
                                                                                                <div className="hstack flex gap-3 
    text-[.9375rem]">
                                                                                                    <div className="ti-dropdown hs-dropdown">
                                                                                                        <button type="button"
                                                                                                            className="ti-btn ti-btn-ghost-primary ti-dropdown-toggle me-2 !py-2 !shadow-none" aria-expanded="false">
                                                                                                            <i className="ri-arrow-down-s-line align-middle inline-block"></i>
                                                                                                        </button>
                                                                                                        <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                                          <li onClick={() => updateForm(dt.id)}><Link className="ti-dropdown-item" to="#">Edit</Link></li>
                                                         <li><button data-hs-overlay={`#hs-vertically-centered-modal-class-${dt.id}`} className="ti-dropdown-item text-left" onClick={()=>openDelete(dt.id)}>Delete</button></li>
    
    
                                                                                                        </ul>
                                                                                                    </div>
                                                                                                    {/* <button type="button" className="ti-btn ti-btn-outline-danger !rounded-full ti-btn-wave">Disable</button>
                                <button type="button" className="ti-btn ti-btn-outline-secondary !rounded-full ti-btn-wave">Edit</button> */}
                                                                                                </div>
                                                                                            </td>
                                                                                        </tr>
                                                                                      
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                })
                                                             ) : (
                                                                <tr>
                                                                    <td colSpan="6">
                                                                        <h3 className='text-center'>No schools available.</h3>
                                                                    </td>
                                                                </tr>
                                                            )

                                                           


                                                        }
                                                        {/* End of the classes top sec wrap */}

                                                    </div>
                                                    <div className="col-span-12 xl:col-span-4">
                                                    
                                                        {
                                                           ( (addSec === true) ? <CreateSection addSec={addSec} setAddSec={setAddSec} /> : (updateClass.value === true) ? <UpdateClass updateClassChild={setUpdateClass} updateClass={updateClass} /> :<CreateClass updateClassChild={setUpdateClass} updateClass={updateClass} /> )
                                                        }
                                                        {/* <CreateClass updateClassChild={setUpdateClass} updateClass={updateClass} /> */}
                                                        {/* <UpdateClass updateClassChild={setUpdateClass} updateClass={updateClass} /> */}


                                                        {/* <CreateSection/> */}
                                                    </div>
                                                </div>

                                            </div>
                                            <div id="underline-3" className="hidden" role="tabpanel" aria-labelledby="underline-item-3">
                                                <div className="grid grid-cols-12  gap-4">
                                                    <div className="col-span-12 xl:col-span-8">
                                                        <RolesPermissionTable sendDataToParent={handleDataFromChild} />
                                                    </div>
                                                    <div className="col-span-12 xl:col-span-4">
                                                        {updateRoleId?
                                                        <UpdateRole dataFromChild={dataFromChild} setDataFromChild={setDataFromChild} />:
                                                        <CreateRole dataFromChild={dataFromChild} setDataFromChild={setDataFromChild} />
                                                        }
                                                        {/* <CreateSection/> */}
                                                    </div>
                                                </div>

                                            </div>
                                            {/* <div id="underline-4" className="hidden" role="tabpanel" aria-labelledby="underline-item-4">
                                                <div className='box'>
                                                    <div className="box-body">
                                                        <h6>Select Criteria</h6>
                                                        <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12 pt-4">
                                                            <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='time-tables-wrap'>
                                                    <TimeTableTabs />
                                                </div>
                                            </div> */}
                                            <div id="underline-5" className="hidden" role="tabpanel" aria-labelledby="underline-item-5">
                                                <div className="grid grid-cols-12  gap-4">
                                                    <div className="col-span-12 xl:col-span-8">
                                                        <SubjectTable sendSubDataToParent={handleSubDataFromChild} />
                                                    </div>
                                                    <div className="col-span-12 xl:col-span-4">
                                                        {updateId?<SubjectUpdateForm dataFromChildSubject={dataFromChildSubject} setDataFromChildSubject={setDataFromChildSubject} />:
                                                        <SubjectCreateForm dataFromChildSubject={dataFromChildSubject} setDataFromChildSubject={setDataFromChildSubject} />
                                                    }
                                                        {/* <CreateSection/> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*  */}

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
 {/* Modal popup Start */}
 <div id={`hs-vertically-centered-modal-class-${deleteData}`} className="hs-overlay hidden ti-modal">
                <div className="hs-overlay-open:mt-7 schoolClassDetails ti-modal-box mt-0 ease-out min-h-[calc(100%-3.5rem)] flex justify-center items-center">
                  <div className="ti-modal-content">
                    <div className="ti-modal-header">
                      <h6 className="modal-title" id="staticBackdropLabel2">Warning
                      </h6>
                      <button type="button" className="hs-dropdown-toggle ti-modal-close-btn" data-hs-overlay={`#hs-vertically-centered-modal-class-${deleteData}`}>
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
                      <button type="button" className="hs-dropdown-toggle ti-btn yoti-btn-secondary-full" data-hs-overlay={`#hs-vertically-centered-modal-class-${deleteData}`}>
                        No
                      </button>
                      <button type="button" className="hs-dropdown-toggle ti-btn ti-btn-primary-full" data-hs-overlay={`#hs-vertically-centered-modal-class-${deleteData}`} onClick={()=>deleteDatahandler(deleteData)}>
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


        </Fragment>
    );
}

export default SchoolsDetails;
