import React from 'react'

const HealthDocumentDetails = () => {
  return (
<div className="pt-5">
    <h6>Health Document Details </h6>
     <div className="health-document-table">
     <div className='p-5 border rounded-sm dark:border-white/10 border-gray-200'>
                           <div className="table-responsive">
                               <table className="table whitespace-nowrap table-sm min-w-full">
                                   <thead><tr className="border-b border-defaultborder">
                                       <th scope="col" className="text-start">Height</th>
                                       <th scope="col" className="text-start">Weight		</th>
                                       <th scope="col" className="text-start">Blood Pressure	</th>
                                       <th scope="col" className="text-start">Dental Checkup	</th>
                                       <th scope="col" className="text-start">BMI Classification	</th>
                                       <th scope="col" className="text-start">MCTS Number(Mother & Child Tracking)	</th>
                                       <th scope="col" className="text-start">	Entry Date</th>
                                      
                                   </tr>
                                   </thead>
                                   <tbody>
                                       <tr className="border-b border-defaultborder">
                                           <td>168 Cm</td>
                                           <td>65</td>
                                           <td>	110</td>
                                           <td>	OK</td>
                                           <td>	OK</td>
                                           <td>	WS000404	</td>
                                           <td>	15 Jul 2024</td>
                                         
                                       </tr>

                                   </tbody>
                               </table>
                           </div>
                           <div className="healthmore-doc-details">
                            
                            <div className="health-rows-wrap">
                                <span className="label-text">Defects At Birth :</span>
                                <span className="field-text"></span>
                            </div>
                            <div className="health-rows-wrap">
                                <span className="label-text">Deficiencies :</span>
                                <span className="field-text"></span>
                            </div>
                            <div className="health-rows-wrap">
                                <span className="label-text">Childhood Diseases :</span>
                                <span className="field-text"></span>
                            </div>
                            <div className="health-rows-wrap">
                                <span className="label-text">Developmental delay & Disability :</span>
                                <span className="field-text"></span>
                            </div>
                            <div className="health-rows-wrap">
                                <span className="label-text">Acuity Left Eye : </span>
                                <span className="field-text">OK</span>
                            </div>
                            <div className="health-rows-wrap">
                                <span className="label-text">Acuity Right Eye :</span>
                                <span className="field-text">OK</span>
                            </div>
                            <div className="health-rows-wrap">
                                <span className="label-text">Description Diseases:</span>
                                <span className="field-text">OK</span>
                            </div>
                            <div className="health-rows-wrap">
                                <span className="label-text">Suggestions & Treatments: </span>
                                <span className="field-text">NA</span>
                            </div>
                            <div className="health-rows-wrap">
                                <span className="label-text">Remarks:</span>
                                <span className="field-text">NOT REQUIREd</span>
                            </div>
                            <div className="health-rows-wrap">
                                <span className="label-text">Name of Doctor:</span>
                                <span className="field-text">DR. MAYUr</span>
                            </div>
                            <div className="health-rows-wrap">
                                <span className="label-text">Hospital Name:</span>
                                <span className="field-text"> DANDALE CLINIc</span>
                            </div>

                            </div>
                       </div>
       </div>
   </div>
  )
}

export default HealthDocumentDetails
