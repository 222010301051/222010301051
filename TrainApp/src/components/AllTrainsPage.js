import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TrainCard from './TrainCard';

const AllTrainsPage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTE1NjE3NDksImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiMWUyNzgwMmUtMmM3ZS00OTU5LWIzYjItMDg5MjFiZWM3NTI2Iiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjIyMjAxMDMwMTA1MSJ9.3MBGbE8qre_7A7HLsdk6DpasP31p0AHbEZfzNNMoX0Y';
    const axiosInstance = axios.create({
      baseURL: 'http://20.244.56.144:80/train',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    axiosInstance.get('/trains')
      .then(response => {
        setTrains(response.data);
      })
      .catch(error => {
        console.error('Error fetching train data:', error);
      });
  }, []);

  return (
    <div>
      <h2>All Trains Schedule</h2>
      {trains.map((train, index) => (
        <TrainCard key={index} train={train} />
      ))}
    </div>
  );
};

export default AllTrainsPage;
