import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

import axios from 'axios';

import { useForm, useController, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { toast } from 'react-toastify';
const EditHealthMedical = (props) => {
    console.log(props,"setStudMedical")
    const [medicalA, setMedicalA] = useState({})
    const [medicalB, setMedicalB] = useState({})
    const [medicalC, setMedicalC] = useState({})
    const [medicalD, setMedicalD] = useState({})
    const [medicalE, setMedicalE] = useState({})

    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const id = queryParams.get('id'); // '12345'
    const date = queryParams.get('date'); // '09-11-2023'

    useEffect(() => {
        if(props.data?.defectAtBirth?.split(",").filter(el => el)?.length){
            const filteredObj = props.data?.defectAtBirth?.split(",").filter(el => el).map(el => ({[el]: true}))
            const finalObj = filteredObj.reduce((acc, obj) => {
                                return { ...acc, ...obj };
                            }, {});
            setMedicalA(finalObj)
        }
        if(props.data?.deficiency?.split(",").filter(el => el)?.length){
            const filteredObj = props.data?.deficiency?.split(",").filter(el => el).map(el => ({[el]: true}))
            const finalObj = filteredObj.reduce((acc, obj) => {
                                return { ...acc, ...obj };
                            }, {});
            setMedicalB(finalObj)
        }
        if(props.data?.childhoodDiseases?.split(",").filter(el => el)?.length){
            const filteredObj = props.data?.childhoodDiseases?.split(",").filter(el => el).map(el => ({[el]: true}))
            const finalObj = filteredObj.reduce((acc, obj) => {
                                return { ...acc, ...obj };
                            }, {});
            setMedicalC(finalObj)
        }
        if(props.data?.developmentalDelay?.split(",").filter(el => el)?.length){
            const filteredObj = props.data?.developmentalDelay?.split(",").filter(el => el).map(el => ({[el]: true}))
            const finalObj = filteredObj.reduce((acc, obj) => {
                                return { ...acc, ...obj };
                            }, {});
            setMedicalD(finalObj)
        }
        if(props.data?.E?.split(",").filter(el => el)?.length){
            const filteredObj = props.data?.E?.split(",").filter(el => el).map(el => ({[el]: true}))
            const finalObj = filteredObj.reduce((acc, obj) => {
                                return { ...acc, ...obj };
                            }, {});
            setMedicalE(finalObj)
        }
    }, [props])

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
          } else {
            acc[key] = ""
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
            const createRes = await axios.put(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/StudentHealthCheckup/UpdatetStudentHealthCheckup?studentId=${id}&healthCheckupDate=${date}`, {...finalData})

            navigate(`${import.meta.env.BASE_URL}pages/health/healthDetails`)
            toast.success("Medical Data Edited Successfuly")
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
                            Looks for any visible Defect at Birth in the Child viz Cleft Lip/Palate/Club
                            foot Down’s syndrome/Catared etc.
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
                            Severe anaemia - Look for severe palmar pallor
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" name='B2'   onChange={healthCheck}  value="B2" type="checkbox" id="flexCheckDefault2" checked={medicalB["B2"] || false}  />
                            <label className="form-check-label" htmlFor="flexCheckDefault2">
                            Vitamin A Deficiency - Ask for right blindness/look foe Bitot’s spot (white patches on sciera)
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" name='B3'  onChange={healthCheck}  value="B3" type="checkbox" id="flexCheckDefault3" checked={medicalB["B3"] || false} />
                            <label className="form-check-label" htmlFor="flexCheckDefault3">
                            Vitamin D Deficiency - Look for Wrist Widening Bowing of legs
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" name='B4'  onChange={healthCheck}  value="B4" type="checkbox" id="flexCheckDefault4" checked={medicalB["B4"] || false} />
                            <label className="form-check-label" htmlFor="flexCheckDefault4">
                            Goitre - Any swelling in the neck region
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" name='B5'  onChange={healthCheck}  value="B5" type="checkbox" id="flexCheckDefault5" checked={medicalB["B5"] || false} />
                            <label className="form-check-label" htmlFor="flexCheckDefault5">
                            Oedma of both feet
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
                            Convulsive Disorders - Did the child ever have had spells of unconsciousness and fits?
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" name='C2'  onChange={healthCheck}  value="C2" type="checkbox" id="flexCheckDefault7"  checked={medicalC["C2"] || false} />
                            <label className="form-check-label" htmlFor="flexCheckDefault7">
                            Otitis Media - Did the child have more than 3 episodes of ear discharge in last 1 year? Look for Active discharge from eat
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" name='C3'  onChange={healthCheck}  value="C3" type="checkbox" id="flexCheckDefault8"  checked={medicalC["C3"] || false} />
                            <label className="form-check-label" htmlFor="flexCheckDefault8">
                            Dental Condition - Look for white demineralized brown teeth Discoloration, Cavitation , Swollen / Bleeding/red gums.  visible Plaque / stains
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" name='C4'  onChange={healthCheck}  value="C4" type="checkbox" id="flexCheckDefault9"  checked={medicalC["C4"] || false} />
                            <label className="form-check-label" htmlFor="flexCheckDefault9">
                            Skin Condition -  Does the child have itching on skin (especially at night)/ Look for round or oval scaly patches/pustules in finger webs. Any other lesion on the skin.
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" name='C5'  onChange={healthCheck}  value="C5" type="checkbox" id="flexCheckDefault10"  checked={medicalC["C5"] || false} />
                            <label className="form-check-label" htmlFor="flexCheckDefault10">
                            Rheumatic Heart Disease - Dose the child Auscultate for Murmur
                            </label>
                        </div>

                    </div>
                    
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" name='C6'  onChange={healthCheck}  value="C6" type="checkbox" id="flexCheckDefault11"  checked={medicalC["C6"] || false} />
                            <label className="form-check-label" htmlFor="flexCheckDefault11">
                            Other Tuberculosis - cough &gt; 2 weeks, Asthma - More than 3 Eposodes of increased shortness of breath and difficult breathing and wheezing in past 6 months

                            </label>
                        </div>

                    </div>
                    
                </div>
                <div className='individual-med-row pt-4'>
                    <h6>D.  Developmental Delays for 6-9 years only (If answer to any of the following is “YES”, Child needs to be referred)</h6>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" name='D1'  onChange={healthCheck}  value="D1" type="checkbox" id="flexCheckDefault12" checked={medicalD["D1"] || false} />
                            <label className="form-check-label" htmlFor="flexCheckDefault12">
                            Dose the child have difficulty in seeing, either during day or night?(without spectacles)
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input"  onChange={healthCheck} name='D2'  value="D2" type="checkbox" id="flexCheckDefault13" checked={medicalD["D2"] || false} />
                            <label className="form-check-label" htmlFor="flexCheckDefault13">
                            Compared with other children of his/her age, did the child have any delay in walking?
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input"  onChange={healthCheck} name='D3'  value="D3" type="checkbox" id="flexCheckDefault14" checked={medicalD["D3"] || false} />
                            <label className="form-check-label" htmlFor="flexCheckDefault14">
                            Dose the child have stiffness or floppiness and/or reduced strength in his/her arms or legs?
                            </label>
                        </div>

                    </div>
                    {/* <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input"  onChange={healthCheck} name='D4'  value="D4" type="checkbox" id="flexCheckDefault15" checked={medicalD["D4"] || false} />
                            <label className="form-check-label" htmlFor="flexCheckDefault15">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input"  onChange={healthCheck} name='D5'  value="D5" type="checkbox" id="flexCheckDefault16" checked={medicalD["D5"] || false} />
                            <label className="form-check-label" htmlFor="flexCheckDefault16">
                                Default checkbox
                            </label>
                        </div>

                    </div> */}
                </div>
                <div className='individual-med-row pt-4'>
                    <h6>E. ADOLESCENT SPECIFIC QUESTIONNAIRE (10-18 years) Instruction: Following questions to be asked maintaining audio visual privacy ONLY.</h6>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input"  onChange={healthCheck}  name="E1" value="E1" type="checkbox" id="flexCheckDefault17" checked={medicalE["E1"] || false} />
                            <label className="form-check-label" htmlFor="flexCheckDefault17">
                            Dose you always find it difficult to handle things in your life that has resulted from changes occuring in your body?
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input"  onChange={healthCheck}  name="E2" value="E2" type="checkbox" id="flexCheckDefault18" checked={medicalE["E2"] || false} />
                            <label className="form-check-label" htmlFor="flexCheckDefault18">
                            Are you able to say “NO” and leave the place when your friends pressurize you to smoke or drink with them?
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input"  onChange={healthCheck}  name="E3" value="E3" type="checkbox" id="flexCheckDefault19" checked={medicalE["E3"] || false} />
                            <label className="form-check-label" htmlFor="flexCheckDefault19">
                            Do you feel unduly tired early in the morning or you feel depressed most of the time?
                            </label>
                        </div>

                    </div>
                    {/* <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input"  onChange={healthCheck}  name="E4" value="E4" type="checkbox" id="flexCheckDefault20" checked={medicalE["E4"] || false} />
                            <label className="form-check-label" htmlFor="flexCheckDefault20">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input"  onChange={healthCheck}  name="E5" value="E5" type="checkbox" id="flexCheckDefault21" checked={medicalE["E5"] || false} />
                            <label className="form-check-label" htmlFor="flexCheckDefault21">
                                Default checkbox
                            </label>
                        </div>

                    </div> */}
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

export default EditHealthMedical