import React from 'react'
import EditProfile from '../components/EditProfile'
import DashboardHeader from '../components/DashboardHeader'

const Setting = () => {
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
      <DashboardHeader/>
      <EditProfile data={data} />
    </div>
  )
}

export default Setting