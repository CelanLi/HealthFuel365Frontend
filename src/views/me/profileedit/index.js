import React, { useState, useEffect } from 'react';

import EditProfile from './component/index.js';

import "./component/index.js";

import { profileGet } from '../../../services/userService.js';

function Page() {
    // initialize the profile edit page
    // all data on this page should be the same as in database at the beginning
    const [userProfile,setUserProfile] = useState(null)
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    // let goal = "notSure";
    // let type = "notSure";
    // let nutri = "notSure";
    // let fatContent = false;
    // let saltContent = false;
    // let sugarContent = false;
    const [healthGoal, setHealthGoal] = useState("notSure")
    const [dietType, setDietType] = useState("notSure")
    const [nutriScore, setNutriScore] = useState("notSure")
    const [fat, setFat] = useState(false);
    const [salt, setSalt] = useState(false);
    const [sugar, setSugar] = useState(false);

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
      try{
        console.log("ddd")
        const profile = await (profileGet());
        console.log(JSON.stringify(profile) + "profile to test");

        //convert health goal
        if (profile.losingWeightAsGoal) {
            setHealthGoal("loseWeight")
        }
        if (profile.keepGoodDietAsGoal) {
            setHealthGoal("goodDiet")
        }
        if (!profile.losingWeightAsGoal && !profile.keepGoodDietAsGoal) {
            setHealthGoal("notSure")
        }

        //convert diet type
        if (profile.typeOfEater==='vegan') {
            setDietType('vegan')
        }
        if (profile.typeOfEater==='vegetarian') {
            setDietType('vegetarian')
        }
        if (profile.typeOfEater==='omnivore') {
            setDietType('omnivore')
        }
        if (profile.typeOfEater==='notSure') {
            setDietType('notSure')
        }

        //convert nutri-score
        const nutri_score = profile.nutriPreference.pop();
        if (nutri_score==='A') {
            setNutriScore('A')
        }
        if (nutri_score==='B') {
            setNutriScore('B')
        }
        if (nutri_score==='C') {
            setNutriScore('C')
        }
        if (nutri_score==='E') {
            setNutriScore("notSure")
        }

        //others are the same as in profile
        setUserProfile(profile);

        setIsDataLoaded(true);

      } catch (error) {
        console.error("profile get error:", error);
      }
    }


    if (!isDataLoaded) {
        return <div>Loading...</div>; // 或者显示其他的加载中状态
        }

  return (
    <EditProfile 
        goal = {healthGoal}
        type = {dietType}
        nutri = {nutriScore}
        fatContent = {userProfile.lowInFat}
        saltContent = {userProfile.lowInSalt}
        sugarContent = {userProfile.lowInSugar}/>
  )
}

export default Page