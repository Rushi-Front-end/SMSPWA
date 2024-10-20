import React from 'react'

const ExpenseReport = ({reportGenData}) => {
  return (
    <div>
    <div className='generated-report-wrapper'>
    <table className="table border table-bordered  whitespace-nowrap table-sm min-w-full">
                             <thead><tr className="border-b border-defaultborder">
                                 <th scope="col" className="text-start">SrNo</th>
                                 <th scope="col" className="text-start">School Name	</th>
                                 <th scope="col" className="text-start"> Category</th>
                                 <th scope="col" className="text-start">Expense Date	</th>
                                 <th scope="col" className="text-start">Total Expenses	</th>
                             </tr>
                             </thead>

                            <tbody>
                             {
                                 reportGenData.map((dt,index)=>{
                                     return <tr key={index}>
                                         <td className="text-start">{dt.srNo}</td>
                                         <td className="text-start">{dt.schoolName}</td>
                                         <td className="text-start">{dt.category}</td>
                                         <td className="text-start">{dt.date}</td>
                                         <td className="text-start">{dt.totalExpenses}</td>

                                     </tr>
                                 })
                             }
                            </tbody>
                         </table>
    </div>
 </div>
  )
}

export default ExpenseReport