import React from 'react'

const SchoolDetailsTable = ({schoolIndData}) => {
    return (
        <div>
            <div className="table-responsive pt-2">
                <table className="table whitespace-nowrap table-sm min-w-full">
                    <thead><tr className="border-b border-defaultborder">
                        {/* <th scope="col" className="text-start">Name</th> */}
                        <th scope="col" className="text-start">Code</th>
                        <th scope="col" className="text-start">	Mobile</th>
                        <th scope="col" className="text-start">Address</th>
                    </tr>
                    </thead>
                    <tbody>
                        
                        <tr className="border-b border-defaultborder">
                            {/* <td>Ashram School</td> */}
                            <td>{schoolIndData.list.pinCode}</td>
                            <td>{schoolIndData.list.schoolMobileNumber}</td>
                            <td>{schoolIndData.list.address}</td>
                            

                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SchoolDetailsTable
