import { Button, Chip, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mockTrips } from "../mockData/mockTrips";
import type { Trip } from "../models/trip";
import React from "react";
import Summary from "./trip/Summary";
import { Notes } from "./trip/Notes";
import { Packing } from "./trip/Packing";
import Places from "./trip/Places";

export default function TripDetail() {
    const { id } = useParams();
    const [trip, setTrip] = useState<Trip>();
    const [tripDates, setTripDates] = useState<string>('');
    const [value, setValue] = React.useState(1);
    const [tabs, setTabs] = useState<Array<any>>([]);

    const handleChange = (newValue: number) => {
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
        // set the tabs
        const tabsData = [
            { name: 'Summary', id: 1 },
            { name: 'Itenerary', id: 2, disabled: true },
            { name: 'Places', id: 3 },
            { name: 'Notes', id: 4 },
            { name: 'Packing', id: 5 },
        ]
        setTabs(tabsData);
    }, []);



    return (
        <div className='flex flex-col gap-4'>
            <h1 className="text-4xl text-gray-900 tracking-tight mb-4">
                {trip?.name}
            </h1>
            <div className='flex flex-col sm:flex-row gap-2'>
                <div>
                    <Chip label={tripDates} />
                </div>
                <div>
                    <Button size="small" sx={{ textTransform: 'capitalize' }} variant="text">Edit Trip</Button>
                </div>
            </div>

            <div>
                <Tabs
                    sx={{
                        '& .MuiButtonBase-root.MuiTab-root': {
                            '&.Mui-focusVisible': {
                                outline: '2px solid orange',
                                outlineOffset: '2px',
                            },
                        },
                    }}
                    value={value}
                    // textColor="secondary"
                    variant="scrollable"
                    scrollButtons="auto"
                    // indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    {tabs.map((tab, i) =>
                    (
                        <Tab onClick={() => handleChange(i + 1)} key={tab.id} value={tab.id} sx={{ textTransform: 'none' }} label={tab.name} disabled={tab.disabled} />
                    ))}
                </Tabs>

                <div className="p-[16px]" hidden={value != 1}>
                    <Summary></Summary>
                </div>
                <div className="p-[16px]" hidden={value != 2}>
                </div>
                <div className="p-[16px]" hidden={value != 3}>
                    <Places />
                </div>
                <div className="p-[16px]" hidden={value != 4}>
                    <Notes></Notes>
                </div>
                <div className="p-[16px]" hidden={value != 5}>
                    <Packing></Packing>
                </div>
                {/* <CustomTabPanel value={value} index={1}>
                    Item One
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    Item Two
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    Item Three
                </CustomTabPanel> */}
            </div>
        </div>
    )
}
