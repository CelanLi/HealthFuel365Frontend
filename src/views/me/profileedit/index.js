import { Button, Form, Input, Select,Radio,Checkbox } from 'antd';
import "./index.css";

import HealthGoal from '../../../assets/images/myaccount/icon-health-goal.png'
import DietType from '../../../assets/images/myaccount/icon-diet-type.png'
import Preference from '../../../assets/images/myaccount/icon-preference.png'

const App = () => {
  const [form] = Form.useForm();

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
                    <Radio.Group  defaultValue="notSure">
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
                    <Radio.Group  defaultValue="notSure">
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
                        <Checkbox>
                            <div className='profile-answers'>Low in fat.</div>
                        </Checkbox>
                        <Checkbox>
                            <div className='profile-answers'>Low in sugar.</div>
                        </Checkbox>
                        <Checkbox>
                            <div className='profile-answers'>Low in salt.</div>
                        </Checkbox>
                    </div>
                    <div className='profile-answer'>
                        <div className='profile-answers'>I prefer foods with Nutri-Score no less than:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                        <Radio.Group defaultValue="notSure">
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
                <button className='myaccount-edit' htmlType="submit"> 
                    Submit
                </button>
            </Form.Item>
            </Form>
    </div>
    
  );
};
export default App;