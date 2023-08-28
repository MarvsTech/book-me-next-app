import React, {useState, useEffect} from 'react'
import DashboardHeader from '../../components/DashboardHeader'
import BookingCard from '../../components/BookingCard'
import { Chart } from '../../components/Chart'
import { useAuth } from '../../config/UserContext';
import axios from 'axios'

const DoctorDashboard = () => {
    const { currentUser } = useAuth();
    const [cardData, setCardData] = useState([]);
    const [barChartData, setBarChartData] = useState([]);
    const [lineChartData, setLineChartData] = useState([]);

    useEffect(() => {
      if (currentUser && currentUser.token) {
        axios.get('http://localhost:8000/api/doctor/appointments/booking/data', {
          headers: {
            Authorization: `Bearer ${currentUser.token}`
          }
      })
      .then(response => {
        console.log(currentUser.token);
          setCardData(response.data.data);
      })
      .catch(error => {
          console.error('Error fetching appointments:', error);
      });
      }
    }, [currentUser]);

    useEffect(() => {
      if (currentUser && currentUser.token) {
        axios.get('http://localhost:8000/api/doctor/appointments/chart/data', {
          headers: {
            Authorization: `Bearer ${currentUser.token}`
          }
        })
        .then(response => {
          setBarChartData(response.data.data);
        })
        .catch(error => {
          console.error('Error fetching appointments:', error);
        });
      }
    }, [currentUser]);

    useEffect(() => {
      if (currentUser && currentUser.token) {
        axios.get('http://localhost:8000/api/doctor/appointments/all/data', {
          headers: {
            Authorization: `Bearer ${currentUser.token}`
          }
        })
        .then(response => {
          setLineChartData(response.data.data);
        })
        .catch(error => {
          console.error('Error fetching appointments:', error);
        });
      }
    }, [currentUser]);

    const dataDoctor = {
      labels: lineChartData.map((e) => e.monthname),
      datasets: [{
        label: 'Doctor 1',
        data: lineChartData.map((e) => e.appointment),
        backgroundColor: '#00AACF',
        borderColor: '#00AACF',
      },]
    }

    const dataBookings = [
        {
          labels: barChartData.map((e) => e.monthname),
          datasets: [
            {
              label: 'success',
              data: barChartData.map((e) => e.successful),
              backgroundColor: '#008000',
              borderColor: '#008000',
              borderRadius: 5
            }
          ],
          bar_status: 'success'
        },
        {
          labels: barChartData.map((e) => e.monthname),
          datasets: [
            {
              label: 'pending',
              data: barChartData.map((e) => e.pending),
              backgroundColor: '#F77F00',
              borderColor: '#F77F00',
              borderRadius: 5
            }
          ],
          bar_status: 'pending'
        },
        {
          labels: barChartData.map((e) => e.monthname),
          datasets: [
            {
              label: 'rejected',
              data: barChartData.map((e) => e.rejected),
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
            <BookingCard cardData={cardData}/>
            <div className='chart-card-wrapper'>
                <Chart chartType="line" dataLine={dataDoctor} />
                <Chart chartType="bar" dataBar={dataBookings} />
            </div>
        </div>
    )
}

export default DoctorDashboard
