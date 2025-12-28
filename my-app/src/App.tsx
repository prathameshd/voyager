import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { Card, CardContent, Typography, Button, CardActions, Chip } from '@mui/material'
import type { Trip } from './models/trip'
import { mockTrips } from './mockData/mockTrips'

function App() {
  const [trips, setTrips] = useState<Array<Trip>>([]);

  useEffect(() => {
    setTrips(mockTrips);
  }, [])

  return (
    <div className='flex flex-col gap-4'>
      <h1 className="text-4xl text-gray-900 tracking-tight mb-4">
        My Trips
      </h1>
      <div className='flex flex-row gap-2'>
        <Chip label="2025" />
        <Chip disabled label="2024" />
      </div>
      {/* <div className='flex flex-row gap-4'>  */}
      <div className="min-w-full md:min-w-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

        {trips.map((trip) => {
          return (
            <div className='min-w-[75vw] sm:min-w-0  dark:bg-gray-100'>
              <CardContent className='flex flex-col'>
                <span className='text-base tracking-tight'>{trip.name}</span>
                <span className='text-sm text-gray-500'>{trip.startDate?.toLocaleDateString('en-US', {
                  // year: 'numeric',
                  day:'2-digit',
                  month: 'long',
                })} - {trip.endDate?.toLocaleDateString('en-US', {
                  // year: 'numeric',
                  day:'2-digit',
                  month: 'short',
                })}</span>
              </CardContent>
              <CardActions>
                <Button size="small">View</Button>
              </CardActions>
            </div>)
        })
        }
      </div>
    </div>
  )
}

export default App
