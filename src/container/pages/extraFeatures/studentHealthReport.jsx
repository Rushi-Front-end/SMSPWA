import React from 'react'

const StudentHealthReport = ({ reportGenData }) => {
    console.log(reportGenData,'StudentHealthreport')
    return (
        <div>
            <div className='generated-report-wrapper'>
                <table className="table border table-bordered  whitespace-nowrap table-sm min-w-full">
                    <thead><tr className="border-b border-defaultborder">
                        <th scope="col" className="text-start">SrNo</th>
                        <th scope="col" className="text-start">School Name	</th>
                        <th scope="col" className="text-start"> Sick Student Percentage</th>
                    </tr>
                    </thead>

                    <tbody>
                        {
                            reportGenData.map((dt, index) => {
                                return <tr key={index}>
                                    <td className="text-start">{index + 1}</td>
                                    <td className="text-start">{dt.schoolName}</td>
                                    <td className="text-start">{dt.sickStudentPercentage}</td>

                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StudentHealthReport