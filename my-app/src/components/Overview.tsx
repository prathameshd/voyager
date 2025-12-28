import { Chip, CardContent, CardActions, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { mockTrips } from "../mockData/mockTrips";
import type { Trip } from "../models/trip";
import { useNavigate } from "react-router-dom";

export default function Overview() {

    const [trips, setTrips] = useState<Array<Trip>>([]);
    const navigate = useNavigate();
    useEffect(() => {
        setTrips(mockTrips);
    }, [])

    const viewDetails = (id: any): void => {
        console.log(id);
        navigate(`/detail/${id}`)
    }

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
                        <div className='min-w-[70vw] sm:min-w-0  dark:bg-gray-50 rounded-lg'>
                            <CardContent className='flex flex-col'>
                                <span className='text-base tracking-tight'>{trip.name}</span>
                                <span className='text-xs text-gray-500'>{trip.startDate?.toLocaleDateString('en-US', {
                                    // year: 'numeric',
                                    day: '2-digit',
                                    month: 'short',
                                })} - {trip.endDate?.toLocaleDateString('en-US', {
                                    // year: 'numeric',
                                    day: '2-digit',
                                    month: 'short',
                                })}</span>
                            </CardContent>
                            <CardActions>
                                <Button className="focus:outline-none" size="small" onClick={() => { viewDetails(trip.id) }} ><span className="capitalize">View</span></Button>
                            </CardActions>
                        </div>)
                })
                }
            </div>
        </div>
    )
}