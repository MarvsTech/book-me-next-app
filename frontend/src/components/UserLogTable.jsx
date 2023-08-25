import React from 'react'
import {Table, Button, Dropdown} from 'react-bootstrap'
import ThreeVerticalDots from '../images/three-dots-vertical.svg'

const UserLogTable = ({data}) => {

  return (
    <div className='table-content-wrapper'>
      <div className='table-header'>
        <h1 className='title-without-btn'>User Logs</h1>
      </div>

      <div className='table-content'>
        <Table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                {
                  (data.map((data, index) => {
                    return (
                      <>
                        <tr key={`row-${index}`}>
                          <td>{data.date}</td>
                          <div className='create-schedule-time'>
                            <td>{data.time}</td>
                            <div className='disable-time'>
                              <Dropdown>
                                <Dropdown.Toggle>
                                  <Button>
                                    <img src={ThreeVerticalDots} />
                                  </Button>
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
