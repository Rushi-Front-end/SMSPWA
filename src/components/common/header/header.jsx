import {  Fragment, useContext, useEffect, useState } from 'react';
import Modalsearch from '../modalsearch/modalsearch';
import product1 from "../../../assets/images/ecommerce/jpg/1.jpg";
import product3 from "../../../assets/images/ecommerce/jpg/3.jpg";
import product5 from "../../../assets/images/ecommerce/jpg/5.jpg";
import product4 from "../../../assets/images/ecommerce/jpg/4.jpg";
import product6 from "../../../assets/images/ecommerce/jpg/6.jpg";
import { Link, useNavigate } from 'react-router-dom';
import store from '../../../redux/store';
import { connect } from 'react-redux';
import { ThemeChanger } from "../../../redux/action";
import desktoplogo from "../../../assets/images/brand-logos/desktop-logo.png";
import togglelogo from "../../../assets/images/brand-logos/toggle-logo.png";
import desktopdark from "../../../assets/images/brand-logos/desktop-dark.png";
import toggledark from "../../../assets/images/brand-logos/toggle-dark.png";
import desktopwhite from "../../../assets/images/brand-logos/desktop-white.png";
import togglewhite from "../../../assets/images/brand-logos/toggle-white.png";
import Select from 'react-select';
import {  Selectmaxoption, Selectoption1, Selectoption2, Selectoption3, Selectoption4, Selectoption5 } from '../../../container/forms/select2/select2data';
import { IdContext } from '../../common/context/idContext';
import axios from 'axios';
import { language, singleselect } from '../../../container/forms/formelements/formselect/formselectdata';
import { AllDashIdContext } from '../context/allDashIdContext';
import { UserRoleNameContext } from '../context/userRoleContext';


