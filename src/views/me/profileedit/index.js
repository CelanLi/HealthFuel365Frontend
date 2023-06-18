import { Button, Form, Input, Select,Radio,Checkbox } from 'antd';
import React, { useState } from 'react';
import "./index.css";
import { profileEdit } from '../../../services/userService';
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

    //handle change of radios
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


    const handleButtonClick = () => {
        let losingWeightAsGoal = false;
        let keepGoodDietAsGoal = false;
        if (healthGoal === "loseWeight")
        {
            losingWeightAsGoal = true;
            keepGoodDietAsGoal = false;
        }
        if (healthGoal === "goodDiet")
        {
            losingWeightAsGoal = false;
            keepGoodDietAsGoal = true;
        }
        else{
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
            typeOfEater : dietType,
            nutriPreference: nutriPreference,
            lowInFat : fat,
            lowInSalt: salt,
            lowInSugar: sugar,
        })
        navigate('/myaccount/addressmanagement');
      };

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
                    <Radio.Group  defaultValue="notSure" onChange={handleDietTypeChange}>
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
            </Form.Item>
            </Form>
    </div>
    
  );
};
export default Page;