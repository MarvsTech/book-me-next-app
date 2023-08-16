import React from 'react'
import Sidebar from '../../components/Sidebar'
import DashboardHeader from '../../components/DashboardHeader'
import BookingCard from '../../components/BookingCard'
import { Chart } from '../../components/Chart'

const DoctorDashboard = () => {

    const dataDoctor = {
        labels : ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'],
        datasets : [{
                label: 'Doctor 1',
                data: [20, 50, 30, 30, 40, 35, 45],
                backgroundColor: '#00AACF',
                borderColor: '#00AACF',
        },]
    }

    const dataBookings = [
      {
          labels : ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'],
          datasets : [
              {
                  label: 'success',
                  data: [20, 50, 30, 30, 40, 35, 45],
                  backgroundColor: '#008000',
                  borderColor: '#008000',
                  borderRadius: 5
              }
          ],
          bar_status : 'success'
      },
      {
          labels : ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'],
          datasets : [
              {
                  label: 'pending',
                  data: [20, 50, 30, 30, 40, 35, 45],
                  backgroundColor: '#F77F00',
                  borderColor: '#F77F00',
                  borderRadius: 5
              }
          ],
          bar_status : 'pending'
      },
      {
          labels : ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'],
          datasets : [
              {
                  label: 'rejected',
                  data: [20, 50, 30, 30, 40, 35, 45],
                  backgroundColor: '#D62828',
                  borderColor: '#D62828',
                  borderRadius: 5
              }
          ],
          bar_status : 'rejected'
      }
  ]

  return (
    <div>
        <DashboardHeader/>

        <BookingCard />

        <div className='chart-card-wrapper'>
            <Chart chartType="line" dataLine={dataDoctor} />
            <Chart chartType="bar" dataBar={dataBookings} />
        </div>
    </div>
  )
}

export default DoctorDashboard
