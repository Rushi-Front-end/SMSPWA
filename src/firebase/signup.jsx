import { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import logo from "../assets/images/logo/logo.svg";
import desktopdarklogo from "../assets/images/brand-logos/desktop-dark.png";

const Signup = () => {
    const [passwordshow1, setpasswordshow1] = useState(false);
    const [passwordshow2, setpasswordshow2] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
    });
    const [err, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        const { firstName, lastName, password, confirmPassword } = formData;

        // Basic validation
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post('YOUR_API_ENDPOINT', {
                firstName,
                lastName,
                password,
            });

            // Assuming the response contains a token
            const { token } = response.data;
            // Store token in localStorage or sessionStorage
            localStorage.setItem('authToken', token);
            // Redirect or show success message
            navigate(`${import.meta.env.BASE_URL}dashboards/crm/`);
        } catch (error) {
            console.error(error);
            setError(error.response?.data?.message || "An error occurred during signup");
        }
    };

    return (
        <Fragment>
            <div className="container">
                <div className="flex justify-center authentication authentication-basic items-center h-full text-defaultsize text-defaulttextcolor">
                    <div className="grid grid-cols-12">
                        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
                        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-8 col-span-12">
                            <div className="my-[2.5rem] flex justify-center">
                                <div>
                                    <img src={logo} alt="logo" className="desktop-logo"/>
                                    <img src={desktopdarklogo} alt="logo" className="desktop-dark"/>
                                </div>
                            </div>
                            <div className="box">
                                <div className="box-body !p-[3rem]">
                                    <p className="h5 font-semibold mb-2 text-center">Sign Up</p>
                                    <p className="mb-4 text-[#8c9097] dark:text-white/50 opacity-[0.7] font-normal text-center">Welcome &amp; Join us by creating a free account!</p>
                                    {err && <div className="alert alert-danger">{err}</div>}
                                    <div className="grid grid-cols-12 gap-y-4">
                                        <div className="xl:col-span-12 col-span-12">
                                            <label htmlFor="signup-firstname" className="form-label text-default">First Name</label>
                                            <input type="text" name="firstName" onChange={handleChange} value={formData.firstName} className="form-control form-control-lg w-full !rounded-md" id="signup-firstname" placeholder="first name"/>
                                        </div>
                                        <div className="xl:col-span-12 col-span-12">
                                            <label htmlFor="signup-lastname" className="form-label text-default">Last Name</label>
                                            <input type="text" name="lastName" onChange={handleChange} value={formData.lastName} className="form-control form-control-lg w-full !rounded-md" id="signup-lastname" placeholder="last name"/>
                                        </div>
                                        <div className="xl:col-span-12 col-span-12">
                                            <label htmlFor="signup-password" className="form-label text-default">Password</label>
                                            <div className="input-group">
                                                <input type={passwordshow1 ? 'text' : "password"} name="password" onChange={handleChange} value={formData.password} className="form-control form-control-lg !rounded-e-none" id="signup-password" placeholder="password"/>
                                                <button onClick={() => setpasswordshow1(!passwordshow1)} aria-label="button" type="button" className="ti-btn ti-btn-light !rounded-s-none !mb-0" id="button-addon2">
                                                    <i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="xl:col-span-12 col-span-12 mb-2">
                                            <label htmlFor="signup-confirmpassword" className="form-label text-default">Confirm Password</label>
                                            <div className="input-group">
                                                <input type={passwordshow2 ? 'text' : "password"} name="confirmPassword" onChange={handleChange} value={formData.confirmPassword} className="form-control form-control-lg !rounded-e-none" id="signup-confirmpassword" placeholder="confirm password"/>
                                                <button aria-label="button" type="button" className="ti-btn ti-btn-light !rounded-s-none !mb-0" onClick={() => setpasswordshow2(!passwordshow2)} id="button-addon21">
                                                    <i className={`${passwordshow2 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i>
                                                </button>
                                            </div>
                                            <div className="mt-4">
                                                <div className="form-check !flex !ps-0">
                                                    <input className="form-check-input me-1" type="checkbox" value="" id="defaultCheck1"/>
                                                    <label className="ps-2 form-check-label text-[#8c9097] dark:text-white/50 font-normal block" htmlFor="defaultCheck1">
                                                        By creating an account you agree to our <Link to={`${import.meta.env.BASE_URL}pages/termsconditions`} className="text-success"><u>Terms & Conditions</u></Link> and <Link to="#!" className="text-success"><u>Privacy Policy</u></Link>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="xl:col-span-12 col-span-12 grid mt-2">
                                            <button type="button" onClick={handleSignup} className="ti-btn ti-btn-lg bg-primary text-white !font-medium dark:border-defaultborder/10">Create Account</button>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mt-4">Already have an account? <Link to={`${import.meta.env.BASE_URL}`} className="text-primary">Sign In</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Signup;
