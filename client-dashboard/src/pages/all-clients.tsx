import React from 'react'

import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@pankod/refine-mui'

import { useTable } from "@pankod/refine-core";

import { Typography, Box } from '@pankod/refine-mui';

const AllClients = () => {

    const {
        tableQueryResult: { data, isLoading, isError }
    } = useTable();

    const rows = data?.data ?? [];

    console.log(rows);

    return (
        <Box>
            <Typography fontSize={25} fontWeight={700} color="#11142d" mb={2}>All Clients</Typography>
            <Box>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Client ID</TableCell>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="left">Email</TableCell>
                                <TableCell align="left">Website</TableCell>
                                <TableCell align="left">Type</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.clientId}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.clientId}
                                    </TableCell>
                                    <TableCell align="left">{row.name}</TableCell>
                                    <TableCell align="left">{row.email}</TableCell>
                                    <TableCell align="left">{row.website}</TableCell>
                                    <TableCell align="left">{row.type}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>

    )
}

export default AllClients