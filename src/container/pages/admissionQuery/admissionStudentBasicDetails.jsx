import React from 'react'

const AdmissionStudentBasicDetails = ({data}) => {
  return (
    <div className="pt-4">
    <h6  className="pb-4">Student Basic Details </h6>
     <div className="admission-listing-table">
     <div className='p-5 border rounded-sm dark:border-white/10 border-gray-200'>
                           <div className="table-responsive">
                               <table className="table whitespace-nowrap table-sm min-w-full">
                                   <thead><tr className="border-b border-defaultborder">
                                       <th scope="col" className="text-start">#Reg No.</th>
                                       <th scope="col" className="text-start">Full Name</th>
                                       <th scope="col" className="text-start">DOB</th>
                                       <th scope="col" className="text-start">Father/Guardian Name</th>
                                       <th scope="col" className="text-start">Mother Name</th>
                                       <th scope="col" className="text-start">Address</th>
                                   </tr>
                                   </thead>
                                   <tbody>
                                       <tr className="border-b border-defaultborder">
                                           <td>{data?.registrationNumber}</td>
                                           <td>{data?.fullName}</td>
                                           <td>{data?.dob}</td>
                                           <td>{data?.fatherName}</td>
                                           <td>{data?.motherName}</td>
                                           <td>{[data?.addressLine, data?.city, data?.district, data?.state, data?.pinCode].filter(el => el).join(", ")}</td>
                                       </tr>

                                   </tbody>
                               </table>
                           </div>
                       </div>
       </div>
   </div>
  )
}

export default AdmissionStudentBasicDetails
