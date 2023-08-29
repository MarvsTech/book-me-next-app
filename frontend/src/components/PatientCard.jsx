import React from 'react'

import Calendar from '../images/calendar.svg';
import UserIcon from '../images/user.svg';
import PhoneNumber from '../images/phone.svg';
import Address from '../images/maps.svg';

const PatientCard = ({ currentUser }) => {
    const {
        genderId,firstname,lastname,middlename,contactNumber,address,birthday
    } = currentUser;
    
    const genderText = genderId === 1 ? 'Male' : 'Female';

    return (
        <div className="profile-wrapper">
            <h1>{firstname} {middlename} {lastname}</h1>
            <div className="profile-content-wrapper">
                <img src={UserIcon} alt="User Icon" />
                <p>{genderText}</p>
            </div>
            <div className="profile-content-wrapper">
                <img src={Calendar} alt="Calendar" />
                <p>{birthday}</p>
            </div>
            <div className="profile-content-wrapper">
                <img src={PhoneNumber} alt="Phone Number" />
                <p>{contactNumber}</p>
            </div>
            <div className="profile-content-wrapper">
                <img src={Address} alt="Address" />
                <p>{address}</p>
            </div>
        </div>
    );
};

export default PatientCard;