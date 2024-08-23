import React from 'react'
import { Link } from 'react-router-dom'

const StaffRolesPermission = () => {
  return (
    <div>
      <div className="table-responsive">
<table className="table whitespace-nowrap table-sm min-w-full">
<thead><tr className="border-b border-defaultborder">
<th scope="col" className="text-start">#</th>
<th scope="col" className="text-start">Name</th>
<th scope="col" className="text-start">Description</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-defaultborder">
 <td>1</td>

<th scope="row" className="text-start">
<div className="form-check">
<input className="form-check-input" type="checkbox" value="" 
id="checkebox-sm" checked />
<label className="form-check-label"
 htmlFor="checkebox-sm">Admin</label>
 </div>
 </th>
 <td>
 Admin Role
 </td>
</tr>

 </tbody>
 </table>
 </div>
    </div>
  )
}

export default StaffRolesPermission
