import React from 'react'
import media37 from "../../../assets/images/media/media-37.jpg";
const StaffCardDetails = () => {
  return (
    <div>
        <div className="xl:col-span-4 col-span-12">
                    <div className="box">
                        <div className="grid grid-cols-12 gap-0">
                            <div className="md:col-span-4 col-span-12">
                                <img src={media37}
                                    className="img-fluid rounded-s-md h-full w-full" alt="..." />
                            </div>
                            <div className="md:col-span-8 col-span-12">
                               
                                <div className="box-body">
                                    <h6 className="box-title font-semibold"> Employee 1</h6>
                                    <p className="card-text">Mobile No.: +91 453453453</p>
                                    <p className="card-text">Email Id: asdfasdf@gmail.com</p>
                                    <p className="card-text">Alternate Mobile No.: 234324324</p>
                                    <p className="card-text">Date of Joining: 01 Jan 2022</p>
                                    <p className="card-text">Gender:</p>
                                    <p className="card-text">Address:</p>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default StaffCardDetails
