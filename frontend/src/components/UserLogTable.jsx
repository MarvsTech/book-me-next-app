import React from 'react'
import {Table, Button} from 'react-bootstrap'

const UserLogTable = ({data}) => {
  return (
    <div>
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
  )
}

export default UserLogTable
