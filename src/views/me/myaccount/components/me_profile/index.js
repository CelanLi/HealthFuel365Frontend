import HealthGoal from '../../../../../assets/images/myaccount/icon-health-goal.png'
import DietType from '../../../../../assets/images/myaccount/icon-diet-type.png'
import Preference from '../../../../../assets/images/myaccount/icon-preference.png'

import { List } from 'antd';

function MyProfile({goal,typeOfEater,dietaryPreference}){
    return(
        <div>
            <div className='myaccount-profile-block'>
                <div className='myaccount-profile-block-1'>
                <img src={HealthGoal} className="myaccount-address-icon"/>
                <div className="myaccount-address-text-1">My Health Goal:&nbsp;{goal}</div>
                </div>
                <div className='myaccount-profile-block-1'>
                <img src={DietType} className="myaccount-address-icon"/>
                <div className="myaccount-address-text-1">My Diet Type:&nbsp;{typeOfEater}</div>
                </div>
                <div className='myaccount-profile-block-2'>
                <div className='myaccount-profile-block-3'>
                    <img src={Preference} className="myaccount-address-icon"/>
                    <div className="myaccount-address-text-1">My Dietary Preference:&nbsp;</div>
                </div>
                <div className="myaccount-preference-list">
                      <List size="small"
                        dataSource={dietaryPreference}
                        renderItem={(preference) => (
                          <List.Item>
                            <div className="myaccount-address-text-1">{preference}</div>
                          </List.Item>
                        )}
                      />
                </div>

                </div>
            </div>
        </div>
    )
}

export default MyProfile