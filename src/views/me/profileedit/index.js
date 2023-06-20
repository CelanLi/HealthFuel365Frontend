import { Button, Form, Input, Select,Radio,Checkbox } from 'antd';
import React, { useState, useEffect } from 'react';
import "./index.css";
import { profileEdit, profileGet } from '../../../services/userService';
import { useNavigate } from 'react-router-dom';

import HealthGoal from '../../../assets/images/myaccount/icon-health-goal.png'
import DietType from '../../../assets/images/myaccount/icon-diet-type.png'
import Preference from '../../../assets/images/myaccount/icon-preference.png'

function Page() {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const [healthGoal, setHealthGoal] = useState("notSure")
    const [dietType, setDietType] = useState("notSure")
    const [nutriScore, setNutriScore] = useState("notSure")
    const [fat, setFat] = useState(false);
    const [salt, setSalt] = useState(false);
    const [sugar, setSugar] = useState(false);

    // handle change of health goal
    const handleHealthGoalChange = (e) => {
        setHealthGoal(e.target.value);
    };

    const handleDietTypeChange = (e) => {
        setDietType(e.target.value);
    };

    const handleNutriScoreChange = (e) => {
        setNutriScore(e.target.value);
    };

    const handleFatChange = (e) => {
        setFat(e.target.checked);
    };

    const handleSaltChange = (e) => {
        setSalt(e.target.checked);
    };

    const handleSugarChange = (e) => {
        setSugar(e.target.checked);
    };

    // handle submit
    const handleButtonClick = () => {
        // convert the healthGoal
        let losingWeightAsGoal = false;
        let keepGoodDietAsGoal = true;
        if (healthGoal === "loseWeight")
        {
          console.log("111")
          losingWeightAsGoal = true;
          keepGoodDietAsGoal = false;
        }
        if (healthGoal === "goodDiet")
        {
          console.log("222")
          losingWeightAsGoal = false;
          keepGoodDietAsGoal = true;
        }
        if (healthGoal === "notSure"){
          console.log("333")
          losingWeightAsGoal = false;
          keepGoodDietAsGoal = false;
        }

        const nutriPreference = ['A','B','C','D','E']
        if(nutriScore === 'A'){
            nutriPreference.splice(1, 4);
        }
        if(nutriScore === 'B'){
            nutriPreference.splice(2, 3);
        }
        if(nutriScore === 'C'){
            nutriPreference.splice(3, 2);
        }
        profileEdit({
            losingWeightAsGoal : losingWeightAsGoal,
            keepGoodDietAsGoal: keepGoodDietAsGoal,
            healthGoal: healthGoal,
            typeOfEater : dietType,
            nutriPreference: nutriPreference,
            lowInFat : fat,
            lowInSalt: salt,
            lowInSugar: sugar,
        })
        navigate('/myaccount/myprofile');
      };

    const handleTestClick = () => {
        console.log("userProfile.typeofeater:",userProfile.typeOfEater)
        console.log(dietType)
    };
    // initialize the profile edit page
    // all data on this page should be the same as in database at the beginning
    const [userProfile,setUserProfile] = useState(null)

    //initial user profile
    useEffect(() => {
        setUserProfile();
    },[])

    //get profile from backend
    useEffect(() => {
        // 模拟从后端获取用户profile信息
        const fetchUserProfile = () => {
          // 假设通过某种方式获取到用户profile
          const userProfile = {
            "_id": "64872a4ed2c673dd7bba2b3c",
            "losingWeightAsGoal": false,
            "lowInFat": true,
            "lowInSugar": true,
            "typeOfEater": "vegetarian",
            "lowInSalt": false,
            "nutriPreference": ["A", "B"],
            "__v": 0,
            "userID": "64872a4ed2c673dd7bba2b39",
            "keepGoodDietAsGoal": false,
            "id": "64872a4ed2c673dd7bba2b3c"
          };
    
          setUserProfile(userProfile);
          setDietType(userProfile.typeOfEater);
        };
    
        // 调用函数获取用户profile信息
        fetchUserProfile();
      }, []);

  return (
    <div className='profile-wrap'>
        <Form  form={form} name="control-hooks" style={{maxWidth: 1200}} className='profile-form'>
            <Form.Item className='profile-block'>
                <div className='profile-block-top'>
                    <div className='profile-questions'>
                        What's Your Health Goal?
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </div>

                <div className='profile-answer'>
                    <Radio.Group  defaultValue="notSure" onChange={handleHealthGoalChange}>
                        <Radio value="loseWeight">
                            <div className='profile-answers'>I want to lose weight.</div>  
                        </Radio>
                        <Radio value="goodDiet">
                            <div className='profile-answers'>I want to keep a good diet.</div>  
                        </Radio>
                        <Radio value="notSure">
                            <div className='profile-answers'>I'm not sure.</div> 
                        </Radio>
                    </Radio.Group>
                </div>

                
            </Form.Item>

            <Form.Item className='profile-block'>
                <div className='profile-block-top'>
                    <div className='profile-questions'>
                        What's Your Diet Type?
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;
                    </div>
                </div>
                <div className='profile-answer'>
                    <Radio.Group  defaultValue={dietType} onChange={handleDietTypeChange}>
                        <Radio value="vegan">
                            <div className='profile-answers'>Vegan.</div>  
                        </Radio>
                        <Radio value="vegetarian">
                            <div className='profile-answers'>Vegetarian.</div>  
                        </Radio>
                        <Radio value="omnivore">
                            <div className='profile-answers'>Omnivore.</div> 
                        </Radio>
                        <Radio value="notSure">
                            <div className='profile-answers'>I'm not sure.</div> 
                        </Radio>
                    </Radio.Group>
                </div>
            </Form.Item>

            <Form.Item className='profile-block-wider'>
                <div className='profile-block-top'>
                    <div className='profile-questions'>
                        Your Dietary Preference (optional):
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </div>
                <div>
                    <div className='profile-answer'>
                        <Checkbox onClick={handleFatChange}>
                            <div className='profile-answers'>Low in fat.</div>
                        </Checkbox>
                        <Checkbox onClick={handleSugarChange}>
                            <div className='profile-answers'>Low in sugar.</div>
                        </Checkbox>
                        <Checkbox onClick={handleSaltChange}>
                            <div className='profile-answers'>Low in salt.</div>
                        </Checkbox>
                    </div>
                    <div className='profile-answer'>
                        <div className='profile-answers'>I prefer foods with Nutri-Score no less than:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                        <Radio.Group defaultValue="notSure" onChange={handleNutriScoreChange}>
                            <Radio value="A"> 
                                <div className='profile-answers'>A</div>
                            </Radio>
                            <Radio value="B"> 
                                <div className='profile-answers'>B</div>
                            </Radio>
                            <Radio value="C"> 
                                <div className='profile-answers'>C</div>
                            </Radio>
                            <Radio value="notSure">
                                <div className='profile-answers'>I'm not sure.</div> 
                            </Radio>
                        </Radio.Group>
                    </div>
                </div>
            </Form.Item>

            <Form.Item>
                <button className='myaccount-edit' htmlType="submit" onClick={handleButtonClick}> 
                    Submit
                </button>
                <button className='myaccount-edit' htmlType="submit" onClick={handleTestClick}> 
                    test
                </button>
            </Form.Item>
            </Form>
    </div>
    
  );
};
export default Page;