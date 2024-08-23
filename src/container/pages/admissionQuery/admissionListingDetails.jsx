import React from 'react'

const AdmissionListingDetails = () => {
  return (
    <div>
     <h6>Admission Details </h6>
      <div className="admission-listing-table">
      <div className='p-5 border rounded-sm dark:border-white/10 border-gray-200'>
                            <div className="table-responsive">
                                <table className="table whitespace-nowrap table-sm min-w-full">
                                    <thead><tr className="border-b border-defaultborder">
                                        <th scope="col" className="text-start">Admission No</th>
                                        <th scope="col" className="text-start">Admission Date</th>
                                        <th scope="col" className="text-start">Admission Status</th>
                                        <th scope="col" className="text-start">Admission Type</th>
                                        <th scope="col" className="text-start">Admission Class</th>
                                        <th scope="col" className="text-start">Admission Section</th>
                                        <th scope="col" className="text-start">Admission Session</th>
                                        <th scope="col" className="text-start">Admission Roll No</th>
                                        <th scope="col" className="text-start">Admission Date of Birth</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-defaultborder">
                                            <td>AD-2024-2025-001</td>
                                            <td>2024-01-01</td>
                                            <td>Active</td>
                                            <td>New</td>
                                            <td>Nursery</td>
                                            <td> A</td>
                                            <td>2024-2025	</td>
                                            <td>	001	</td>
                                            <td>2019-01-01	</td>
                                          
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
        </div>
    </div>
  )
}

export default AdmissionListingDetails
