import React from 'react'

const ExamReport = ({reportGenData}) => {
    console.log(reportGenData,'ExamReport')
  return (
    <div>
       <div className='generated-report-wrapper'>
       <table className="table border table-bordered  whitespace-nowrap table-sm min-w-full">
                                <thead><tr className="border border-defaultborder">
                                    <th scope="col" className="text-start">Sr.No</th>
                                    <th scope="col" className="text-start">School Name</th>
                                    {/* <th scope="col" className="text-start">Title	</th> */}
                                    <th scope="col" className="text-start"> Date</th>
                                    <th scope="col" className="text-start"> Exam Name</th>
                                    <th scope="col" className="text-start">Total Appeared Student	</th>
                                    <th scope="col" className="text-start"> Passed Student	</th>
                                    <th scope="col" className="text-start"> Failed Student</th>
                                    <th scope="col" className="text-start"> Percentage(pass student)</th>
                                </tr>
                                </thead>

                               <tbody>
                                {
                                    reportGenData.map((dt,index)=>{
                                        return <tr key={index}>
                                            <td className="text-start">{index+1}</td>
                                            <td className="text-start">{dt.schoolName}</td>
                                            <td className="text-start">{dt.date}</td>
                                            <td className="text-start">{dt.examName}</td>
                                            <td className="text-start">{dt.totalAppearedStudent}</td>
                                            <td className="text-start">{dt.noOfPassedStudent}</td>
                                            <td className="text-start">{dt.noOfFailedStudent}</td>
                                            <td className="text-start">{dt.passedStudent_Perc}</td>

                                        </tr>
                                    })
                                }
                               </tbody>
                            </table>
       </div>
    </div>
  )
}

export default ExamReport