import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import addFriend from '../images/add-friend.svg'
import AddModals from '../components/AddModals'
import ViewModalDoctor from '../components/ViewModalDoctor'
import womanPortrait from '../images/woman.svg'
import manPortrait from '../images/man.svg'

const Doctor = () => {

  const tableBody = [
    {
      doctor : 'Jane Doe',
      room : '312',
      no_bookings: 5,
      email : 'janedoe@mail.com',
      specialization : 'Endocrinologist',
      contact : '+639123456789',
      address : '123 Magic Shop, CA',
      isActive : true,
      image: <img src={womanPortrait} alt="portrait of a woman"/>
    },
    {
      doctor : 'John Doe',
      room : '312',
      no_bookings: 5,
      email : 'johndoe@mail.com',
      specialization : 'Neurologist',
      contact : '+639123456789',
      address : '123 Magic Shop, CA',
      isActive : false,
      image: <img src={manPortrait} alt="portrait of a woman"/>
    },
    {
      doctor : 'Juan Dela Cruz',
      room : '312',
      no_bookings: 5,
      email : 'juandelacruz@mail.com',
      specialization : 'ENT',
      contact : '+639123456789',
      address : '123 Magic Shop, CA',
      isActive : false,
      image: <img src={manPortrait} alt="portrait of a woman"/>
    },
    {
      doctor : 'Juana Dela Cruz',
      room : '312',
      no_bookings: 5,
      email : 'juanadelacruz@mail.com',
      specialization : 'Pedia',
      contact : '+639123456789',
      address : '123 Magic Shop, CA',
      isActive : true,
      image: <img src={womanPortrait} alt="portrait of a woman"/>
    }
  ]
  
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  
  const [selectedRow, setSelectedRow] = useState({});

  const handleCloseModal1 = () => setShowModal1(false);
  const handleShowModal1 = () => setShowModal1(true);

  const handleCloseModal2 = () => setShowModal2(false);
  const handleShowModal2 = (data) => {
    setSelectedRow(data)
    setShowModal2(true);
  }

  useEffect(() => {
    console.log('selected row: ', selectedRow)
  },[selectedRow])

  return (
    <>
      <div className='table-content-wrapper'>
          <div className='table-header'>
            <Button variant='dark' className='add-doctor-btn' onClick={handleShowModal1}>
              <img src={addFriend} alt="AddDoctor-Logo" />
              Doctor
            </Button>
          </div>

          <div className='table-content'>
            <Table>
              <thead>
                <tr>
                  <th>Doctor</th>
                  <th>Email</th>
                  <th>Specialization</th>
                  <th>Contact</th>
                  <th>Address</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {
                  (tableBody.map((data, index) => {
                    return (
                      <>
                        <tr key={`row-${index}`} onClick={() => handleShowModal2(data)}>
                          <td>{data.doctor}</td>
                          <td>{data.email}</td>
                          <td>{data.specialization}</td>
                          <td>{data.contact}</td>
                          <td>{data.address}</td>
                          <td>
                            {
                              (data.isActive === true) ? 
                                <Button variant='danger'>Deactivate</Button>
                              :
                                <Button variant='success'>Activate</Button>
                            }
                          </td>
                        </tr>
                
                      </>
                      
                    )
                  }))
                }
              </tbody>
            </Table>
          </div>
          <ViewModalDoctor showView={showModal2} onCloseView={handleCloseModal2} dataRow={selectedRow} />  
      </div>
      <AddModals showAdd={showModal1} onCloseAdd={handleCloseModal1}/>
    </>

  )
}

export default Doctor