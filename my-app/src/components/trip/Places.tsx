import { Button, Chip } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { mockPlaces } from "../../mockData/mockTrips";

export default function Places() {
    const [places, setPlaces] = useState<Array<any>>([]);
    const [place, setPlace] = useState<string>('');

    useEffect(() => {
        setPlaces(mockPlaces)
    }, [])

    const handleClick = (e: any) => {
        console.info(e);
    };

    const handleEnter = (e: any) => {
        if (place !== '' && e.key === 'Enter') {
            addPlace(place)
        }
    }

    const handleDelete = (index: any) => {
        setPlaces((prev) => prev.filter(val => prev.indexOf(val) != index));
    };

    const addPlace = (place: string) => {
        setPlaces((prev) => [...prev, place]);
        setPlace('')
    };

    return (
        <>
            <div className="flex flex-col gap-8">
                <div className="flex flex-row gap-4">
                    <TextField fullWidth value={place} onChange={(e) => setPlace(e.target.value)} onKeyDown={handleEnter} id="standard-basic" label="Add places" variant="standard" />
                    <Button size="small" sx={{ textTransform: 'capitalize' }} variant="text" onClick={() => addPlace(place)} >Add</Button>
                </div>
                <div className="flex flex-row flex-wrap gap-4">
                    {places.map((item, index) =>
                        <Chip
                            label={item}
                            key={index}
                            onClick={handleClick}
                            onDelete={() => handleDelete(index)}
                        />
                    )}
                </div>
            </div>
        </>
    )
}