import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';

import { useForm, useController, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { toast } from 'react-toastify';
const HealthMedical = (props) => {
    console.log(props,"setStudMedical")
    const [medicalA, setMedicalA] = useState({})
    const [medicalB, setMedicalB] = useState({})
    const [medicalC, setMedicalC] = useState({})
    const [medicalD, setMedicalD] = useState({})
    const [medicalE, setMedicalE] = useState({})

    const navigate = useNavigate()
    const { register, formState, control, setValue, reset } = useForm({
        resolver: yupResolver()
    });
    const { errors, isValid } = formState;

    const healthCheck = (e) =>{ 
        const { name, value, checked } = e.target;
        const section = name[0]; // Extract the section (A, B, C, D, E)
        const updatedValue = { ...value };

        switch (section) {
            case 'A':
                setMedicalA(prev => ({
                    ...prev,
                    [value]: checked,
                }));
                break;
            case 'B':
                setMedicalB(prev => ({
                    ...prev,
                    [value]: checked,
                }));
                break;
            case 'C':
                setMedicalC(prev => ({
                    ...prev,
                    [value]: checked,
                }));
                break;
            case 'D':
                setMedicalD(prev => ({
                    ...prev,
                    [value]: checked,
                }));
                break;
            case 'E':
                setMedicalE(prev => ({
                    ...prev,
                    [value]: checked,
                }));
                break;
            default:
                break;
        }

    }

    console.log(medicalB,"medicalB")

    const convertToSimplifiedForm = (obj) => {
        return Object.keys(obj).reduce((acc, key) => {
          const trueKeys = Object.keys(obj[key]).filter(subKey => obj[key][subKey]);
          if (trueKeys.length > 0) {
            acc[key] = trueKeys.join(',');
          }
          return acc;
        }, {});
      };

    const onSubmit = async (e) => {
        e.preventDefault();
        const medicalData = {
            defectAtBirth: medicalA,
            deficiency: medicalB,
            childhoodDiseases: medicalC,
            developmentalDelay: medicalD,
            E: medicalE,
        };

        const formattedMedicalData = convertToSimplifiedForm(medicalData)

        const finalData = {...props.data, ...formattedMedicalData, createdBy: ""}

        try {
            const createRes = await axios.post("https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/StudentHealthCheckup/CreateStudentHealthCheckup", {...finalData})

            navigate(`${import.meta.env.BASE_URL}pages/health/healthDetails`)
            toast.success("Medical Data Created Successfuly")
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div className='student-medical-wrapper'>
            <div className='student-medical-innerwrap'>
                <h4>Student Medical Details</h4>
                <form onSubmit={onSubmit}>
                <div className='individual-med-row pt-4'>
                    <h6>A. Defects at Birth</h6>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" onChange={healthCheck} name='A' value="A" type="checkbox" id="flexCheckDefault" checked={medicalA["A"] || false} />
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
                            <input className="form-check-input" name='B1'  onChange={healthCheck}  value="B1" type="checkbox" id="flexCheckDefault1" checked={medicalB["B1"] || false} />
                            <label className="form-check-label" htmlFor="flexCheckDefault1">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" name='B2'   onChange={healthCheck}  value="B2" type="checkbox" id="flexCheckDefault2" checked={medicalB["B2"] || false}  />
                            <label className="form-check-label" htmlFor="flexCheckDefault2">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" name='B3'  onChange={healthCheck}  value="B3" type="checkbox" id="flexCheckDefault3" checked={medicalB["B3"] || false} />
                            <label className="form-check-label" htmlFor="flexCheckDefault3">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" name='B4'  onChange={healthCheck}  value="B4" type="checkbox" id="flexCheckDefault4" checked={medicalB["B4"] || false} />
                            <label className="form-check-label" htmlFor="flexCheckDefault4">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" name='B5'  onChange={healthCheck}  value="B5" type="checkbox" id="flexCheckDefault5" checked={medicalB["B5"] || false} />
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
                            <input className="form-check-input" name='C1'  onChange={healthCheck}  value="C1" type="checkbox" id="flexCheckDefault6" checked={medicalC["C1"] || false} />
                            <label className="form-check-label" htmlFor="flexCheckDefault6">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" name='C2'  onChange={healthCheck}  value="C2" type="checkbox" id="flexCheckDefault7"  checked={medicalC["C2"] || false} />
                            <label className="form-check-label" htmlFor="flexCheckDefault7">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" name='C3'  onChange={healthCheck}  value="C3" type="checkbox" id="flexCheckDefault8"  checked={medicalC["C3"] || false} />
                            <label className="form-check-label" htmlFor="flexCheckDefault8">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" name='C4'  onChange={healthCheck}  value="C4" type="checkbox" id="flexCheckDefault9"  checked={medicalC["C4"] || false} />
                            <label className="form-check-label" htmlFor="flexCheckDefault9">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" name='C5'  onChange={healthCheck}  value="C5" type="checkbox" id="flexCheckDefault10"  checked={medicalC["C5"] || false} />
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
                            <input className="form-check-input" name='D1'  onChange={healthCheck}  value="D1" type="checkbox" id="flexCheckDefault11" checked={medicalD["D1"] || false} />
                            <label className="form-check-label" htmlFor="flexCheckDefault11">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input"  onChange={healthCheck} name='D2'  value="D2" type="checkbox" id="flexCheckDefault12" checked={medicalD["D2"] || false} />
                            <label className="form-check-label" htmlFor="flexCheckDefault12">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input"  onChange={healthCheck} name='D3'  value="D3" type="checkbox" id="flexCheckDefault13" checked={medicalD["D3"] || false} />
                            <label className="form-check-label" htmlFor="flexCheckDefault13">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input"  onChange={healthCheck} name='D4'  value="D4" type="checkbox" id="flexCheckDefault14" checked={medicalD["D4"] || false} />
                            <label className="form-check-label" htmlFor="flexCheckDefault14">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input"  onChange={healthCheck} name='D5'  value="D5" type="checkbox" id="flexCheckDefault15" checked={medicalD["D5"] || false} />
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
                            <input className="form-check-input"  onChange={healthCheck}  name="E1" value="E1" type="checkbox" id="flexCheckDefault16" checked={medicalE["E1"] || false} />
                            <label className="form-check-label" htmlFor="flexCheckDefault16">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input"  onChange={healthCheck}  name="E2" value="E2" type="checkbox" id="flexCheckDefault17" checked={medicalE["E2"] || false} />
                            <label className="form-check-label" htmlFor="flexCheckDefault17">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input"  onChange={healthCheck}  name="E3" value="E3" type="checkbox" id="flexCheckDefault18" checked={medicalE["E3"] || false} />
                            <label className="form-check-label" htmlFor="flexCheckDefault18">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input"  onChange={healthCheck}  name="E4" value="E4" type="checkbox" id="flexCheckDefault19" checked={medicalE["E4"] || false} />
                            <label className="form-check-label" htmlFor="flexCheckDefault19">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input"  onChange={healthCheck}  name="E5" value="E5" type="checkbox" id="flexCheckDefault20" checked={medicalE["E5"] || false} />
                            <label className="form-check-label" htmlFor="flexCheckDefault20">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                </div>


                <div className='student-create-btn'>
                    <div className='flex justify-end'>
                        <button type="submit" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave"  >Save</button>
                        <div className='backButton'>
                                <button onClick={()=>props.setStudMedical(false)} type="button" className="ti-btn ti-btn-info-full ml-15 !rounded-full ti-btn-wave">Reset</button>
                        </div>

                    </div>
                </div>
                {/* End of the button */}
                </form>
            </div>
            {/* // End of the student medical innerwrapper */}
        </div>
        // End of the student medical wrapper
    )
}

export default HealthMedical