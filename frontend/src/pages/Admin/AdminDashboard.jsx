import React, { useEffect, useState } from 'react'
import DashboardHeader from '../../components/DashboardHeader'
import BookingCard from '../../components/BookingCard'
import { Chart } from '../../components/Chart'
import { useAuth } from '../../config/UserContext';
import axios from 'axios';

const AdminDashboard = () => {
  const { currentUser } = useAuth();
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (currentUser && currentUser.token) {
      axios.get('http://localhost:8000/api/admin/appointments/data/month/name', {
        headers: {
          Authorization: `Bearer ${currentUser.token}`
        }
      })
      .then(response => {
        setChartData(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching appointments:', error);
      });
    }
  }, [currentUser]);

  const dataDoctor = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'],
    datasets: [{
        label: 'Doctor 1',
        data: [20, 50, 30, 30, 40, 35, 45],
        backgroundColor: '#00AACF',
        borderColor: '#00AACF',
    },]
  }

  const dataBookings = [
    {
      labels: chartData.map((e) => e.monthname),
      datasets: [
        {
          label: 'success',
          data: chartData.map((e) => e.successful),
          backgroundColor: '#008000',
          borderColor: '#008000',
          borderRadius: 5
        }
      ],
      bar_status: 'success'
    },
    {
      labels: chartData.map((e) => e.monthname),
      datasets: [
        {
          label: 'pending',
          data: chartData.map((e) => e.pending),
          backgroundColor: '#F77F00',
          borderColor: '#F77F00',
          borderRadius: 5
        }
      ],
      bar_status: 'pending'
    },
    {
      labels: chartData.map((e) => e.monthname),
      datasets: [
        {
          label: 'rejected',
          data: chartData.map((e) => e.rejected),
          backgroundColor: '#D62828',
          borderColor: '#D62828',
          borderRadius: 5
        }
      ],
      bar_status: 'rejected'
    }
  ]

  return (
    <div>
      <DashboardHeader name={ currentUser.firstname } token={ currentUser.token }/>
      <BookingCard />
      <div className='chart-card-wrapper'>
        <Chart chartType="line" dataLine={dataDoctor} />
        <Chart chartType="bar" dataBar={dataBookings} />
      </div>
    </div>
  )
}

export default AdminDashboard