import { useState } from "react";
import { useGetIdentity } from "@pankod/refine-core";
import { FieldValues, useForm } from "@pankod/refine-react-hook-form";
import { Box, FormControl, FormHelperText, TextField } from "@pankod/refine-mui";

const AddSite = () => {
    return (
        <Box borderRadius={'15px'} width="100%" bgcolor="#fcfcfc">
            <form style={{ marginTop: '20px', width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <FormControl>
                    <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d', }}>Enter Site Url</FormHelperText>
                    <TextField
                        fullWidth
                        required
                        id='outlined-basic'
                        color='info'
                        variant='outlined'
                    />
                </FormControl>
            </form>
        </Box>
    );
}

export default AddSite;