const Header = ({ local_varaiable, ThemeChanger }) => {
  //Fullscvreen
  const [fullScreen, setFullScreen] = useState(false);

  const toggleFullScreen = () => {
    const elem = document.documentElement;

    if (!document.fullscreenElement) {
      elem.requestFullscreen().then(() => setFullScreen(true));
    } else {
      document.exitFullscreen().then(() => setFullScreen(false));
    }
  };

  const handleFullscreenChange = () => {
    setFullScreen(!!document.fullscreenElement);
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);
  //
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { id, setId } = useContext(IdContext);
  const { dashId, setDashId } = useContext(AllDashIdContext);
  const { dashIdCheck, setDashIdCheck } = useContext(AllDashIdContext);

  const { userRoleName, setUserRoleName } = useContext(UserRoleNameContext)
  const [allSchAdmin, setAllSchAdmin] = useState(false)

  const handleToggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const cartProduct = [
    {
      id: 1,
      src: product1,
      name: 'SomeThing Phone',
      price: '$1,299.00',
      color: 'Metallic Blue',
      text: '6gb Ram',
      class: ''
    },
    {
      id: 2,
      src: product3,
      name: 'Stop Watch',
      price: '$179.29',
      color: 'Analog',
      text: 'Free shipping',
      class: 'font-[600] py-[0.25rem] px-[0.45rem] rounded-[0.25rem] bg-pink/10 text-pink text-[0.625rem]',
    },
    {
      id: 3,
      src: product5,
      name: 'Photo Frame',
      price: '$29.00',
      color: 'Decorative',
      text: '',
      class: '',
    },
    {
      id: 4,
      src: product4,
      name: 'Kikon Camera',
      price: '$4,999.00',
      color: 'Black',
      text: '50MM',
      class: '',
    },
    {
      id: 5,
      src: product6,
      name: 'Canvas Shoes',
      price: '$129.00',
      color: 'Gray',
      text: 'Sports',
      class: ''
    },
  ];
  const [cartItems, setCartItems] = useState([...cartProduct]);
  const [cartItemCount, setCartItemCount] = useState(cartProduct.length);
  const [selectedValue, setSelectedValue] = useState();
  const [selectedPrakalValue, setSelectedPrakalValue] = useState();

  const loginValue = localStorage.getItem('loginData')
  let  parsedLoginValue
  let   roleName
  let   fullName
  if (loginValue) {
     parsedLoginValue = JSON.parse(loginValue);
      roleName = parsedLoginValue.roleName || ''; // Default to empty string if undefined
      fullName = parsedLoginValue.fullName || ''; // Default to empty string if undefined
    console.log(parsedLoginValue.roleName, 'loginValue');
  } else {
    console.log('No login data found');
  }

  // const userLoginRoleName = parsedLoginValue.roleName
  const userLoginRoleName = roleName ? 'admin' : ''

  
  
  useEffect(()=>{
    setUserRoleName(userLoginRoleName)
    if(userLoginRoleName === 'admin') {
      setAllSchAdmin(true)
    }
    else{
      setAllSchAdmin(false)
    }
  },[])



  const handleRemove = (e, itemId) => {
    e.stopPropagation(); // Prevents the event from reaching the button click event
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
    setCartItemCount(updatedCart.length);
  };
  const initialNotifications = [
    { id: 1, color: 'primary', avatarColor: '!bg-primary', icon: 'ti-gift', text1: 'Your Order Has Been Shipped', text2: 'Order No: 123456 Has Shipped To Your Delivery Address', class: '', class1: '' },
    { id: 2, color: 'secondary', avatarColor: 'bg-secondary', icon: 'ti-discount-2', text1: 'Discount Available', text2: 'Discount Available On Selected Products', class: '', class1: '' },
    { id: 3, color: 'pink', avatarColor: 'bg-pink', icon: 'ti-user-check', text1: 'Account Has Been Verified', text2: 'Your Account Has Been Verified Successfully', class: '', class1: '' },
    { id: 4, color: 'warning', avatarColor: 'bg-warning', icon: 'ti-circle-check', text1: 'Order Placed ', text2: 'Order Placed Successflly', class: 'text-warning', class1: ' ID: #1116773' },
    { id: 5, color: 'success', avatarColor: 'bg-success', icon: 'ti-clock', text1: 'Order Delayed', text2: 'Order Delayed Unfortunately', class: 'text-success', class1: ' ID: 7731116' }
  ];

  const [notifications, setNotifications] = useState([...initialNotifications]);

  const handleNotificationClose = (e, index) => {
    e.stopPropagation(); // Prevents the event from reaching the button click event
    const updatedNotifications = [...notifications];
    updatedNotifications.splice(index, 1);
    setNotifications(updatedNotifications);
  };

  function menuClose() {
    const theme = store.getState();
    if (window.innerWidth <= 992) {
      ThemeChanger({ ...theme, toggled: "close" });
    }
    if (window.innerWidth >= 992) {
      ThemeChanger({ ...theme, toggled: local_varaiable.toggled ? local_varaiable.toggled : '' });
    }
  }
  const toggleSidebar = () => {
    const theme = store.getState();
    let sidemenuType = theme.dataNavLayout;
    if (window.innerWidth >= 992) {
      if (sidemenuType === "vertical") {
        let verticalStyle = theme.dataVerticalStyle;
        const navStyle = theme.dataNavStyle;
        switch (verticalStyle) {
          // closed
          case "closed":
            ThemeChanger({ ...theme, "dataNavStyle": "" });
            if (theme.toggled === "close-menu-close") {
              ThemeChanger({ ...theme, "toggled": "" });
            } else {
              ThemeChanger({ ...theme, "toggled": "close-menu-close" });
            }
            break;
          // icon-overlay
          case "overlay":
            ThemeChanger({ ...theme, "dataNavStyle": "" });
            if (theme.toggled === "icon-overlay-close") {
              ThemeChanger({ ...theme, "toggled": "" });
            } else {
              if (window.innerWidth >= 992) {
                ThemeChanger({ ...theme, "toggled": "icon-overlay-close" });
              }
            }
            break;
          // icon-text
          case "icontext":
            ThemeChanger({ ...theme, "dataNavStyle": "" });
            if (theme.toggled === "icon-text-close") {
              ThemeChanger({ ...theme, "toggled": "" });
            } else {
              ThemeChanger({ ...theme, "toggled": "icon-text-close" });
            }
            break;
          // doublemenu
          case "doublemenu":
            ThemeChanger({ ...theme, "dataNavStyle": "" });
            if (theme.toggled === "double-menu-open") {
              ThemeChanger({ ...theme, "toggled": "double-menu-close" });
            } else {
              let sidemenu = document.querySelector(".side-menu__item.active");
              if (sidemenu) {
                ThemeChanger({ ...theme, "toggled": "double-menu-open" });
                if (sidemenu.nextElementSibling) {
                  sidemenu.nextElementSibling.classList.add("double-menu-active");
                } else {

                  ThemeChanger({ ...theme, "toggled": "double-menu-close" });
                }
              }
            }

            // doublemenu(ThemeChanger);
            break;
          // detached
          case "detached":
            if (theme.toggled === "detached-close") {
              ThemeChanger({ ...theme, "toggled": "" });
            } else {
              ThemeChanger({ ...theme, "toggled": "detached-close" });
            }
            break;

          // default
          case "default":
            ThemeChanger({ ...theme, "toggled": "" });
        }
        switch (navStyle) {
          case "menu-click":
            if (theme.toggled === "menu-click-closed") {
              ThemeChanger({ ...theme, "toggled": "" });
            }
            else {
              ThemeChanger({ ...theme, "toggled": "menu-click-closed" });
            }
            break;
          // icon-overlay
          case "menu-hover":
            if (theme.toggled === "menu-hover-closed") {
              ThemeChanger({ ...theme, "toggled": "" });
            } else {
              ThemeChanger({ ...theme, "toggled": "menu-hover-closed" });

            }
            break;
          case "icon-click":
            if (theme.toggled === "icon-click-closed") {
              ThemeChanger({ ...theme, "toggled": "" });
            } else {
              ThemeChanger({ ...theme, "toggled": "icon-click-closed" });

            }
            break;
          case "icon-hover":
            if (theme.toggled === "icon-hover-closed") {
              ThemeChanger({ ...theme, "toggled": "" });
            } else {
              ThemeChanger({ ...theme, "toggled": "icon-hover-closed" });

            }
            break;

        }
      }
    }
    else {
      if (theme.toggled === "close") {
        ThemeChanger({ ...theme, "toggled": "open" });

        setTimeout(() => {
          if (theme.toggled == "open") {
            const overlay = document.querySelector("#responsive-overlay");

            if (overlay) {
              overlay.classList.add("active");
              overlay.addEventListener("click", () => {
                const overlay = document.querySelector("#responsive-overlay");

                if (overlay) {
                  overlay.classList.remove("active");
                  menuClose();
                }
              });
            }
          }

          window.addEventListener("resize", () => {
            if (window.screen.width >= 992) {
              const overlay = document.querySelector("#responsive-overlay");

              if (overlay) {
                overlay.classList.remove("active");
              }
            }
          });
        }, 100);
      } else {
        ThemeChanger({ ...theme, "toggled": "close" });
      }
    }

  };

  // const schoolPrakalpDown = (e)  =>{
  //   setSelectedPrakalValue(e); // Get selected value
  //   console.log('Prakalp value:', e); // Display selected value
  // }
  // const schoolDropDown = (e)  =>{
  //   setSelectedValue(e); // Get selected value
  //   console.log('Selected value:', e); // Display selected value
  //   setId(e.id)
  // }

  const [schoolDataList, setSchoolDataList] = useState([]);
  const [schoolPrakalpList, setSchoolPrakalpList] = useState([]);


  // useEffect(()=>{
  //   const fetchPrakalp = async () => {
  //     try {
  //       const response = await axios.get('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/School');

  //       // Create a Set to track unique prakalpNames
  //       const uniquePrakalpNames = new Set();
  //       const schoolPrakalpOptions = [];

  //       response.data.forEach((schoolData) => {
  //           if (!uniquePrakalpNames.has(schoolData.prakalpName)) {
  //               uniquePrakalpNames.add(schoolData.prakalpName);
  //               schoolPrakalpOptions.push({
  //                   id: schoolData.id,
  //                   label: schoolData.prakalpName,
  //                   value: schoolData.prakalpName
  //               });
  //           }
  //       });
  //       setSchoolPrakalpList(schoolPrakalpOptions)
  //       console.log(schoolPrakalpOptions, 'schoolListOptions');
  //       schoolPrakalpDown(schoolPrakalpOptions.filter(schoolData => schoolData.id === id)[0] ?? schoolPrakalpOptions[0])
  //       // setSchoolDataList(schoolListOptions);
  //   } catch (err) {
  //     setSchoolPrakalpList([]);
  //   }
  //   }
  //   fetchPrakalp();
  // },[])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/School');
  //       const schoolListOptions = response.data.map((schoolData) => ({id: schoolData.id, label: schoolData.schoolName, value: schoolData.id}))

  //       schoolDropDown(schoolListOptions.filter(schoolData => schoolData.id === id)[0] ?? schoolListOptions[0])
  //       setSchoolDataList(schoolListOptions);
  //     } catch (err) {
  //       setSchoolDataList([])
  //     }
  //   };

  //   fetchData();
  // }, []);
  const [prakalpId, setPrakalpId] = useState([]);
  useEffect(() => {
    const fetchPrakalp = async () => {
      try {
        const response = await axios.get('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/School');
        const uniquePrakalpNames = new Set();
        const schoolPrakalpOptions = [];

        response.data.forEach((schoolData) => {
          if (!uniquePrakalpNames.has(schoolData.prakalpName)) {
            uniquePrakalpNames.add(schoolData.prakalpName);
            schoolPrakalpOptions.push({
              id: schoolData.id,
              label: schoolData.prakalpName,
              value: schoolData.prakalpName
            });
          }
        });

        setSchoolPrakalpList(schoolPrakalpOptions);
        const initialPrakalp = schoolPrakalpOptions[0];
        setSelectedPrakalValue(initialPrakalp);
        setPrakalpId(initialPrakalp.value);
      } catch (err) {
        setSchoolPrakalpList([]);
      }
    };

    fetchPrakalp();
  }, []);

  useEffect(() => {
    const fetchSchools = async () => {
      if (prakalpId) {
        try {
          console.log(prakalpId,'prakalpId')
          const response = await axios.get('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/School');
        const filteredSchoolOptions = [];
        // const uniquePrakalpNames = new Set();

        response.data.forEach((schoolData) => {
          if (prakalpId === schoolData.prakalpName) {
          //  uniquePrakalpNames.add(schoolData.schoolName);
            filteredSchoolOptions.push({
              id: schoolData.id,
              label: schoolData.schoolName,
              value: schoolData.schoolName
            });
          }
        });
          
          setSchoolDataList(filteredSchoolOptions);
          const initialSchool = filteredSchoolOptions[0];
          setSelectedValue(initialSchool);
          setId(initialSchool.id);
        } catch (err) {
          setSchoolDataList([]);
        }
      }
    };

    fetchSchools();
  }, [prakalpId]);

  const schoolPrakalpDown = (selectedOption) => {
    setSelectedPrakalValue(selectedOption);
    setPrakalpId(selectedOption.value);
  };

  const schoolDropDown = (selectedOption) => {
    console.log(selectedOption.id,'SChoooooo')
    setSelectedValue(selectedOption);
    setId(selectedOption.id);
  };
  
 

  const dashboardChange = (e) => {
    console.log(e.target.checked, 'DashboardChange');
    const allSchoolCheck = e.target.checked;
    const checkedSchoolNameList = [];

    schoolDataList.forEach((ele) => {
        checkedSchoolNameList.push(ele.id);
    });

    // Join the array into a string separated by commas
    const schoolNameString = checkedSchoolNameList.join(', ');
    
    // Create an object and pass schoolNameString
    // const schoolDataObject = {
    //   schoolNames: schoolNameString
    // };

    const schoolDataObject = {}
    // console.log(schoolDataObject, 'allSchoolCheck');

    if (allSchoolCheck) {
      setDashIdCheck(allSchoolCheck)
      // Assign schoolNameString to a property in schoolDataObject
      // schoolDataObject.schoolNames = schoolNameString;
      setDashId(schoolNameString)
  }
  else{
    setDashId({})
    setDashIdCheck(allSchoolCheck)
  }

  console.log(schoolDataObject, 'allSchoolCheck', schoolNameString);

  
  }

  const navigate = useNavigate();

  const routeChange = () => {
    const path = `${import.meta.env.BASE_URL}firebase/login`;
    navigate(path);
};

useEffect(() => {
  // Check if the dropdown should be open based on some condition
  const isLoggedIn = localStorage.getItem('auth_token') !== null; // Example check
  if (isLoggedIn) {
    setDropdownOpen(true); // or any logic to determine the dropdown state
    setTimeout(() => {
      const select = document.querySelector('#google_translate_element select');
      if (select) {
          select.value = 'mr'; // Set value to Marathi
          select.dispatchEvent(new Event('change')); // Trigger the change event
      }
  }, 1000); // Delay to ensure the DOM is ready
  }
  // if(isDropdownOpen){
  // }
}, []);
  const loginOut = () =>{
    localStorage.removeItem('loginData')
    localStorage.removeItem('authToken')
    routeChange()

    // Reset Google Translate to Marathi
    setTimeout(() => {
      const select = document.querySelector('#google_translate_element select');
      if (select) {
          select.value = 'mr'; // Set value to Marathi
          select.dispatchEvent(new Event('change')); // Trigger the change event
      }
  }, 1000); // Delay to ensure the DOM is ready

  }


    
  const googleTranslateElementInit = () => {
    const translateElement = new google.translate.TranslateElement({
        pageLanguage: 'en', // Set your base language
        includedLanguages: 'mr,hi,en',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
    }, 'google_translate_element');

    // Use a timeout to ensure the dropdown is available before trying to set the default language
    setTimeout(() => {
        const select = document.querySelector('#google_translate_element select');
        if (select) {
            select.value = 'mr'; // Set value to Marathi
            select.dispatchEvent(new Event('change')); // Trigger the change event
        }
    }, 2000); // Adjust the delay as needed
};

useEffect(() => {
    googleTranslateElementInit();
}, []);


 


  return (
    <Fragment>
      <header className="app-header">
        <nav className="main-header !h-[3.75rem]" aria-label="Global">
          <div className="main-header-container ps-[0.725rem] pe-[1rem] ">

            <div className="header-content-left">
              <div className="header-element">
                <div className="horizontal-logo">
                  <a href={`${import.meta.env.BASE_URL}dashboard`} className="header-logo">
                    <img src={desktoplogo} alt="logo" className="desktop-logo" />
                    <img src={togglelogo} alt="logo" className="toggle-logo" />
                    <img src={desktopdark} alt="logo" className="desktop-dark" />
                    <img src={toggledark} alt="logo" className="toggle-dark" />
                    <img src={desktopwhite} alt="logo" className="desktop-white" />
                    <img src={togglewhite} alt="logo" className="toggle-white" />
                  </a>
                </div>
              </div>
              <div className="header-element md:px-[0.325rem] !items-center" onClick={() => toggleSidebar()}>

                <Link aria-label="Hide Sidebar"
                  className="sidemenu-toggle animated-arrow  hor-toggle horizontal-navtoggle inline-flex items-center" to="#"><span></span></Link>

              </div>

              <div className="header-element md:px-[0.325rem] !items-center" >
                <Select value={selectedPrakalValue} name="state" options={schoolPrakalpList} onChange={schoolPrakalpDown} className="js-example-basic-single w-full" isSearchable
                                menuPlacement='auto' classNamePrefix="Select2" defaultValue={[schoolPrakalpList[0]]}
                            />
               </div>             
              <div className="header-element md:px-[0.325rem] !items-center" >
                <Select value={selectedValue} name="state" options={schoolDataList} onChange={schoolDropDown} className="js-example-basic-single w-full" isSearchable
                                menuPlacement='auto' classNamePrefix="Select2" defaultValue={[schoolDataList[0]]}
                            />
               </div>   
               {
                allSchAdmin && (

               <div className='header-element !items-center admin-checkbox'>
               <div className="form-check">
                            <input className="form-check-input" onChange={dashboardChange}  type="checkbox" id="dashboardCheck" />
                            <label className="form-check-label" htmlFor="dashboardCheck">
                              All School
                            </label>
                        </div>
                </div>          
                )
               }
            </div>



            <div className="header-content-right">
            <div className="header-element md:px-[0.325rem] !items-center" >
                {/* <Select  name="state" options={language} className="js-example-basic-single w-full" isSearchable
                                menuPlacement='auto' id='google_translate_element' classNamePrefix="Select2" onChange={languageChange} defaultValue={[language[0]]}
                            /> */}
                            <div className="js-example-basic-single w-full" id="google_translate_element"></div>
               </div> 
               <div className="header-element md:!px-[0.65rem] px-2 hs-dropdown !items-center ti-dropdown [--placement:bottom-left]">
                <div className="md:block hidden dropdown-profile cursor-pointer">
                  <p className="font-semibold mb-0 leading-none text-[#536485] text-[0.813rem] ">{fullName}</p>
                  <span className="opacity-[0.7] font-normal text-[#536485] block text-[0.6875rem] ">as {userLoginRoleName}</span>
                </div>
                <div
                  className="hs-dropdown-menu ti-dropdown-menu !-mt-3 border-0 w-[11rem] !p-0 border-defaultborder hidden main-header-dropdown  pt-0 overflow-hidden header-profile-dropdown dropdown-menu-end"
                  aria-labelledby="dropdown-profile">

                  <ul className="text-defaulttextcolor font-medium dark:text-[#8c9097] dark:text-white/50">
                    <li>
                      {/* <Link className="w-full ti-dropdown-item !text-[0.8125rem] !gap-x-0  !p-[0.65rem] !inline-flex" to={`${import.meta.env.BASE_URL}pages/profile/`}> */}
                      <Link className="w-full ti-dropdown-item !text-[0.8125rem] !gap-x-0  !p-[0.65rem] !inline-flex">
                        <i className="ti ti-user-circle text-[1.125rem] me-2 opacity-[0.7]"></i>Profile
                      </Link>
                    </li>
                    
                    <li>
                      {/* <Link className="w-full ti-dropdown-item !text-[0.8125rem] !gap-x-0 !p-[0.65rem] !inline-flex" to={`${import.meta.env.BASE_URL}pages/email/mailsettings/`}> */}
                      <Link className="w-full ti-dropdown-item !text-[0.8125rem] !gap-x-0 !p-[0.65rem] !inline-flex" to={`${import.meta.env.BASE_URL}pages/appSettings/settings`}>
                      <i className="ti ti-adjustments-horizontal text-[1.125rem] me-2 opacity-[0.7]"></i>App Settings</Link></li>
                    
                    {/* <li>
                      
                      <Link className="w-full ti-dropdown-item !text-[0.8125rem] !gap-x-0 !p-[0.65rem] !inline-flex" >
                      <i className="ti ti-adjustments-horizontal text-[1.125rem] me-2 opacity-[0.7]"></i>App Preference</Link></li> */}
                    
                    <li>
                      {/* <Link className="w-full ti-dropdown-item !text-[0.8125rem] !gap-x-0 !p-[0.65rem] !inline-flex" to={`${import.meta.env.BASE_URL}pages/email/mailsettings/`}> */}
                      <Link className="w-full ti-dropdown-item !text-[0.8125rem] !gap-x-0 !p-[0.65rem] !inline-flex" to={`${import.meta.env.BASE_URL}pages/changePassword/passwordChange`}>
                      <i className="ti ti-lock text-[1.125rem] me-2 opacity-[0.7]"></i>Change Password</Link></li>
                    
                    <li><p className="w-full ti-dropdown-item !text-[0.8125rem] !p-[0.65rem] !gap-x-0 !inline-flex" onClick={loginOut}><i
                      className="ti ti-logout text-[1.125rem] me-2 opacity-[0.7]"></i>Log Out</p></li>
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
        </nav>
      </header>
      <Modalsearch />
    </Fragment>
  );
}
const mapStateToProps = (state) => ({
  local_varaiable: state
});
export default connect(mapStateToProps, { ThemeChanger })(Header);

