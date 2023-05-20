import { useState } from "react";
import { useGetIdentity } from "@pankod/refine-core";
import { FieldValues, useForm } from "@pankod/refine-react-hook-form";
import { Box, FormControl, FormHelperText, Stack, TextField, Typography } from "@pankod/refine-mui";
import { CustomButton } from "components";

const EditProfile = () => {
    return (
        <Box>
            <Typography fontSize={25} fontWeight={700} color="#11142D">
                Change Old Password
            </Typography>
            <Box borderRadius={'15px'} width="100%" bgcolor="#fcfcfc" marginBottom={'20px'}>
                <form style={{ marginTop: '20px', width: '100%', display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
                    <Stack direction={'row'} gap={4}>
                        <FormControl sx={{ flex: 1 , color: '#000'}}>
                            <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d', }}>Old Password</FormHelperText>
                            <TextField  sx={{border: '1px solid black', borderRadius: '6px', input: { color: '#000'}}}
                                fullWidth
                                required
                                id='outlined-basic'
                                color='info'
                                placeholder="Enter Old Password"
                                variant='outlined'
                            />
                        </FormControl>
                        <FormControl sx={{ flex: 1 }}>
                            <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d', }}>New Password</FormHelperText>
                            <TextField  sx={{border: '1px solid black', borderRadius: '6px', input: { color: '#000'}}}
                                fullWidth
                                required
                                id='outlined-basic'
                                color='info'
                                placeholder="New Password"
                                variant='outlined'
                            />
                        </FormControl>
                        <FormControl sx={{ flex: 1 }}>
                            <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d', }}>Confirm Password</FormHelperText>
                            <TextField sx={{border: '1px solid black', borderRadius: '6px', input: { color: '#000'}}}
                                fullWidth
                                required
                                id='outlined-basic'
                                color='info'
                                placeholder="Confirm New Password"
                                variant='outlined'
                            />
                        </FormControl>
                    </Stack>
                    <CustomButton type='submit' title={'Update Password'} backgroundColor='#018e86' color='#fcfcfc' />
                </form>
            </Box>

            <Typography fontSize={25} fontWeight={700} color="#11142D">
                Change Email Address
            </Typography>

            <Box borderRadius={'15px'} width="100%" bgcolor="#fcfcfc">
                <form style={{ marginTop: '20px', width: '100%', display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
                    <Stack direction={'row'} gap={4}>
                        <FormControl sx={{ flex: 1 }}>
                            <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d', }}>Enter Email Address</FormHelperText>
                            <TextField  sx={{border: '1px solid black', borderRadius: '6px', input: { color: '#000'}}}
                                fullWidth
                                required
                                id='outlined-basic'
                                color='info'
                                placeholder="Enter new email address"
                                variant='outlined'
                            />
                        </FormControl>
                        <FormControl sx={{ flex: 1 }}>
                            <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d', }}>Enter Password</FormHelperText>
                            <TextField  sx={{border: '1px solid black', borderRadius: '6px', input: { color: '#000'}}}
                                fullWidth
                                required
                                id='outlined-basic'
                                color='info'
                                placeholder="Enter password"
                                variant='outlined'
                            />
                        </FormControl>
                    </Stack>
                    <CustomButton type='submit' title={'Update Email'} backgroundColor='#018e86' color='#fcfcfc' />
                </form>
            </Box>

        </Box>
    );
}

export default EditProfile;