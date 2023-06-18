// //dependencies
// import React, { useEffect } from 'react'
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// //import functions
// import {addressGet, logoutUser, profileGet} from "../../../services/userService"

// //import style
// import "./index.css";
// import MyAddress from '../components/me_address';
// import MyProfile from '../components/me_profile';
// import OrderAddAddress from '../../order/components/or_add_address'
// import MyOrder from '../components/me_order';


// //import resourses
// import User from '../../../assets/images/myaccount/tax-inspector.png'


// function App() {
//   const userAccount = [
//     {
//       username: "Heinz",
//       email: "Heinz1973@gmail.com",
//     },
//   ];

//   // const addressList = [
//   //   {
//   //     choice: false,
//   //     receiver: "Camille Li",
//   //     street: "street 53",
//   //     postCode: 12345,
//   //     city: "Munich",
//   //     additional: "app. 254",
//   //     tel: "134678",
//   //   },
//   //   {
//   //     choice: false,
//   //     receiver: "Lily Y",
//   //     street: "street 443",
//   //     postCode: 73743,
//   //     city: "Munich",
//   //     additional: "app. 297",
//   //     tel: "107464292073",
//   //   },
//   // ];

//   // const userProfile = [
//   //   {
//   //     goal: "I want to keep a healthy diet.",
//   //     typeOfEater: "Vegan",
//   //     dietaryPreference: [
//   //       "low in fat",
//   //       "I prefer foods with Nutri-Score no less than C",
//   //       "low in sugar",
//   //       "low in salt"
//   //     ],
//   //   },
//   // ];

//   const orderList = [
//     {
//       id: "123456",
//       date: "2023-05-01",
//       totalPrice: 25,
//       status: "delivered",
//     },
//     {
//       id: "123457",
//       date: "2023-05-02",
//       totalPrice: 50,
//       status: "not delivered yet",
//     },
//     {
//       id: "123457",
//       date: "2023-05-02",
//       totalPrice: 50,
//       status: "not delivered yet",
//     },
//   ];

//   //navigation
//   const navigate = useNavigate();

//   //log out handle
//   const handleLogout = (e) => {
//     e.preventDefault();
//     logoutUser();
//     navigate('/homepage');
//   };

//   //panel value
//   const [value, setValue] = useState(0);
//   const className = (baseName, isSelected) =>
//     (isSelected ? [baseName].concat("selected") : [baseName]).join(" ");
  
//   //set address list value
//   const [addressList,setAddressList] = useState([]);
//   //initial address list
//   useEffect(() => {
//     setAddress();
//   },[])
//   //get address list value if address list changes
//   useEffect(() => {
//     setAddressList(addressList);
//   },[addressList])

//   //get address list from backend
//   const setAddress = async () => {
//     try{
//       const list = await (addressGet());
//       console.log(JSON.stringify(list) + "address to test");
//       setAddressList(list);
//     } catch (error) {
//       console.error("address get error:", error);
//     }
//   }

//   const [userProfile,setUserProfile] = useState(null)
//   //initial user profile
//   useEffect(() => {
//     setProfile();
//   },[])
//   //get profile if profile changes
//   useEffect(() => {
//     setUserProfile(userProfile);
//   },[userProfile])

//   //get profile from backend
//   const setProfile = async () => {
//     try{
//       const profile = await (profileGet());
//       console.log(JSON.stringify(profile) + "profile to test");
//       setUserProfile(profile);
//     } catch (error) {
//       console.error("profile get error:", error);
//     }
//   }

//   return (
//     <div className="myaccount-page">
//       <div className="myaccount-wrap">
//         <div className="myaccount-nav">
//           <div className="myaccount-information">
//             {userAccount.map((user) => {
//               return (
//                 <div className="myaccount-information">
//                   <img src={User} className="myaccount-avatar" />
//                   <div className="myaccount-information-column">
//                     <p className="myaccount-userinfo">{user.username}</p>
//                     {/* <p className='myaccount-userinfo'>{user.email}</p> */}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>


//       <div className="myaccount-tablist">
//         <div className={className('tab-list-item', value === 0)} onClick={() => setValue(0)}>
//           <div className='myaccount-nav-tab'>
//             <p className='myaccount-nav-title'>Address Management</p>
//           </div>
//         </div>

//             <hr className="line" />

//             <div
//               className={className("tab-list-item", value === 1)}
//               onClick={() => setValue(1)}
//             >
//               <div className="myaccount-nav-tab">
//                 <p className="myaccount-nav-title">My Profile</p>
//               </div>
//             </div>

//             <hr className="line" />

//             <div
//               className={className("tab-list-item", value === 2)}
//               onClick={() => setValue(2)}
//             >
//               <div className="myaccount-nav-tab">
//                 <p className="myaccount-nav-title">My Orders</p>
//               </div>
//             </div>

//             <hr className="line" />

//             <div className="myaccount-nav-tab" onClick={handleLogout}>
//               <p className="myaccount-nav-title">Log Out</p>
//             </div>
//           </div>
      
//     </div>
//     <div className='myaccount-body'>
//       <div className="tabpanels">
//         {value === 0 && <div className="tab-panel-item">
//           <div className='myaccount-address'>
//             {/* the title of block */}
//             <div className='myaccount-title'>
//               <p className='myaccount-title-1'>Address Management&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
//               <p className='myaccount-title-2'>{">>>"}</p>
//             </div>

//             <div className='myaccount-current-address'>
//               <MyAddress addressList={addressList} />
//             </div>
            
//             <div className='myaccount-add-address'>
//               {/* <button onClick={showModal} className='myaccount-add-address-button'>
//                 <img src={Plus} className="myaccount-address-icon" />
//                 &nbsp;&nbsp;Add a new address
//               </button> */}
//               <OrderAddAddress></OrderAddAddress>
//             </div>
//           </div>
//         </div>}

//         {value === 1 && <div className="tab-panel-item">
//           <div className='myaccount-profile'>
//           {/* the title of block */}
//             <div className='myaccount-title'>
//               <p className='myaccount-title-1'>My Profile&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
//               <p className='myaccount-title-2'>{">>>"}</p>
//             </div>

//             <div className='myaccount-profile'>
//               <MyProfile userProfile = {userProfile} />
//             </div>

//             <a href="/myaccount/profileEdit" className="shopping_cart">
//               <button className='myaccount-edit'>Edit</button>
//             </a>
//           </div>
//         </div>}

//         {value === 2 && <div className="tab-panel-item">
//           <div className='myaccount-orders'>
//             {/* the title of block */}
//             <div className='myaccount-title'>
//               <p className='myaccount-title-1'>My Orders&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
//               <p className='myaccount-title-2'>{">>>"}</p>
//             </div>
//             {orderList.map(orderItem => {
//               return(
//                 <MyOrder
//                   id={orderItem.id}
//                   date={orderItem.date}
//                   totalPrice={orderItem.totalPrice}
//                   status={orderItem.status}></MyOrder>
//               )})}
//           </div>
//         </div>}
      
//       </div>
//     </div>
//       </div>
//     </div>
//   )
// }
// export default App;
