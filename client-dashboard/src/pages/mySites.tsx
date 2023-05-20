import React, { useState, useEffect } from 'react'

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Stack } from '@pankod/refine-mui'

import { useTable } from "@pankod/refine-core";

import { Typography, Box, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

import { CustomButton } from 'components';

import { useNavigate } from "@pankod/refine-react-router-v6";

import { Add } from "@mui/icons-material";

import AddSite from "./add-site";

import {Delete} from '@mui/icons-material'

const MySites = () => {

    const navigate = useNavigate();

    const {
        tableQueryResult: { data, isLoading, isError }
    } = useTable();


    const rows = data?.data ?? [];

    console.log(rows);

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box>
            <Box display="flex" gap={2} flexWrap="wrap" justifyContent="space-between" mb={{ xs: '20px', sm: 0 }}>
                <Typography fontSize={25} fontWeight={700} color="#11142d" mb={2}>All Sites</Typography>
                <Stack>
                    <CustomButton
                        title="Add Site"
                        handleClick={handleClickOpen}
                        backgroundColor="#018e86"
                        color="#fcfcfc"
                        icon={<Add />}
                    />
                </Stack>

            </Box>

            <Box>
                {/* {rows.length ? <Typography>
                    You have not added any website.
                </Typography> :  */}
                
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Website</TableCell>
                                <TableCell align="left">Date Added</TableCell>
                                <TableCell align="left">Traffic</TableCell>
                                <TableCell align="left">Operation</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* {rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="left">{row.website}</TableCell>
                                    <TableCell align="left">{row.date}</TableCell>
                                    <TableCell align="left">{row.traffic}</TableCell>
                                    <TableCell align="left"><Delete /></TableCell>
                                    
                                </TableRow>
                            ))} */}

                            <TableRow
                                    
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="left">Ameer.com</TableCell>
                                    <TableCell align="left">7/5/2023</TableCell>
                                    <TableCell align="left">5000</TableCell>
                                    <TableCell align="left"><Delete /></TableCell>
                                    
                                </TableRow>

                                <TableRow
                                    
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="left">Nadeem.com</TableCell>
                                    <TableCell align="left">7/5/2023</TableCell>
                                    <TableCell align="left">5000</TableCell>
                                    <TableCell align="left"><Delete /></TableCell>
                                    
                                </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                {/* } */}

            </Box>

            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <AddSite />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose} style={{backgroundColor: '#018e86'}} variant="contained">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>

    )
}

export default MySites;
