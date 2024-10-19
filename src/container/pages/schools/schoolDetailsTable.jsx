import React from 'react'

const SchoolDetailsTable = ({schoolIndData}) => {
    return (
        <div>
            <div className="table-responsive pt-2">
                <table className="table whitespace-nowrap table-sm min-w-full">
                    <thead><tr className="border-b border-defaultborder">
                        {/* <th scope="col" className="text-start">Name</th> */}
                        <th scope="col" className="text-start">School Code</th>
                        <th scope="col" className="text-start">Prakalp Name</th>
                        <th scope="col" className="text-start">Principal Name</th>
                        <th scope="col" className="text-start">Address</th>
                        <th scope="col" className="text-start">City</th>
                        <th scope="col" className="text-start">District</th>
                        <th scope="col" className="text-start">Landmark</th>
                        <th scope="col" className="text-start">Zip Code</th>
                        <th scope="col" className="text-start">State</th>
                        <th scope="col" className="text-start">Phone Mobile</th>
                        <th scope="col" className="text-start">Email Address</th>
                        {/* <th scope="col" className="text-start">Website</th> */}
                    </tr>
                    </thead>
                    <tbody>
                        
                        <tr className="border-b border-defaultborder">
                            {/* <td>Ashram School</td> */}
                            <td>{schoolIndData.list.pinCode}</td>
                            <td>{schoolIndData.list.prakalpName}</td>
                            <td>{schoolIndData.list.principalName}</td>
                            <td>{schoolIndData.list.address}</td>
                            <td>{schoolIndData.list.city}</td>
                            <td>{schoolIndData.list.district}</td>
                            <td>{schoolIndData.list.landmark}</td>
                            <td>{schoolIndData.list.pinCode}</td>
                            <td>{schoolIndData.list.state}</td>
                            <td>{schoolIndData.list.schoolMobileNumber}</td>
                            <td>{schoolIndData.list.email}</td>
                            {/* <td>{schoolIndData.list.email}</td> */}
                            

                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SchoolDetailsTable
