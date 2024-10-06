import React, { useEffect, useState } from 'react'
import media37 from "../../../assets/images/media/media-37.jpg";
import axios from 'axios';
const StaffCardDetails = ({id}) => {
    console.log(id, "StaffList PARAMS")
const [staffCardList, setStaffCardList] = useState([])

    const [staffIndDetails, setStaffIndDeatils] = useState([])
    const [spinner, setSpinner] = useState(false)

    const getStaffCardList = () => {
        setSpinner(true)
        axios.get(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Staff/${id}`)
            .then(res => {
                setStaffCardList(res.data)
                 setSpinner(false)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getStaffCardList()
    }, [id])

  return (
    <div>
        <div className="xl:col-span-4 col-span-12">
                    <div className="box">
                        <div className="grid grid-cols-12 gap-0">
                            <div className="md:col-span-3 col-span-12 text-center">
                                <img src={media37}
                                    className="img-fluid !rounded-full !inline-flex profile-image" alt="..." />
                            </div>
                            <div className="md:col-span-8 col-span-12">
                               
                                <div className="box-body">
                                    <h6 className="box-title font-semibold"> {staffCardList.fullName}</h6>
                                    <p className="card-text pt-2"><b>Role:</b>{staffCardList.roleName}</p>
                                    <p className="card-text pt-2"><b>Prakalp Name:</b>{staffCardList.prakalpName}</p>
                                    <p className="card-text pt-2"><b>School Name:</b>{staffCardList.schoolName}</p>
                                    <p className="card-text pt-2"><b>Mobile No.:</b> {staffCardList.mobileNumber}</p>
                                    <p className="card-text pt-2"><b>Email Id:</b>{staffCardList.emailID}</p>
                                    <p className="card-text pt-2"><b>Department:</b>{staffCardList.department}</p>
                                    <p className="card-text pt-2"><b>Alternate Mobile No.:</b> {staffCardList.alternateMobileNumber}</p>
                                    <p className="card-text pt-2"><b>Date of Joining:</b> {staffCardList.dateOfJoining}</p>
                                    <p className="card-text pt-2"><b>Gender:</b>{staffCardList.gender}</p>
                                    <p className="card-text pt-2"><b>Address:</b>{staffCardList.address}</p>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default StaffCardDetails
