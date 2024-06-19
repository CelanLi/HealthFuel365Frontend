import { Form, Radio,Checkbox, Modal } from 'antd';
import React, { useState, useEffect } from 'react';
import "./index.css";
import { profileEdit } from '../../../../services/userService';
import { Link, useNavigate } from 'react-router-dom';

function EditProfile({goal, type, nutri, fatContent, saltContent, sugarContent}) {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [isPrivacy, setIsPrivacy] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [healthGoal, setHealthGoal] = useState(goal)
    const [dietType, setDietType] = useState(type)
    const [nutriScore, setNutriScore] = useState(nutri)
    const [fat, setFat] = useState(fatContent);
    const [salt, setSalt] = useState(saltContent);
    const [sugar, setSugar] = useState(sugarContent);
    const buttonClassNames = `myaccount-edit ${!isPrivacy ? 'disabled-button' : ''}`;

    const ModalContent = () => (
        <div>
          <h2>Privacy Policy</h2>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;This privacy notice for HealthFuel365 ("we," "us," or "our"), describes how and why we mightcollect, store, use, and/or share ("process") your information when you use our services"Services"), such as when you:</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;·Visit our website at HealthFuel365.com, or any website of ours that links to this privacy notice </div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;·Engage with us in other related ways, including any sales, marketing, or events</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;Questions or concerns? Reading this privacy notice will help you understand your privacy rightsand choices. lf you do not agree with our policies and practices, please do not use our Services. lf you still have any questions or concerns, please contact us at <strong>HealthFuel365@gmail.com</strong>.</div>
            <h4></h4>
        <h3>SUMMARY OF KEY POINTS</h3>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;This summary provides key points from our privacy notice, but you can find out more detailsabout any of these topics by clicking the link following each key point or by using our tableof contents below to find the section you are looking for.</div>
            <div><strong>What personal information do we process?</strong></div> 
            <div>&nbsp;&nbsp;&nbsp;&nbsp;When you visit, use, or navigate our Services, wemay process personal information depending on how you interact with us and the Services, thechoices you make, and the products and features you use. Learn more about personal informationyou disclose to us</div>
            <div><strong>Do we process any sensitive personal information?</strong></div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;We may process sensitive personalinformation when necessary with your consent or as otherwise permitted by applicable law. Learnmore about sensitive information we process.</div>
 
        </div>
      );

    // handle change of states
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

    const handlePrivacyChange = (e) => {
        setIsPrivacy(e.target.checked);
    }
    
    const handlePrivacyPolicyClick = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    }
      

    // handle submit
    const handleButtonClick = () => {
        console.log("nnn",{goal, type, nutri, fatContent, saltContent, sugarContent})
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
        console.log("dietType",dietType)
        console.log("editcontent",{
            losingWeightAsGoal : losingWeightAsGoal,
            keepGoodDietAsGoal: keepGoodDietAsGoal,
            typeOfEater : dietType,
            nutriPreference: nutriPreference,
            lowInFat : fat,
            lowInSalt: salt,
            lowInSugar: sugar,
        })
        profileEdit({
            losingWeightAsGoal : losingWeightAsGoal,
            keepGoodDietAsGoal: keepGoodDietAsGoal,
            typeOfEater : dietType,
            nutriPreference: nutriPreference,
            lowInFat : fat,
            lowInSalt: salt,
            lowInSugar: sugar,
        })
        navigate('/homepage');
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
                    <Radio.Group  defaultValue={goal} onChange={handleHealthGoalChange}>
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
                    <Radio.Group  defaultValue={type} onChange={handleDietTypeChange}>
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
                        <Checkbox onClick={handleFatChange} defaultChecked={fatContent}>
                            <div className='profile-answers'>Low in fat.</div>
                        </Checkbox>
                        <Checkbox onClick={handleSugarChange} defaultChecked={sugarContent}>
                            <div className='profile-answers'>Low in sugar.</div>
                        </Checkbox>
                        <Checkbox onClick={handleSaltChange} defaultChecked={saltContent}>
                            <div className='profile-answers'>Low in salt.</div>
                        </Checkbox>
                    </div>
                    <div className='profile-answer'>
                        <div className='profile-answers'>I prefer foods with Nutri-Score no less than:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                        <Radio.Group defaultValue={nutri} onChange={handleNutriScoreChange}>
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
                <div className='profile-privacy'>
                    <Checkbox onClick={handlePrivacyChange} defaultChecked={isPrivacy}></Checkbox>
                    <div className='profile-answers'>I agree to the &nbsp;
                        <Link to="#" style={{ textDecoration: 'underline', color: '#033D1F' }}
                            onClick={handlePrivacyPolicyClick}>
                                privacy policy
                        </Link>
                    </div>
                </div>
                <Modal open={isModalOpen}
                    onCancel={handleModalClose}
                    footer={null}
                    width="600px">
                    <ModalContent />
                </Modal>
            </Form.Item>

            <Form.Item>
                <button className={buttonClassNames} htmlType="submit" onClick={handleButtonClick} disabled={!isPrivacy}> 
                    Submit
                </button>
            </Form.Item>
        </Form>
    </div>
    
  );
};
export default EditProfile;