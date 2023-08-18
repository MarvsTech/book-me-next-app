import React from 'react'
import EditProfile from '../../components/EditProfile'
import DashboardHeader from '../../components/DashboardHeader'
import { useAuth } from '../../config/UserContext';

const AdminSetting = () => {
  const {currentUser: {
    firstname, 
    lastname, 
    middlename,
    roleId,
  }} = useAuth();
  const name = `${firstname}`;

  const data = 
    {
      username : 'admin',
      password : '***',
      firstName : 'admin',
      lastName : 'admin',
      contact : '+639123456789',
      email : 'admin@mail.com'
    }

  return (
    <div>
      <DashboardHeader name={ name }/>
      <EditProfile data={data} />
    </div>
  )
}

export default AdminSetting