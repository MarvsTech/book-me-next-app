import React from 'react'
import DashboardHeader from '../../components/DashboardHeader'
import EditProfile from '../../components/EditProfile'
import { useAuth } from '../../config/UserContext';

const DoctorSettings = () => {
  const {currentUser: {
    firstname, 
    lastname, 
    middlename,
    roleId,
  }} = useAuth();
  const name = `${firstname}`;

  const data = 
    {
      username : 'janedoe',
      password : '***',
      firstName : 'jane',
      lastName : 'doe',
      contact : '+639123456789',
      email : 'janedoe@mail.com'
    }

  return (
    <div>
      <DashboardHeader name={ name }/>

      <EditProfile data={data}/>
    </div>
  )
}

export default DoctorSettings
