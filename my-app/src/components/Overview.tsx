import { Chip, CardContent, CardActions, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { mockTrips } from "../mockData/mockTrips";
import type { Trip } from "../models/trip";

export default function Overview() {

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
                        <div className='min-w-[70vw] sm:min-w-0  dark:bg-gray-100'>
                            <CardContent className='flex flex-col'>
                                <span className='text-base tracking-tight'>{trip.name}</span>
                                <span className='text-sm text-gray-500'>{trip.startDate?.toLocaleDateString('en-US', {
                                    // year: 'numeric',
                                    day: '2-digit',
                                    month: 'long',
                                })} - {trip.endDate?.toLocaleDateString('en-US', {
                                    // year: 'numeric',
                                    day: '2-digit',
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