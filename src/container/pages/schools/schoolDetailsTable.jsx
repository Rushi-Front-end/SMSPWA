import React from 'react'

const SchoolDetailsTable = () => {
    return (
        <div>
            <div className="table-responsive pt-2">
                <table className="table whitespace-nowrap table-sm min-w-full">
                    <thead><tr className="border-b border-defaultborder">
                        <th scope="col" className="text-start">Name</th>
                        <th scope="col" className="text-start">Code</th>
                        <th scope="col" className="text-start">	Mobile</th>
                        <th scope="col" className="text-start">Address</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-defaultborder">
                            <td>Ashram School</td>
                            <td>SDDSF34</td>
                            <td>+91 23423423423</td>
                            <td>Ashram School street, amaravathi, MH</td>

                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SchoolDetailsTable
