import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';

const HealthMedical = (props) => {
    console.log(props,"setStudMedical")

    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();
        // axios.post('https://66c9968d59f4350f064ce86d.mockapi.io/students', props.values)
        //     .then(res => {
        //         console.log(res)
        //         navigate(`${import.meta.env.BASE_URL}pages/student/studentDetails`)
        //     })
        //     .catch(err => console.log(err))
    }
    return (
        <div className='student-medical-wrapper'>
            <div className='student-medical-innerwrap'>
                <h4>Student Medical Details</h4>
                <div className='individual-med-row pt-4'>
                    <h6>A. Defects at Birth</h6>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" value="A" type="checkbox" defaultValue="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                </div>

                <div className='individual-med-row pt-4'>
                    <h6>B. Deficiency</h6>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" value="B1" type="checkbox" defaultValue="" id="flexCheckDefault1" />
                            <label className="form-check-label" htmlFor="flexCheckDefault1">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" value="B2" type="checkbox" defaultValue="" id="flexCheckDefault2" />
                            <label className="form-check-label" htmlFor="flexCheckDefault2">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" value="B3" type="checkbox" defaultValue="" id="flexCheckDefault3" />
                            <label className="form-check-label" htmlFor="flexCheckDefault3">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" value="B4" type="checkbox" defaultValue="" id="flexCheckDefault4" />
                            <label className="form-check-label" htmlFor="flexCheckDefault4">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" value="B5" type="checkbox" defaultValue="" id="flexCheckDefault5" />
                            <label className="form-check-label" htmlFor="flexCheckDefault5">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                </div>

                <div className='individual-med-row pt-4'>
                    <h6>C. Diseases</h6>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" value="C1" type="checkbox" defaultValue="" id="flexCheckDefault6" />
                            <label className="form-check-label" htmlFor="flexCheckDefault6">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" value="C2" type="checkbox" defaultValue="" id="flexCheckDefault7" />
                            <label className="form-check-label" htmlFor="flexCheckDefault7">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" value="C3" type="checkbox" defaultValue="" id="flexCheckDefault8" />
                            <label className="form-check-label" htmlFor="flexCheckDefault8">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" value="C4" type="checkbox" defaultValue="" id="flexCheckDefault9" />
                            <label className="form-check-label" htmlFor="flexCheckDefault9">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" value="C5" type="checkbox" defaultValue="" id="flexCheckDefault10" />
                            <label className="form-check-label" htmlFor="flexCheckDefault10">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                </div>
                <div className='individual-med-row pt-4'>
                    <h6>D. Development Delays for  6-9 years only</h6>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" value="D1" type="checkbox" defaultValue="" id="flexCheckDefault11" />
                            <label className="form-check-label" htmlFor="flexCheckDefault11">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" value="D2" type="checkbox" defaultValue="" id="flexCheckDefault12" />
                            <label className="form-check-label" htmlFor="flexCheckDefault12">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" value="D3" type="checkbox" defaultValue="" id="flexCheckDefault13" />
                            <label className="form-check-label" htmlFor="flexCheckDefault13">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" value="D4" type="checkbox" defaultValue="" id="flexCheckDefault14" />
                            <label className="form-check-label" htmlFor="flexCheckDefault14">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" value="D5" type="checkbox" defaultValue="" id="flexCheckDefault15" />
                            <label className="form-check-label" htmlFor="flexCheckDefault15">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                </div>
                <div className='individual-med-row pt-4'>
                    <h6>E. Adolescent Specific Questionnarie (10-18years)</h6>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" value="D6" type="checkbox" defaultValue="" id="flexCheckDefault16" />
                            <label className="form-check-label" htmlFor="flexCheckDefault16">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" value="D7" type="checkbox" defaultValue="" id="flexCheckDefault17" />
                            <label className="form-check-label" htmlFor="flexCheckDefault17">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" value="D8" type="checkbox" defaultValue="" id="flexCheckDefault18" />
                            <label className="form-check-label" htmlFor="flexCheckDefault18">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" value="D9" type="checkbox" defaultValue="" id="flexCheckDefault19" />
                            <label className="form-check-label" htmlFor="flexCheckDefault19">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" value="D10" type="checkbox" defaultValue="" id="flexCheckDefault20" />
                            <label className="form-check-label" htmlFor="flexCheckDefault20">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                </div>


                <div className='student-create-btn'>
                    <div className='flex justify-end'>
                        <button type="button" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave"  onClick={handleSubmit} >Save</button>
                        <div className='backButton'>
                                <button onClick={()=>props.setStudMedical(false)} type="button" className="ti-btn ti-btn-info-full ml-15 !rounded-full ti-btn-wave">Reset</button>
                        </div>

                    </div>
                </div>
                {/* End of the button */}
            </div>
            {/* // End of the student medical innerwrapper */}
        </div>
        // End of the student medical wrapper
    )
}

export default HealthMedical