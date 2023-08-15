import React from 'react'
import {Table, Button} from 'react-bootstrap'

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
                  <th>Name</th>
                  <th>Role</th>
                  <th>IP</th>
                  <th>Date Logged In</th>
                </tr>
              </thead>
              <tbody>
                {
                  (data.map((data, index) => {
                    return (
                      <>
                        <tr key={`row-${index}`}>
                          <td>{data.name}</td>
                          <td>{data.role}</td>
                          <td>{data.ip}</td>
                          <td>{data.date_logged_in}</td>
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
