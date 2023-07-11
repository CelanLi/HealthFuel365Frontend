//dependencies
import React, { useEffect } from 'react'
import { useState } from 'react';

import { profileGet } from '../../../services/userService';

//import style
import "./index.css"
import MyNav from "../components/me_nav"
import MyProfile from "../components/me_profile"
import EditProfile from '../profileedit/component';

function App() {
    const [userProfile,setUserProfile] = useState(null)
    const [healthGoal, setHealthGoal] = useState("notSure");
    const [dietType, setDietType] = useState("notSure");
    const [nutriScore, setNutriScore] = useState("notSure");

    //initial user profile
    useEffect(() => {
      setProfile();
    },[])
    //get profile if profile changes
    useEffect(() => {
      setUserProfile(userProfile);
    },[userProfile])

  //get profile from backend
  const setProfile = async () => {
    try {
      console.log("ddd");
      const profile = await profileGet();
      console.log(JSON.stringify(profile) + "profile to test");

      //convert health goal
      if (profile.losingWeightAsGoal) {
        setHealthGoal("loseWeight");
      }
      if (profile.keepGoodDietAsGoal) {
        setHealthGoal("goodDiet");
      }
      if (!profile.losingWeightAsGoal && !profile.keepGoodDietAsGoal) {
        setHealthGoal("notSure");
      }

      //convert diet type
      if (profile.typeOfEater === "vegan") {
        setDietType("vegan");
      }
      if (profile.typeOfEater === "vegetarian") {
        setDietType("vegetarian");
      }
      if (profile.typeOfEater === "omnivore") {
        setDietType("omnivore");
      }
      if (profile.typeOfEater === "notSure") {
        setDietType("notSure");
      }

      //convert nutri-score
      const nutri_score = profile.nutriPreference.pop();
      if (nutri_score === "A") {
        setNutriScore("A");
      }
      if (nutri_score === "B") {
        setNutriScore("B");
      }
      if (nutri_score === "C") {
        setNutriScore("C");
      }
      if (nutri_score === "E") {
        setNutriScore("notSure");
      }
      
      await setUserProfile(profile);
    } catch (error) {
      console.error("profile get error:", error);
    }
  };
  
    // //get profile from backend
    // const setProfile = async () => {
    //   try{
    //     setTimeout(async () => {
    //       const profile = await profileGet();
    //       console.log(JSON.stringify(profile) + "profile to test");
          
    //       setUserProfile(profile);
    //     }, 300);
    //   } catch (error) {
    //     console.error("profile get error:", error);
    //   }
    // }

  return (
    <div className='myaccount-profile-wrap'>
        <MyNav/>
        <div className='myaccount-profile-page'>
          <div className='myaccount-title'>
              <p className='myaccount-title-1'>My Profile&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
              <p className='myaccount-title-2'>{">>>"}</p>
          </div>

          {userProfile && (
              <MyProfile
                goal={healthGoal}
                type={dietType}
                nutri={nutriScore}
                fatContent={userProfile.lowInFat}
                saltContent={userProfile.lowInSalt}
                sugarContent={userProfile.lowInSugar}
              />
          )}
      </div>
    
    </div>
  )
}

export default App