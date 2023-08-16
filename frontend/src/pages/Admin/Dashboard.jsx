import React from 'react'
import BookingCard from '../../components/BookingCard';
import { Chart } from '../../components/Chart'
import Calendar from '../../components/Calendar';
import DashboardHeader from '../../components/DashboardHeader';

const Dashboard = () => {

    const dataDoctor = {
        labels : ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'],
        datasets : [
            {
                label: 'Doctor 1',
                data: [20, 50, 30, 30, 40, 35, 45],
                backgroundColor: '#00AACF',
                borderColor: '#00AACF',
            },
            {
                label: 'Doctor 2',
                data: [5, 30, 15, 10, 30, 33, 43],
                backgroundColor: '#006F87',
                borderColor: '#006F87',
            },
            {
                label: 'Doctor 2',
                data: [10, 43, 23, 28, 10, 20, 30],
                backgroundColor: '#004251',
                borderColor: '#004251',
            },
        ]
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
        <>
            <DashboardHeader/>
            <BookingCard />
            <div className='chart-card-wrapper'>
                <Chart chartType="line" dataLine={dataDoctor} />
                <Chart chartType="bar" dataBar={dataBookings} />
            </div>
            <Calendar />
        </>
    )
}

export default Dashboard