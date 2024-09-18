import React from 'react'

const HealthAcademicDetails = ({data, classData}) => {
  return (
    <div className="pt-5">
    <h6>Admission Details </h6>
     <div className="healthadmiss-listing-table">
     <div className='p-5 border rounded-sm dark:border-white/10 border-gray-200'>
                           <div className="table-responsive">
                               <table className="table whitespace-nowrap table-sm min-w-full">
                                   <thead><tr className="border-b border-defaultborder">
                                       <th scope="col" className="text-start">Academic year</th>
                                       <th scope="col" className="text-start">	Roll No.</th>
                                       <th scope="col" className="text-start">	Class Name</th>
                                       <th scope="col" className="text-start">	Section Name</th>
                                      
                                   </tr>
                                   </thead>
                                   <tbody>
                                       <tr className="border-b border-defaultborder">
                                           <td>{data?.academicYear}</td>
                                           <td>{data?.rollNumber}</td>
                                           <td>{classData?.className}</td>
                                           <td>{data?.section}</td>
                                         
                                       </tr>

                                   </tbody>
                               </table>
                           </div>
                       </div>
       </div>
   </div>
  )
}

export default HealthAcademicDetails
