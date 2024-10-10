import React, { useContext, useEffect, useState } from 'react';

import axios from 'axios';
import Loader from '../loader/loader';
import { Link } from 'react-router-dom';
import { useSchoolId } from '../../../components/common/context/idContext';
import { toast } from 'react-toastify';
import { UserRoleNameContext } from '../../../components/common/context/userRoleContext';

const DietIndDetails = ({ selectedDay }) => {
    const [dietData, setDietData] = useState({});
    const [spinner, setSpinner] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);
    const {id: schoolId} = useSchoolId();

    const getDietList = () => {
        setSpinner(true);
        axios.get(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/DietPlan/GetAllDietPlan?SchoolId=${schoolId}`)
            .then(res => {
                if (res.status === 200 && Array.isArray(res.data)) {
                    const groupedData = groupByDay(res.data);
                    setDietData(groupedData);
                } else {
                    setDietData({});
                }
                setSpinner(false);
            })
            .catch(err => {
                console.log(err);
                setSpinner(false);
            });
    };

    useEffect(() => {
        getDietList();
    }, [schoolId]);

    // Function to group data by day of the week
    const groupByDay = (data) => {
        return data.reduce((acc, item) => {
            const day = item.dayOfWeek; // Assuming 'dayOfWeek' is the field in your data
            if (!acc[day]) {
                acc[day] = [];
            }
            acc[day].push(item);
            return acc;
        }, {});
    };

    console.log(itemToDelete, 'itemToDelete')
   
    const handleDelete = () => {
        if (!itemToDelete) return; // Ensure itemToDelete is not null

        // Prepare the updated data
        const updatedItem = {
            ...itemToDelete,
            mealTime: '',
            menuItems: '',
            totalCalories: 0,
        };
    
        // Make the API call to update the item in the database
        axios.put(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/DietPlan/UpdateDietPlan?id=${schoolId}&day=${selectedDay}&mealType=${itemToDelete.mealType}`, updatedItem)
            .then(res => {
                if (res.status === 200) {
                    // Update local state if the API call is successful
                    setDietData(prevData => {
                        const updatedData = { ...prevData };
                        const dayData = updatedData[selectedDay];
    
                        if (dayData) {
                            const index = dayData.findIndex(item => item.mealType === itemToDelete.mealType && item.schoolId === schoolId);
                            console.log(index, "dsadasdasd")
                            if (index !== -1) {
                                dayData[index] = updatedItem; // Update the item in local state
                            }
                        }
    
                        toast.success("Diet plan deleted successfully");
                        return updatedData;
                    });
    
                    // Fetch the updated data (optional, since you're already updating local state)
                    getDietList();
                }
            })
            .catch(err => {
                console.error(err);
                toast.error(err);
            });
    
        setItemToDelete(null); // Clear the item to delete
    };

    const { userRoleName, setUserRoleName } = useContext(UserRoleNameContext)
    const [allSchAdmin, setAllSchAdmin] = useState(false)

    
        const loginValue = localStorage.getItem('loginData')
        let  parsedLoginValue
        let   roleName
        let   fullName
        if (loginValue) {
           parsedLoginValue = JSON.parse(loginValue);
            roleName = parsedLoginValue.roleName || ''; // Default to empty string if undefined
            fullName = parsedLoginValue.fullName || ''; // Default to empty string if undefined
          console.log(parsedLoginValue.roleName, 'loginValue');
        } else {
          console.log('No login data found');
        }
      
         const userLoginRoleName = parsedLoginValue.roleName
      
        useEffect(()=>{
          setUserRoleName(userLoginRoleName)
          if(userLoginRoleName === 'SuperAdmin' || userLoginRoleName === 'Warden') {
            setAllSchAdmin(true)
          }
          else{
            setAllSchAdmin(false)
          }
        },[])

    return (
        <div>
            {spinner ? (
                <Loader />
            ) : (
                <>
                    {dietData[selectedDay] && dietData[selectedDay].length > 0 ? (
                        <div className="timetable-deatils-wrapper">
                            <h2 className="text-center">{selectedDay}</h2>
                            <div className="table-responsive pt-2">
                                <table className="table whitespace-nowrap table-sm min-w-full">
                                    <thead>
                                        <tr className="border-b border-defaultborder">
                                            <th scope="col" className="text-start">Type</th>
                                            <th scope="col" className="text-start">Time</th>
                                            <th scope="col" className="text-start">Menu</th>
                                            <th scope="col" className="text-start">Total Calories <br /> (Kcal)</th>
                                            {/* <th scope="col" className="text-start">Created By</th>
                                            <th scope="col" className="text-start">Created At</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dietData[selectedDay].map((dt, i) => (
                                            <tr className="border-b border-defaultborder" key={i}>
                                                <td>{dt.mealType}</td>
                                                <td>{dt.mealTime && dt.mealTime.trim() !== '' ? dt.mealTime : '--'}</td>
                                                <td>{dt.menuItems && dt.menuItems.trim() !== '' ? dt.menuItems : '--'}</td>
                                                <td>{dt.totalCalories !== 0 ? dt.totalCalories : 0}</td>
                                                {allSchAdmin && (<td>
                                                <div className="ti-dropdown hs-dropdown">
                                                    <button type="button"
                                                        className="ti-btn ti-btn-ghost-primary ti-dropdown-toggle me-2 !py-2 !shadow-none" aria-expanded="false">
                                                        <i className="ri-arrow-down-s-line align-middle inline-block"></i>
                                                    </button>
                                                                 <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                                        <li ><Link className="ti-dropdown-item" to={`${import.meta.env.BASE_URL}pages/diet/editDiet?id=${schoolId}&day=${selectedDay}&mealType=${dt.mealType}`}>Edit</Link></li>
                                                        <li><Link className="ti-dropdown-item "   onClick={() => {
                                                                    setItemToDelete(dt);
                                                                }}data-hs-overlay="#hs-vertically-centered-modal" >Delete</Link></li>
                                                        
                                                            {/* onClick={()=>deleteDatahandler(dt.id)} */}
                                                    </ul>
                                                    </div>
                                                </td>)}
                                                {/* <td>{dt.createdBy || 'John Smith'}</td>
                                                <td>{dt.createdAt}</td> */}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h3 className='text-center'>No Data available for {selectedDay}.</h3>
                        </div>
                    )}
                </>
            )}


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
                      <button type='button' className="ti-btn ti-btn-primary-full"  data-hs-overlay="#hs-vertically-centered-modal"  onClick={handleDelete}>
                        Yes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            {/* Modal popup End */}
        </div>
    );
};

export default DietIndDetails;
