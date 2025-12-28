import { Box, Chip, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mockTrips } from "../mockData/mockTrips";
import type { Trip } from "../models/trip";
import React from "react";

export default function TripDetail() {
    const { id } = useParams();
    const [trip, setTrip] = useState<Trip>();
    const [tripDates, setTripDates] = useState<string>('');
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    useEffect(() => {
        const fetchTrip = async () => {
            // this can await on something
            let trip = mockTrips.find(t => t.id == id);
            let tripDates = trip?.startDate?.toLocaleDateString('en-US', {
                day: '2-digit',
                month: 'long',
            }) + '-' +
                trip?.endDate?.toLocaleDateString('en-US', {
                    day: '2-digit',
                    month: 'short',
                });

            setTrip(trip);
            setTripDates(tripDates);
        }
        fetchTrip();
    }, []);



    return (
        <div className='flex flex-col gap-4'>
            <h1 className="text-4xl text-gray-900 tracking-tight mb-4">
                {trip?.name}
            </h1>
            <div className='flex flex-col gap-2'>
                <div>
                    <Chip label={tripDates} />
                </div>
            </div>
        </div>
    )
}
