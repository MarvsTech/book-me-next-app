import React from 'react'
import DashboardHeader from '../../components/DashboardHeader'
import EditProfile from '../../components/EditProfile'

const DoctorSettings = () => {
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
      <DashboardHeader/>

      <EditProfile data={data}/>
    </div>
  )
}

export default DoctorSettings
