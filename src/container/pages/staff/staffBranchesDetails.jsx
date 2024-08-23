import React from 'react'
import { Link } from 'react-router-dom'

const StaffBranchesDetails = () => {
  return (
    <div>
        <div className="staffbranch-table-details">
        <h6 className='pb-4'>Branches  Details</h6>
                            <div className="table-responsive">
                                <table className="table whitespace-nowrap table-sm min-w-full">
                                    <thead><tr className="border-b border-defaultborder">
                                        <th scope="col" className="text-start">#</th>
                                        <th scope="col" className="text-start">Name</th>
                                        <th scope="col" className="text-start">Address</th>
                                        <th scope="col" className="text-start">Last Activity</th>
                                        
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-defaultborder">
                                            <td>1</td>
                                            <td>EMP005</td>
                                            
                                            <td>Teacher</td>

                                            <td>Bars</td>
                                        </tr>

                                    </tbody>
                                </table>
                                
                            </div>
                    </div>
    </div>
  )
}

export default StaffBranchesDetails
