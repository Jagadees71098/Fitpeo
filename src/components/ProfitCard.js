import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Grid, Box, Stack } from '@mui/material';
import CircleChart from './CircleChart';

export default function ProfitCard() {
    return (
        <>
            <Card className='styledCard'>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12} lg={6}>
                            <Box>
                                <Typography variant="body1" mt={1} fontWeight={300}>
                                    Net Profit
                                </Typography>
                                <Typography variant="h4" fontWeight={500} mt={3} gutterBottom>
                                    $6759.25
                                </Typography>
                                <Typography variant="h6" color={'success.main'}>
                                    <Stack direction={'row'} alignItems={'center'}><ArrowDropUpIcon /> <Typography variant="span">3%</Typography></Stack>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={12} lg={6}>
                            <Box>
                                <CircleChart />
                            </Box>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}
