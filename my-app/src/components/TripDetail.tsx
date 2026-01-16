import { Box, Button, Chip, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mockTrips } from "../mockData/mockTrips";
import type { Trip } from "../models/trip";
import React from "react";
import TripSummary from "./trip/TripSummary";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { TripNotes } from "./trip/TripNotes";
import { TripPacking } from "./trip/TripPacking";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

export default function TripDetail() {
    const { id } = useParams();
    const [trip, setTrip] = useState<Trip>();
    const [tripDates, setTripDates] = useState<string>('');
    const [value, setValue] = React.useState(1);
    const [tabs, setTabs] = useState<Array<any>>([]);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
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
            { name: 'Itenerary', id: 2 },
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
                    <Button size="small" sx={{textTransform:'capitalize'}} variant="text">Edit Trip</Button>
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
                    onChange={handleChange}
                    // textColor="secondary"
                    variant="scrollable"
                    scrollButtons="auto"
                    // indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    {tabs.map((tab) =>
                    (
                        <Tab key={tab.id} value={tab.id} sx={{ textTransform: 'none' }} label={tab.name} />
                    ))}
                </Tabs>

                <div className="p-[16px]" hidden={value != 1}>
                    <TripSummary></TripSummary>
                </div>
                <div className="p-[16px]" hidden={value != 2}>
                    <Timeline>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>Eat</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>Code</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot />
                            </TimelineSeparator>
                            <TimelineContent>Sleep</TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </div>
                <div className="p-[16px]" hidden={value != 3}>
                    Item three
                </div>
                <div className="p-[16px]" hidden={value != 4}>
                    <TripNotes></TripNotes>
                </div>
                <div className="p-[16px]" hidden={value != 5}>
                    <TripPacking></TripPacking>
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
