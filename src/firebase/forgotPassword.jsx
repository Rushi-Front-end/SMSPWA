import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from "../assets/images/logo/logo.svg";
import desktopdarklogo from "../assets/images/brand-logos/desktop-dark.png";

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        try {
            const response = await axios.post('YOUR_API_FORGOT_PASSWORD_ENDPOINT', { email });
            setMessage(response.data.message); // Assuming the API returns a message
        } catch (error) {
            setError(error.response?.data?.message || "An error occurred");
        }
    };

    return (
        <Fragment>
            <div className="container">
                <div className="flex justify-center items-center h-full text-defaultsize text-defaulttextcolor authentication authentication-basic">
                <div className="grid grid-cols-12">
                <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
                <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-8 col-span-12">
                <div className="my-[1.5rem] flex justify-center">
                                <div>
                                    <img src={logo} alt="logo" className="desktop-logo" />
                                    <img src={desktopdarklogo} alt="logo" className="desktop-dark" />
                                </div>
                            </div>
                    <div className="box !p-[1rem]">
                        <div className="box-body">
                            <p className="text-center h5 font-semibold mb-2 text-center">Forgot Password</p>
                            {message && <div className="alert alert-success">{message}</div>}
                            {error && <div className="alert alert-danger">{error}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className='pb-4'>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-control form-control-lg w-full !rounded-md"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="ti-btn text-center ti-btn-primary !bg-primary !text-white !font-medium flex justify-end">Send Reset Link</button>
                            </form>
                            <div className="flex justify-end">
                                <Link to={`${import.meta.env.BASE_URL}firebase/login`} className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mt-4">Back to Sign In</Link>
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

export default ForgotPassword;
