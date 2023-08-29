import React from 'react'
import {Dropdown, Table, Button} from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import ThreeDots from '../images/three-dots-vertical.svg'

const UserLogTable = ({data}) => {

  const location = useLocation();

  return (
    <div className='table-content-wrapper'>
      <div className='table-header'>
        <h1 className='title-without-btn'>User Logs</h1>
      </div>

      <div className='table-content'>
        <Table>
              <thead>
                {
                  (location.pathname === '/admin/user/logs') ?
                    <tr>
                      <th>Name</th>
                      <th>Role</th>
                      <th>IP</th>
                      <th>Date Logged In</th>
                    </tr>
                  : (location.pathname === '/doctor/schedules') ?
                    <tr>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Remarks</th>
                    </tr>
                  :
                    null
                }
                
              </thead>
              <tbody>
                {
                  (data.map((data, index) => {
                    return (
                      <>
                        <tr key={`row-${index}`}>
                          {
                            (location.pathname === '/admin/user/logs') ?
                              <>
                                <td>{data.name}</td>
                                <td>{data.role}</td>
                                <td>{data.ip}</td>
                                <td>{data.date_logged_in}</td>
                              </>
                            : (location.pathname === '/doctor/schedules') ?
                              <>
                                <td>{data.date}</td>
                                <div className='create-sched'>
                                  <td>{data.time}</td>
                                  <div className='action-container'>
                                      <Dropdown>
                                        <Dropdown.Toggle>
                                          <img src={ThreeDots}></img>
                                        </Dropdown.Toggle>
                                        
                                        <Dropdown.Menu>
                                          <Dropdown.Item>
                                            <Button variant='danger'>Disable</Button>
                                          </Dropdown.Item>
                                        </Dropdown.Menu>
                                      </Dropdown>
                                  </div>
                                </div>
                                {
                                  (data.remarks === true) ?
                                    <td>IN</td>
                                  :
                                    <td>OUT</td>
                                }
                              </>
                            :
                              null
                          }
                        </tr>
                      </>
                    )
                  }))
                }
              </tbody>
          </Table>
      </div>
    </div>
  )
}

export default UserLogTable
