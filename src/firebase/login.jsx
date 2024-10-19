import { Fragment, useContext, useEffect, useState } from 'react';
import { connect } from "react-redux";
import { ThemeChanger } from "../redux/action";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from "../assets/images/logo/logo.svg";
import desktopdarklogo from "../assets/images/brand-logos/desktop-dark.png";
import { LocalStorageBackup } from '../components/common/switcher/switcherdata/switcherdata';
import { UserRoleNameContext } from '../components/common/context/userRoleContext';

const Login = ({ ThemeChanger }) => {
    const [passwordshow1, setpasswordshow1] = useState(false);
    const [err, setError] = useState("");
    const [data, setData] = useState({
        "userId": "",
        "password": "",
    });
    const { userId, password } = data;
    const { userRoleName, setUserRoleName } = useContext(UserRoleNameContext) || { userRoleName: '', setUserRoleName: () => {} };
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        setError("");
    };

    const routeChange = () => {
        const path = `${import.meta.env.BASE_URL}dashboard`;
        navigate(path);
    };

    useEffect(() => {
        LocalStorageBackup(ThemeChanger);
        const savedEmail = localStorage.getItem('savedEmail');
        if (savedEmail) {
            setData({ ...data, userId: savedEmail });
            setRememberMe(true);
        }
    }, [ThemeChanger]);

    const handleRememberMe = (e) => {
        setRememberMe(e.target.checked);
        if (!e.target.checked) {
            localStorage.removeItem('savedEmail');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            Login(e);
        }
    };

    const Login = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Login/loginApp', {
                userId,
                password,
            });

            const token = response.data.auth_token; 
            if (response.status === 200) {
                localStorage.setItem('authToken', token);
                const resData = JSON.stringify(response.data);
                localStorage.setItem('loginData', resData);
                setUserRoleName(resData);
            }
            if (rememberMe) {
                localStorage.setItem('savedEmail', userId);
            }
            routeChange();
        } catch (error) {
            console.error(error);
            setError(error.response?.data?.message || "An error occurred");
        }
    };

    return (
        <Fragment>
            <div className="container">
                <div className="flex justify-center authentication authentication-basic items-center h-full text-defaultsize text-defaulttextcolor">
                    <div className="grid grid-cols-12">
                        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
                        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-8 col-span-12">
                            <div className="my-[1.5rem] flex justify-center">
                                <div>
                                    <img src={logo} alt="logo" className="desktop-logo" />
                                    <img src={desktopdarklogo} alt="logo" className="desktop-dark" />
                                </div>
                            </div>
                            <form onKeyDown={handleKeyDown}>
                                <div className="box !p-[3rem]">
                                    <div className="box-body">
                                        <p className="h5 font-semibold mb-2 text-center">Sign In</p>
                                        <p className="mb-4 text-[#8c9097] dark:text-white/50 opacity-[0.7] font-normal text-center">Welcome back!</p>
                                        {err && <div className="alert-danger px-4 py-3 shadow-md mb-2" role="alert">
                                            <div className="flex">
                                                <div>{err}</div>
                                            </div>
                                        </div>}
                                        <div className="grid grid-cols-12 gap-y-4">
                                            <div className="xl:col-span-12 col-span-12">
                                                <label htmlFor="signin-username" className="form-label text-default">Mobile Number</label>
                                                <input type="text" name="userId" className="form-control form-control-lg w-full !rounded-md" onChange={changeHandler} value={userId}
                                                    id="signin-username" placeholder="Enter mobile number" />
                                            </div>
                                            <div className="xl:col-span-12 col-span-12 mb-2">
                                                <div className="input-group">
                                                    <input type={passwordshow1 ? 'text' : "password"} className="form-control form-control-lg !rounded-s-md"
                                                        name="password"
                                                        placeholder="password" value={password}
                                                        onChange={changeHandler} />
                                                    <button
                                                        onClick={() => setpasswordshow1(!passwordshow1)}
                                                        aria-label="button" className="ti-btn ti-btn-light !rounded-s-none !mb-0" type="button" id="button-addon2">
                                                        <i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i>
                                                    </button>
                                                </div>
                                                <div className="mt-2">
                                                    <div className="form-check !ps-0">
                                                        <input className="form-check-input" type="checkbox" checked={rememberMe} onChange={handleRememberMe} id="defaultCheck1" />
                                                        <label className="form-check-label text-[#8c9097] dark:text-white/50 font-normal" htmlFor="defaultCheck1">
                                                            Remember password?
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="xl:col-span-12 col-span-12 grid mt-2">
                                                <button className="ti-btn ti-btn-primary !bg-primary !text-white !font-medium"
                                                    onClick={Login}>Sign In</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Login);
