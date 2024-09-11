import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUserRoleList, fetchUserRoleList } from '../../../redux/reducers/userRoleReducer'
import Loader from '../loader/loader'

const RolesPermissionTable = ({sendDataToParent}) => {
    const [data, setData] = useState(true)
    const [spinner, setSpinner] = useState(false)
    const [deleteData, setDeleteData] = useState()


    // const handleClick = () =>{
    //     sendDataToParent(data);
    // }

    const dispatch = useDispatch();
    const getUserRole = useSelector((state)=> state.userRoleData)
    const isLoading = useSelector((state) => state.userRoleData.isLoading);
    const userRoleDeleteRes = useSelector((state) => state.userRoleData.deleteRes)



    useEffect(()=>{
        dispatch(fetchUserRoleList())
    }, [])


    const handleClick = (id) => {
        sendDataToParent({data, id});
        // console.log(id,"SubTablll")
    }
    const openDelete = (id)=>{
        setDeleteData(id)
    }

    const deleteDatahandler = (data)=>{
        console.log("deleteDatahandler", data)
        dispatch(deleteUserRoleList(data))
        setTimeout(()=>{
            dispatch(fetchUserRoleList())
        },500)
        
        
    }


    return (
        <div className='p-5 border rounded-sm dark:border-white/10 border-gray-200'>
            <div className="table-responsive">
                <table className="table whitespace-wrap table-sm min-w-full">
                    <thead><tr className="border-b border-defaultborder">
                        <th scope="col" className="text-start">Sl No.</th>
                        <th scope="col" className="text-start">	Role Name</th>
                        {/* <th scope="col" className="text-start">Permissions</th> */}
                        <th scope="col" className="text-start">Description</th>
                        {/* <th scope="col" className="text-start">Status</th> */}
                        <th scope="col" className="text-start">Action</th>
                    </tr>
                    </thead>
                    <tbody>

                        {
                              isLoading || spinner ? (<Loader />) :
                            Array.isArray(getUserRole?.list) && getUserRole.list.length > 0 ? (
                                getUserRole.list.map((dt,index)=>{

                                    return <tr className="border-b border-defaultborder" key={index}>
                                         <td>{index + 1}</td>
                                         <td>{dt.roleName}</td>
                                         {/* <td>
                                             <Link>
                                                 <button type="button" className="ti-btn ti-btn-danger-full ti-btn-wave">Assign Permission</button>
                                             </Link>
                                         </td> */}
                                         <td><p>
                                              {dt.description}
                                             </p>
                                             </td>
                                       
                                         <td>
                                             <div className="hstack flex gap-3 
              text-[.9375rem]">
                                                 <div className="ti-dropdown hs-dropdown">
                                                     <button type="button"
                                                         className="ti-btn ti-btn-ghost-primary ti-dropdown-toggle me-2 !py-2 !shadow-none" aria-expanded="false">
                                                         <i className="ri-arrow-down-s-line align-middle inline-block"></i>
                                                     </button>
                                                     <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                                     <li onClick={()=>handleClick(dt.id)}><button className="ti-dropdown-item text-left">Edit</button></li>
                                                     <li><Link className="ti-dropdown-item" to='#' data-hs-overlay="#hs-vertically-centered-modal" onClick={()=>openDelete(dt.id)}>Delete</Link></li>
                                                     </ul>
                                                 </div>
                                                 {/* <button type="button" className="ti-btn ti-btn-outline-danger !rounded-full ti-btn-wave">Disable</button>
                                                                                                 <button type="button" className="ti-btn ti-btn-outline-secondary !rounded-full ti-btn-wave">Edit</button> */}
                                             </div>
                                         </td>
                                     </tr>
                                     })   
                            ) : (
                                <tr>
                                    <td colSpan="6">No schools available.</td>
                                </tr>
                            )
                        }
                       


                    </tbody>
                </table>
            </div>

               {/* Modal popup Start */}
               <div id="hs-vertically-centered-modal" className="hs-overlay hidden ti-modal">
                <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out min-h-[calc(100%-3.5rem)] flex justify-center items-center">
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
                      <button type="button" className="hs-dropdown-toggle ti-btn ti-btn-primary-full" data-hs-overlay="#hs-vertically-centered-modal" onClick={()=>deleteDatahandler(deleteData)}>
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

export default RolesPermissionTable
