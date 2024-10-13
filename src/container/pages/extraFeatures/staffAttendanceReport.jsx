import React from 'react'

const StaffAttendanceReport = ({reportGenData}) => {
  return (
    <div>
             <div className='generated-report-wrapper'>
    <table className="table border table-bordered  whitespace-nowrap table-sm min-w-full">
                             <thead><tr className="border-b border-defaultborder">
                                 <th scope="col" className="text-start">SrNo</th>
                                 <th scope="col" className="text-start"> Staff Name</th>
                                 <th scope="col" className="text-start">Role Name	</th>
                                 <th scope="col" className="text-start">Present Day</th>
                                 <th scope="col" className="text-start">Absent Day	</th>
                                 <th scope="col" className="text-start">Attendance Percentage</th>
                                 <th scope="col" className="text-start">School Name	</th>
                             </tr>
                             </thead>

                            <tbody>
                             {
                                 reportGenData.map((dt,index)=>{
                                     return <tr key={index}>
                                          <td className="text-start">{index + 1}</td>
                                         <td className="text-start">{dt.staffName}</td>
                                         <td className="text-start">{dt.roleName}</td>
                                         <td className="text-start">{dt.presentDay}</td>
                                         <td className="text-start">{dt.absentDay}</td>
                                         <td className="text-start">{dt.attendancePercentage}</td>
                                         <td className="text-start">{dt.schoolName}</td>

                                     </tr>
                                 })
                             }
                            </tbody>
                         </table>
    </div>
    </div>
  )
}

export default StaffAttendanceReport