import React, { useEffect, useState } from 'react'
import media37 from "../../../assets/images/media/media-37.jpg";

import axios from 'axios';
import Loader from '../loader/loader';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const StudentCardDetails = () => {
    const [data, setData] = useState([])
    const [spinner, setSpinner] = useState(false)

    const params = useParams()
    useEffect((id)=>{
        axios.get(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Students/${params.id}`)
    },[params.id])
    
    
useEffect(()=>{
    setSpinner(true)
    if (params.id) {
    axios.get(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Students/${params.id}`)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        setData(res.data)
        setSpinner(false)
      }
    })
    .catch((err)=>{
      console.log(err)
    })
}
  },[params.id])


    const getStudentDetails = () => {
        setSpinner(true)
        axios.get('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Students')
            .then(res =>{ 
                setData(res.data)
                setSpinner(false)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getStudentDetails()
    }, [])

  return (
    <div>
    <div className="xl:col-span-4 col-span-12">
                <div className="box">
                    <div className="grid grid-cols-12 gap-0">
                        <div className="md:col-span-3 col-span-12 text-center">
                            <img src={data.imageUrl ?? media37}
                                className="img-fluid !rounded-full !inline-flex profile-image" alt="..." />
                        </div>
                        <div className="md:col-span-8 col-span-12">
                           
                            <div className="box-body">
                            {
                                        spinner ? <Loader /> :
                                 <div> 
                                <h6 className="box-title font-semibold"> {data.fullName}</h6>
                                <p className="card-text pt-4"><b>Gender:</b> {data.gender}</p>
                                <p className="card-text pt-4"><b> DOB:</b> {data.dob}</p>
                                <p className="card-text pt-4"><b>Mobile No:</b> {data.mobileNumber}</p>
                                {/* <p className="card-text pt-4"><b>Alternate Mobile No:</b> {data.emergencyMobileNumber}</p> */}
                                <p className="card-text pt-4"><b>Email Id:</b> {data.email}</p>
                                <p className="card-text pt-4"><b>Address:</b> {data.addressLine}</p>
                                <p className="card-text pt-4"><b> School Name:</b> {data.schoolName}</p>
                                <p className="card-text pt-4"><b> Prakalp Name:</b> {data.prakalpName}</p>
                                <p className="card-text pt-4"><b> Class Name:</b> {data.className}</p>
                                <p className="card-text pt-4"><b> Section Name:</b> {data.sectionName}</p>
                                <p className="card-text pt-4"><b> Roll Number:</b> {data.rollNumber}</p>
                                <p className="card-text pt-4"><b> Enrollment Date:</b> {data.enrolmentDate}</p>
                                </div>       
                            }
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
</div>
  )
}

export default StudentCardDetails