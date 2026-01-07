import  { Card, CardContent, Box, Typography, Divider, Button } from "@mui/material";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

export default function TripSummary() {
    return (
        <div className="flex flex-col gap-4 mt-4">
            <div>
                <Card sx={{ maxWidth: 600, margin: 1, borderRadius: 2, boxShadow: 2 }}>
                    <CardContent>
                        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                            <span className="text-sm">12th Jan</span>
                            <span className="text-sm text-green-900">$345</span>
                            {/* <Typography variant="h6" color="text.secondary">12/2/23</Typography> */}
                            {/* <Typography variant="h6" color="primary.main">$345</Typography> */}
                        </Box>

                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            {/* Departure Info */}
                            <Box textAlign="center">
                                <Typography variant="h5">05:05</Typography>
                                <Typography variant="subtitle1" color="text.secondary">Seattle</Typography>
                                {/* <Typography variant="body2">SEA</Typography> */}
                            </Box>

                            {/* Flight Path Indicator */}
                            <Box display="flex" alignItems="center" flexDirection="column" mx={2}>
                                <FlightTakeoffIcon color="action" />
                                <Divider sx={{ width: '100%', my: 0.5 }} />
                                <Typography variant="caption" color="text.secondary">2hr</Typography>
                            </Box>

                            {/* Arrival Info */}
                            <Box textAlign="center">
                                <Typography variant="h5">10:34</Typography>
                                <Typography variant="subtitle1" color="text.secondary">San Jose</Typography>
                                {/* <Typography variant="body2">SJC</Typography> */}
                            </Box>
                        </Box>

                        {/* <Divider sx={{ my: 2 }} />
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Typography variant="body1">Alaska</Typography>
                            <Button variant="contained" color="primary">
                                Select Flight
                            </Button>
                        </Box> */}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}