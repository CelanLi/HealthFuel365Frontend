import "./index.css"; 

import HealthGoal from '../../../../assets/images/myaccount/icon-health-goal.png'
import DietType from '../../../../assets/images/myaccount/icon-diet-type.png'
import Preference from '../../../../assets/images/myaccount/icon-preference.png'
import Checked from '../../../../assets/images/myaccount/icon-checked.png'
import Unchecked from '../../../../assets/images/myaccount/icon-unchecked.png'

function MyProfile({ userProfile }){
  //convert the health goal
  let goal = "I am unsure about my health goal.";
  if(userProfile.losingWeightAsGoal){goal = "I want to lose weight."};
  if(userProfile.keepGoodDietAsGoal){goal = "I want to keep a good diet."};

  //define the icons
  let fatImage;
  if (userProfile.lowInFat) {
    fatImage = <img src={Checked} alt="Low in Fat" className="myaccount-address-icon"/>;
  } else {
    fatImage = <img src={Unchecked} alt="Regular" className="myaccount-address-icon"/>;
  }

  let saltImage;
  if (userProfile.lowInSalt) {
    saltImage = <img src={Checked} alt="Low in Salt" className="myaccount-address-icon"/>;
  } else {
    saltImage = <img src={Unchecked} alt="Regular" className="myaccount-address-icon"/>;
  }

  let sugarImage;
  if (userProfile.lowInSugar) {
    sugarImage = <img src={Checked} alt="Low in Sugar" className="myaccount-address-icon"/>;
  } else {
    sugarImage = <img src={Unchecked} alt="Regular" className="myaccount-address-icon"/>;
  }

  //convert the Nutri-preference
  let nutriPreference = `I prefer nutri score of ${userProfile.nutriPreference.join(" , ")}.`

    return(
      <div className='myaccount-profile-block'>
        <div className='myaccount-profile-block-1'>
          <img src={HealthGoal} className="myaccount-address-icon"/>
          <div className="myaccount-address-text-1">My Health Goal:&nbsp;{goal}</div>
        </div>
        <div className='myaccount-profile-block-1'>
          <img src={DietType} className="myaccount-address-icon"/>
          <div className="myaccount-address-text-1">My Diet Type:&nbsp;{userProfile.typeOfEater}</div>
        </div>
        <div className='myaccount-profile-block-2'>
          <div className='myaccount-profile-block-3'>
              <img src={Preference} className="myaccount-address-icon"/>
              <div className="myaccount-address-text-1">My Dietary Preference:&nbsp;</div>
          </div>
          <div className="myaccount-profile-block-5">
            <div className="myaccount-profile-block-4">
              <div className="myaccount-address-text-1">{fatImage}</div>
              <div className="myaccount-address-text-1">Low in fat&nbsp;</div>
            </div>
            <div className="myaccount-profile-block-4">
              <div className="myaccount-address-text-1">{saltImage}</div>
              <div className="myaccount-address-text-1">Low in salt&nbsp;</div>
            </div>
            <div className="myaccount-profile-block-4">
              <div className="myaccount-address-text-1">{sugarImage}</div>
              <div className="myaccount-address-text-1">Low in sugar&nbsp;</div>
            </div>
            <div className="myaccount-profile-block-4">
              <div className="myaccount-address-text-1">{nutriPreference}</div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default MyProfile