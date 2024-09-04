import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../loader/loader';

const StaffRolesPermission = ({ staffEditRole, setStaffRole }) => {
  console.log(staffEditRole, staffEditRole,"staffEditRole")
  const [stafRolesList, setStaffRolesList] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const [checkedRoles, setCheckedRoles] = useState({}); // State to track checked roles
  const [roleDisabled, setRoleDisabled] = useState(!staffEditRole)


  useEffect(() => {
    setRoleDisabled(!staffEditRole); // Update disabled state based on staffEditRole prop
  }, [staffEditRole]);
  
  const getStafRolesList = () => {
    setSpinner(true);
    axios.get('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/UserRoles')
      .then(res => {
        if (res.status === 200 && Array.isArray(res.data)) {
          setStaffRolesList(res.data);
          // Initialize checkedRoles state based on the response
          const initialCheckedRoles = res.data.reduce((acc, role) => {
            acc[role.id] = true; // Default all checkboxes to checked
            return acc;
          }, {});
          setCheckedRoles(initialCheckedRoles);
        } else {
          setStaffRolesList([]);
        }
        setSpinner(false);
      })
      .catch(err => {
        console.log(err);
        setSpinner(false);
      });
  };

  useEffect(() => {
    getStafRolesList();
  }, []);

  const handleCheckboxChange = (id) => {
    setCheckedRoles(prevCheckedRoles => ({
      ...prevCheckedRoles,
      [id]: !prevCheckedRoles[id]
    }));
  };

  const handleCancelRole =() =>{
    setStaffRole(false)
  }
  const handleSave  =() =>{
    setStaffRole(false)
  }

  return (
    <div>
      <div className="table-responsive">
        <table className="table whitespace-nowrap table-sm min-w-full">
          <thead>
            <tr className="border-b border-defaultborder">
              <th scope="col" className="text-start">#</th>
              <th scope="col" className="text-start">Name</th>
              <th scope="col" className="text-start">Description</th>
            </tr>
          </thead>
          <tbody>
            {spinner ? (
              <Loader />
            ) : (
              stafRolesList.length > 0 ? (
                stafRolesList.map((dt, index) => (
                  <tr className="border-b border-defaultborder" key={index}>
                    <td>{index + 1}</td>
                    <th scope="row" className="text-start">
                      <div className="form-check roles-individual-row">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={dt.roleName}
                          id={`checkbox-sm-${dt.id}-${index}`}
                          checked={!!checkedRoles[dt.id]} // Check based on state
                          onChange={() => handleCheckboxChange(dt.id)} // Handle change
                         disabled={roleDisabled} />
                        <label
                          className="form-check-label"
                          htmlFor={`checkbox-sm-${dt.id}-${index}`}
                        >
                          {dt.roleName}
                        </label>
                      </div>
                    </th>
                    <td>
                      {dt.description}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">
                    <h3 className='text-center'>No Data available.</h3>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>


{staffEditRole  ? 

      <div className='staff-rolepermission-btn pt-4' >
                    <div className='flex justify-end'>
                        <button onClick={handleSave } type="button" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave"   >Save</button>
                        <div className='backButton'>
                                <button onClick={handleCancelRole} type="button" className="ti-btn ti-btn-info-full ml-15 !rounded-full ti-btn-wave">Cancel</button>
                        </div>

                    </div>
                </div> : null
}
                {/* End of the button */}
      </div> 
    </div>
  );
};

export default StaffRolesPermission;
