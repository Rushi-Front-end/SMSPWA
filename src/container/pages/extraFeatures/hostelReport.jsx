import React from 'react'

const HostelReport = ({reportGenData}) => {
  return (
    <div className='generated-report-wrapper'>
    <table className="table border table-bordered  whitespace-nowrap table-sm min-w-full">
                             <thead><tr className="border-b border-defaultborder">
                                 <th scope="col" className="text-start">SrNo</th>
                                 <th scope="col" className="text-start">School Name	</th>
                                 {/* <th scope="col" className="text-start"> Hostel Name</th> */}
                                 <th scope="col" className="text-start">Total Students	</th>
                                 <th scope="col" className="text-start">Present Students	</th>
                                 <th scope="col" className="text-start">Absent Students	</th>
                                 <th scope="col" className="text-start">Attendance Percentage</th>
                             </tr>
                             </thead>

                            <tbody>
                             {
                                 reportGenData.map((dt,index)=>{
                                     return <tr key={index}>
                                         <td className="text-start">{index + 1}</td>
                                         <td className="text-start">{dt.schoolName}</td>
                                         {/* <td className="text-start">{dt.hostelName}</td> */}
                                         <td className="text-start">{dt.totalStudents}</td>
                                         <td className="text-start">{dt.presentStudents}</td>
                                         <td className="text-start">{dt.absentStudents}</td>
                                         <td className="text-start">{dt.attendancePercentage}</td>

                                     </tr>
                                 })
                             }
                            </tbody>
                         </table>
    </div>
  )
}

export default HostelReport