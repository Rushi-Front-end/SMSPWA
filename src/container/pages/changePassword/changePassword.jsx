import React from 'react'

const ChangePassword = () => {
    return (
        <div>
            <h4 className='pt-4 pb-4'>Change Password</h4>

            {/* Student form create Start */}
            <div className='passwordchange-form-create'>
                <div className='box'>
                    <div className='box-body '>
                        <div className='passwordchange-details mb-4'>

                            <div className="change-password-textfield ">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Current Password*:</label>
                                <input type="text" className="form-control" id="input-text" placeholder="Enter Current Password" />
                            </div>

                            <div className="change-password-textfield pt-4">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">New Password*:</label>
                                <input type="text" className="form-control" id="input-text" placeholder="Enter New Password" />
                            </div>

                            <div className="change-password-textfield pt-4">
                                <label className="ti-form-select rounded-sm !p-0 mb-2">Confirm Password*:</label>
                                <input type="text" className="form-control" id="input-text" placeholder="Enter Confirm Password" />
                            </div>


                        </div>

                        <div className='change-pass-btn pt-4'>
                            <div className='password-chan-btn'>
                                <button type="button" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave">Update Password</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Student form create end */}
            </div>
        </div>
    )
}

export default ChangePassword