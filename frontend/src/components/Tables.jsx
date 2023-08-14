import React, {useState} from 'react'
import { Table, Container, Button } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import ViewModal from './ViewModal'

const Tables = ({data, columns}) => {

    const path = useLocation();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const rowEvents = {
    onClick: (e, row) => {
      console.log(row)
    }
  }

  return (
    <>
        <Container className='table-container'>
            <Table className='table'  rowEvents={rowEvents}>
                <thead>
                    <tr>
                        {columns.map((col, index) => 
                            <th key={index}>{(col.tableHead).toUpperCase()}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => 
                        <tr key={index}>
                            {columns.map((col, index) => 
                                (col.tableHead !== 'action' && col.tableHead !== 'status') ?
                                    <td key={index}>{row[col.tableHead]}</td>
                                :
                                    null
                            )}

                            {
                                (path.pathname === '/doctor') ?
                                    <td>
                                        {
                                            (row.isActive === true) ?
                                                <Button variant='danger' onClick={handleShow}>
                                                    Disable
                                                </Button>
                                            :
                                                <Button variant='success' onClick={handleShow}>
                                                    Enable
                                                </Button>
                                        }
                                    </td>

                                : (path.pathname === '/appointment') ?
                                    <td>
                                        {
                                            (row.status === 'pending') ?
                                                <Button variant='warning'>
                                                    Pending
                                                </Button>
                                            : (row.status === 'completed') ?
                                                <Button variant='success'>
                                                    Completed
                                                </Button>
                                            : (row.status === 'rejected') ?
                                                <Button variant='danger'>
                                                    Rejected
                                                </Button>
                                            :
                                                null
                                        }
                                    </td>
                                :
                                        null
                            }

                            
                        </tr>
                    )}
                </tbody>
            </Table>
            <ViewModal show={show} onClose={handleClose} dataView={data}/>
        </Container>
    </>
    
    
  )
}

export default Tables
