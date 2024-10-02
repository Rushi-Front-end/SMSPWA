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
                                    <p className="card-text pt-2">Role:{staffCardList.roleName}</p>
                                    <p className="card-text pt-2">Mobile No.: {staffCardList.mobileNumber}</p>
                                    <p className="card-text pt-2">Email Id:{staffCardList.emailID}</p>
                                    <p className="card-text pt-2">Department:{staffCardList.department}</p>
                                    <p className="card-text pt-2">Alternate Mobile No.: {staffCardList.alternateMobileNumber}</p>
                                    <p className="card-text pt-2">Date of Joining: {staffCardList.dateOfJoining}</p>
                                    <p className="card-text pt-2">Gender:{staffCardList.gender}</p>
                                    <p className="card-text pt-2">Address:{staffCardList.address}</p>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default StaffCardDetails
