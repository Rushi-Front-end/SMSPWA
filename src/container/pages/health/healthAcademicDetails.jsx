import React from 'react'

const HealthAcademicDetails = () => {
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
                                           <td>2024-2025</td>
                                           <td>001</td>
                                           <td>	Class A</td>
                                           <td>	Section A</td>
                                         
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
